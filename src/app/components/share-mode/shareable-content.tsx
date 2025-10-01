"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { useShareMode, ShareableElement, SharePopoverPosition } from "@/contexts/share-mode-context";

interface ShareableContentProps {
  id: string;
  title?: string;
  content: string;
  className?: string;
  disabled?: boolean;
  type: "text" | "quote";
  children?: React.ReactNode;
  highlightClassName?: string;
}

export const ShareableContent: React.FC<ShareableContentProps> = ({ id, content, type, title, className = "", disabled = false }) => {
  const {
    showSharePopover,

    isShareModeActive,
    registerShareableElement,
    unregisterShareableElement,
  } = useShareMode();

  const elementRef = useRef<HTMLDivElement>(null);

  // Register/unregister element
  useEffect(() => {
    if (disabled) return;

    const element: ShareableElement = {
      id,
      content,
      type,
      title,
      element: elementRef.current || undefined,
    };

    registerShareableElement(element);

    return () => {
      unregisterShareableElement(id);
    };
  }, [id, content, type, title, disabled, registerShareableElement, unregisterShareableElement]);

  // Handle text selection
  const handleMouseUp = useCallback(() => {
    if (disabled) return;

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const selectedText = selection.toString().trim();
    if (selectedText.length < 3) return; // Minimum selection length

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    if (rect.width === 0 || rect.height === 0) return;

    // Create position for popover
    const position: SharePopoverPosition = {
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      width: rect.width,
      height: rect.height,
    };

    // Create element for selected text
    const selectedElement: ShareableElement = {
      id: `${id}-selection-${Date.now()}`,
      content: selectedText,
      type: "text",
      title: title ? `${title} - Selection` : "Selected Text",
    };

    showSharePopover(selectedElement, position);
  }, [id, title, disabled, showSharePopover]);

  // Handle hover to show popover
  const handleMouseEnter = useCallback(() => {
    if (disabled || !isShareModeActive) return;

    const rect = elementRef.current?.getBoundingClientRect();
    if (!rect) return;

    const position: SharePopoverPosition = {
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      width: rect.width,
      height: rect.height,
    };

    const element: ShareableElement = {
      id,
      content,
      type,
      title,
      element: elementRef.current || undefined,
    };

    showSharePopover(element, position);
  }, [disabled, isShareModeActive, id, content, type, title, showSharePopover]);

  // Build className
  const combinedClassName = `
    ${className}
    ${isShareModeActive && !disabled ? "cursor-pointer bg-[#BFDBFE] hover:bg-[#b1d2fc] py-1.5 px-2.5 rounded-[10px] relative" : ""}
    ${disabled ? "opacity-50 pointer-events-none" : ""}
    transition-all duration-300 ease-out
  `.trim();

  return (
    <div
      ref={elementRef}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      data-shareable-id={id}
      data-shareable-type={type}
      className={combinedClassName}
      tabIndex={isShareModeActive && !disabled ? 0 : undefined}
      role={isShareModeActive && !disabled ? "button" : undefined}
      aria-label={isShareModeActive && !disabled ? `Shareable ${type}: ${title || "content"}` : undefined}
    >
      {/* Share mode indicator */}
      {isShareModeActive && (
        <div className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out animate-in fade-in-0 zoom-in-95 slide-in-from-top-2`}>
          {/* share icon */}
          <div className='w-6 h-6 bg-[#0F172A] hover:bg-[#0f1930] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg transition-all duration-200 hover:scale-110'>
            <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z' />
            </svg>
          </div>
        </div>
      )}
      {content}
    </div>
  );
};

"use client";

import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";

// Types
export interface ShareableElement {
  id: string;
  title?: string;
  content: string;
  element?: HTMLElement;
  type: "text" | "chart" | "section" | "quote";
}

export interface SharePopoverPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ShareModeContextType {
  isShareModeActive: boolean;
  toggleShareMode: () => void;
  hideSharePopover: () => void;
  cancelHidePopover: () => void;
  clearAllHighlights: () => void;
  highlightedElements: Set<string>;
  addHighlight: (id: string) => void;
  shareableElements: ShareableElement[];
  removeHighlight: (id: string) => void;
  selectedElement: ShareableElement | null;
  popoverPosition: SharePopoverPosition | null;
  unregisterShareableElement: (id: string) => void;
  registerShareableElement: (element: ShareableElement) => void;
  showSharePopover: (element: ShareableElement, position: SharePopoverPosition) => void;
}

const ShareModeContext = createContext<ShareModeContextType | undefined>(undefined);

// Custom hook to use share mode context
export const useShareMode = (): ShareModeContextType => {
  const context = useContext(ShareModeContext);
  if (!context) {
    throw new Error("useShareMode must be used within a ShareModeProvider");
  }
  return context;
};

// Provider component
interface ShareModeProviderProps {
  children: React.ReactNode;
}

export const ShareModeProvider: React.FC<ShareModeProviderProps> = ({ children }) => {
  // State management
  const [isShareModeActive, setIsShareModeActive] = useState<boolean>(false);
  const [shareableElements, setShareableElements] = useState<ShareableElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<ShareableElement | null>(null);
  const [popoverPosition, setPopoverPosition] = useState<SharePopoverPosition | null>(null);
  const [highlightedElements, setHighlightedElements] = useState<Set<string>>(new Set());

  // Refs for cleanup
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Toggle share mode
  const toggleShareMode = useCallback(() => {
    setIsShareModeActive((prev) => {
      const newState = !prev;
      if (!newState) {
        // When turning off share mode, clear highlights and popover
        setHighlightedElements(new Set());
        hideSharePopover();
      }
      return newState;
    });
  }, []);

  // Register a shareable element
  const registerShareableElement = useCallback((element: ShareableElement) => {
    setShareableElements((prev) => {
      const exists = prev.find((el) => el.id === element.id);
      if (exists) {
        // Update existing element
        return prev.map((el) => (el.id === element.id ? element : el));
      }
      return [...prev, element];
    });
  }, []);

  // Unregister a shareable element
  const unregisterShareableElement = useCallback((id: string) => {
    setShareableElements((prev) => prev.filter((el) => el.id !== id));
    setHighlightedElements((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  }, []);

  // Show share popover
  const showSharePopover = useCallback((element: ShareableElement, position: SharePopoverPosition) => {
    setSelectedElement(element);
    setPopoverPosition(position);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  // Hide share popover
  const hideSharePopover = useCallback(() => {
    // Add a small delay to allow for popover interaction
    timeoutRef.current = setTimeout(() => {
      setSelectedElement(null);
      setPopoverPosition(null);
    }, 300);
  }, []);

  // Cancel hide popover (for when hovering over popover)
  const cancelHidePopover = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Highlight management
  const addHighlight = useCallback((id: string) => {
    setHighlightedElements((prev) => new Set([...prev, id]));
  }, []);

  const removeHighlight = useCallback((id: string) => {
    setHighlightedElements((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  }, []);

  const clearAllHighlights = useCallback(() => {
    setHighlightedElements(new Set());
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      // Toggle share mode with Ctrl/Cmd + Shift + S
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === "S") {
        event.preventDefault();
        toggleShareMode();
      }

      // Escape to exit share mode
      if (event.key === "Escape" && isShareModeActive) {
        setIsShareModeActive(false);
        clearAllHighlights();
        hideSharePopover();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [isShareModeActive, toggleShareMode, clearAllHighlights, hideSharePopover]);

  const contextValue: ShareModeContextType = {
    isShareModeActive,
    toggleShareMode,
    shareableElements,
    registerShareableElement,
    unregisterShareableElement,
    selectedElement,
    popoverPosition,
    showSharePopover,
    hideSharePopover,
    cancelHidePopover,
    highlightedElements,
    addHighlight,
    removeHighlight,
    clearAllHighlights,
  };

  return <ShareModeContext.Provider value={contextValue}>{children}</ShareModeContext.Provider>;
};

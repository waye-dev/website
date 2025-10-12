"use client";

import { usePathname } from "next/navigation";
import React, { useState, useRef } from "react";
import { useShareMode, ShareableElement } from "@/contexts/share-mode-context";
import { ShareButtons } from "./share-buttons";

export const SharePopover: React.FC = () => {
  const { selectedElement, popoverPosition, isPopoverVisible, hideSharePopover, cancelHidePopover, openNostrModal } = useShareMode();
  const pathname = usePathname();
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const createShareableUrl = () => {
    if (!selectedElement) return "";
    // Use query parameter for proper Open Graph metadata generation
    return `${window.location.origin}${pathname}?share=${encodeURIComponent(selectedElement.id)}`;
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAttachedImage(e.target?.result as string);
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaste = async (event: React.ClipboardEvent) => {
    const items = event.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        if (blob) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setAttachedImage(e.target?.result as string);
            setImageFile(blob);
          };
          reader.readAsDataURL(blob);
        }
      }
    }
  };

  const removeImage = () => {
    setAttachedImage(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getElementWithImage = (): ShareableElement => {
    return {
      ...selectedElement!,
      imageData: attachedImage || undefined,
      imageFile: imageFile || undefined,
    };
  };

  if (!isPopoverVisible || !popoverPosition || !selectedElement) {
    return null;
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: `${popoverPosition.x}px`,
          top: `${popoverPosition.y}px`,
          transform: "translate(-50%, -100%)",
          zIndex: 1000,
        }}
        className="bg-[#0F172A] text-white rounded-[10px] w-[90vw] sm:w-full max-w-[513px] py-2 px-4 shadow-lg"
        onMouseEnter={cancelHidePopover}
        onMouseLeave={hideSharePopover}
        onPaste={handlePaste}
        tabIndex={-1}
      >
        <div className="flex flex-col gap-3">
          {/* Text content */}
          <div className="flex flex-row justify-between items-center gap-4">
            <section className="flex flex-row items-center gap-2">
              <div className="pr-3 py-2 rounded-b-lg flex-1 w-full">
                <div className="text-base font-light text-white line-clamp-1 font-josefinSans flex-1 w-full">
                  "{selectedElement.content.length > 50 ? selectedElement.content.substring(0, 50) + "..." : selectedElement.content}"
                </div>
              </div>
            </section>

            <ShareButtons
              selectedElement={getElementWithImage()}
              shareUrl={createShareableUrl()}
              onNostrError={() => openNostrModal(createShareableUrl(), selectedElement.content)}
            />
          </div>

          {/* Image preview */}
          {attachedImage && (
            <div className="relative rounded-lg overflow-hidden border border-[#282F40]">
              <img
                src={attachedImage}
                alt="Attached image"
                className="w-full h-32 object-cover"
              />
              <button
                onClick={removeImage}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center transition-colors"
                title="Remove image"
              >
                ×
              </button>
            </div>
          )}

          {/* Image upload button */}
          {!attachedImage && (
            <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex items-center gap-1 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Add image</span>
              </label>
              <span>or paste (Ctrl+V)</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

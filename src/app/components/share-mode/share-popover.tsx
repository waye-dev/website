"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { useShareMode } from "@/contexts/share-mode-context";
import { ShareButtons } from "./share-buttons";

export const SharePopover: React.FC = () => {
  const { selectedElement, popoverPosition, isPopoverVisible, hideSharePopover, cancelHidePopover, openNostrModal } = useShareMode();
  const pathname = usePathname();

  const createShareableUrl = () => {
    if (!selectedElement) return "";
    // Use query parameter for proper Open Graph metadata generation
    return `${window.location.origin}${pathname}?share=${encodeURIComponent(selectedElement.id)}`;
  };

  const handleNostrError = () => {
    openNostrModal(createShareableUrl(), selectedElement?.content || "");
  };

  if (!isPopoverVisible || !popoverPosition || !selectedElement) {
    return null;
  }

  return (
    <>
      <div
        style={{
          ['--pos-x' as any]: `${popoverPosition.x}px`,
          ['--pos-y' as any]: `${popoverPosition.y}px`,
          zIndex: 1000,
        }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:absolute sm:left-[var(--pos-x)] sm:top-[var(--pos-y)] sm:translate-x-[-50%] sm:translate-y-[-100%] bg-[#0F172A] text-white rounded-[10px] w-[90vw] sm:w-full max-w-[513px] py-2 px-4 shadow-lg"
        onMouseEnter={cancelHidePopover}
        onMouseLeave={hideSharePopover}
        tabIndex={-1}
      >
        {/* Mobile layout: centered with stacked content */}
        <div className="flex flex-col gap-4 sm:hidden">
          {/* Row 1: Image + Text */}
          <div className="flex flex-row items-center gap-3">
            {/* Image on the left */}
            {selectedElement.imageData && (
              <div className="flex-shrink-0">
                <img
                  src={selectedElement.imageData}
                  alt={selectedElement.title || "Share image"}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
            )}

            {/* Text content */}
            <div className="flex-1">
              <div className="text-base font-light text-white font-josefinSans break-words">
                "{selectedElement.content.length > 50 ? selectedElement.content.substring(0, 72) + "..." : selectedElement.content}"
              </div>
            </div>
          </div>

          {/* Row 2: Share options */}
          <ShareButtons
            selectedElement={selectedElement}
            shareUrl={createShareableUrl()}
            onNostrError={handleNostrError}
          />
        </div>

        {/* Desktop layout: original single-row layout */}
        <div className="hidden sm:flex flex-col gap-3">
          <div className="flex flex-row justify-between items-center gap-4">
            <section className="flex flex-row items-center gap-3">
              {/* Image on the left */}
              {selectedElement.imageData && (
                <div className="flex-shrink-0">
                  <img
                    src={selectedElement.imageData}
                    alt={selectedElement.title || "Share image"}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Text content */}
              <div className="pr-3 py-2 rounded-b-lg flex-1 w-full">
                <div className="text-base font-light text-white font-josefinSans flex-1 w-full break-words">
                  "{selectedElement.content.length > 50 ? selectedElement.content.substring(0, 72) + "..." : selectedElement.content}"
                </div>
              </div>
            </section>

            <ShareButtons
              selectedElement={selectedElement}
              shareUrl={createShareableUrl()}
              onNostrError={handleNostrError}
            />
          </div>
        </div>
      </div>
    </>
  );
};

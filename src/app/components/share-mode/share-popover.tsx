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
          position: "absolute",
          left: `${popoverPosition.x}px`,
          top: `${popoverPosition.y}px`,
          transform: "translate(-50%, -100%)",
          zIndex: 1000,
        }}
        className="bg-[#0F172A] text-white rounded-[10px] w-[90vw] sm:w-full max-w-[513px] py-2 px-4 shadow-lg"
        onMouseEnter={cancelHidePopover}
        onMouseLeave={hideSharePopover}
        tabIndex={-1}
      >
        <div className="flex flex-col gap-3">
          {/* Content with image */}
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

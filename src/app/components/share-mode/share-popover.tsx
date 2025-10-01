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
    return `${window.location.origin}${pathname}#${encodeURIComponent(selectedElement.id)}`;
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
      >
        <div className="flex flex-row justify-between items-center gap-4">
          <section className="flex flex-row items-center gap-2">
            <div className="pr-3 py-2 rounded-b-lg flex-1 w-full">
              <div className="text-base font-light text-white line-clamp-1 font-josefinSans flex-1 w-full">
                "{selectedElement.content.length > 50 ? selectedElement.content.substring(0, 50) + "..." : selectedElement.content}"
              </div>
            </div>
          </section>

          <ShareButtons
            selectedElement={selectedElement}
            shareUrl={createShareableUrl()}
            onNostrError={() => openNostrModal(createShareableUrl(), selectedElement.content)}
          />
        </div>
      </div>
    </>
  );
};

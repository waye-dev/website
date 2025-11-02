"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import * as Popover from "@radix-ui/react-popover";
import { useShareMode } from "@/contexts/share-mode-context";
import { ShareButtons } from "./share-buttons";

export const SharePopover: React.FC = () => {
  const { selectedElement, isPopoverVisible, openNostrModal, setIsPopoverVisible } = useShareMode();
  const pathname = usePathname();

  const createShareableUrl = () => {
    if (!selectedElement) return "";  
    return `${window.location.origin}${pathname}?share=${encodeURIComponent(selectedElement.id)}`;
  };

  const handleNostrError = () => {
    openNostrModal(createShareableUrl(), selectedElement?.content || "");
  };

  useEffect(() => {
    if (!isPopoverVisible) return;

    const handleScroll = () => {
      setIsPopoverVisible(false);
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [isPopoverVisible, setIsPopoverVisible]);

  if (!selectedElement) {
    return null;
  }

  return (
    <Popover.Root
      open={isPopoverVisible}
      onOpenChange={setIsPopoverVisible}
    >
      {selectedElement.element && (
        <Popover.Anchor virtualRef={{ current: selectedElement.element }} />
      )}
      <Popover.Portal>
        <Popover.Content
          side="top"
          align="center"
          sideOffset={10}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="z-[1000] outline-none"
        >
          <div className="bg-[#0F172A] text-white rounded-[10px] w-[90vw] sm:w-full max-w-[513px] py-2 px-4 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          >
        <div className="flex flex-col gap-4 sm:hidden">
          <div className="flex flex-row items-center gap-3">
            {selectedElement.imageData && (
              <div className="flex-shrink-0">
                <img
                  src={selectedElement.imageData}
                  alt={selectedElement.title || "Share image"}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
            )}

            <div className="flex-1">
              <div className="text-base font-light text-white font-josefinSans break-words">
                "{selectedElement.content.length > 50 ? selectedElement.content.substring(0, 72) + "..." : selectedElement.content}"
              </div>
            </div>
          </div>

          <ShareButtons
            selectedElement={selectedElement}
            shareUrl={createShareableUrl()}
            onNostrError={handleNostrError}
          />
        </div>

        <div className="hidden sm:flex flex-col gap-3">
          <div className="flex flex-row justify-between items-center gap-4">
            <section className="flex flex-row items-center gap-3">
              {selectedElement.imageData && (
                <div className="flex-shrink-0">
                  <img
                    src={selectedElement.imageData}
                    alt={selectedElement.title || "Share image"}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
              )}

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
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

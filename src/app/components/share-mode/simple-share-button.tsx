"use client";

import React, { useState } from "react";
import shareableContentData from '@/app/data/shareable-content.json';
import { ShareableContent } from '@/app/types/shareable-content';

interface SimpleShareButtonProps {
  shareId: string;
  className?: string;
}

export const SimpleShareButton: React.FC<SimpleShareButtonProps> = ({ 
  shareId,
  className = "" 
}) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState<{ x: number; y: number } | null>(null);

  // Get content data from JSON
  const content = (shareableContentData as any)[shareId] as ShareableContent;
  
  if (!content) {
    console.error(`Shareable content not found for ID: ${shareId}`);
    return null;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    showPopover(button);
  };

  const showPopover = (button: HTMLButtonElement | null) => {
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const popoverWidth = 513; // max-w-[513px] from the popover
    const viewportWidth = window.innerWidth;

    // Calculate optimal x position to prevent going off screen
    let x = rect.left + rect.width / 2;

    // If popover would go off the right side, adjust position
    if (x + popoverWidth / 2 > viewportWidth - 20) {
      x = viewportWidth - popoverWidth / 2 - 20;
    }

    // If popover would go off the left side, adjust position
    if (x - popoverWidth / 2 < 20) {
      x = popoverWidth / 2 + 20;
    }

    setPopoverPosition({
      x,
      y: rect.top + window.scrollY - 10,
    });
    setIsPopoverVisible(true);
  };

  const hidePopover = () => {
    setIsPopoverVisible(false);
    setPopoverPosition(null);
  };

  // Create share URL with dynamic OpenGraph
  const createShareUrl = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}?share=${shareId}`;
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`text-[11.28px] flex flex-row items-center gap-1 text-white font-inknutAntiqua text-nowrap h-[30px] px-2.5 rounded-lg bg-[#282F40] transition-all duration-150 hover:scale-105 active:scale-95 ${className}`}
        title={content.title}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
        </svg>
        Share
      </button>

      {isPopoverVisible && popoverPosition && (
        <div
          style={{
            position: "absolute",
            left: `${popoverPosition.x}px`,
            top: `${popoverPosition.y}px`,
            transform: "translate(-50%, -100%)",
            zIndex: 1000,
          }}
          className="bg-[#0F172A] text-white rounded-[10px] w-[90vw] sm:w-full max-w-[513px] py-2 px-4 shadow-lg"
          onMouseLeave={hidePopover}
        >
          <div className="flex flex-row justify-between items-center gap-4">
            <section className="flex flex-row items-center gap-2">
              <div className="pr-3 py-2 rounded-b-lg flex-1 w-full">
                <div className="text-base font-light text-white line-clamp-1 font-josefinSans flex-1 w-full">
                  "{content.content.length > 50 ? content.content.substring(0, 50) + "..." : content.content}"
                </div>
              </div>
            </section>

            <div className="flex flex-row items-center gap-2">
              <button
                className="text-[11.28px] flex flex-row items-center gap-1 text-white font-inknutAntiqua text-nowrap h-[30px] px-2.5 rounded-lg bg-[#282F40] transition-all duration-150 hover:scale-105 active:scale-95"
                onClick={() => {
                  const shareUrl = createShareUrl();
                  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
                  window.open(twitterUrl, "_blank", "width=550,height=420");
                }}
                title="Share on Twitter"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>

              <button
                className="text-[11.28px] flex flex-row items-center gap-1 text-white font-inknutAntiqua text-nowrap h-[30px] px-2.5 rounded-lg bg-[#282F40] transition-all duration-150 hover:scale-105 active:scale-95"
                onClick={async () => {
                  try {
                    const shareUrl = createShareUrl();
                    await navigator.clipboard.writeText(shareUrl);
                    // You could add a toast notification here
                  } catch (error) {
                    console.error("Failed to copy to clipboard:", error);
                  }
                }}
                title="Copy Link"
              >
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.72266 9.24155C4.72266 7.11452 4.72266 6.05025 5.38378 5.38988C6.04415 4.72876 7.10842 4.72876 9.23544 4.72876H11.4918C13.6189 4.72876 14.6831 4.72876 15.3435 5.38988C16.0046 6.05025 16.0046 7.11452 16.0046 9.24155V13.0022C16.0046 15.1292 16.0046 16.1935 15.3435 16.8539C14.6831 17.515 13.6189 17.515 11.4918 17.515H9.23544C7.10842 17.515 6.04415 17.515 5.38378 16.8539C4.72266 16.1935 4.72266 15.1292 4.72266 13.0022V9.24155Z"
                    stroke="white"
                    strokeWidth="1.1282"
                  />
                  <path
                    d="M4.7227 15.2589C4.12427 15.2589 3.55035 15.0212 3.12719 14.598C2.70404 14.1748 2.46631 13.6009 2.46631 13.0025V8.48971C2.46631 5.65342 2.46631 4.2349 3.34781 3.35415C4.2293 2.47341 5.64707 2.47266 8.48336 2.47266H11.4919C12.0903 2.47266 12.6642 2.71038 13.0874 3.13354C13.5106 3.55669 13.7483 4.13062 13.7483 4.72905"
                    stroke="white"
                    strokeWidth="1.1282"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

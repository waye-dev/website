"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../../hooks/window-dimensions";
import { useShareMode, ShareableElement } from "@/contexts/share-mode-context";

export const SharePopover: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { selectedElement, popoverPosition, hideSharePopover, cancelHidePopover, isShareModeActive } = useShareMode();
  const pathname = usePathname();
  const popoverRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [copiedOption, setCopiedOption] = useState<string | null>(null);
  const [sharedOption, setSharedOption] = useState<string | null>(null);

  // Show/hide animation
  useEffect(() => {
    if (selectedElement && popoverPosition) {
      setIsVisible(true);
    } else {
      // setIsVisible(true);
      setIsVisible(false);
    }
  }, [selectedElement, popoverPosition]);

  // Handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        hideSharePopover();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isVisible, hideSharePopover]);

  // Copy to clipboard utility
  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const result = document.execCommand("copy");
        textArea.remove();
        return result;
      }
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      return false;
    }
  };

  const createShareableUrl = async (selectedElement: ShareableElement) => {
    const slicedQuote = selectedElement.content.substring(0, 10) + "...";

    const url = `${window.location.origin}${pathname}#${encodeURIComponent(selectedElement.id)}`;

    const success = await copyToClipboard(url);
    if (success) {
      setSharedOption("share");
      setTimeout(() => setSharedOption(null), 2000);
    }
    // hideSharePopover();
  };

  if (!selectedElement || !popoverPosition || !isVisible) {
    return null;
  }

  // Calculate popover position
  const popoverStyle: React.CSSProperties = {
    position: "fixed",
    left: `${popoverPosition.x}px`,
    top: `${popoverPosition.y}px`,
    transform: isMobile ? "translate(-50%, -100%)" : "translate(-50%, -100%)",
    zIndex: 1000,
  };

  return (
    <div
      ref={popoverRef}
      style={popoverStyle}
      className={`bg-[#0F172A] text-white rounded-[10px] w-[90vw] sm:w-full max-w-[513px] py-2 px-4 transition-all duration-200`}
      onMouseEnter={() => cancelHidePopover()}
      onMouseLeave={() => hideSharePopover()}
    >
      {/* Invisible bridge area to make mouse movement easier */}
      <div className='absolute -top-3 left-0 right-0 h-3 bg-transparent' />

      {/* Content info */}
      <div className='flex flex-row justify-between items-center gap-4'>
        <section className='flex flex-row items-center gap-2'>
          {/* <img src='/svgs/share-human-icon.svg' alt='Share human icon' className='w-8 h-10' /> */}

          <div className='pr-3 py-2 rounded-b-lg flex-1 w-full'>
            <div className='text-base font-light text-white line-clamp-1 font-josefinSans flex-1 w-full'>
              "{selectedElement.content.length > 50 ? selectedElement.content.substring(0, 50) + "..." : selectedElement.content}"
            </div>
          </div>
        </section>

        <section className='flex flex-row items-center gap-2'>
          {/* share button */}
          <button
            className='text-[11.28px] flex flex-row items-center gap-1 text-[#0F172A] font-inknutAntiqua text-nowrap h-[30px] px-2.5 rounded-lg bg-[#BFDBFE] transition-all duration-150 hover:scale-105 active:scale-95'
            onClick={async () => createShareableUrl(selectedElement)}
          >
            {sharedOption === "share" ? (
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
              </svg>
            ) : (
              <svg width='12.78' height='13.7' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.79 19.9692C13.9867 19.9692 13.3039 19.6881 12.7416 19.1258C12.1793 18.5635 11.8981 17.8807 11.8981 17.0774C11.8981 16.981 11.9222 16.756 11.9704 16.4026L5.19864 12.4504C4.94159 12.6914 4.64437 12.8803 4.30699 13.0172C3.96961 13.1541 3.60812 13.2222 3.22254 13.2216C2.41925 13.2216 1.73645 12.9404 1.17415 12.3781C0.611841 11.8158 0.330688 11.133 0.330688 10.3297C0.330688 9.52641 0.611841 8.84361 1.17415 8.2813C1.73645 7.719 2.41925 7.43785 3.22254 7.43785C3.60812 7.43785 3.96961 7.50629 4.30699 7.64317C4.64437 7.78005 4.94159 7.96866 5.19864 8.20901L11.9704 4.25681C11.9383 4.14434 11.9183 4.03606 11.9106 3.93195C11.9029 3.82785 11.8987 3.71121 11.8981 3.58204C11.8981 2.77875 12.1793 2.09595 12.7416 1.53364C13.3039 0.971338 13.9867 0.690186 14.79 0.690186C15.5933 0.690186 16.2761 0.971338 16.8384 1.53364C17.4007 2.09595 17.6818 2.77875 17.6818 3.58204C17.6818 4.38533 17.4007 5.06813 16.8384 5.63044C16.2761 6.19274 15.5933 6.47389 14.79 6.47389C14.4044 6.47389 14.0429 6.40545 13.7055 6.26857C13.3681 6.13169 13.0709 5.94308 12.8139 5.70273L6.0421 9.65493C6.07423 9.7674 6.09448 9.876 6.10283 9.98075C6.11118 10.0855 6.11504 10.2018 6.1144 10.3297C6.11376 10.4576 6.1099 10.5742 6.10283 10.6796C6.09576 10.785 6.07552 10.8933 6.0421 11.0045L12.8139 14.9567C13.0709 14.7157 13.3681 14.5271 13.7055 14.3908C14.0429 14.2546 14.4044 14.1861 14.79 14.1855C15.5933 14.1855 16.2761 14.4667 16.8384 15.029C17.4007 15.5913 17.6818 16.2741 17.6818 17.0774C17.6818 17.8807 17.4007 18.5635 16.8384 19.1258C16.2761 19.6881 15.5933 19.9692 14.79 19.9692Z'
                  fill='#0F172A'
                />
              </svg>
            )}
            <span className='hidden sm:inline'>{sharedOption === "share" ? "Link Copied" : "Share Quote"}</span>
          </button>

          {/* copy button */}
          <button
            className='text-[11.28px] flex flex-row items-center gap-1 text-white font-inknutAntiqua text-nowrap h-[30px] px-2.5 rounded-lg bg-[#282F40] transition-all duration-150 hover:scale-105 active:scale-95'
            onClick={async () => {
              const success = await copyToClipboard(selectedElement.content);
              if (success) {
                setCopiedOption("copy");
                setTimeout(() => setCopiedOption(null), 2000);
              }
            }}
          >
            {copiedOption === "copy" ? (
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
              </svg>
            ) : (
              <svg width='19' height='20' viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M4.72266 9.24155C4.72266 7.11452 4.72266 6.05025 5.38378 5.38988C6.04415 4.72876 7.10842 4.72876 9.23544 4.72876H11.4918C13.6189 4.72876 14.6831 4.72876 15.3435 5.38988C16.0046 6.05025 16.0046 7.11452 16.0046 9.24155V13.0022C16.0046 15.1292 16.0046 16.1935 15.3435 16.8539C14.6831 17.515 13.6189 17.515 11.4918 17.515H9.23544C7.10842 17.515 6.04415 17.515 5.38378 16.8539C4.72266 16.1935 4.72266 15.1292 4.72266 13.0022V9.24155Z'
                  stroke='white'
                  strokeWidth='1.1282'
                />
                <path
                  d='M4.7227 15.2589C4.12427 15.2589 3.55035 15.0212 3.12719 14.598C2.70404 14.1748 2.46631 13.6009 2.46631 13.0025V8.48971C2.46631 5.65342 2.46631 4.2349 3.34781 3.35415C4.2293 2.47341 5.64707 2.47266 8.48336 2.47266H11.4919C12.0903 2.47266 12.6642 2.71038 13.0874 3.13354C13.5106 3.55669 13.7483 4.13062 13.7483 4.72905'
                  stroke='white'
                  strokeWidth='1.1282'
                />
              </svg>
            )}
            <span className='hidden sm:inline'>Copy</span>
          </button>
        </section>
      </div>
    </div>
  );
};

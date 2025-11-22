"use client";

import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";

interface ReportShareButtonProps {
  className?: string;
  mobileClassName?: string;
  isMobile?: boolean;
}

export const ReportShareButton: React.FC<ReportShareButtonProps> = ({
  className = "",
  mobileClassName = "",
  isMobile = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedOption, setCopiedOption] = useState<string | null>(null);
  const [sharedOption, setSharedOption] = useState<string | null>(null);

  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      } else {
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

  const handleTwitterShare = () => {
    const text = `Permissionless Paths: A Study of Developers in the Freedom Tech Ecosystem\n\n${window.location.href}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, "_blank", "width=550,height=420");
    setSharedOption("twitter");
    setTimeout(() => {
      setSharedOption(null);
      setIsOpen(false);
    }, 1500);
  };

  const handleNostrShare = async () => {
    try {
      if (typeof window !== "undefined" && (window as any).nostr) {
        const nostr = (window as any).nostr;
        const timestamp = Math.floor(Date.now() / 1000);
        const content = `Permissionless Paths: A Study of Developers in the Freedom Tech Ecosystem\n\n${window.location.href}`;

        const event = await nostr.signEvent({
          kind: 1,
          created_at: timestamp,
          tags: [
            ["r", window.location.href, "mention"],
          ],
          content: content,
        });

        if (nostr.publish) {
          await nostr.publish(event);
        }

        setSharedOption("nostr");
        setTimeout(() => {
          setSharedOption(null);
          setIsOpen(false);
        }, 1500);
      } else {
        alert("Please install a Nostr extension like nos2x or Alby to share to Nostr");
      }
    } catch (error) {
      console.error("Error sharing to Nostr:", error);
      alert("Error sharing to Nostr. Please try again.");
    }
  };

  const handleCopyLink = async () => {
    const success = await copyToClipboard(window.location.href);
    if (success) {
      setCopiedOption("copy");
      setTimeout(() => {
        setCopiedOption(null);
        setIsOpen(false);
      }, 1500);
    }
  };

  const buttonClass = isMobile ? mobileClassName : className;

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button
          className={buttonClass}
          title='Share this report'
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={isMobile ? "inline-block" : "inline-block mr-2"}>
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
          </svg>
          {!isMobile && "Share"}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="center"
          sideOffset={10}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="z-[1000] outline-none"
        >
          <div className="bg-[#0F172A] text-white rounded-[10px] w-[90vw] sm:w-auto py-3 px-4 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            {/* Mobile layout: vertical list with text labels */}
            <section className="flex flex-col gap-2 w-full sm:hidden">
              <button
                className="flex flex-row items-center justify-between w-full h-[48px] px-4 rounded-lg bg-[#282F40] hover:bg-[#3B4F6F] transition-all duration-150 active:scale-[0.98]"
                onClick={handleTwitterShare}
              >
                <div className="flex flex-row items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="text-sm text-white font-inknutAntiqua">Share on Twitter</span>
                </div>
                {sharedOption === "twitter" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>

              <button
                className="flex flex-row items-center justify-between w-full h-[48px] px-4 rounded-lg bg-[#282F40] hover:bg-[#3B4F6F] transition-all duration-150 active:scale-[0.98]"
                onClick={handleNostrShare}
              >
                <div className="flex flex-row items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 234.7c-58.9 0-106.7-47.8-106.7-106.7S69.1 21.3 128 21.3 234.7 69.1 234.7 128 186.9 234.7 128 234.7z" />
                    <circle cx="128" cy="85" r="15" />
                    <circle cx="85" cy="128" r="15" />
                    <circle cx="171" cy="128" r="15" />
                    <circle cx="128" cy="171" r="15" />
                  </svg>
                  <span className="text-sm text-white font-inknutAntiqua">Share on Nostr</span>
                </div>
                {sharedOption === "nostr" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>

              <button
                className="flex flex-row items-center justify-between w-full h-[48px] px-4 rounded-lg bg-[#282F40] hover:bg-[#3B4F6F] transition-all duration-150 active:scale-[0.98]"
                onClick={handleCopyLink}
              >
                <div className="flex flex-row items-center gap-3">
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
                  <span className="text-sm text-white font-inknutAntiqua">Copy Link</span>
                </div>
                {copiedOption === "copy" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </section>

            {/* Desktop layout: icon-only horizontal buttons */}
            <section className="hidden sm:flex flex-row items-center gap-2">
              <button
                className="text-[11.28px] flex flex-row items-center gap-1 text-white font-inknutAntiqua text-nowrap h-[30px] px-2.5 rounded-lg bg-[#282F40] hover:bg-[#3B4F6F] transition-all duration-150 hover:scale-105 active:scale-95"
                onClick={handleTwitterShare}
                title="Share on Twitter"
              >
                {sharedOption === "twitter" ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
              </button>

              <button
                className="text-[11.28px] flex flex-row items-center gap-1 text-white font-inknutAntiqua text-nowrap h-[30px] px-2.5 rounded-lg bg-[#282F40] hover:bg-[#3B4F6F] transition-all duration-150 hover:scale-105 active:scale-95"
                onClick={handleNostrShare}
                title="Share on Nostr"
              >
                {sharedOption === "nostr" ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 234.7c-58.9 0-106.7-47.8-106.7-106.7S69.1 21.3 128 21.3 234.7 69.1 234.7 128 186.9 234.7 128 234.7z" />
                    <circle cx="128" cy="85" r="15" />
                    <circle cx="85" cy="128" r="15" />
                    <circle cx="171" cy="128" r="15" />
                    <circle cx="128" cy="171" r="15" />
                  </svg>
                )}
              </button>

              <button
                className="text-[11.28px] flex flex-row items-center gap-1 text-white font-inknutAntiqua text-nowrap h-[30px] px-2.5 rounded-lg bg-[#282F40] hover:bg-[#3B4F6F] transition-all duration-150 hover:scale-105 active:scale-95"
                onClick={handleCopyLink}
              >
                {copiedOption === "copy" ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
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
                )}
              </button>
            </section>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

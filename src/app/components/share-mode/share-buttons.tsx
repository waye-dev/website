"use client";

import React, { useState } from "react";
import { ShareableElement } from "@/contexts/share-mode-context";

interface ShareButtonsProps {
  selectedElement: ShareableElement;
  shareUrl: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ selectedElement, shareUrl }) => {
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
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "width=550,height=420");
    setSharedOption("twitter");
    setTimeout(() => setSharedOption(null), 2000);
  };


  const handleCopyLink = async () => {
    const success = await copyToClipboard(shareUrl);
    if (success) {
      setCopiedOption("copy");
      setTimeout(() => setCopiedOption(null), 2000);
    }
  };

  return (
    <section className="flex flex-row items-center gap-2">
      <button
        className="text-[11.28px] flex flex-row items-center gap-1 text-white font-inknutAntiqua text-nowrap h-[30px] px-2.5 rounded-lg bg-[#282F40] transition-all duration-150 hover:scale-105 active:scale-95"
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
        className="text-[11.28px] flex flex-row items-center gap-1 text-white font-inknutAntiqua text-nowrap h-[30px] px-2.5 rounded-lg bg-[#282F40] transition-all duration-150 hover:scale-105 active:scale-95"
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
  );
};

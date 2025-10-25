"use client";

import React from "react";
import shareableContentData from '@/app/data/shareable-content';
import { useShareMode, ShareableElement } from '@/contexts/share-mode-context';

interface SimpleShareButtonProps {
  shareId: string;
  className?: string;
}

export const SimpleShareButton: React.FC<SimpleShareButtonProps> = ({ 
  shareId,
  className = "" 
}) => {
  const { showSharePopover } = useShareMode();

  const content = (shareableContentData)[shareId];
  
  if (!content) {
    console.error(`Shareable content not found for ID: ${shareId}`);
    return null;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    // Generate the image URL from the content's order number
    const imageUrl = `/api/og?id=${content.order}`;

    const shareableElement: ShareableElement = {
      id: shareId,
      title: content.title,
      content: content.description,
      type: "text",
      element: button,
      imageData: imageUrl,
    };

    showSharePopover(shareableElement, {
      x: rect.left + rect.width / 2,
      y: rect.top + window.scrollY - 10,
      width: rect.width,
      height: rect.height
    });
  };

  return (
    <button
      data-shareable-id={shareId}
      onClick={handleClick}
      className={`inline-flex items-center gap-1 text-[11.28px] text-white font-inknutAntiqua text-nowrap h-[23px] px-1.5 rounded-full bg-[#282F40] hover:bg-[#3B4F6F] transition-all duration-150 hover:scale-105 active:scale-95 ${className}`}
      title={content.title}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
      </svg>
    </button>
  );
};

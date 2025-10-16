"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { NostrModal } from "@/app/components/share-mode/nostr-modal";

export interface ShareableElement {
  id: string;
  title?: string;
  content: string;
  element?: HTMLElement;
  type: "text" | "chart" | "section" | "quote";
  imageData?: string; // Base64 encoded image data or blob URL
}

export interface SharePopoverPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ShareContextType {
  hideSharePopover: () => void;
  cancelHidePopover: () => void;
  selectedElement: ShareableElement | null;
  popoverPosition: SharePopoverPosition | null;
  isPopoverVisible: boolean;
  isNostrModalOpen: boolean;
  nostrModalContent: { shareUrl: string; content: string } | null;
  openNostrModal: (shareUrl: string, content: string) => void;
  closeNostrModal: () => void;
  showSharePopover: (element: ShareableElement, position: SharePopoverPosition) => void;
}

const ShareContext = createContext<ShareContextType | undefined>(undefined);

export const useShare = (): ShareContextType => {
  const context = useContext(ShareContext);
  if (!context) {
    throw new Error("useShare must be used within a ShareProvider");
  }
  return context;
};

interface ShareProviderProps {
  children: React.ReactNode;
}

export const ShareProvider: React.FC<ShareProviderProps> = ({ children }) => {
  const [selectedElement, setSelectedElement] = useState<ShareableElement | null>(null);
  const [popoverPosition, setPopoverPosition] = useState<SharePopoverPosition | null>(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false);
  const [isNostrModalOpen, setIsNostrModalOpen] = useState<boolean>(false);
  const [nostrModalContent, setNostrModalContent] = useState<{ shareUrl: string; content: string } | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  const showSharePopover = useCallback((element: ShareableElement, position: SharePopoverPosition) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    setSelectedElement(element);
    setPopoverPosition(position);
    setIsPopoverVisible(true);
  }, []);

  const cancelHidePopover = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const hideSharePopover = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    hideTimeoutRef.current = setTimeout(() => {
      setIsPopoverVisible(false);
      setSelectedElement(null);
      setPopoverPosition(null);
    }, 100);
  }, []);

  const openNostrModal = useCallback((shareUrl: string, content: string) => {
    setNostrModalContent({ shareUrl, content });
    setIsNostrModalOpen(true);
  }, []);

  const closeNostrModal = useCallback(() => {
    setIsNostrModalOpen(false);
    setNostrModalContent(null);
  }, []);


  const contextValue: ShareContextType = {
    selectedElement,
    popoverPosition,
    isPopoverVisible,
    isNostrModalOpen,
    nostrModalContent,
    openNostrModal,
    closeNostrModal,
    showSharePopover,
    hideSharePopover,
    cancelHidePopover,
  };

  return (
    <ShareContext.Provider value={contextValue}>
      {children}
      {nostrModalContent && (
        <NostrModal
          isOpen={isNostrModalOpen}
          onClose={closeNostrModal}
          content={nostrModalContent.content}
          shareUrl={nostrModalContent.shareUrl}
        />
      )}
    </ShareContext.Provider>
  );
};

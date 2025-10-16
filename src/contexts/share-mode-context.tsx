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
  imageFile?: File; // Actual file for uploading
}

export interface SharePopoverPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ShareModeContextType {
  isShareModeActive: boolean;
  toggleShareMode: () => void;
  hideSharePopover: () => void;
  cancelHidePopover: () => void;
  shareableElements: ShareableElement[];
  selectedElement: ShareableElement | null;
  popoverPosition: SharePopoverPosition | null;
  isPopoverVisible: boolean;
  isNostrModalOpen: boolean;
  nostrModalContent: { shareUrl: string; content: string } | null;
  openNostrModal: (shareUrl: string, content: string) => void;
  closeNostrModal: () => void;
  unregisterShareableElement: (id: string) => void;
  registerShareableElement: (element: ShareableElement) => void;
  showSharePopover: (element: ShareableElement, position: SharePopoverPosition) => void;
}

const ShareModeContext = createContext<ShareModeContextType | undefined>(undefined);

export const useShareMode = (): ShareModeContextType => {
  const context = useContext(ShareModeContext);
  if (!context) {
    throw new Error("useShareMode must be used within a ShareModeProvider");
  }
  return context;
};

interface ShareModeProviderProps {
  children: React.ReactNode;
}

export const ShareModeProvider: React.FC<ShareModeProviderProps> = ({ children }) => {
  // State management
  const [isShareModeActive, setIsShareModeActive] = useState<boolean>(false);
  const [shareableElements, setShareableElements] = useState<ShareableElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<ShareableElement | null>(null);
  const [popoverPosition, setPopoverPosition] = useState<SharePopoverPosition | null>(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false);
  const [isNostrModalOpen, setIsNostrModalOpen] = useState<boolean>(false);
  const [nostrModalContent, setNostrModalContent] = useState<{ shareUrl: string; content: string } | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleShareMode = useCallback(() => {
    setIsShareModeActive((prev) => {
      const newState = !prev;
      if (!newState) {
        setIsPopoverVisible(false);
        setSelectedElement(null);
        setPopoverPosition(null);
      }
      return newState;
    });
  }, []);

  const registerShareableElement = useCallback((element: ShareableElement) => {
    setShareableElements((prev) => {
      const exists = prev.find((el) => el.id === element.id);
      if (exists) {
        return prev.map((el) => (el.id === element.id ? element : el));
      }
      return [...prev, element];
    });
  }, []);

  const unregisterShareableElement = useCallback((id: string) => {
    setShareableElements((prev) => prev.filter((el) => el.id !== id));
  }, []);

  const showSharePopover = useCallback((element: ShareableElement, position: SharePopoverPosition) => {
    // Cancel any pending hide
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


  const contextValue: ShareModeContextType = {
    isShareModeActive,
    toggleShareMode,
    shareableElements,
    registerShareableElement,
    unregisterShareableElement,
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
    <ShareModeContext.Provider value={contextValue}>
      {children}
      {nostrModalContent && (
        <NostrModal
          isOpen={isNostrModalOpen}
          onClose={closeNostrModal}
          content={nostrModalContent.content}
          shareUrl={nostrModalContent.shareUrl}
        />
      )}
    </ShareModeContext.Provider>
  );
};

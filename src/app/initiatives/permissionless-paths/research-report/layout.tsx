"use client";

import { HashNavigation } from "@/app/components/hash-navigation";
import { StickyNavigation } from "@/app/components/research-report/sticky-navigation";
import { ShareModeProvider, SharePopover } from "@/app/components/share-mode";
import { NostrModal } from "@/app/components/share-mode/nostr-modal";
import { useShareMode } from "@/contexts/share-mode-context";

function ShareComponents() {
  const { isNostrModalOpen, nostrModalContent, closeNostrModal } = useShareMode();
  
  return (
    <>
      <SharePopover />
      {nostrModalContent && (
        <NostrModal
          isOpen={isNostrModalOpen}
          onClose={closeNostrModal}
          content={nostrModalContent.content}
          shareUrl={nostrModalContent.url}
        />
      )}
    </>
  );
}

export default function ResearchReportLayout({ children }: { children: React.ReactNode }) {
    return (
        <ShareModeProvider>
            {children}
        <StickyNavigation />
      <HashNavigation />
      <ShareComponents />
    </ShareModeProvider>
    )
}
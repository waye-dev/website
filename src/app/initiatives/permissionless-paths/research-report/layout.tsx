import { HashNavigation } from "@/app/components/hash-navigation";
import { StickyNavigation } from "@/app/components/research-report/sticky-navigation";
import { FloatingShareButton, ShareModeProvider, SharePopover, NostrModal } from "@/app/components/share-mode";

export default function ResearchReportLayout({ children }: { children: React.ReactNode }) {
    return (
        <ShareModeProvider>
            {children}
        <StickyNavigation />
      <HashNavigation />
      <FloatingShareButton />
      <SharePopover />
      <NostrModal />
    </ShareModeProvider>
    )
}
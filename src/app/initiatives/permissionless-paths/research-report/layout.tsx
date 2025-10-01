import { HashNavigation } from "@/app/components/hash-navigation";
import { StickyNavigation } from "@/app/components/research-report/sticky-navigation";
import { FloatingShareButton, ShareModeProvider, SharePopover } from "@/app/components/share-mode";

export default function ResearchReportLayout({ children }: { children: React.ReactNode }) {
    return (
        <ShareModeProvider>
            {children}
        <StickyNavigation />
      <HashNavigation />
      <FloatingShareButton />
      <SharePopover />
    </ShareModeProvider>
    )
}
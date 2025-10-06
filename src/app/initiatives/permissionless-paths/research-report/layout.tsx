import { HashNavigation } from "@/app/components/hash-navigation";
import { StickyNavigation } from "@/app/components/research-report/sticky-navigation";
import { ShareModeProvider, SharePopover, NostrModal } from "@/app/components/share-mode";

export const metadata = {
  title: 'Permissionless Paths | Research Report',
  description: 'A qualitative study examining sustainable open source development in the freedom tech ecosystem',
};

export default function ResearchReportLayout({ children }: { children: React.ReactNode }) {
    return (
        <ShareModeProvider>
            {children}
        <StickyNavigation />
      <HashNavigation />
      <SharePopover />
      <NostrModal />
    </ShareModeProvider>
    )
}
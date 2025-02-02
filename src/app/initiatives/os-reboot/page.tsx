import React from "react";
import { genPageMetadata } from "@/app/seo";
import ContentTabs from "@/app/components/os-reboot/content-tab";

export const metadata = genPageMetadata({
  title: "OS Reboot",
  description:
    "Decentralized development is the foundation of censorship-resistant technology, but it can often feel isolating and overwhelming. OS Reboot is here to provide support, structure, and a sense of community for open-source developers navigating these challenges. Join our pilot program to invest in yourself, shape the program’s future, and contribute to the broader privacy tech community.",
  url: "https://waye.dev/initiatives/os-reboot",
});

const page = () => {
  return <ContentTabs />;
};

export default page;

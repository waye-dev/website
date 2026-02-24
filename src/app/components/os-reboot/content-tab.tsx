"use client";

import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper";
import AboutOSReboot from "./about-os-reboot";
import BitcoinReboot from "./bitcoin-reboot";
import NostrReboot from "./nostr-reboot";
import EverestReboot from "./everest-reboot";

const ContentTabs = () => {
  const tabKeys = ["nostr", "bitcoin", "everest"];

  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && tabKeys.includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const tabContent = {
    "about": <AboutOSReboot setActiveTab={setActiveTab} />,
    "nostr": <NostrReboot />,
    "bitcoin": <BitcoinReboot />,
    "everest": <EverestReboot />,
  } as Record<string, React.JSX.Element>;

  return (
    <div className='bg-gray-custom-100 text-black pt-10 md:pt-[108px] pb-20 md:pb-10 h-full'>
      <Wrapper className='h-full'>
        <div className='max-w-[1133px] mx-auto rounded-[20px] w-full h-full sm:border-2 sm:border-black'>
          <div className='bg-white h-full w-full p-3 py-10 sm:p-6 lg:p-10 rounded-[20px] min-h-screen border border-black'>
            {tabContent[activeTab]}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContentTabs;

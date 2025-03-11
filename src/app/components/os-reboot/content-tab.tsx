"use client";

import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper";
import AboutOSReboot from "./about-os-reboot";
import BitcoinReboot from "./bitcoin-reboot";
import NostrReboot from "./nostr-reboot";

const ContentTabs = () => {
  const tabItems = [
    { key: "about", label: <span>About <br /> OS Reboot</span> },
    { key: "nostr", label: <span>Nostr <br /> Reboot</span> },
    { key: "bitcoin", label: <span>Bitcoin <br /> Reboot</span> },
  ];

  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && tabItems.some(item => item.key === hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
    window.location.hash = key;
  };

  const tabContent = {
    "about": <AboutOSReboot setActiveTab={setActiveTab} />,
    "nostr": <NostrReboot />,
    "bitcoin": <BitcoinReboot />,
  } as Record<string, React.JSX.Element>;

  return (
    <div className='bg-gray-custom-100 text-black pt-10 md:pt-[108px] pb-20 md:pb-10 h-full'>
      <Wrapper className='h-full'>
        <div className='max-w-[1133px] mx-auto rounded-[20px] w-full h-full sm:border-2 sm:border-black flex flex-col sm:flex-row items-start gap-[30px] sm:gap-0'>
          <div className='bg-gray-custom-100 h-full w-full sm:w-1/3 rounded-l-[20px] rounded-tr-[20px] flex flex-row sm:flex-col gap-[44px] sm:items-start justify-between sm:p-6 lg:p-10'>
            {tabItems.map((item) => (
              <div key={item.key}>
                <button
                  className={`h-full text-[16px] sm:text-lg leading-4 sm:leading-6 font-medium text-start`}
                  onClick={() => handleTabClick(item.key)}
                >
                  <span>{item.label}</span>
                </button>
                <section className={`border-black ${activeTab === item.key ? "border-b-2" : ""}`}></section>
              </div>
            ))}
          </div>

          <div className='bg-white h-full w-full p-3 py-10 sm:p-6 lg:p-10 rounded-[20px] sm:rounded-r-[20px] sm:rounded-l-[0px] min-h-screen border sm:border-l-2 sm:border-r-0 sm:border-y-0 border-black'>
            {tabContent[activeTab]}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContentTabs;

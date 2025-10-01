"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { NAV_LINKS } from "@/app/data";
import React, { useState } from "react";
import Wrapper from "@/app/components/wrapper";

const DonationModal = dynamic(() => import("@/app/components/donation-modal"), { ssr: false });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 flex flex-col items-center justify-between py-4 ${
        isOpen ? "pb-0" : ""
    } bg-blue-custom-100 text-gray-custom-100 z-50`}
      // OLD VERSION (commented for future reference):
      // className={`sticky top-0 flex flex-col items-center justify-between py-4 md:py-5 ${
      //   isOpen ? "pb-0" : "pb-[16px]"
      // } bg-blue-custom-100 text-gray-custom-100 border-b-[1.5px] border-gray-custom-300 z-50`}
    >
      <Wrapper>
        <div className='flex items-center justify-between w-full'>
          <Link href='/' className='flex items-center'>
            <Image 
              src='/images/waye-temp-logo-p-500.png' 
              alt='Waye Logo' 
              width={100} 
              height={28} 
              priority 
            />
            {/* OLD VERSION (commented for future reference):
            <Image src='/images/waye-temp-logo-p-500.png' alt='Waye Logo' width={133} height={34.31} className='h-[34px] w-[133px]' priority />
            */}
          </Link>

          <div className='hidden items-center space-x-12 md:flex font-medium'>
            {NAV_LINKS.map(({ href, text }) => (
              <Link key={text} href={href} target={href.includes("https") ? "_blank" : "_self"}>
                {text}
              </Link>
            ))}
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <button
              onClick={() => setIsDonationOpen(true)}
              className='rounded-full bg-blue-custom-200 text-md leading-[160%] font-medium py-1.5 px-8 text-black text-nowrap'
              // OLD VERSION (commented for future reference):
              // className='rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[14px] px-[22px] text-black text-nowrap  lg:min-w-[183.66px]'
            >
              Donate
            </button>
          </div>

          <div className='items-center gap-4 flex md:hidden'>
            <div className='flex md:hidden items-center space-x-8'>
              <button
                onClick={() => setIsDonationOpen(true)}
                className='rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[10px] px-[16px] text-black text-nowrap lg:min-w-[183.66px]'
              >
                Donate
              </button>
            </div>

            <button className='md:hidden flex flex-col gap-2.5' onClick={() => setIsOpen(!isOpen)}>
              <span className={`w-[34px] h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}></span>
              <span className={`w-[34px] h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
            </button>
          </div>
        </div>
      </Wrapper>

      <div
        className={`block md:hidden w-full h-full bg-blue-custom-100 text-gray-custom-100 text-center transition-all duration-[400ms] ${
          isOpen ? "pt-[26px] pb-[10px] opacity-100" : "pt-0 pb-0 opacity-0"
        }`}
      >
        {isOpen && (
          <div>
            {NAV_LINKS.map(({ href, text }) => (
              <div className='pb-[10px]' key={text}>
                <Link href={href} target={href.includes("https") ? "_blank" : "_self"}>
                  {text}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <DonationModal isOpen={isDonationOpen} onClose={() => setIsDonationOpen(false)} />
    </nav>
  );
};

export default Navbar;

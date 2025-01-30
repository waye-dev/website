"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Wrapper from "@/app/components/wrapper";
import CustomButton from "@/app/components/custom-button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 flex flex-col items-center justify-between py-4 md:py-5 ${
        isOpen ? "pb-0" : "pb-[16px]"
      } bg-blue-custom-100 text-gray-custom-100 border-b-[1.5px] border-gray-custom-300 z-50`}
    >
      <Wrapper>
        <div className='flex items-center justify-between w-full'>
          <Link href='/' className='flex items-center'>
            <Image src='/images/waye-temp-logo-p-500.png' alt='Waye Logo' width={133} height={34.31} className='h-[34px] w-[133px]' priority />
          </Link>

          <Link href='/initiatives' className='hidden md:block'>
            Check out our <span className='font-medium text-lg underline'>current initiatives</span>.
          </Link>
          <div className='hidden md:flex items-center space-x-8'>
            <CustomButton href='/subscribe' className='lg:min-w-[183.66px] text-center'>
              Stay Updated
            </CustomButton>
          </div>

          <button className='md:hidden flex flex-col gap-2.5' onClick={() => setIsOpen(!isOpen)}>
            <span className={`w-[34px] h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}></span>
            <span className={`w-[34px] h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
          </button>
        </div>
      </Wrapper>

      <Link
        href='/initiatives'
        className={`block md:hidden w-full h-full bg-blue-custom-100 text-gray-custom-100 text-center transition-all duration-[400ms] ${
          isOpen ? "pt-[26px] pb-[10px] opacity-100" : "pt-0 pb-0 opacity-0"
        }`}
      >
        {isOpen && (
          <p>
            Check out our <span className='font-medium text-lg underline'>current initiatives</span>.
          </p>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;

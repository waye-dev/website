"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const aboutSubSections = [
    {
      title: "Who is waye",
      description: "Meet the community building freedom tech together.",
      href: "/about/who-is-waye",
    },
    // {
    //   title: "What is Waye",
    //   description: "Supporting builders creating censorship-resistant tech.",
    //   href: "/about/what-is-waye",
    // },
    {
      title: "About Waye",
      description: "Our mission, values, and impact. Learn more about Waye and its mission.",
      href: "/about",
    },
  ];

  return (
    <nav
      className={`sticky top-0 flex flex-col items-center justify-between py-4 ${
        isOpen ? "pb-0" : ""
      } bg-blue-custom-100 border-b border-b-white text-gray-custom-100 z-50`}
    >
      <Wrapper>
        <div className='flex items-center justify-between w-full'>
          <Link href='/' className='flex items-center'>
            <Image src='/images/waye-temp-logo-p-500.png' alt='Waye Logo' width={100} height={28} priority />
          </Link>

          <div className='hidden items-center space-x-12 md:flex font-medium'>
            {/* dropdown menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='bg-none focus:bg-transparent focus:text-white bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent text-white hover:text-white text-base data-[state=open]:text-white'>
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className='rounded-lg bg-transparent'>
                    <ul className='grid gap-2.5 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] p-4 bg-blue-custom-900 border-none'>
                      {aboutSubSections.map(({ title, description, href }) => (
                        <div key={title} className='flex flex-col gap-1.5'>
                          <NavigationMenuLink asChild>
                            <Link href={href} className='cursor-pointer'>
                              <h3 className='text-base whitespace-nowrap text-white font-medium'>{title}</h3>
                              <p className='text-sm font-normal text-blue-custom-800'>{description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
            {/* About expandable section */}
            <div className='pb-[10px] px-6'>
              <button
                onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                className='w-full flex items-center justify-center gap-2 text-base font-normal'
              >
                <span>About</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isAboutExpanded ? "rotate-180" : ""}`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>

              {/* About subsections */}
              {isAboutExpanded && (
                <div className='mt-2 flex flex-col gap-3 bg-blue-custom-900 py-3 px-4 border-[0.5px] border-white rounded-lg'>
                  {aboutSubSections.map(({ title, href }) => (
                    <Link
                      key={title}
                      href={href}
                      className='text-sm text-gray-custom-100 hover:text-blue-custom-200 transition-colors'
                      onClick={() => {
                        setIsOpen(false);
                        setIsAboutExpanded(false);
                      }}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other nav links */}
            {NAV_LINKS.map(({ href, text }) => (
              <div className='pb-[10px]' key={text}>
                <Link href={href} target={href.includes("https") ? "_blank" : "_self"} onClick={() => setIsOpen(false)}>
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

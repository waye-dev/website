"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";

const Footer = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full bg-gray-custom-100 lg:-mb-[0px] -z-50 relative'>
        <Image
          src='/images/Mountains_hero_footer.png'
          width={3200}
          height={400}
          className='h-[200px] lg:h-full lg:min-h-[350px] w-full object-cover object-center'
          alt='mountains footer'
        />
      </div>

      <div className='bg-blue-custom-100 w-full text-gray-custom-100 pb-10 z-20'>
        <Wrapper className='py-[60px] flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-[30px] justify-between'>
          <div className='flex flex-col items-center md:items-start'>
            <Link href='/' className='text-[40px] font-medium'>
              <Image src='/images/waye-text.png' width={94} height={34.31} alt='waye footer logo' />
            </Link>
            <p className='pb-[10px] font-light md:font-medium'>Strengthening the human infrastructure of open source.</p>
            <Link href='mailto:waye.dev@gmail.com' className='pb-[22px] font-light md:font-medium flex items-center gap-3'>
              <Image src='/svgs/envelope.svg' width={20} height={20} alt='envelope' />
              waye.dev@gmail.com
            </Link>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h3 className='text-lg font-medium mb-4 underline'>Legalese</h3>
            <Link href='https://github.com/waye-dev/waye/blob/main/doc/TOS.md' className='mb-2'>
              Terms of Use
            </Link>
            <Link href='https://github.com/waye-dev/waye/blob/main/doc/PRIVACY.md' className='mb-2'>
              Privacy Policy
            </Link>
            <Link href='https://github.com/waye-dev/waye/blob/main/doc/DISCLOSURE.md' className='mb-2'>
              Donation Disclosure
            </Link>
            <Link href='https://github.com/waye-dev/waye/blob/main/LICENSE' className='mb-2'>
              License: MIT
            </Link>
            <Link href='https://github.com/waye-dev/waye/blob/main/BYLAWS.md' className='mb-2'>
              Bylaws
            </Link>
          </div>
        </Wrapper>

        <Wrapper>
          <div className='border-b border-b-gray-custom-100'></div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Footer;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/app/data";
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
            <Link href='mailto:hello@waye.dev' className='pb-[22px] font-light md:font-medium flex items-center gap-3'>
              <Image src='/svgs/envelope.svg' width={20} height={20} alt='envelope' />
              hello@waye.dev
            </Link>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h3 className='text-lg font-medium mb-4 underline'>Legalese</h3>
            {FOOTER_LINKS.map(({ text, href }) => (
              <Link href={href} key={text} target='_blank' className='mb-2'>
                {text}
              </Link>
            ))}
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

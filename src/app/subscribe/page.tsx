import React from "react";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";
import { genPageMetadata } from "@/app/seo";

export const metadata = genPageMetadata({
  title: "Stay Updated with Waye | Subscribe",
  description:
    "Join the Waye community and stay informed about tools, programs, and initiatives for open-source developers. Subscribe to receive updates, insights, and resources to help you thrive.",
  url: "https://waye.dev/subscribe",
});

const page = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='w-full bg-blue-custom-100 lg:-mb-[62px pt-20'>
        <Image
          src='/images/Mountains_initiatives_2-p-2600.png'
          width={3200}
          height={360}
          alt='mountains footer'
          className='h-[200px] lg:h-full w-full object-cover object-center'
        />
      </div>

      <div className='items-center justify-center mx-auto text-center w-full bg-gray-custom-100'>
        <Wrapper className='pt-[72px] pb-[20px] max-w-[770px] flex flex-col gap-[15px]'>
          <p className='text-[32px] md:text-4xl font-medium'>We may be young, but we're feisty.</p>
          <p className='text-lg leading-[160%]'>
            We have lots brewing and would love to tell you about it. No clutter, no regular newsletters, just periodic updates when we've got
            something exciting to share.
            <br />
            <br />
            <span className='text-lg font-medium md:font-normal'>Join our mailing list ↓</span>
          </p>

          <div className='w-full flex justify-center items-center pt-[22px]'>
            <Image src='/images/subscribe_image-p-800.png' width={418.5} height={418.5} alt='mountains footer' className='w-[345px] md:w-[418.5px]' />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default page;

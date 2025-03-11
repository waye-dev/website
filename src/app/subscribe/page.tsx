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
          <p className='text-[32px] md:text-4xl font-medium'>Join our mailing list</p>
          <p className='text-lg leading-[160%]'>
            We have a lot brewing and can't wait to tell you all about it!
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

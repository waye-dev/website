import React from "react";
import Image from "next/image";
import CustomButton from "@/app/components/custom-button";

const HeroSection = () => {
  return (
    <div className='max-h-screen h-[calc(100vh-75.5px)] md:h-[calc(100vh-98.3px)] bg-blue-custom-100 bg-gradient-to-b from-[#1a1f36] to-[#7192f55c] via-[#7192f51c] text-gray-custom-100'>
      <section className='h-full flex flex-col justify-between text-gray-custom-100'>
        <div className='container mx-auto px-4 md:px-8 pb-9 z-10 h-full md:h-[80%] lg:h-[75%] flex flex-col justify-center items-center'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-[42px] md:text-[60px] leading-[140%] md:leading-[80px] mb-8 text-center'>
              Building freedom tech is hard. Don't do it alone.
            </h1>

            <div className='flex flex-col sm:flex-row gap-4 w-full items-center justify-center'>
              <CustomButton
                href='/initiatives'
                className='w-full sm:w-[200px] sm:max-w-[200px] text-center'
                props={{ style: { padding: "14px 38px" }, "aria-label": "Get Involved" }}
              >
                Get Involved
              </CustomButton>
              <CustomButton
                href='/subscribe'
                className='w-full sm:w-[200px] sm:max-w-[200px] text-center'
                props={{
                  style: { backgroundColor: "transparent", color: "white", border: "2px solid white", padding: "14px 38px" },
                  "aria-label": "Our services",
                }}
              >
                Stay Updated
              </CustomButton>
            </div>
          </div>
        </div>

        <div className='absolute bottom-0'>
          <Image
            src='/images/mountains-hero-section.png'
            width={3200}
            height={574}
            className='h-[200px] lg:h-full w-full object-cover object-center'
            alt='mountains'
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

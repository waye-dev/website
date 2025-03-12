import React from "react";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";
import CustomButton from "@/app/components/custom-button";
import { SERVICES_SECTION_DATA } from "@/app/data";

const ServicesSection = () => {
  return (
    <div className='items-center justify-center mx-auto w-full text-black bg-gray-custom-100'>
      <Wrapper className='flex mx-auto flex-col gap-[20px] items-center justify-center w-full pb-[20px]'>
        <h2 className='text-[34px] md:text-[40px] lg:text-[46px] font-medium leading-[140%] tracking-tighter text-center lg:max-w-[60vw] '>
          Are you an open-source dev working on bitcoin, nostr, or other decentralized tech? Waye helps you maximize impact.
        </h2>

        <div className='pt-[60px] md:pt-[168px] flex flex-col gap-[90px] md:gap-[168px] py-[80px] md:py-[168px]'>
          {SERVICES_SECTION_DATA.map((service) => (
            <ServicesComponent {...service} key={service.cardTitle} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

const ServicesComponent = ({
  src,
  cardTitle,
  cardDescription,
  cardSubText,
  props,
}: {
  src: string;
  cardTitle: string;
  cardDescription: string;
  cardSubText: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div className='flex flex-col md:flex-row gap-8 justify-between items-center' {...props}>
      <section className='w-full md:w-[50%] flex justify-center items-center'>
        <Image src={`/images/${src}.png`} alt={cardTitle} width={550} height={550} className='w-[370px] md:w-[550px] h-full' />
      </section>

      <section className='w-full h-full flex flex-col items-start justify-center justify-self-end gap-4 max-w-[550px] md:w-[50%]'>
        <h2 className='text-[34px] md:text-4xl font-medium'>{cardTitle}</h2>
        <p className='text-lg'>{cardDescription}</p>
        <p className='text-lg font-medium mt-5'>{cardSubText}</p>
      </section>
    </div>
  );
};

export default ServicesSection;

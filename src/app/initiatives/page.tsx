import React from "react";
import Link from "next/link";
import Image from "next/image";
import { genPageMetadata } from "@/app/seo";
import Wrapper from "@/app/components/wrapper";
import { INITIATIVES_SECTION_DATA } from "@/app/data";

export const metadata = genPageMetadata({
  title: "Supporting Builders of Freedom Tech | Explore Waye Initiatives",
  description:
    "Learn about Waye’s initiatives to empower open-source developers with tools, workshops, and community support. Together, we’re building a sustainable decentralized future.",
});

const page = () => {
  return (
    <div className='text-gray-custom-100'>
      <Wrapper className='flex  mx-auto flex-col gap-[20px] items-center justify-center text-center w-full pt-12 md:pt-[144px] pb-9'>
        <p className='text-[40px] md:text-[54px] leading-[160%]'>Built for builders.</p>
        <p className='text-lg leading-[160%] max-w-[650px]'>
          Open-source needs you to keep building. Waye keeps you focused. Get involved, sign up, and let us know what you'd like to see.
        </p>
      </Wrapper>
      <section className='w-full bg-blue-custom-100'>
        <Image
          src='/images/Mountains_initiatives_2-p-2600.png'
          width={3200}
          height={360}
          alt='mountains footer'
          className='h-[200px] lg:h-full w-full object-cover object-center'
        />
      </section>

      <div className='items-center justify-center mx-auto w-full text-black bg-gray-custom-100'>
        <Wrapper>
          <div className='pt-[60px] pb-[114px] max-w-[936px] mx-auto flex flex-col gap-10 md:gap-[60px]'>
            {INITIATIVES_SECTION_DATA.map((item) => (
              <InitiativesCard key={item.title} {...item} props={{ ...item.props }} />
            ))}
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

const InitiativesCard = ({
  src,
  title,
  description,
  infoText,
  advertText,
  linkText,
  href,
  props,
}: {
  src: string;
  title: string;
  description: string;
  infoText?: string;
  advertText?: string;
  linkText?: string;
  href: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div
      className='flex flex-col md:flex-row items-start gap-4 bg-blue-custom-500 border-2 border-black rounded min-h-[333.8px] p-5 pb-14 md:p-10 md:pb-20'
      {...props}
    >
      <section className='w-full'>
        <Image src={src} alt={title} height={250} width={250} className='h-full w-full max-w-[425px] sm:h-[250px] sm:w-[250px]' />
      </section>

      <section className='flex flex-col items-start gap-[15px] text-lg leading-[160%] text-black'>
        <p className='text-[28px] leading-[160%] font-medium'>{title}</p>
        <p>{description}</p>
        {infoText && <p>{infoText}</p>}
        {advertText && <p className='font-medium'>{advertText}</p>}
        {href.length ? (
          <Link href={href} className='flex items-center gap-2'>
            <span className='underline-offset-8 underline'>{linkText}</span>
            <span className='text-blue-custom-100'>→</span>
          </Link>
        ) : null}
      </section>
    </div>
  );
};

export default page;

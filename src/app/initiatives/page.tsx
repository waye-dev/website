import React from "react";
import Image from "next/image";
import { genPageMetadata } from "@/app/seo";
import InitiativesSection from "@/app/components/initiatives-section/initiatives-section";

export const metadata = genPageMetadata({
  title: "Initiatives @ Waye",
  description:
    "Learn about Waye’s initiatives to empower open-source developers with tools, workshops, and community support. Together, we’re building a sustainable decentralized future.",
  url: "https://waye.dev/initiatives",
});

const page = () => {
  return (
    <div className='text-gray-custom-100'>
      <section className='w-full bg-blue-custom-100 pt-[72px]'>
        <Image
          src='/images/Mountains_initiatives_2-p-2600.png'
          width={3200}
          height={360}
          alt='mountains footer'
          className='h-[200px] lg:h-full w-full object-cover object-center'
        />
      </section>

      <InitiativesSection />
    </div>
  );
};

export default page;

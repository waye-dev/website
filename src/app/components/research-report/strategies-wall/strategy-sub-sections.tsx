import React from "react";

export const StrategySubSection = ({ title, description }: { title: string; description: string | React.ReactNode }) => {
  return (
    <section className='flex flex-col gap-4'>
      <h5 className='font-josefinSans font-bold text-xl uppercase'>{title}</h5>
      <section className='font-inter font-normal'>{description}</section>
    </section>
  );
};

export const StrategySubSectionWithList = ({ title, description }: { title: string; description: string[] }) => {
  return (
    <section className='flex flex-col gap-4'>
      <h5 className='font-josefinSans font-bold text-xl uppercase'>{title}</h5>
      <ul className='font-inter font-normal list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

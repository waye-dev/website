import { DemographicsMap } from "../../_components/map-demographics";

export const Demographics = () => {
  return (
    <div className='flex flex-col gap-20 items-center'>
      <h5 className='text-lg md:text-xl lg:text-2xl leading-[120%] font-inknutAntiqua font-bold text-center'>Demographics at a glance</h5>

      <div className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center h-full'>
        <section className='flex flex-col sm:gap-12 gap-8 sm:text-xl text-lg justify-between h-full lg:max-w-[415px] px-4 sm:px-0'>
          <li>We interviewed participants from 10+ countries, spanning 5 continents.</li>
          <li>However, over half of our interviewees came from North America and Europe.</li>
          <li>Locations were withheld by some participants.</li>
        </section>

        <DemographicsMap />
      </div>
    </div>
  );
};

import { DemographicsMap } from "../../_components/map-demographics";
import { SimpleShareButton } from "@/app/components/share-mode/simple-share-button";

export const Demographics = () => {
  return (
    <div className='flex flex-col gap-20'>
      <h5 className='text-xl md:text-2xl lg:text-3xl leading-[120%] font-inknutAntiqua font-bold text-center'>Demographics at a glance</h5>

      <div className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center h-full'>
        <section className='flex flex-col gap-12 text-xl justify-between h-full lg:max-w-[415px]'>
          <p>We interviewed participants from 10+ countries, spanning 5 continents.</p>
          <p>However, over half of our interviewees came from North America and Europe.</p>
          <p>Two participants chose not to disclose their location. <SimpleShareButton shareId="sustainability-challenges" /></p>
        </section>

        <DemographicsMap />
      </div>
    </div>
  );
};

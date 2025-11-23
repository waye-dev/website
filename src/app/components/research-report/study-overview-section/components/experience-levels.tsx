import Image from "next/image";

const experienceLevels = [
  {
    title: "New contributors (<3 years)",
    image: "/svgs/junior-developer.svg",
    description: "dominate at 42.3%, indicating healthy ecosystem growth.",
    width: 260,
    height: 250,
  },
  {
    title: "Mid-level developers (3-6 years)",
    image: "/svgs/mid-level-developer.svg",
    description: "are evenly distributed, suggesting no clear specialization pathway.",
    width: 260,
    height: 250,
  },
  {
    title: "Senior developers (6+ years)",
    image: "/svgs/senior-developer.svg",
    description: "specialize in infrastructure and applications, not protocol work.",
    width: 260,
    height: 250,
  },
];

export const ExperienceLevels = () => {
  return (
    <div className='flex flex-col gap-20 py-24'>
      <h5 className='text-xl md:text-2xl lg:text-3xl leading-[120%] font-inknutAntiqua text-center'>OSS experience levels</h5>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {experienceLevels.map((level) => (
          <div key={level.title} className='flex flex-col gap-4 items-center'>
            <div className='max-w-[406px] max-h-[316px] w-full h-full flex items-center justify-center'>
              <Image src={level.image} alt={level.title} width={level.width} height={level.height} />
            </div>

            <div className='text-center sm:text-left px-4 sm:px-0'>
              <p className='text-lg font-bold'>{level.title}</p>
              <p className='text-base'>{level.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

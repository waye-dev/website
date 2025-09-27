import Image from "next/image";
import { useMediaQuery } from "@/hooks/window-dimensions";
import ParadoxVisualization from "@/app/components/research-report/_components/nav-paradoxes-oss/index";

export const TopLevelAnalysis = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className='flex flex-col gap-14'>
      <section className='flex flex-col gap-6 items-center max-w-[731px] mx-auto'>
        <h1 className='text-xl md:text-2xl leading-[120%]  font-inknutAntiqua font-light text-center'>Top Level Analysis</h1>
        <h1 className='text-[30px] md:text-3xl leading-[140%]  font-inknutAntiqua font-normal text-center'>
          Navigating the paradoxes of OSS freedom tech development
        </h1>
      </section>

      <section className='flex flex-col gap-4 text-lg'>
        <p>
          Before starting with the open interviews, we asked participants to rate on a scale between 1 and 10 how close they saw themselves – in their
          roles, their work processes and environment, and their projects’ organizational structures – in relation to two opposite terms (where 1 is
          the closest to the first term, and 10 is closest to the second term).
        </p>

        <p>Here are the results, highlighting common patterns and strongest polarizations.</p>
      </section>

      <ParadoxVisualization />

      {/* experience the paradoxies section */}
      <div className='flex flex-col gap-12 py-24'>
        <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-inknutAntiqua font-bold'>Experience the paradoxies</h5>

        <div className='grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-12 h-fit'>
          <Image
            src={isMobile ? "/svgs/experience-paradox-mobile.svg" : "/svgs/experience-paradox-desktop.svg"}
            alt='experience paradox desktop'
            width={isMobile ? 1291 : 1291}
            height={isMobile ? 600 : 369}
            className='w-full h-fit max-h-[800px]'
          />

          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-fit'>
            {experienceLevels.map((level) => (
              <div key={level.title} className='flex flex-col gap-4 items-center'>
                <div className='w-full h-full flex items-center justify-center'>
                  <Image
                    src={level.image}
                    alt={level.title}
                    width={level.width}
                    height={level.height}
                    className='w-full h-fit max-w-[406px] max-h-[190px] md:max-h-[316px]'
                  />
                </div>

                <section>
                  <p className='text-lg font-bold'>{level.title}</p>
                  <p className='text-base italic'>{level.description}</p>
                </section>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* core findings section */}
      <div className='flex flex-col gap-12 py-24'>
        <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-inknutAntiqua text-center'>
          Core findings: the tyranny of permissionlessness
        </h5>

        <section className='flex flex-col gap-8 text-lg'>
          <p>
            The paradoxes revealed in our opening exercise — between commons and commerce, sustainability and experience, autonomy and isolation — all
            point to a deeper structural tension, revealed by our interviews.
          </p>
          <strong>{`Permissionlessness — the defining principle of Bitcoin and the broader OSS ecosystem — becomes oppressive when applied to human work systems.`}</strong>
          <p>
            We call this <strong>“the tyranny of permissionlessness.”</strong>
          </p>
        </section>

        <section className='w-full h-full flex items-center justify-end pr-32'>
          <Image src='/svgs/permissionless-woman.svg' alt='permissionless woman' width={398} height={448} />
        </section>
      </div>
    </div>
  );
};

const experienceLevels = [
  {
    title: "Institutional orientation",
    description: "Public goods focus",
    image: "/svgs/new-contributor.svg",
    width: 260,
    height: 250,
  },
  {
    title: "Work Sustainability",
    description: "Generally sustainable",
    image: "/svgs/medium-contributor.svg",
    width: 260,
    height: 250,
  },
  {
    title: "Work rhythm",
    description: "Routine focus",
    image: "/svgs/experienced-contributor.svg",
    width: 260,
    height: 250,
  },
];

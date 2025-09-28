import Image from "next/image";
import { useMediaQuery } from "@/hooks/window-dimensions";
import ParadoxVisualization from "@/app/components/research-report/_components/nav-paradoxes-oss/index";
import { ExperienceParadoxes } from "./_components/experience-the-paradoxes";

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
      {/* {TOFIX: NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.} */}
      
      <ExperienceParadoxes data={{
        new: {
          cards: [
            {
              title: "Public Goods Focus",
              subtitle: "Institutional Orientation",
              image: "/svgs/experience-the-paradoxes/new/Group 114.svg"
            },
            {
              title: "Work Sustainability",
              subtitle: "Generally Sustainable",
              image: "/svgs/experience-the-paradoxes/new/Group 145.svg"
            },
            {
              title: "Routine Focus",
              subtitle: "Work Rhythm",
              image: "/svgs/experience-the-paradoxes/new/Group 151.svg"
            }
          ],
          avatar: "/svgs/experience-the-paradoxes/new-avatar.svg",
          alt: "New Contributor",
          label1: "New",
          label2: "Contributor",
          labelOffset: { x: 0, y: 40 }
        },
        mid: {
          cards: [
            {
              title: "Public Goods Focus",
              subtitle: "Institutional Orientation",
              image: "/svgs/experience-the-paradoxes/mid/Group 114.svg"
            },
            {
              title: "Somewhat Sustainable",
              subtitle: "Work Sustainability",
              image: "/svgs/experience-the-paradoxes/mid/Group 184.svg"
            },
            {
              title: "Sprint-Oriented",
              subtitle: "Work Rhythm",
              image: "/svgs/experience-the-paradoxes/mid/Group 185.svg"
            }
          ],
          avatar: "/svgs/experience-the-paradoxes/mid-avatar.svg",
          alt: "Medium Experience",
          label1: "Medium",
          label2: "Experience",
          labelOffset: { x: -40, y: -25 }
        },
        expert: {
          cards: [
            {
              title: "Balancing Commons & Commercial",
              subtitle: "Institutional Orientation",
              image: "/svgs/experience-the-paradoxes/expert/Group 115.svg"
            },
            {
              title: "Somewhat Sustainable",
              subtitle: "Work Sustainability",
              image: "/svgs/experience-the-paradoxes/expert/Group 203.svg"
            },
            {
              title: "Sprint-Oriented",
              subtitle: "Work Rhythm",
              image: "/svgs/experience-the-paradoxes/expert/Group 204.svg"
            }
          ],
          avatar: "/svgs/experience-the-paradoxes/expert-avatar.svg",
          alt: "Experienced Contributor",
          label1: "Experienced",
          label2: "Contributor",
          labelOffset: { x: 0, y: 0 }
        }
      }} />

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

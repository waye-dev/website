import Image from "next/image";
import { useMediaQuery } from "@/hooks/window-dimensions";
import ParadoxVisualization from "@/app/components/research-report/_components/nav-paradoxes-oss/index";
import { ExperienceParadoxes } from "./_components/experience-the-paradoxes";
import { SimpleShareButton } from "@/app/components/share-mode/simple-share-button";
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';
import { SectionTitleDescription } from "./section-title-description";

export const TopLevelAnalysis = () => {
  // const isMobile = useMediaQuery("(max-width: 768px)");

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
          roles, their work processes and environment, and their projects' organizational structures – in relation to two opposite terms (where 1 is
          the closest to the first term, and 10 is closest to the second term).
        </p>

        <p>Here are the results, highlighting common patterns and strongest polarizations. While overall contributors find their roles somewhat sustainable, a clear pattern emerged: the more the experience, the more unsustainable one's work process becomes. <SimpleShareButton shareId={SHAREABLE_description_IDS.QUOTE_15} /></p>
      </section>
      <ParadoxVisualization />
      {/* {TOFIX: NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.} */}
      
      <h2 className="text-2xl leading-[120%] font-inknutAntiqua font-medium text-center">
      Core tensions
      </h2>

      <div className="flex flex-col gap-8 mt-12 items-start">
        <SectionTitleDescription title="The commons/commercial paradox:">
          Nearly all participants agree on the commons-based, 
          public-goods orientation of their projects, but with experience contributors recognize 
          the commercial aspects of their work. As one contributor put it:
        </SectionTitleDescription>

        <div className="w-full flex flex-col gap-2 p-12 text-center items-center text-lg font-inknutAntiqua">
          <p> "our personal goals are completely non profit, but we exist in the context</p>
          <p> of an almost exclusively for profit space." </p>
        </div>

        <SectionTitleDescription title="The sustainability paradox:">
          While overall contributors find their roles somewhat sustainable, a clear pattern emerged: the more the experience, the more unsustainable one's work process becomes. This is particularly acute for contributors working on self-directed projects.
        </SectionTitleDescription>

        <SectionTitleDescription title="Same future vision, opposite present rhythms:">
          All contributors have a strong future orientation for their projects, yet their daily work patterns diverge sharply with experience. Sprint vs. routine orientation shows highest disagreement (SD = 3.2), with newer contributors being more routine-oriented, while more experienced contributors are more sprint oriented.
        </SectionTitleDescription>
      </div>

      <h2 className="text-2xl leading-[120%] font-inknutAntiqua font-medium text-center">
        Experience evolution patterns
      </h2>

      <div className="flex flex-col gap-8 items-start">
        <SectionTitleDescription title="Role identity varies with project focus and experience:" inline>
          Core devs see themselves more as contributors, while app developers as maintainers. More experienced devs embrace the hacker identity, while newcomers see their roles as more professional - especially those working on core infrastructure.
        </SectionTitleDescription>

        <SectionTitleDescription title="Work motivation evolution:" inline>
          In their work, contributors emphasize productivity as much as fun. The more the experience, the more work becomes about having fun. As an experienced dev observed, "being productive is fun."
        </SectionTitleDescription>

        <SectionTitleDescription title="Idealism to pragmatism:" inline>
          New contributors are most long-term oriented, and have strongest public goods focus. As contributors gain experience, they become more realistic about openness, time horizons, and commercial realities.
        </SectionTitleDescription>

        <SectionTitleDescription title="The care paradox:" inline>
          New and expert contributors focus primarily on code, while the 3-6 year group is more community-oriented, bridging technical and social work. Expert contributors also report the highest scores on caring for others (collaborators, community, people outside work), suggesting they channel community care through technical development, which may contribute to their unsustainable work patterns.
        </SectionTitleDescription>
      </div>

      <ExperienceParadoxes data={{
        new: {
          cards: [
            {
              title: "Public Goods Focus",
              subtitle: "Institutional Orientation",
              image: "/svgs/experience-the-paradoxes/new/Group 114.svg"
            },
            {
              title: "Generally Sustainable",
              subtitle: "Work Sustainability",
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
              title: "Depends on Context & Tasks",
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

     
    </div>
  );
};
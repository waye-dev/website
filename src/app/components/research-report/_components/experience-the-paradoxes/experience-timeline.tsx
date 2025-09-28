import Image from "next/image";
import { RefObject } from "react";
import { ExperienceParadoxesData, ExperienceStage } from "./types";
import { ExperienceAvatar } from "./experience-avatar";
import { ExperienceLabels } from "./experience-labels";

interface ExperienceTimelineProps {
  lineRef: RefObject<HTMLDivElement | null>;
  avatarRef: RefObject<HTMLDivElement | null>;
  data: ExperienceParadoxesData;
  currentStage: ExperienceStage;
  currentLevel: any;
}

export const ExperienceTimeline = ({ 
  lineRef, 
  avatarRef, 
  data, 
  currentStage, 
  currentLevel 
}: ExperienceTimelineProps) => {
  return (
    <div ref={lineRef} className="w-full max-w-7xl relative">
      <Image
        src="/svgs/experience-the-paradoxes/line.svg"
        alt="horizontal line"
        width={800}
        height={4}
        className="w-full h-auto"
      />

      <ExperienceLabels data={data} currentStage={currentStage} />

      <ExperienceAvatar 
        avatarRef={avatarRef}
        avatar={currentLevel.avatar}
        alt={currentLevel.alt}
      />
    </div>
  );
};

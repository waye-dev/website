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
  progress?: number;
}

export const ExperienceTimeline = ({ 
  lineRef, 
  avatarRef, 
  data, 
  currentStage, 
  currentLevel,
  progress = 0
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

      <ExperienceLabels data={data} progress={progress} />

      <ExperienceAvatar 
        avatarRef={avatarRef}
        avatar={currentLevel.avatar}
        alt={currentLevel.alt}
      />
    </div>
  );
};

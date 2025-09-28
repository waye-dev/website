import Image from "next/image";
import { RefObject } from "react";
import { ExperienceParadoxesData } from "./types";
import { ExperienceAvatar } from "./experience-avatar";
import { ExperienceLabels } from "./experience-labels";
import { MobileTimelineLine, avatarHeightPresets } from "./mobile-timeline-line";

interface ExperienceTimelineProps {
  lineRef: RefObject<HTMLDivElement | null>;
  avatarRef: RefObject<HTMLDivElement | null>;
  mobileAvatarRef: RefObject<HTMLDivElement | null>;
  mobileAvatarNewRef: RefObject<HTMLDivElement | null>;
  mobileAvatarMidRef: RefObject<HTMLDivElement | null>;
  mobileAvatarExpertRef: RefObject<HTMLDivElement | null>;
  data: ExperienceParadoxesData;
  currentLevel: any;
  progress?: number;
  scrollDirection?: 'up' | 'down';
  mobileAvatarHeight?: number;
}

export const ExperienceTimeline = ({
  lineRef,
  avatarRef,
  mobileAvatarRef,
  mobileAvatarNewRef,
  mobileAvatarMidRef,
  mobileAvatarExpertRef,
  data,
  currentLevel,
  progress = 0,
  scrollDirection = 'down',
  mobileAvatarHeight = avatarHeightPresets.default
}: ExperienceTimelineProps) => {
  return (
    <>
      <div ref={lineRef} className="hidden md:block w-full max-w-7xl relative">
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

      <div className="md:hidden relative w-full h-80 pt-32">
        <MobileTimelineLine
          progress={progress}
          scrollDirection={scrollDirection}
          avatarHeight={mobileAvatarHeight}
        />

        <div className="absolute left-0 top-0 h-full">
          {(['new', 'mid', 'expert'] as const).map((stage, index) => {
            const levelData = data[stage];
            const yPositions = [110, 180, 250];
            const isActive = progress >= (index * 0.4) && progress < ((index + 1) * 0.4) || (index === 2 && progress >= 0.8);

            return (
              <div
                key={stage}
                className="absolute"
                style={{
                  top: `${yPositions[index]}px`,
                  transform: 'translateY(-50%)',
                  opacity: isActive ? 1 : 0.4,
                  right: '60px'
                }}
              >
                <div className="text-right">
                  <p className="text-xs font-josefinSans font-bold uppercase tracking-wide text-gray-800 leading-tight">
                    {levelData.label1}
                  </p>
                  <p className="text-xs font-josefinSans font-bold uppercase tracking-wide text-gray-800 leading-tight">
                    {levelData.label2}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute" style={{ left: '-10px', top: '-85px' }}>
          <ExperienceAvatar
            avatarRef={mobileAvatarExpertRef}
            avatar={data.expert.avatar}
            alt={data.expert.alt}
            style={{ zIndex: 13 }}
          />
          <ExperienceAvatar
            avatarRef={mobileAvatarMidRef}
            avatar={data.mid.avatar}
            alt={data.mid.alt}
            style={{ zIndex: 14 }}
          />
          <ExperienceAvatar
            avatarRef={mobileAvatarNewRef}
            avatar={data.new.avatar}
            alt={data.new.alt}
            style={{ zIndex: 15 }}
          />
        </div>
      </div>
    </>
  );
};

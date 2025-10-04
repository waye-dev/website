"use client"

import { ExperienceParadoxesData, ExperienceStage } from "./types";

interface ExperienceLabelsProps {
  data: ExperienceParadoxesData;
  progress?: number;
}

export const ExperienceLabels = ({ data, progress = 0 }: ExperienceLabelsProps) => {
  const getOpacityForStage = (stage: ExperienceStage) => {
    if (stage === 'new') return progress < 0.4 ? 1 : 0.4;
    if (stage === 'mid') return progress >= 0.4 && progress < 0.8 ? 1 : 0.4;
    if (stage === 'expert') return progress >= 0.8 ? 1 : 0.4;
    return 0.4;
  };

  return (
    <div className="absolute top-16 left-0 w-full h-16">
      {(['new', 'mid', 'expert'] as const).map((stage, index) => {
        const levelData = data[stage];
        const positions = ['left-0', 'left-1/2', 'right-0'];
        const getTransform = (idx: number) => {
          const offsetX = levelData.labelOffset.x;
          const offsetY = levelData.labelOffset.y;
          if (idx === 0) return `translate(calc(-50% + ${offsetX}px), ${offsetY}px)`;
          if (idx === 1) return `translate(calc(-50% + ${offsetX}px), ${offsetY}px)`;
          return `translate(calc(50% + ${offsetX}px), ${offsetY}px)`;
        };

        return (
          <div
            key={stage}
            className={`absolute ${positions[index]}`}
            style={{
              opacity: getOpacityForStage(stage),
              transform: getTransform(index),
            }}
          >
            <div className="text-center">
              <p className="text-sm font-josefinSans font-bold uppercase tracking-wide text-gray-800 leading-tight">
                {levelData.label1}
              </p>
              <p className="text-sm font-josefinSans font-bold uppercase tracking-wide text-gray-800 leading-tight">
                {levelData.label2}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

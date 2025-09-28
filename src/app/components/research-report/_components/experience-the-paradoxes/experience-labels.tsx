import { ExperienceParadoxesData, ExperienceStage } from "./types";

interface ExperienceLabelsProps {
  data: ExperienceParadoxesData;
  currentStage: ExperienceStage;
}

export const ExperienceLabels = ({ data, currentStage }: ExperienceLabelsProps) => {
  return (
    <div className="absolute top-16 left-0 w-full h-16">
      {(['new', 'mid', 'expert'] as const).map((stage, index) => {
        const levelData = data[stage];
        const positions = ['left-0', 'left-1/2', 'right-0'];
        const transforms = [
          'translate(calc(-50% + var(--offset-x)), var(--offset-y))',
          'translate(calc(-50% + var(--offset-x)), var(--offset-y))',
          'translate(calc(50% + var(--offset-x)), var(--offset-y))'
        ];

        return (
          <div
            key={stage}
            className={`absolute ${positions[index]}`}
            style={{
              opacity: currentStage === stage ? 1 : 0.4,
              transform: transforms[index],
              '--offset-x': `${levelData.labelOffset.x}px`,
              '--offset-y': `${levelData.labelOffset.y}px`,
            } as React.CSSProperties}
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

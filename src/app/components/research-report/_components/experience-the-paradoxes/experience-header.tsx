interface ExperienceHeaderProps {
  title: string;
}

export const ExperienceHeader = ({ title }: ExperienceHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-8 mb-16">
      <h2 className="text-[28px] font-inknutAntiqua font-bold text-center pb-24">
        {title}
      </h2>
    </div>
  );
};

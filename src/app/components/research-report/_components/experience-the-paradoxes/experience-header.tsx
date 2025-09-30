interface ExperienceHeaderProps {
  title: string;
}

export const ExperienceHeader = ({ title }: ExperienceHeaderProps) => {
  return (
    <div className="flex items-center mb-36 sm:mb-32">
      <h2 className="text-[22px] sm:text-[28px] font-inknutAntiqua font-bold text-center md:pb-24">
        {title}
      </h2>
    </div>
  );
};

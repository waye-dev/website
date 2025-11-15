interface SectionTitleDescriptionProps {
  title: string;
  children: React.ReactNode;
  inline?: boolean;
}

export const SectionTitleDescription = ({ title, children, inline = false }: SectionTitleDescriptionProps) => {
  if (inline) {
    return (
      <p>
        <span className="font-semibold uppercase">{title}</span> {children}
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="uppercase font-semibold">{title}</p>
      <p>{children}</p>
    </div>
  );
};


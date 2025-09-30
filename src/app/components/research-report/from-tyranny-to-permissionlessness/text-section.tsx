import { ReactNode } from 'react';

interface TextSectionProps {
  children: ReactNode;
  isActive: boolean;
  style?: React.CSSProperties;
}

export const TextSection = ({ children, isActive, style }: TextSectionProps) => {
  return (
    <div
      className="absolute top-1/3 left-1/2 transition-all duration-500 ease-out w-full max-w-3xl px-6 text-center"
      style={{
        ...style,
        transform: `translate(-50%, -50%) ${style?.transform || ''}`,
      }}
    >
      {children}
    </div>
  );
};
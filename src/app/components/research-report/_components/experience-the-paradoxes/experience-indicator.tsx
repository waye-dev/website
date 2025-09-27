import Image from "next/image";

interface ExperienceIndicatorProps {
  avatar: string;
  alt: string;
  label1: string;
  label2: string;
  isActive: boolean;
  size?: 'small' | 'large';
}

export const ExperienceIndicator = ({ avatar, alt, label1, label2, isActive, size = 'small' }: ExperienceIndicatorProps) => {
  const avatarSize = size === 'large' ? 'w-24 h-24' : 'w-16 h-16';
  const imageSize = size === 'large' ? 96 : 64;
  const textSize = size === 'large' ? 'text-base' : 'text-xs';

  return (
    <div className={`flex flex-col items-center transition-all duration-300 ${
      isActive ? 'opacity-100' : 'opacity-80'
    }`}>
      <div className={`${avatarSize} mb-3 transition-transform duration-300 ${
        isActive ? 'scale-110' : 'scale-100'
      }`}>
        <Image
          src={avatar}
          alt={alt}
          width={imageSize}
          height={imageSize}
          className="w-full h-full object-contain drop-shadow-lg"
          priority
        />
      </div>
      <div className="text-center">
        <p className={`${textSize} font-josefinSans font-bold uppercase tracking-wide text-gray-800 leading-tight`}>
          {label1}
        </p>
        <p className={`${textSize} font-josefinSans font-bold uppercase tracking-wide text-gray-800 leading-tight`}>
          {label2}
        </p>
      </div>
    </div>
  );
};
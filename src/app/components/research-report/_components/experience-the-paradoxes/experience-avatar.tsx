import Image from "next/image";
import { RefObject } from "react";

interface ExperienceAvatarProps {
  avatarRef: RefObject<HTMLDivElement | null>;
  avatar: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ExperienceAvatar = ({ avatarRef, avatar, alt, className = "", style = {} }: ExperienceAvatarProps) => {
  return (
    <div className={`absolute top-0 left-0 w-full h-40 overflow-visible ${className}`}>
      <div
        ref={avatarRef}
        className="absolute w-32 h-32 will-change-transform"
        style={{
          zIndex: 10,
          ...style
        }}
      >
        <div className="w-32 h-32 mb-3">
          <Image
            src={avatar}
            alt={alt}
            width={128}
            height={128}
            className="w-full h-full object-contain drop-shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

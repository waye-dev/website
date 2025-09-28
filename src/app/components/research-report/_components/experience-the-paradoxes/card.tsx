import Image from "next/image";
import { getAvatarColor } from "./utils";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  currentStage?: 'new' | 'mid' | 'expert';
}

export const Card = ({ title, subtitle, image, alt, currentStage = 'new' }: CardProps) => {
  const avatarColor = getAvatarColor(currentStage);
  return (
    <>
      <div
        className="hidden md:block bg-white rounded-xl p-6 transition-all duration-500 ease-out h-[22rem] w-72 relative"
        style={{
          boxShadow: `5px 6px 17px ${avatarColor}39`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl" />

        <div className="relative z-10 flex flex-col items-center gap-4 h-full">
          <div className="w-full h-48 flex items-center justify-center flex-1">
            <Image
              src={image}
              alt={alt}
              width={200}
              height={180}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="text-center flex flex-col justify-center">
            <p className="text-md text-gray-600 font-light leading-relaxed font-josefinSans">{subtitle}</p>
            <h3 className="text-lg font-300 text-gray-800 font-inknutAntiqua">{title}</h3>
          </div>
        </div>

        <div className="absolute inset-0 rounded-xl border border-gray-200 pointer-events-none" />
      </div>

      <div className="md:hidden flex flex-col items-start pb-2 w-full min-h-[120px]">
        <div className="w-32 h-32 flex-shrink-0">
          <Image
            src={image}
            alt={alt}
            width={80}
            height={80}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="flex-1 min-w-0 max-w-[200px]">
          <p className="text-sm text-gray-600 font-light leading-relaxed font-josefinSans">{subtitle}</p>
          <h3 className="text-base text-sm font-300 text-gray-800 font-inknutAntiqua">{title}</h3>
        </div>
      </div>
    </>
  );
};
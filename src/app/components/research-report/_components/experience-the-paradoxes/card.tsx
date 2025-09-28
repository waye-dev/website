import Image from "next/image";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export const Card = ({ title, subtitle, image, alt }: CardProps) => {
  return (
    <div
      className="bg-white rounded-xl shadow-xl p-6 transition-all duration-500 ease-out h-96 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl" />
      
      <div className="relative z-10 flex flex-col items-center gap-4 h-full">
        <div className="w-full h-48 flex items-center justify-center">
          <Image
            src={image}
            alt={alt}
            width={200}
            height={180}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
        <div className="text-center flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{subtitle}</p>
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-xl border border-gray-200 pointer-events-none" />
    </div>
  );
};
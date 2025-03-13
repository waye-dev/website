import Link from "next/link";
import Image from "next/image";

export const InitiativesCard = ({
  src,
  title,
  description,
  infoText,
  advertText,
  linkText,
  href,
  props,
  filterKey,
}: {
  src: string;
  title: string;
  description: string;
  infoText?: string;
  advertText?: string;
  linkText?: string;
  href: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
  filterKey: string;
}) => {
  return (
    <div
      className='flex flex-col md:flex-row items-start gap-4 bg-blue-custom-500 border-2 border-black rounded min-h-[333.8px] p-5 pb-14 md:p-10 md:pb-[70px]'
      {...props}
    >
      <section>
        <Image src={src} alt={title} height={250} width={250} className='h-full w-full max-w-[425px] sm:h-[250px] sm:w-[250px]'/>
      </section>

      <section className='flex flex-col items-start gap-[14px] text-lg leading-[28.8px] text-black'>
        {filterKey && (
          <button className='border border-black rounded-full uppercase text-base leading-[25.2px] py-[4.5px] px-[13px]'>{filterKey}</button>
        )}
        <p className='text-[28px] leading-[160%] font-bold'>{title}</p>
        <p className='font-medium'>{description}</p>
        {infoText && <p>{infoText}</p>}
        {advertText && <p className='font-medium'>{advertText}</p>}
        {href.length ? (
          <Link href={href} target={href.startsWith("http") ? "_blank" : "_self"} className='flex items-center gap-2'>
            <span className='underline-offset-8 underline'>{linkText}</span>
            <span className='text-blue-custom-100'>→</span>
          </Link>
        ) : null}
      </section>
    </div>
  );
};

import Image from "next/image";
import CustomButton from "../custom-button";

export const CTACard = ({
  title,
  description,
  buttonLinks,
  buttonProps,
  underline,
  descriptionProps,
}: {
  title: string;
  description: string | React.JSX.Element;
  buttonLinks?: {
    link: string;
    text: string;
  }[];
  buttonProps?: (React.HtmlHTMLAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>) | undefined;
  underline?: boolean;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
}) => {
  return (
    <div className='flex flex-col gap-[5px] p-5 md:p-[30px] md:pb-[55px] bg-blue-custom-600 rounded-[10px] w-full md:min-w-[400px]'>
      <section>
        <p className={`text-[22px] leading-[160%] font-medium w-full`}>{title}</p>
        <section className={`border-black ${underline ? "border-b" : ""}`}></section>
      </section>
      <p className='text-lg leading-[25.5px] sm:leading-[28.8px]' {...descriptionProps}>
        {description}
      </p>

      {buttonLinks && (
        <section className='flex flex-col md:flex-row gap-[14px] mt-[25px] md:mt-[35px]'>
          {buttonLinks.map((btn, index) => (
            <CustomButton
              key={index}
              href={btn.link}
              props={{
                className:
                  "rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[15px] px-[55px] text-black text-nowrap border-2 border-black flex items-center justify-center md:w-fit",
                target: `${btn.link.startsWith("http") ? "_blank" : "_self"}`,
                ...buttonProps,
              }}
            >
              {btn.text}
            </CustomButton>
          ))}
        </section>
      )}
    </div>
  );
};

export const DetailsCard = (
  {
    intro,
    timeline,
    tldr,
    who,
    location,
    buttonLinks,
  }: {
    intro?: React.JSX.Element;
    timeline: React.JSX.Element;
    tldr: React.JSX.Element;
    who?: React.JSX.Element;
    location?: React.JSX.Element;
    buttonLinks?: {
      link: string;
      text: string;
    }[];
  }
) => {
  return (
    <div className='flex flex-col p-6 sm:p-8 md:p-10 md:pb-[55px] sm:bg-blue-custom-800 rounded-[10px] w-full md:min-w-[400px] border-2 border-black text-lg leading-[160%]'>
      {intro && <div className='mb-4'>{intro}</div>}
      <section className='flex flex-col gap-2'>
        <p className='text-xl sm:text-2xl font-medium'>Timeline</p>
        <p>{timeline}</p>
      </section>

      {location && (
        <section className='flex flex-col gap-2'>
          <p className='text-xl sm:text-2xl font-medium'>Location:</p>
          <p>{location}</p>
        </section>
      )}

      <section className='flex flex-col gap-2 mt-5'>
        <p className='text-xl sm:text-2xl font-medium'>TLDR</p>
        <p>{tldr}</p>
      </section>

      {who && (
        <section className='flex flex-col gap-2'>
          <p className='text-xl sm:text-2xl font-medium'>WHO:</p>
          <p>{who}</p>
        </section>
      )}

      {buttonLinks && (
        <section className='flex flex-col md:flex-row gap-[14px] mt-[25px] md:mt-[35px]'>
          {buttonLinks.map((btn, index) => (
            <CustomButton
              key={index}
              href={btn.link}
              props={{
                className:
                  "rounded-full text-lg leading-[160%] font-medium py-[15px] px-[55px] text-black text-nowrap border-2 border-black flex items-center justify-center md:w-fit",
                target: `${btn.link.startsWith("http") ? "_blank" : "_self"}`,
              }}
            >
              {btn.text}
            </CustomButton>
          ))}
        </section>
      )}
    </div>
  );
};

export const CardHeading = ({ title }: { title: string }) => {
  return (
    <section className='flex flex-col border-b-2 border-b-black pb-2.5 mb-2.5 sm:pb-5 sm:mb-[30px]'>
      <p className='text-xl sm:text-2xl'>{title}</p>
    </section>
  );
};

export const RebootImage = () => {
  return (
    <div className='w-full min-w-0 flex-1 flex justify-end'>
      <Image
        src='/images/mountain-climbers.png'
        priority
        alt='mountain climbers'
        width={900}
        height={552}
        className='w-full h-auto max-w-[900px]'
      />
    </div>
  );
};

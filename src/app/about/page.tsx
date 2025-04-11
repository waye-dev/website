import Image from "next/image";
import Wrapper from "../components/wrapper";
import { ABOUT_SECTION_DATA } from "@/app/data";
import EmailSignup from "../components/email-signup";

function IfImage(src: string, cardTitle: string) {
  if (src === "") {
    return null;
  }

  return (
    <section className='w-full md:w-[50%] flex justify-center items-center'>
      <Image src={`/images/${src}.png`} alt={cardTitle} width={550} height={550} className='w-[370px] md:w-[550px] h-full' />
    </section>
  );
}

const AboutFlexComponent = ({
  src,
  cardTitle,
  cardDescriptionBlocks,
  cardSubText,
  props,
}: {
  src: string;
  cardTitle: string;
  cardDescriptionBlocks: Array<string>;
  cardSubText: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div className='flex flex-col md:flex-row gap-8 items-center' {...props}>
      {IfImage(src, cardTitle)}

      <section className='w-full h-full flex flex-col items-start justify-center justify-self-end gap-4 max-w-[550px] md:w-[50%]'>
        <h2 className='text-[34px] md:text-4xl font-medium'>{cardTitle}</h2>
        {cardDescriptionBlocks.map((block, index) => (
          <p className='text-lg' key={index}>
            {block}
          </p>
        ))}
        <p className='text-lg font-medium mt-5'>{cardSubText}</p>
      </section>
    </div>
  );
};

export default function About() {
  return (
    <div>
      <div className='items-center justify-center mx-auto w-full text-black bg-gray-custom-100'>
        <Wrapper className='flex mx-auto flex-col gap-[20px] items-center justify-center w-full pb-[80px] pt-[80px]'>
          <div className='items-center flex justify-center'>
            <h2 className='text-[34px] md:text-[40px] lg:text-[46px] font-medium leading-[140%] tracking-tighter lg:max-w-[70vw] text-center md:py-10 md:pb-20'>
              Waye offers psycho-social support for people building freedom technology.
            </h2>
          </div>

          <div className='pt-[60px] md:pt-[8px] flex flex-col gap-[90px] md:gap-[48px] py-[80px] md:py-[168px] w-full'>
            {ABOUT_SECTION_DATA.map((service) => (
              <AboutFlexComponent {...service} key={service.cardTitle} />
            ))}
          </div>
        </Wrapper>

        <EmailSignup />
      </div>
    </div>
  );
}

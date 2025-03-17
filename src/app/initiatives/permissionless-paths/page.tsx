import React from "react";
import Wrapper from "@/app/components/wrapper";
import { CardHeading, CTACard } from "@/app/components/os-reboot/cards";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const buttonLinks = [
    {
      link: "https://docs.google.com/forms/d/e/1FAIpQLSf5RKqNV0I_zEekk1vxAToizH2OU1JR8AShfxQeqJVGRiTuCQ/viewform",
      text: "Schedule an interview",
    },
  ];

  return (
    <div className='bg-gray-custom-100 text-black pt-10 md:pt-[108px] xl:pt-[148px] pb-20 md:pb-[200px] h-full'>
      <Wrapper>
        <div className='max-w-[1030px] mx-auto rounded-[20px] w-full h-full border border-black flex flex-col  items-start gap-[30px] sm:gap-0 p-4 py-6 sm:p-10 bg-blue-custom-700'>
          <section className='w-full'>
            <section className='flex flex-col gap-2 md:gap-1'>
              <p className='text-[40px] md:text-[54px] leading-[120%] md:leading-[75.6px]'>Permissionless Paths</p>
              <CardHeading title='Ethnographic research: mapping the minds of FOSS devs' />
            </section>
            <section className='flex flex-col md:flex-row gap-4 md:gap-8 pt-3 sm:pt-0'>
              <Image
                src='/images/action-intention.png'
                alt=''
                width={706}
                height={721}
                className='w-full md:w-[50%] h-full max-w-[50%]'
              />
              <div className='flex text-lg leading-[28.8px] flex-col gap-[27px]'>
				<p>
					  Working in a decentralized development ecosystem takes a minute to figure out. Unlike in the education system or traditional workplaces, there’s no clear path of what you should work on, how you should work on it, and how the heck you get community buy-in.
                </p>
				<p>
					  This pilot study will strengthen our shared understanding of the motivations and challenges of open source devs. What drives productivity vs burnout?
                </p>
                <p>
                  <span className='font-semibold'> We are looking to interview FOSS devs who have contributed for 1+ years. </span>
					  Sound like you? Help our community learn:
				</p>
				<p>
                <span className='underline'>
                  <Link
                    href='https://docs.google.com/forms/d/e/1FAIpQLSf5RKqNV0I_zEekk1vxAToizH2OU1JR8AShfxQeqJVGRiTuCQ/viewform?pli=1'
                    target='_blank'
                  >
                     Schedule an interview.
					  </Link>
						  </span>
                </p>
                <p>
					Through in-depth qualitative interviews, the study aims to gain an understanding of open source developers’ work environment, with a focus on motivations, expectations, work habits, responsibilities, and challenges (churn, constraints).
                </p>
              </div>
            </section>
          </section>

          <section className='w-full pt-[1.875rem] md:pt-10'>
            <CardHeading title='Themes:' />
            <section className='flex text-lg leading-[28.8px] flex-col gap-[27px] pt-3 sm:pt-0'>

              <section className='text-lg leading-[28.8px]'>
                <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                  <li>
                    <span className='font-semibold'>What does burnout actually look like in open source?</span> There’s no HR, no performance reviews,
                    no off- the-shelf solutions—so how do developers even talk about it? How do they identify it?
                  </li>
                  <li>
                    <span className='font-semibold'>How do solo open-source developers manage their time, energy, and focus?</span> When you’re
                    juggling deep work, community expectations, and financial uncertainty, how do you stay productive?
                  </li>
                  <li>
                    <span className='font-semibold'>What tools and systems help—or fail—when it comes to sustaining long-term contributions?</span>{" "}
                    What’s missing, and what should change?
                  </li>
                </ul>
              </section>

            </section>
          </section>

          <section className='w-full pt-[1.875rem] md:pt-10	'>
            <CardHeading title='Up Next' />
            <section className='flex text-lg leading-[28.8px] flex-col gap-[15px] pt-3 sm:pt-0'>
              <p>
			    Sign up for our mailing list to stay posted.
			  </p>
			  <p>
			    Open source devs- an anonymous interview will go a long way. Understanding the decentralized development ecosystem will help us improve our day-to-day lives and work environments.
			  </p>
            </section>
          </section>

          <section className='pt-[30px] sm:pt-10 w-full'>
            <CTACard
              title='Ready to interview?'
              description='FOSS devs with 1+ years of experience: click below'
              buttonLinks={buttonLinks}
              buttonProps={{
                className:
                  "rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[15px] px-[72px] underline text-black text-nowrap border-2 border-black flex items-center justify-center md:w-fit",
              }}
            />
          </section>

          <section className='flex flex-col gap-[9px] pt-[40px] pb-[30px] sm:pb-[90px]'>
            <p className='text-xl leading-[160%] font-medium'>Questions?</p>
            <div className='text-lg leading-[160%]'>
              <p>Reach out to us.</p>
              <Link href='mailto:waye.dev@gmail.com' className='flex items-center gap-2'>
                <span className='underline-offset-8 underline'>waye.dev@gmail.com</span>
                <span className='text-blue-custom-100'>→</span>
              </Link>
            </div>
          </section>
        </div>
      </Wrapper>
    </div>
  );
};

export default page;

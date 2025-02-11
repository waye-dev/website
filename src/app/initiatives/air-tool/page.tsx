import React from "react";
import Link from "next/link";
import Wrapper from "@/app/components/wrapper";
import { CardHeading, CTACard } from "@/app/components/os-reboot/cards";
import Image from "next/image";

const page = () => {
  const buttonLinks = [
    {
      link: "https://docs.google.com/document/d/17iFCmubO37MeREXWlvjqDFmjx3n9vWTkfJp-ZLy1mDo/edit?tab=t.0",
      text: "Get the Tool",
    },
  ];

  return (
    <div className='bg-gray-custom-100 text-black pt-10 md:pt-[108px] xl:pt-[148px] pb-20 md:pb-[200px] h-full'>
      <Wrapper>
        <div className='max-w-[1030px] mx-auto rounded-[20px] w-full h-full border border-black flex flex-col  items-start gap-[30px] sm:gap-0 p-4 py-6 sm:p-10 bg-blue-custom-700'>
          <section className='w-full'>
            <section className='flex flex-col gap-2 md:gap-1'>
              <p className='text-[40px] md:text-[54px] leading-[120%] md:leading-[75.6px]'>AIR Tool </p>
              <CardHeading title='Actions, Intentions, and Reflections tool' />
            </section>

            <section className='grid grid-cols-1 md:grid-cols-2 text-lg leading-[28.8px] gap-[27px] pt-3 sm:pt-7'>
              <div className='flex flex-col gap-7'>
                <section className='flex flex-col gap-2 max-w-[438px]'>
                  <h5 className='text-lg leading-[28.2px] font-semibold underline underline-offset-2'>TL;DR:</h5>
                  <p className='text-lg leading-[25.2px]'>
                    Build a stronger feedback loop with your work using this structured framework. Get a bird’s-eye view to ensure you're working
                    effectively.
                  </p>
                </section>
                <section className='flex flex-col gap-2 max-w-[438px]'>
                  <h5 className='text-lg leading-[28.2px] font-semibold underline underline-offset-2'>CONSISTENCY IS KEY:</h5>
                  <p className='text-lg leading-[25.2px]'>
                    Find a cadence that works for you—weekly, biweekly, or monthly—and stick to it. Just 30 minutes a month can seriously level you
                    up. Set a recurring event on your calendar or join a group for added accountability.
                  </p>
                </section>
                <section className='flex flex-col gap-2 max-w-[438px]'>
                  <h5 className='text-lg leading-[28.2px] font-semibold underline underline-offset-2'>ACCOUNTABILITY:</h5>
                  <p className='text-lg leading-[25.2px]'>
                    Want to stay on track? Join an <span className='font-semibold'>AIR group</span>—a group that meets at a set time to fill out their
                    frameworks individually while vibing to music.
                  </p>
                </section>

                <Link
                  href='https://docs.google.com/forms/d/e/1FAIpQLSdbO98Ft45w8FV1lMars0NE8fS-22f2Qe5vZYGDXIQgw3zyIw/viewform'
                  className='text-lg leading-[25.2px] flex items-center gap-2'
                  target='_blank'
                >
                  <span className='underline underline-offset-2'>Join an accountability group here </span>
                  <span>
                    <Image src='/svgs/forward-arrow-icon.svg' alt='forward-arrow-icon' width={16} height={26} />
                  </span>
                </Link>
              </div>

              <div>
                <CTACard
                  title='Ready to AIR it out?'
                  description='Start tracking trends—you’ll be surprised what you notice.'
                  buttonLinks={buttonLinks}
                  buttonProps={{
                    className:
                      "rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[15px] px-[66px] underline text-black text-nowrap border-2 border-black flex items-center justify-center md:w-fit mb-10",
                  }}
                />
              </div>
            </section>
          </section>

          <section className='w-full pt-[1.875rem] md:pt-20'>
            <CardHeading title='AIR Tool Overview:' />
            <section className='flex text-lg leading-[28.8px] flex-col gap-[15px] pt-3 sm:pt-0'>
              <p>
                <span className='underline underline-offset-2'>
                  <Link href='https://docs.google.com/document/d/17iFCmubO37MeREXWlvjqDFmjx3n9vWTkfJp-ZLy1mDo/edit?tab=t.0' target='_blank'>
                    The AIR Tool
                  </Link>
                </span>{" "}
                forces you to reflect, refocus, and align with your bigger vision. When’s the last time you actually paused to recognize what you’ve
                done? Do it—trust me, it feels damn good and powers up your next move. Your code needs CI, so does your work.
              </p>
              <p>Here's how the process works:</p>

              <section className='text-lg leading-[28.8px]'>
                <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                  <li>
                    <span className='font-semibold'>Actions:</span> Log your actions, what occurred and what didn’t occur.
                  </li>
                  <li>
                    <span className='font-semibold'>Intentions:</span> Set your focus for the next cycle. Lock in goals, milestones, and steps that
                    drive your next move.
                  </li>
                  <li>
                    <span className='font-semibold'>Reflections:</span> Find the patterns. What drained your bandwidth and why? Interpret the data.
                  </li>
                </ul>
              </section>

              <p>Celebrate your wins. Small victories build momentum and keep you fired up. Progress is progress—big or small, acknowledge it.</p>
            </section>
          </section>

          <section className='w-full pt-[1.875rem] md:pt-10'>
            <CardHeading title='What to expect:' />
            <section className='flex text-lg leading-[28.8px] flex-col gap-[27px] pt-3 sm:pt-0'>
              <section className='text-lg leading-[28.8px]'>
                <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[15px]'>
                  <li>
                    <span className='font-semibold'>Simple, flexible framework:</span>{" "}
                    <span className='underline underline-offset-2'>
                      <Link href='https://docs.google.com/document/d/17iFCmubO37MeREXWlvjqDFmjx3n9vWTkfJp-ZLy1mDo/edit?tab=t.0' target='_blank'>
                        Here’s the tool.
                      </Link>
                    </span>{" "}
                    Adjust the AIR process to fit your unique rhythm. Whether monthly or weekly, find what cadence works for you and stick to it.
                  </li>
                  <li>
                    <span className='font-semibold'>Built for personal growth:</span> Use it to explore your unique work patterns, celebrate
                    successes, and identify areas for growth.
                  </li>
                  <li>
                    <span className='font-semibold'>Actionable results:</span> By combining reflection with intention-setting, you’ll translate
                    insights into tangible steps that drive meaningful contributions.
                  </li>
                  <li>
                    <span className='font-semibold'>Community support:</span>{" "}
                    <span className='underline underline-offset-2'>
                      <Link
                        href='https://docs.google.com/forms/d/e/1FAIpQLSdbO98Ft45w8FV1lMars0NE8fS-22f2Qe5vZYGDXIQgw3zyIw/viewform'
                        target='_blank'
                      >
                        Join an AIR group
                      </Link>
                    </span>{" "}
                    to stay accountable and stick to your chosen pace. Your framework is yours—share it only if you choose.
                  </li>
                </ul>
              </section>
            </section>
          </section>

          <section className='flex flex-col gap-[9px] pt-[40px]'>
            <p className='text-xl leading-[160%] font-medium'>Questions?</p>
            <div className='text-lg leading-[160%]'>
              <p>Reach out to us.</p>
              <Link href='mailto:waye.dev@gmail.com' className='flex items-center gap-2'>
                <span className='underline-offset-8 underline'>waye.dev@gmail.com</span>
                <span className='text-blue-custom-100'>
                  <Image src='/svgs/forward-arrow-icon.svg' alt='forward-arrow-icon' width={16} height={26} />
                </span>
              </Link>
            </div>
          </section>

          <section className='flex flex-col gap-[9px] pt-[40px]'>
            <section>
              <p className='text-xl leading-[160%] font-medium'>Feedback</p>
              <p>We’d love to hear your thoughts.</p>
            </section>

            <div className='text-lg leading-[160%]'>
              <p>Your feedback helps us improve and create tools that serve you better.</p>
              <Link href='https://form.jotform.com/243196595832064' target='_blank' className='flex items-center gap-2'>
                <span className='underline-offset-8 underline'>Take the feedback survey</span>
                <span className='text-blue-custom-100'>
                  <Image src='/svgs/forward-arrow-icon.svg' alt='forward-arrow-icon' width={16} height={26} />
                </span>
              </Link>
            </div>
          </section>

          <section className='pt-20'>
            <p className='text-lg leading-[28.8px]'>
              This template was created by The Waye Foundation for the benefit of developers working in open source.
            </p>
          </section>
        </div>
      </Wrapper>
    </div>
  );
};

export default page;

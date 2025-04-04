import React, { useCallback } from "react";
import Link from "next/link";
import { CardHeading, RebootImage } from "./cards";

const AboutOSReboot = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  return (
    <div>
      <div className='flex gap-4 flex-col sm:flex-row sm:relative justify-between'>
        <section className='flex flex-col sm:absolute top-0 left-0'>
          <h1 className='text-[38px] lg:text-[52px] leading-[120%] lg:leading-[62.4px]'>OS Reboot</h1>
          <p className='text-lg lg:text-[22px] leading-[160%] max-w-[307px]'>A group cohort redefining open-source success</p>
        </section>

        <section className='flex justify-end items-end w-full sm:mt-10 md:mt-0'>
          <RebootImage />
        </section>
      </div>
      <section className='pt-10 sm:pt-[69px]'>
        <CardHeading title='What is OS Reboot?' />
        <section className='flex flex-col gap-[27px]'>
          <p className='text-lg leading-[160%]'>
            OS Reboot is your reset button. Designed for open-source developers, this program helps you pause, refocus, and get back to building with
            purpose. Through facilitated discussions, personal reflection, and no- BS collaborative learning, we tackle burnout, imposter syndrome,
            and aimless coding so you can align your work with what truly matters.
          </p>
        </section>
      </section>

      <section className='pt-[40px] md:pt-[80px] pb-[30px] md:pb-[40px]'>
        <OsRebootCard setActiveTab={setActiveTab} />
      </section>

      <section className='pt-[30px] sm:pt-[40px]'>
        <CardHeading title='What is it for?' />
        <section className='flex flex-col gap-[19px]'>
          <p className='text-lg leading-[160%]'>
            OS Reboot is for developers who want to level up without burning out. Whether you're just starting or have years under your belt, this
            program will help you:
          </p>

          <section className='text-lg leading-[28.8px] font-medium'>
            <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
              <li>align your work with your values</li>
              <li>build resilience to thrive in a shifting ecosystem.</li>
              <li>connect with a like-minded community that "gets it"</li>
            </ul>
          </section>

          <p className='text-lg leading-[160%]'>
            Whether you're a newbie or a seasoned pro, OS Reboot is your opportunity to hit pause, recalibrate, and map out your next move with some
            serious intention. Time to stop spinning your wheels and start making your work count.
          </p>
        </section>
      </section>
      <section className='pt-[40px]'>
        <CardHeading title='Why join?' />
        <section className='flex flex-col gap-[20px]'>
          <p className='text-lg leading-[160%]'>Because coding in isolation isn't enough. OS Reboot offers:</p>

          <section className='text-lg leading-[28.8px] font-medium'>
            <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
              <li>
                <span className='underline'>Clarity:</span> Know your impact and where your work fits
              </li>
              <li>
                <span className='underline'>Connection:</span> Build real relationships with fellow contributors.
              </li>
              <li>
                <span className='underline'>Practical Tools:</span> Manage burnout, self-doubt, and challenges of the OS grind.
              </li>
            </ul>
          </section>
        </section>
      </section>
      <section className='pt-[50px] sm:pt-[60px]'>
        <OsRebootCard setActiveTab={setActiveTab} />
      </section>

      <section className='flex flex-col gap-[9px] pt-[40px] pb-[30px] sm:pb-[90px]'>
        <p className='text-xl leading-[160%] font-medium'>Questions?</p>
        <div className='text-lg leading-[160%]'>
          <p>Reach out to us.</p>
          <Link href='mailto:hello@waye.dev' className='flex items-center gap-2'>
            <span className='underline-offset-8 underline'>hello@waye.dev</span>
            <span className='text-blue-custom-100'>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

const OsRebootCard = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const buttonLinks = [
    {
      text: "OS Reboot [Nostr]",
      tag: "nostr",
    },
    {
      text: "OS Reboot [Freedom]",
      tag: "bitcoin",
    },
  ];

  return (
    <div className='flex flex-col gap-[5px] p-5 md:p-[30px] md:pb-[55px] bg-blue-custom-600 rounded-[10px] w-full md:min-w-[400px]'>
      <section>
        <p className={`text-[22px] leading-[160%] font-medium w-full`}>Ready to reboot?</p>
      </section>
      <p className='text-lg leading-[25.5px] sm:leading-[28.8px]'>Explore our programs and sign up for the one that’s right for you.</p>

      {buttonLinks && (
        <section className='flex flex-col md:flex-row gap-[14px] mt-[25px] md:mt-[35px]'>
          {buttonLinks.map((btn, index) => (
            <button
              key={index}
              className='rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[15px] px-[55px] text-black text-nowrap border-2 border-black flex items-center justify-center md:w-fit'
              onClick={() => {
                setActiveTab(btn.tag);
                scrollToTop();
              }}
            >
              {btn.text}
            </button>
          ))}
        </section>
      )}
    </div>
  );
};

export default AboutOSReboot;

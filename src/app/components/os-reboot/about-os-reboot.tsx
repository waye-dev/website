import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardHeading, CTACard, DetailsCard } from "./cards";

const AboutOSReboot = () => {
  const buttonLinks = [
    {
      link: "https://form.jotform.com/250026446325046",
      text: "Reboot NOSTR",
    },
    {
      link: "https://form.jotform.com/250026446325046",
      text: "Reboot Bitcoin",
    },
  ];

  return (
    <div>
      <div className='flex gap-4 flex-col sm:flex-row sm:relative justify-between'>
        <section className='flex flex-col sm:absolute top-0 left-0'>
          <h1 className='text-[38px] lg:text-[52px] leading-[120%] lg:leading-[62.4px]'>OS Reboot</h1>
          <p className='text-lg lg:text-[22px] leading-[160%] max-w-[307px]'>A group cohort redefining open-source success</p>
        </section>

        <section className='flex justify-end items-end w-full sm:mt-10 md:mt-0'>
          <Image src='/images/mountain-climbers.png' alt='mountain climbers' width={653} height={400} className='' />
        </section>
      </div>

      <section className='pt-[30px] sm:pt-[60px]'>
        <DetailsCard
          timeline={
            <span className='flex flex-col gap-1'>
              <span>8 virtual sessions, Feb - July 2025</span>
              <span className='font-medium='>Feb 12 ✧ Mar 3 ✧ Mar 26 ✧ Apr 16 ✧ May 7 ✧ Jun 4 ✧ Jun 25 ✧ Jul 16</span>
            </span>
          }
          location={<span>Virtual; 4PM GMT</span>}
          tldr={
            <span>Take a step back, look at the bigger picture, see where your work fits in & make sure you are on track to f*ck some sh*t up.</span>
          }
        />
      </section>

      <section className='pt-[40px]'>
        <CTACard
          title='Ready to reboot?'
          description='Scroll down the page to learn more about our OS Reboot programs or explore one of our open programs:'
          buttonLinks={buttonLinks}
        />
      </section>

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
        <CTACard
          title='Ready to reboot?'
          description='Scroll down the page to learn more about our OS Reboot programs or explore one of our open programs:'
          buttonLinks={buttonLinks}
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
  );
};

export default AboutOSReboot;

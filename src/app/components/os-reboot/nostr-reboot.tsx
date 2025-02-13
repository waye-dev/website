import React from "react";
import Link from "next/link";
import { CardHeading, CTACard, DetailsCard, RebootImage } from "./cards";

const NostrRebbot = () => {
  return (
    <div>
      <div className='flex gap-4 flex-col sm:flex-row sm:relative justify-between'>
        <section className='flex flex-col sm:absolute top-0 left-0'>
          <h1 className='text-[38px] lg:text-[52px] leading-[120%] lg:leading-[62.4px]'>
            OS Reboot <br /> *Nostr
          </h1>
        </section>

        <section className='flex justify-end items-end w-full sm:mt-10 md:mt-0'>
          <RebootImage />
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
          tldr={
            <span>Take a step back, look at the bigger picture, see where your work fits in & make sure you are on track to f*ck some sh*t up.</span>
          }
        />
      </section>

      <section className='pt-[40px]'>
        <CTACard
          title='Ready to reboot?'
          description={
            <span>
              <span className='mt-[20px]'>
                Enrollment for this program is closed. Check out our open Reboot and sign up, or{" "}
                <span className='underline'>
                  <Link href='mailto:waye.dev@gmail.com'>email us</Link>
                </span>{" "}
                if this one truly speaks to you.
              </span>
            </span>
          }
          underline
          descriptionProps={{ className: "pt-[10px] text-lg leading-[25.5px] sm:leading-[28.8px]" }}
        />
      </section>

      <section className='pt-10 sm:pt-[69px]'>
        <CardHeading title='About OS Nostr Reboot' />
        <section className='flex flex-col gap-[27px]'>
          <p className='text-lg leading-[160%]'>
            Decentralized development is a critical aspect of building censorship-resistant technology. But sometimes it can feel lonely and
            overwhelming. OS Reboot is designed to help. Join this pilot, invest in yourself & shape the program’s architecture for the broader
            privacy tech community.
          </p>

          <section className='text-lg leading-[28.8px]'>
            <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
              <li>
                <span className='font-semibold'>Virtual Group Sessions.</span> 60-minute interactive discussions held approximately every 3 weeks
                between January and June 2025.
              </li>
              <li>
                <span className='font-semibold'>Structured Sessions.</span> A combination of guided facilitation, individual reflection time, and
                group discussions.
              </li>
              <li>
                <span className='font-semibold'>Sign up. Show up.</span> Missing more than two sessions will make this program unsuitable for you.
              </li>
              <li>
                <span className='font-semibold'>Architect the program.</span> Your input shapes the session topics, and then some more. Together,
                let’s create an impactful offering for the broader community.
              </li>
            </ul>
          </section>
        </section>
      </section>

      <section className='pt-[30px] sm:pt-[40px]'>
        <CardHeading title='The human side of open source:' />
        <section className='flex flex-col gap-[19px]'>
          <p className='text-lg leading-[160%]'>
            In OS Reboot, we’re confronting the unspoken psychological challenges of open-source development head-on. Here’s just a taste of what
            we’ll tackle:
          </p>

          <section className='text-lg leading-[28.8px] font-medium'>
            <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
              <li>burnout & stress</li>
              <li>WTF is rest</li>
              <li>social coordination in decentralized development</li>
            </ul>
          </section>

          <p className='text-lg leading-[160%]'>
            And that’s just scratching the surface. We’ll go much deeper, with you driving the topics of conversation through our onboarding form. Our
            goal? To equip you with the psychological and social tools you need to not just survive, but thrive in the open-source world.
          </p>
        </section>
      </section>

      <section className='pt-[40px]'>
        <CardHeading title='What you bring:' />
        <section className='text-lg leading-[28.8px]'>
          <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
            <li>
              Show up, fully. Garbage in, garbage out. If you show up ready to be honest with yourself, the facilitation will give you structure to
              translate that energy into real world impact.{" "}
            </li>
            <li>
              Your unfiltered input. When you sign up, you tell us what sessions you want. Your real-time feedback helps us course correct along the
              way. Your feedback determines the future of the program.{" "}
            </li>
          </ul>
        </section>
      </section>

      <section className='pt-[40px]'>
        <CardHeading title='Meet your facilitators:' />

        <section>
          <p className='text-xl leading-[160%] font-medium pb-[10px]'>Noemi Boyer</p>
          <p className='text-lg leading-[160%]'>
            Meet Noemi Boyer - democracy's biggest fan and DemoLab's fearless leader. She's on a mission to shake up how Costa Rica and Latin America
            do democracy, one fired-up citizen at a time. Less dusty frameworks, more "let's get sh*t done."
            <br />
            <br />
            Now she's bringing her magic to OS Reboot as our facilitator extraordinaire. After years of coaching entrepreneurs and navigating startup
            culture, she knows a thing or two about getting brilliant minds to play nice together.
            <br />
            <br />
            In Noemi's sessions, expect zero snooze-worthy PowerPoints and all action. She'll help you turn those "wouldn't it be cool if..." moments
            into "holy cow, we actually did it!" victories. Because if there's one thing Noemi loves more than democracy, it's watching good ideas
            become great solutions.
          </p>
        </section>

        <section className='pt-[40px]'>
          <p className='text-xl leading-[160%] font-medium pb-[10px]'>Amiti Uttarwar</p>
          <p className='text-lg leading-[160%]'>
            Amiti Uttarwar has been a bitcoin P2P protocol engineer since 2019. She's a mountaineer, meditator, and armchair philosopher. She’s
            coached and mentored over 20 full-time open-source devs, and is not slowing down anytime soon.
            <br />
            <br />
            Amiti is on a mission to spark critical engagement around questions like how we work. Now, she’s bringing her passion, creativity, and
            sometimes-kinda-aggro truth seeking energy to OS Reboot, building a program that helps devs dev longer.
          </p>
        </section>
      </section>

      <section className='pt-[40px]'>
        <CardHeading title='Key details recap:' />

        <section className='flex flex-col gap-[20px]'>
          <p className='text-lg leading-[160%]'>8 sessions, Feb - July 2025, online @ 4PM GMT.</p>
          <p className='font-semibold text-lg leading-[160%]'>
            Feb 12 <span className='font-normal'>✧</span> Mar 3 <span className='font-normal'>✧</span> Mar 26 <span className='font-normal'>✧</span>{" "}
            Apr 16 <span className='font-normal'>✧</span> May 7 <span className='font-normal'>✧</span> Jun 4 <span className='font-normal'>✧</span>{" "}
            Jun 25 <span className='font-normal'>✧</span> Jul 16
          </p>
          <p className='text-lg leading-[160%]'>If you are stoked to participate but these proposed times don’t work for you, talk to us.</p>
        </section>
      </section>

      <section className='pt-[30px] sm:pt-[40px]'>
        <CTACard
          title='Ready to reboot?'
          description={
            <span>
              <span className='mt-[20px]'>
                Enrollment for this program is closed. Check out our open Reboot and sign up, or{" "}
                <span className='underline'>
                  <Link href='mailto:waye.dev@gmail.com'>email us</Link>
                </span>{" "}
                if this one truly speaks to you.
              </span>
            </span>
          }
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

export default NostrRebbot;

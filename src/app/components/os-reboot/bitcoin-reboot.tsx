import React from "react";
import Link from "next/link";
import { CardHeading, CTACard, DetailsCard, RebootImage } from "./cards";

const BitcoinReboot = () => {
  const buttonLinks = [
    {
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfNrpjygyjOlaexrPhMoWb0RUDqSmW238HMl82JCCRDYyJzFA/viewform",
      text: "Sign up now",
    },
  ];

  return (
    <div>
      <div className='flex gap-4 flex-col sm:flex-row sm:relative justify-between'>
        <section className='flex flex-col sm:absolute top-0 left-0'>
          <h1 className='text-[38px] lg:text-[52px] leading-[120%] lg:leading-[62.4px]'>
            OS Reboot <br /> Bitcoin
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
              <span>8 sessions. 3rd Thursdays. April - November 2025. 4-530PM GMT.</span>
			  <span className='font-medium'>Apr 17 ✧ May 15 ✧ Jun 19 ✧ Jul 17 ✧ Aug 21 ✧ Sep 18 ✧ Oct 16 ✧ Nov 20</span>
            </span>
          }
          tldr={<span>Upgrade your mental OS through this structured protocol. World-class experts lead a professional audit guaranteed to level you up.</span>}
          who={<span>10 spots available to actively contributing OS devs.</span>}
          buttonLinks={buttonLinks}
        />
      </section>

      <section className='pt-10 sm:pt-[69px]'>
        <CardHeading title='What is this?' />
        <section className='flex flex-col gap-[27px]'>
          <p className='text-lg leading-[160%]'>
			  Being a dev in the decentralized ecosystem means juggling many roles. In addition to writing & reviewing code, you have to identify what is impactful, manage the end-to-end lifecycle, build your community, get project buy-in from collaborators, organize day-to-day priorities, create focus time, navigate the funding ecosystem… <span className='font-bold'>You know the grind.</span>
          </p>
          <p className='text-lg leading-[160%]'>
			  This balancing act is like paying a constant cognitive tax. OS Reboot guides you to build a map of your non-coding professional landscape. So when it’s time to code, you can <span className='font-bold'>enter flow state</span>, have more fun & increase your productivity.
          </p>
          <p className='text-lg leading-[160%]'>
            If you’ve ever felt like:
          </p>

          <section className='text-lg leading-[160%]'>
            <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
              <li>Burnout is creeping in.</li>
              <li>Work-life balance is impossible.</li>
              <li>You want to increase deep focus.</li>
              <li>There's way too much to do.</li>
            </ul>
          </section>

          <p className='text-lg leading-[160%] font-bold'>
            OS Reboot is for you.
          </p>
        </section>
      </section>

      <section className='pt-10 sm:pt-[69px]'>
        <CardHeading title='What to expect:' />
        <section className='text-lg leading-[28.8px]'>
          <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
            <li>
              <span className='font-semibold'>Virtual Group Sessions.</span> Eight 90-minute, interactive discussions held monthly.
            </li>
            <li>
              <span className='font-semibold'>Structured Approach.</span> Expert facilitators will guide each session. Show up fully & we will handle the rest.
            </li>
            <li>
              <span className='font-semibold'>Sign up. Show up.</span> Miss more than two sessions will make this program unsuitable for you.
            </li>
            <li>
              <span className='font-semibold'>Eligibility.</span> Available to open-source developers who are actively contributing.
            </li>
          </ul>
        </section>
      </section>

      <section className='pt-[40px]'>
        <CardHeading title='Why join?' />
        <section className='text-lg leading-[28.8px] flex flex-col gap-[28.8px]'>
          <p>
            Open source isn’t a solo mission, and neither is this. OS Reboot gives you the structure, connections, and expert guidance to make your
            work more sustainable and impactful.
          </p>
          <p>
            Bring your commitment, bring your perspective, and be ready to dig in. The more you invest, the more you’ll gain—because the best insights
            don’t just come from experts, they come from you.
          </p>
        </section>
      </section>

      <section className='pt-[40px]'>
        <CardHeading title='Meet the crew:' />

        <section>
          <p className='text-lg leading-[160%]'>
            We are pulling together a DREAM TEAM. Lot's more to come, here's a glimpse.<br/>
          </p>
          <ul className='text-lg pt-[20px] list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
            <li>
              <span className='font-semibold'>Amiti Uttarwar.</span> Bitcoin P2P protocol engineer since 2019. On a mission to uncover our human source code, just ask the dozens of OS devs she's coached.
            </li>
            <li>
              <span className='font-semibold'>Anna Sides.</span> Operational excellence that literally sent 100,000s of people camping. Her dogs are her personality.
            </li>
            <li>
              <span className='font-semibold'>Debbie Johnstone.</span> 25 years as an HR leader is just the tip of the iceberg. Professional unlocker of human potential.
            </li>
            <li>
              <span className='font-semibold'>Vanina Kala Waizmann.</span> Doctor of Psychology with specialized knowledge of burnout and nervous system regulation. Magical creature.
            </li>
          </ul>
        </section>
      </section>

      <section className='pt-[40px]'>
        <CardHeading title='POW Pricing:' />
        <section className='text-lg leading-[28.8px] flex flex-col gap-[28.8px]'>
          <p>
			Thanks to the support of HRF and OpenSats, we are able to offer this program on a proof of work model. If you are making code contributions to open source software, you can hang on to your bitcoin. How cool is that?
          </p>
        </section>
	  </section>

      <section className='flex flex-col gap-[9px] pt-[40px] pb-[30px] sm:pb-[90px]'>
        <p className='text-xl leading-[160%] font-medium'>Questions?</p>
        <div className='text-lg leading-[160%]'>
          <p>We want to hear.</p>
          <Link href='mailto:waye.dev@gmail.com' className='flex items-center gap-2'>
            <span className='underline-offset-8 underline'>waye.dev@gmail.com</span>
            <span className='text-blue-custom-100'>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BitcoinReboot;

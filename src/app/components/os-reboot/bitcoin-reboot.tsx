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
              <span>8 sessions, virtual. The exact schedule? Monthly, but final dates haven’t been
              determined yet.</span>
            </span>
          }
          tldr={<span>Get clear on where your work fits, build the tools to stay in the game, and beat burnout before it beats you.</span>}
          who={<span>10 spots available to actively contributing OS devs.</span>}
          buttonLinks={buttonLinks}
        />
      </section>

      <section className='pt-10 sm:pt-[69px]'>
        <CardHeading title='Why OS Reboot – Bitcoin Edition?' />
        <section className='flex flex-col gap-[27px]'>
          <p className='text-lg leading-[160%]'>
            Building in open source is powerful, but it can also be frustrating, isolating, and exhausting. Bitcoin is a long game, and if you’re
            here, you already know the stakes are high. OS Reboot is your chance to step back, refocus, and find the structure and support you need to
            keep going.
          </p>
          <p className='text-lg leading-[160%]'>
            This program is about making sure you’re equipped to keep doing going, without burning out or losing sight of why you started.
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
              <span className='font-semibold'>Eligibility.</span> Available to open-source developers who are actively contributing. For the rest of you, keep an eye
              on our mailing list.
            </li>
          </ul>
        </section>
      </section>

      <section className='pt-[30px] sm:pt-[40px]'>
        <CardHeading title='The human side of open source:' />
        <section className='flex flex-col gap-[19px]'>
          <p className='text-lg leading-[160%]'>
            Bitcoin development isn’t just about code—it’s about resilience. You’re dealing with intense public scrutiny, high expectations, and a
            constantly shifting landscape. If you’ve ever felt like:
          </p>

          <section className='text-lg leading-[28.8px] font-medium'>
            <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
              <li>Burnout is creeping in.</li>
              <li>Work-life balance is impossible.</li>
              <li>Imposter syndrome is real.</li>
              <li>Staying motivated feels like a fight.</li>
            </ul>
          </section>

          <p className='text-lg leading-[160%]'>
            You’re not alone. OS Reboot is here to help you face it all head-on and come out stronger—or at least, smarter.
          </p>
        </section>
      </section>

      <section className='pt-[40px]'>
        <CardHeading title='Why join?' />
        <section className='text-lg leading-[28.8px] flex flex-col gap-[28.8px]'>
          <p>
            Open source isn’t a solo mission, and neither is this. OS Reboot gives you the structure, connections, and expert guidance to make your
            work more sustainable and impactful. But it only works if you show up.
          </p>
          <p>
            Bring your commitment, bring your perspective, and be ready to dig in. The more you invest, the more you’ll gain—because the best insights
            don’t just come from experts, they come from each other.
          </p>
        </section>
      </section>

      <section className='pt-[40px]'>
        <CardHeading title='Meet your facilitators:' />

        <section>
          <p className='text-lg leading-[160%]'>
            Expert facilitators and the Waye team will lead each session, bringing in diverse perspectives from mental health experts, industry
            leaders, and perhaps even activists utilizing the technologies you’re building. Whether it’s navigating burnout, enhancing collaboration,
            or increasing the impact of your work, these sessions will be real, direct, and actually useful.
          </p>
        </section>
      </section>

      <section className='pt-[40px]'>
        <CardHeading title='Key details recap:' />

        <section className='flex flex-col gap-[20px]'>
          <p className='text-lg leading-[160%]'>8 sessions, virtual. Exact schedule TBD.</p>
          <p className='text-lg leading-[160%]'>Sign up, and we’ll let you know as soon as dates are set.</p>
        </section>
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

export default BitcoinReboot;

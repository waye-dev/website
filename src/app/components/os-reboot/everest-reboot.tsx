import React from "react";
import Image from "next/image";
import { DetailsCard, RebootImage } from "./cards";

const EverestReboot = () => {
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
            OS Reboot <br /> [Everest]
          </h1>
        </section>

        <section className='flex justify-end items-end w-full min-w-0 flex-1 sm:mt-10 md:mt-0'>
          <RebootImage />
        </section>
      </div>

      <section className='pt-[30px] sm:pt-[60px]'>
        <DetailsCard
          timeline={
            <span className='flex flex-col gap-1'>
              <span>8 sessions. March - August 2026. Thursdays @ 4:30-6PM GMT.</span>
			  <span className='font-medium'>Mar 26 ✧ Apr 16 ✧ May 7 ✧ May 28 ✧ Jun 18 ✧ Jul 9 ✧ Jul 30 ✧ Aug 20</span>
            </span>
          }
          tldr={<span>Upgrade your mental OS through this structured protocol designed specifically for freedom tech builders. If you are looking to <span className='font-semibold'>increase flow state</span> and <span className='font-semibold'>prevent burnout</span>, this program is for you.</span>}
        />
      </section>

      <section className='pt-10 sm:pt-[60px] pb-10'>
        <div className='rounded-[10px] border-2 border-black bg-gray-custom-100 p-6 sm:p-8 md:p-10'>
          <div className='flex flex-col gap-2 mb-8 md:mb-10'>
            <h2 className='text-2xl sm:text-3xl font-medium leading-tight'>
              You're committed to building freedom tech.
            </h2>
            <p className='text-xl sm:text-2xl leading-[160%]'>
              We're committed to helping you build systems that last.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 md:gap-x-10 md:gap-y-6'>
            <div className='flex gap-4 items-start min-h-[240px]'>
              <div className='w-12 h-12 rounded-[10px] bg-blue-custom-800 border border-black flex items-center justify-center flex-shrink-0'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
                  <circle cx='12' cy='12' r='8' />
                  <circle cx='12' cy='12' r='4' />
                  <circle cx='12' cy='12' r='1.5' fill='currentColor' stroke='none' />
                </svg>
              </div>
              <div className='flex flex-col gap-2 min-w-0 flex-1'>
                <h3 className='text-lg font-semibold'>Distill your goals</h3>
                <p className='text-lg leading-[160%]'>
                  Identify your objectives to crystallize what radically impacts the fight for freedom. Cultivate focus.
                </p>
              </div>
            </div>
            <div className='flex gap-4 items-start min-h-[240px]'>
              <div className='w-12 h-12 rounded-[10px] bg-blue-custom-800 border border-black flex items-center justify-center flex-shrink-0'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
                  <path d='M3 20 C 3 20 14 20 21 5' />
                </svg>
              </div>
              <div className='flex flex-col gap-2 min-w-0 flex-1'>
                <h3 className='text-lg font-semibold'>Go exponential</h3>
                <p className='text-lg leading-[160%]'>
                  Build systems so you can do less & get more done. Design for 10x impact instead of grinding for 2x output.
                </p>
              </div>
            </div>
            <div className='flex gap-4 items-start min-h-[240px]'>
              <div className='w-12 h-12 rounded-[10px] bg-blue-custom-800 border border-black flex items-center justify-center flex-shrink-0'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
                  <path d='M12 20V4' />
                  <path d='M6 10l6-6 6 6' />
                  <path d='M4 14h16' opacity='0.6' />
                </svg>
              </div>
              <div className='flex flex-col gap-2 min-w-0 flex-1'>
                <h3 className='text-lg font-semibold'>Break through limits</h3>
                <p className='text-lg leading-[160%]'>
                  Use neuroscience-backed techniques to reduce cognitive drag, reframe limiting beliefs, and build a personal protocol for reliable flow.
                </p>
              </div>
            </div>
            <div className='flex gap-4 items-start min-h-[240px]'>
              <div className='w-12 h-12 rounded-[10px] bg-blue-custom-800 border border-black flex items-center justify-center flex-shrink-0'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
                  <path d='M4 12 C 4 6 12 6 12 12 C 12 18 20 18 20 12 C 20 6 12 6 12 12 C 12 18 4 18 4 12' />
                </svg>
              </div>
              <div className='flex flex-col gap-2 min-w-0 flex-1'>
                <h3 className='text-lg font-semibold'>Create lasting change</h3>
                <p className='text-lg leading-[160%]'>
                  Play long term games and proactively prevent burnout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-10 sm:pt-[60px] pb-10'>
        <div className='rounded-[10px] border-2 border-black bg-blue-custom-800 p-6 sm:p-8 md:p-10'>
          <h2 className='text-2xl sm:text-3xl font-medium leading-tight mb-6'>
            Could you imagine?
          </h2>
          <div className='flex flex-col gap-6 text-lg leading-[160%]'>
            <p>
              We know the strug. Sometimes, it feels like a bunch of decentralized ants fighting against a dictator giant. The fight we are up against is HUGE.
            </p>
            <p>
              How are you supposed to turn off your laptop at the end of the day, let alone your mind?
            </p>
            <p className='leading-[1.6]'>
              But what if...<br />
              You don't just <em>hope</em> you did enough.<br />
              You <em>know</em> you moved the mission forward.
            </p>
            <p>
              Is that even possible? OS Reboot is a space for us to explore this question together.
            </p>
          </div>
          <div className='mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6'>
            <div className='shrink-0 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-square flex items-center justify-center [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]'>
              <Image
                src='/images/am-i-doing-enough.png'
                alt='Am I doing enough?'
                width={400}
                height={400}
                className='w-full h-full object-contain object-center drop-shadow-sm'
                unoptimized
              />
            </div>
            <div className='shrink-0 py-3 px-0 sm:py-0 sm:px-0 flex items-center justify-center' aria-hidden>
              <svg className='w-12 h-8 sm:w-16 sm:h-9 text-black rotate-90 sm:rotate-0' viewBox='0 0 48 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M2 12h40M38 8l4 4-4 4' />
              </svg>
            </div>
            <div className='shrink-0 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-square flex items-center justify-center [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]'>
              <Image
                src='/images/accomplished-a-lot.png'
                alt='I made meaningful progress today'
                width={400}
                height={400}
                className='w-full h-full object-contain object-center drop-shadow-sm'
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className='pt-10 sm:pt-[60px] pb-10'>
        <div className='rounded-[10px] border-2 border-black bg-gray-custom-100 p-6 sm:p-8 md:p-10'>
          <div className='flex flex-col gap-2 mb-6 md:mb-8'>
            <h2 className='text-2xl sm:text-3xl font-medium leading-tight'>
              How it works
            </h2>
            <p className='text-lg leading-[160%] font-medium'>
              8 sessions. 90 mins structured sessions. 10 builders max.
            </p>
          </div>
          <h3 className='text-xl sm:text-2xl font-medium leading-tight mb-4'>
            On the curriculum:
          </h3>
          <p className='text-lg leading-[160%] mb-6'>
            Each session is thoughtfully designed to turn nebulous goals like &ldquo;more impact&rdquo; or &ldquo;less burnout&rdquo; into tangible shifts. You&apos;ll define observable milestones & build testable behaviors.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 md:gap-x-10 md:gap-y-6'>
            <div className='flex gap-4 items-start min-h-[240px]'>
              <div className='w-12 h-12 rounded-[10px] bg-blue-custom-800 border border-black flex items-center justify-center flex-shrink-0'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
                  <circle cx='12' cy='12' r='9' />
                  <path d='M12 6l-2 6 2 2 2-2-2-6z' />
                  <circle cx='12' cy='12' r='1.5' fill='currentColor' stroke='none' />
                </svg>
              </div>
              <div className='flex flex-col gap-2 min-w-0 flex-1'>
                <h3 className='text-lg font-semibold'>Define your Why</h3>
                <p className='text-lg leading-[160%]'>
                  Clarity strengthens motivation. Identify your deepest why and build feedback loops that align with your brain&apos;s dopamine based reinforcement system, so progress feels natural instead of forced.
                </p>
              </div>
            </div>
            <div className='flex gap-4 items-start min-h-[240px]'>
              <div className='w-12 h-12 rounded-[10px] bg-blue-custom-800 border border-black flex items-center justify-center flex-shrink-0'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
                  <path d='M4 20V14 M8 20V9 M12 20V6 M16 20V10 M20 20V5' />
                </svg>
              </div>
              <div className='flex flex-col gap-2 min-w-0 flex-1'>
                <h3 className='text-lg font-semibold'>10x is easier than 2x</h3>
                <p className='text-lg leading-[160%]'>
                  Linear impact is limited. Shift from hustling for 2x growth to designing for 10x results. Get critical feedback to help you identify how to transform hustle into leverage.
                </p>
              </div>
            </div>
            <div className='flex gap-4 items-start min-h-[240px]'>
              <div className='w-12 h-12 rounded-[10px] bg-blue-custom-800 border border-black flex items-center justify-center flex-shrink-0'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
                  <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
                  <path d='M3 3v5h5' />
                </svg>
              </div>
              <div className='flex flex-col gap-2 min-w-0 flex-1'>
                <h3 className='text-lg font-semibold'>How do we transform?</h3>
                <p className='text-lg leading-[160%]'>
                  Understand the neuroscience of habit change, regulation, and neuroplasticity to build personalized protocols you can apply in your day-to-day work.
                </p>
              </div>
            </div>
            <div className='flex gap-4 items-start min-h-[240px]'>
              <div className='w-12 h-12 rounded-[10px] bg-blue-custom-800 border border-black flex items-center justify-center flex-shrink-0'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
                  <rect x='5' y='5' width='14' height='14' rx='2' />
                  <path d='M12 8v8M8 12h8' />
                  <circle cx='6' cy='6' r='1' fill='currentColor' stroke='none' />
                  <circle cx='18' cy='6' r='1' fill='currentColor' stroke='none' />
                  <circle cx='6' cy='18' r='1' fill='currentColor' stroke='none' />
                  <circle cx='18' cy='18' r='1' fill='currentColor' stroke='none' />
                </svg>
              </div>
              <div className='flex flex-col gap-2 min-w-0 flex-1'>
                <h3 className='text-lg font-semibold'>Use AI effectively</h3>
                <p className='text-lg leading-[160%]'>
                  The landscape is changing fast. Utilize expert perspective to get practical guidance on how to use AI in ways that extend your capacity without compromising privacy.
                </p>
              </div>
            </div>
          </div>

          <div className='pt-2 mt-2'>
            <h3 className='text-xl sm:text-2xl font-medium leading-tight mb-4'>
              Cross-disciplinary support:
            </h3>
            <p className='text-lg leading-[160%] mb-6'>
              We&apos;re bringing together an awesome team to ensure impact. Here&apos;s a glimpse, more to come!
            </p>
            <ul className='text-lg leading-[160%] flex flex-col gap-5 list-none pl-0'>
              <li>
                <span className='font-semibold'>Amiti Uttarwar:</span> Began working full time as a Bitcoin Core protocol dev in 2019. After years of navigating the ecosystem as an individual contributor, founded Waye to build systemic support for permissionless builders. Lead facilitator.
              </li>
              <li>
                <span className='font-semibold'>Vanina Kala Waizmann.</span> Doctor of Psychology with specialized knowledge of burnout and nervous system regulation. 20+ years helping people and organizations achieve their full potential. Guest facilitator.
              </li>
              <li>
                <span className='font-semibold'>Dr. Edith Brignoni.</span> Neuroscientist & brain health educator. Passionate about bridging rigorous neuroscience and practical strategies for wellbeing. Program advisor ensuring the curriculum is grounded in evidence.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='pt-10 sm:pt-[60px] pb-10'>
        <div className='rounded-[10px] border-2 border-black bg-blue-custom-800 p-6 sm:p-8 md:p-10'>
          <h2 className='text-2xl sm:text-3xl font-medium leading-tight mb-8 md:mb-10'>
            The approach
          </h2>

          <h3 className='text-xl sm:text-2xl font-medium leading-tight mb-5'>
            Our values
          </h3>
          <div className='flex flex-col gap-6 mb-10 md:mb-12'>
            <div>
              <p className='text-lg font-semibold leading-tight mb-2'>You are an explorer</p>
              <p className='text-lg leading-[160%]'>
                You carve your own path. We provide frameworks and signal so you can make decisions more effectively. We don&apos;t make decisions for you.
              </p>
            </div>
            <div>
              <p className='text-lg font-semibold leading-tight mb-2'>We are scientists</p>
              <p className='text-lg leading-[160%]'>
                We practice healthy skepticism. Failure is data. Feelings are data. Discomfort is often information. We start by defining our goals and then test, observe, and iterate to find meaningful techniques.
              </p>
            </div>
            <div>
              <p className='text-lg font-semibold leading-tight mb-2'>We are respectful</p>
              <p className='text-lg leading-[160%]'>
                Chatham House Rule by default. Other than sharing minimal participation data with HRF, we commit to each other that no identifying information leaves the room.
              </p>
              <p className='text-lg leading-[160%] mt-2'>
                We are not jerks to each other. You know what that means.
              </p>
            </div>
          </div>

          <h3 className='text-xl sm:text-2xl font-medium leading-tight mb-5'>
            Your commitment
          </h3>
          <p className='text-lg leading-[160%] mb-6'>
            In addition to the shared values, this program requires commitment:
          </p>
          <div className='flex flex-col gap-6'>
            <div>
              <p className='text-lg font-semibold leading-tight mb-2'>Show up</p>
              <p className='text-lg leading-[160%]'>
                Check your calendar before you sign up. If you miss two sessions, you will be asked to leave.
              </p>
            </div>
            <div>
              <p className='text-lg font-semibold leading-tight mb-2'>Be present</p>
              <p className='text-lg leading-[160%]'>
                There&apos;s no homework. We know you&apos;re already overwhelmed by the demands of your work. The container is simple: show up every three weeks. & fully engage for 90 minutes. If you do, you can count on seeing results.
              </p>
            </div>
            <div>
              <p className='text-lg font-semibold leading-tight mb-2'>Acknowledge your bandwidth</p>
              <p className='text-lg leading-[160%]'>
                This program creates leverage, but it requires an initial activation energy. If your plate is already overflowing, wait until you can make real space. We don&apos;t believe in meaningful reward without effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-10 sm:pt-[60px] pb-10 sm:pb-[90px]'>
        <div className='rounded-[10px] border-2 border-black bg-gray-custom-100 p-6 sm:p-8 md:p-10'>
          <h2 className='text-2xl sm:text-3xl font-medium leading-tight mb-6'>
            Interested?
          </h2>
          <div className='flex flex-col gap-6 text-lg leading-[160%]'>
            <p>
              If you are ready to commit, let HRF know.
            </p>
            <p>
              If you have any questions, email us at{' '}
              <a href='mailto:hello@waye.dev' className='underline underline-offset-4 hover:opacity-80'>
                hello@waye.dev
              </a>
              .
            </p>
            <p className='font-medium'>
              Only 10 spots available for this cohort.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EverestReboot;


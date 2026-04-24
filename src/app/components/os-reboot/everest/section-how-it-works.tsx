import React from "react";

export function EverestSectionHowItWorks() {
  return (
    <section className='pt-12 sm:pt-16 pb-12 sm:pb-16'>
      <div className='rounded-[10px] border-2 border-black bg-gray-custom-100 p-6 sm:p-8 md:p-10'>
        <div className='flex flex-col gap-2 mb-8'>
          <h2 className='text-2xl sm:text-3xl font-medium leading-tight'>
            How it works
          </h2>
          <p className='text-lg leading-[160%] font-medium'>
            8 sessions. 90 mins structured sessions. 10 builders max.
          </p>
        </div>
        <h3 className='text-xl sm:text-2xl font-medium leading-tight mb-4'>
          On the curriculum
        </h3>
        <p className='text-lg leading-[160%] mb-8'>
          Each session is thoughtfully designed to turn nebulous goals like &ldquo;more impact&rdquo; or &ldquo;less burnout&rdquo; into tangible shifts. You&apos;ll define observable milestones & build testable behaviors.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8'>
          <div className='flex gap-4 items-start min-h-[200px]'>
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
          <div className='flex gap-4 items-start min-h-[200px]'>
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
          <div className='flex gap-4 items-start min-h-[200px]'>
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
          <div className='flex gap-4 items-start min-h-[200px]'>
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

        <div className='pt-8 mt-8'>
          <h3 className='text-xl sm:text-2xl font-medium leading-tight mb-4'>
            Cross-disciplinary support
          </h3>
          <p className='text-lg leading-[160%] mb-6'>
            We&apos;re bringing together an awesome team to ensure impact. Here&apos;s a glimpse, more to come!
          </p>
          <ul className='text-lg leading-[160%] flex flex-col gap-6 list-none pl-0'>
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
  );
}

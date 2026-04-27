import React from "react";

export function EverestSectionApproach() {
  return (
    <section id='the-approach' className='pt-12 sm:pt-16 pb-12 sm:pb-16 scroll-mt-24'>
      <div className='rounded-[10px] border-2 border-black bg-blue-custom-800 p-6 sm:p-8 md:p-10'>
        <h2 className='text-2xl sm:text-3xl font-medium leading-tight mb-8'>
          The approach
        </h2>
        <h3 className='text-xl sm:text-2xl font-medium leading-tight mb-4'>
          Our values
        </h3>
        <div className='flex flex-col gap-6 mb-8'>
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
              Chatham House Rule by default. Other than sharing minimal participation data with HRF, we commit to each other that no identifying information leaves the room. More info{" "}
              <a
                href='https://wayedev.notion.site/os-reboot-privacy'
                className='underline underline-offset-4 hover:opacity-80'
                target='_blank'
                rel='noopener noreferrer'
              >
                here
              </a>
              .
            </p>
            <p className='text-lg leading-[160%] mt-2'>
              We are not jerks to each other. You know what that means.
            </p>
          </div>
        </div>

        <h3 className='text-xl sm:text-2xl font-medium leading-tight mb-4'>
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
  );
}

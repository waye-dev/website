import React from "react";

export function EverestSectionThisWorkHelps() {
  return (
    <section className='pt-12 sm:pt-16 pb-12 sm:pb-16'>
      <div className='rounded-[10px] border-2 border-black bg-gray-custom-100 p-6 sm:p-8 md:p-10'>
        <div className='flex flex-col gap-2 mb-8'>
          <h2 className='text-2xl sm:text-3xl font-medium leading-tight'>
            This work helps you
          </h2>
        </div>
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
              <h3 className='text-lg font-semibold'>Distill your goals</h3>
              <p className='text-lg leading-[160%]'>
                Identify your objectives and crystallize what radically impacts the fight for freedom. Cultivate focus.
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
              <h3 className='text-lg font-semibold'>Break through limits</h3>
              <p className='text-lg leading-[160%]'>
                Use neuroscience-backed techniques to reduce cognitive drag and build personal protocols for reliable flow.
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
              <h3 className='text-lg font-semibold'>Go exponential</h3>
              <p className='text-lg leading-[160%]'>
                Build systems so you can do less while you get more done.
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
              <h3 className='text-lg font-semibold'>Create lasting change</h3>
              <p className='text-lg leading-[160%]'>
                Play long term games and proactively prevent burnout. Make sure you build things that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export function EverestSectionInterested() {
  return (
    <section className='pt-12 sm:pt-16 pb-12 sm:pb-20'>
      <div className='rounded-[10px] border-2 border-black bg-gray-custom-100 p-6 sm:p-8 md:p-10'>
        <h2 className='text-2xl sm:text-3xl font-medium leading-tight mb-8'>
          Interested?
        </h2>
        <div className='flex flex-col gap-6 text-lg leading-[160%]'>
          <p>
            If you are ready to commit, let HRF know.
          </p>
          <p>
            If you have any questions, email us at{" "}
            <a href='mailto:hello@waye.dev' className='underline underline-offset-4 hover:opacity-80'>
              hello@waye.dev
            </a>
            .
          </p>
          <p className='font-medium'>
            Only 10 spots available per cohort.
          </p>
        </div>
      </div>
    </section>
  );
}

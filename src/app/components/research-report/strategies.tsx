export const Strategies = () => {
  return (
    <div className='text-white flex flex-col gap-14'>
      <section className='flex flex-col gap-4 text-lg'>
        <h1 className='text-[30px] md:text-3xl leading-[140%]  font-inknutAntiqua font-normal text-center'>
          Strategies: 4 approaches to the chaos of day to day work
        </h1>

        <p>
          The combination of openness and permissionless ethos, unstructured work environment, lack of support structures, and short-term funding
          cycles results in a day-to-day routine marked by chaos, which contributors navigate in different ways.{" "}
        </p>
      </section>

      <section className='flex flex-col gap-4 text-lg'>
        <p>
          The interviews revealed four distinct approaches to navigating the chaotic rhythms of day-to-day OSS work. These map onto two intersecting
          dimensions:{" "}
        </p>

        <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
          <li>
            <strong>Focus area</strong> — core infrastructure (Bitcoin core protocol, libraries, developer tools) vs applications (payments,
            messaging, hardware){" "}
          </li>
          <li>
            <strong>OSS experience:</strong> newer contributors vs experienced ones.
          </li>
        </ul>

        <p>Each combination reflects a different way of working in the ecosystem.</p>
      </section>
    </div>
  );
};

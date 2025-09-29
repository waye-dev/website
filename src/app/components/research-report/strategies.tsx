import { QuoteCards } from "./_components/quotes";

export const Strategies = () => {
  return (
    <div className='text-white flex flex-col gap-14 font-inter'>
      <section className='flex flex-col gap-12 text-lg '>
        <h1 className='text-[30px] md:text-3xl lg:text-4xl leading-[140%] md:leading-[170%]  lg:leading-[170%] font-inknutAntiqua font-normal text-center max-w-[701px] mx-auto'>
          Strategies: 4 approaches to the chaos of day to day work
        </h1>

        <p>
          The combination of openness and permissionless ethos, unstructured work environment, lack of support structures, and short-term funding
          cycles results in a day-to-day routine marked by chaos, which contributors navigate in different ways.{" "}
        </p>
      </section>

      <QuoteCards
        quotes={[
          {
            id: "13",
            text: "It was a little bit all over the place, because there was no structure — I don't have any meetings, I don't have any sprints or accountability. So some days weren't very productive. Other it might be late night coding, I’d get the inspiration and go to 2, 3am coding. It was very chaotic … It was a bit of a struggle to figure out a more stable pattern, because there's no structure at all.",
            author: {
              type: "new",
              respondentNumber: 13,
            },
          },
          {
            id: "20",
            text: "It's not super unstructured, but it is still kind of chaotic, because no one's getting really paid, and people are just dropping in and out. So it's a mix of chaos and organized.",
            author: {
              type: "expert",
              respondentNumber: 20,
            },
          },
          {
            id: "9",
            text: "I just try to have enough things that if I'm bored or I feel stuck, I can occupy myself with something else, but not too many that I don't abandon something for weeks. But basically I use chaos to keep things interesting.",
            author: {
              type: "expert",
              respondentNumber: 9,
            },
          },
        ]}
      />

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

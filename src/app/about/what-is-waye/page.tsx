import Wrapper from "@/app/components/wrapper";
import Image from "next/image";

export default function WhatIsWaye() {
  const heroSubSectionText = [
    {
      title: "Research the matters",
      content: "Expose systemic challenges. Show what needs fixing.",
    },
    {
      title: "open-source coaching",
      content: "So developers can sustain peak performance.",
    },
    {
      title: "long time preference",
      content: "Grants are short-term, but the tech needs to last generations. developing a long-term mindset is critical.",
    },
    {
      title: "Spaces to connect",
      content: "Virtual peer groups and in-person facilitations.",
    },
    {
      title: "diy tools",
      content: "Practical resources you can use right away.",
    },
  ];

  return (
    <main>
      {/* hero section */}
      <div className='max-h-screen h-[calc(100vh-73px)] md:h-[calc(100vh-73px)] bg-blue-custom-100 bg-gradient-to-b from-[#1a1f36] to-[#323F6B] via-[#7192f51c] text-gray-custom-100 flex flex-col justify-between relative overflow-'>
        <div className='py-20'>
          <section className='flex flex-col gap-6'>
            <h1 className='text-[42px] md:text-[60px] leading-[140%] md:leading-[80px]  font-workSans text-center'>
              Build things that matter - <br /> for the long term.
            </h1>
            <p className='text-center text-base leading-[18px] opacity-60'>
              Waye strengthens the human infrastructure of freedom tech. <br />
              We’re here for the people who build Bitcoin, Nostr, and other open systems.
            </p>
          </section>

          <section className='w-full flex justify-center items-center z-50 pt-12'>
            <section className='flex flex-col gap-4 z-50 max-w-[35.8rem] mx-auto items-center justify-center'>
              {heroSubSectionText.map((text) => (
                <div key={text.title} className='flex flex-row items-center gap-4'>
                  <h2 className='uppercase text-xs font-bold font-acme tracking-wider text-[#ADCEF1] whitespace-nowrap'>{text.title}</h2>
                  <Image src='/svgs/about-page/wavy-arrow.svg' width={39} height={20} alt='wavy arrow' priority />
                  <p className='text-xs font-medium font-workSans text-left'>{text.content}</p>
                </div>
              ))}
            </section>
          </section>
        </div>

        {/* reduce size of image later */}
        <div className='absolute bottom-0 z-10'>
          <Image src='/svgs/about-page/double-mountains.svg' width={3200} height={563} alt='double mountains' priority />
        </div>
      </div>

      {/* content section */}
      <div className='bg-gray-custom-100 py-12 md:py-24'>
        <Wrapper className='max-w-[1256px] mx-auto'>
          <div className='flex flex-col gap-10 md:gap-20 lg:gap-40'>
            {/* build for long term section */}
            <section className='flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
              <section className='w-full flex items-center justify-center md:justify-end'>
                <Image src='/images/about-page/scale-image.png' width={528} height={488} alt='scales image' priority className='object-contain' />
              </section>

              <article className='w-full flex flex-col gap-4'>
                <p className='text-2xl md:text-4xl font-medium'>Built for the long-term</p>
                <section className='flex flex-col gap-5 text-base md:text-lg leading-7'>
                  <p>
                    Our latest research study uncovered a sustainability paradox in open-source development: the more the experience, the more
                    unsustainable one’s work process becomes. This is particularly acute for contributors working on self-directed projects.
                  </p>
                  <p>
                    Contributors face both freedom and chaos. One of the things Waye does is to help approach these questions methodically so the
                    community is better informed to build more sustainable structures.
                  </p>
                </section>
              </article>
            </section>

            {/* open source coaching section */}
            <section className='flex flex-col md:flex-row items-center justify-between gap-12'>
              <article className='w-full flex flex-col gap-4'>
                <p className='text-2xl md:text-4xl font-medium'>Open-source coaching</p>
                <section className='flex flex-col gap-5 text-base md:text-lg leading-7'>
                  <p>
                    In the world of sports, everyone understands the value of a coach. Elite athletes don’t train alone- with the strategic support of
                    a coach, they focus on optimizing performance. Open-source coaching brings this principle to the realm of decentralized
                    development. We help knowledge workers build technology that matters.
                  </p>

                  <section className='flex flex-col gap-4'>
                    <p className='text-2xl font-medium font-workSans'>Examples areas of focus:</p>

                    <ul className='flex flex-col gap-2 text-base list-disc list-inside'>
                      <li>funding environment → navigating the unpredictability of the grant ecosystem</li>
                      <li>socializing your work → building buy-in from peers and the wider community without traditional managers</li>
                      <li>sustainable structures → routines, boundaries, and recovery practices that prevent burnout</li>
                    </ul>
                  </section>
                </section>
              </article>

              <section className='w-full flex items-center justify-center md:justify-end'>
                <Image
                  src='/images/about-page/football-pitch-image.png'
                  width={524}
                  height={471}
                  alt='football pitch image'
                  priority
                  className='object-contain'
                />
              </section>
            </section>

            {/* 10x tool section */}
            <section className='flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
              <section className='w-full flex items-center justify-center md:justify-end'>
                <Image
                  src='/images/about-page/scattered-holes-image.png'
                  width={524}
                  height={410}
                  alt='scattered holes image'
                  priority
                  className='object-contain'
                />
              </section>

              <article className='w-full flex flex-col gap-4'>
                <p className='text-2xl md:text-4xl font-medium'>10x tool: from ✈️ to 🚀</p>
                <section className='flex flex-col gap-5 text-base md:text-lg leading-7'>
                  <p>Airplanes get faster by tweaking the engines. Rockets change the game entirely.</p>
                  <p>Where are you optimizing a plane instead of designing a rocketship?</p>
                  <p>
                    The 10x tool is a mindset shift: instead of chasing 2x improvements by working longer hours or juggling more tasks, look for 10x
                    improvements the bold redesigns that make revolutionary goals achievable in the long run.
                  </p>
                </section>
              </article>
            </section>

            {/* rocket ship section */}
            <section className='flex flex-col md:flex-row items-center justify-between gap-12'>
              <article className='w-full'>
                <p>
                  The idea comes from 10x Is Easier Than 2x by Benjamin Hardy and Dan Sullivan. We adapted it for open source and introduced it in our
                  OS Reboot [Nostr] program. One participant, Pablo, used it to completely reframe his work. As an experienced open-source dev, he was
                  used to pushing nonstop, often sleeping only four hours a night. Open-source coaching encouraged him to step back and evaluate the
                  bigger picture, a process which he describes as “extremely uncomfortable”. His 10x goal is to achieve greater productivity while
                  working at a computer just four hours a day, which led to developing AI tooling to support his projects. That’s a rocketship.
                </p>
              </article>

              <section className='w-full flex items-center justify-center md:justify-end'>
                <Image
                  src='/images/about-page/spaceship-image.png'
                  width={524}
                  height={543}
                  alt='spaceship image'
                  priority
                  className='object-contain'
                />
              </section>
            </section>

            {/* neuroscience section */}
            <section className='flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
              <section className='w-full flex items-center justify-center md:justify-end'>
                <Image src='/images/about-page/brains-image.png' width={528} height={488} alt='brains image' priority className='object-contain' />
              </section>

              <article className='w-full flex flex-col gap-4'>
                <p className='text-2xl md:text-4xl font-medium'>Neuroscience backed techniques</p>
                <section className='flex flex-col gap-5 text-base md:text-lg leading-7'>
                  <p>
                    Understanding how the brain works helps us design structures that keep people focused, motivated, and resilient. Here’s an
                    example: the brain has two primary modes: the task-positive network (TPN) and the default mode network (DMN). The TPN activates
                    when you’re focused- whether solving problems or writing code. The DMN takes over when your mind wanders- it connects ideas and
                    makes sense of the bigger picture. Real transformation happens by harnessing their strengths and moving fluidly between the two —
                    intense focus and reflective integration.
                  </p>
                  <p>At Waye, we build practices that help developers harness this rhythm. Work with your brain, not against it.</p>
                </section>
              </article>
            </section>

            {/* open source mindset section */}
            <section className='flex flex-col md:flex-row items-center justify-between gap-12'>
              <article className='w-full flex flex-col gap-4'>
                <p className='text-2xl md:text-4xl font-medium'>The open-source mindset</p>
                <section className='flex flex-col gap-5 text-base md:text-lg leading-7'>
                  <p>
                    A gardener doesn’t tell a seed how to grow. They don’t demand, “become a flower, now.” Instead, they create the right conditions
                    of sunlight, water and healthy soil. Growth happens when the environment allows it.
                  </p>
                  <p>
                    This is the mindset we bring to coaching: to guide, not to control. Developers already have the potential. Our role is to help
                    them unlock it — by removing obstacles, providing resources, and creating structures for sustainable growth to thrive.
                  </p>
                  <p>Transformation isn’t forced. It’s nurtured.</p>
                </section>
              </article>

              <section className='w-full flex items-center justify-center md:justify-end'>
                <Image
                  src='/images/about-page/gardeners-image.png'
                  width={524}
                  height={471}
                  alt='gardeners image'
                  priority
                  className='object-contain'
                />
              </section>
            </section>
          </div>
        </Wrapper>
      </div>
    </main>
  );
}

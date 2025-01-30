import React from "react";
import Link from "next/link";
import { genPageMetadata } from "@/app/seo";
import Wrapper from "@/app/components/wrapper";
import CustomButton from "@/app/components/custom-button";

export const metadata = genPageMetadata({
  title: "OS Reboot",
  description:
    "Decentralized development is the foundation of censorship-resistant technology, but it can often feel isolating and overwhelming. OS Reboot is here to provide support, structure, and a sense of community for open-source developers navigating these challenges. Join our pilot program to invest in yourself, shape the program’s future, and contribute to the broader privacy tech community.",
});

const page = () => {
  return (
    <div className='bg-gray-custom-100 text-black pt-10 md:pt-[108px] pb-20 md:pb-10'>
      <Wrapper>
        <div className='max-w-[1133px] mx-auto rounded-[20px] border-2 border-black p-4 md:p-5 lg:p-10 bg-blue-custom-700'>
          <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
            <h1 className='text-[42px] md:text-[52px] font-medium'>OS Reboot</h1>
            <p className='text-[22px] md:text-2xl'>Build long-term resilience</p>
          </section>

          <section className='flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-6 md:p-5 mb-[30px]'>
            <div className='flex flex-col gap-4 text-lg max-w-[540px]'>
              <section>
                <p className='font-semibold underline underline-offset-4'>TIMELINE:</p>
                <p>8 sessions, Feb - July 2025</p>
                <p className='font-semibold'>
                  Feb 12 <span className='font-normal'>✧</span> Mar 3 <span className='font-normal'>✧</span> Mar 26{" "}
                  <span className='font-normal'>✧</span> Apr 16 <span className='font-normal'>✧</span> May 7 <span className='font-normal'>✧</span>{" "}
                  Jun 4 <span className='font-normal'>✧</span> Jun 25 <span className='font-normal'>✧</span> Jul 16
                </p>
              </section>

              <section>
                <p className='font-semibold underline underline-offset-4'>LOCATION:</p>
                <p>Virtual, 4PM GMT</p>
              </section>

              <section>
                <p className='font-semibold underline underline-offset-4'>{`Tl;DR`}:</p>
                <p>8 sessions, Feb - July 2025</p>
                <p>Take a step back, look at the bigger picture, see where your work fits in & make sure you are on track to f*ck some sh*t up.</p>
              </section>
            </div>

            <div className='flex flex-col gap-[5px] p-5 md:p-[30px] md:pb-[60px] bg-blue-custom-600 rounded-[10px] w-full md:min-w-[400px]'>
              <p className='text-[22px] leading-[160%] font-medium'>Ready to reboot?</p>
              <p className='text-lg'>
                Ready to reboot? You have until <span className='font-semibold'>February 3rd</span> to sign up & help architect our framework.
              </p>
              <CustomButton
                href='https://form.jotform.com/250026446325046'
                props={{
                  className:
                    "rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[14px] px-[38px] text-black text-nowrap border-2 border-black flex items-center justify-center mt-[25px] md:mt-[50px] md:w-fit",
                  target: "_blank",
                }}
              >
                Join OS Reboot
              </CustomButton>
            </div>
          </section>

          <section className='pb-[40px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>About the program:</p>
            </section>
            <p className='text-lg leading-[160%]'>
              Decentralized development is a critical aspect of building censorship-resistant technology. But sometimes it can feel lonely or
              overwhelming. OS Reboot is designed to help. Join this pilot, invest in yourself & shape the program’s architecture for the broader
              privacy tech community.
            </p>
          </section>

          <section className='pb-[40px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>What to expect:</p>
            </section>
            <section className='text-lg leading-[160%]'>
              <ul className='list-disc list-inside flex flex-col gap-[6px]'>
                <li>Virtual Group Sessions. 60-minute interactive discussions held approximately every 3 weeks between January and June 2025.</li>
                <li>Structured Sessions. A combination of guided facilitation, individual reflection time, and group discussions.</li>
                <li>Show Up. Missing more than two sessions will make this program unsuitable for you.</li>
                <li>
                  Architect the Program. Your input shapes the session topics, and then some. Together, let’s create an impactful offering for the
                  broader community.
                </li>
              </ul>
            </section>
          </section>

          <section className='pb-[40px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'> How to participate?:</p>
            </section>
            <section className='text-lg leading-[160%]'>
              <ul className='list-disc list-inside flex flex-col gap-[6px]'>
                <li>
                  You can’t change the world in isolation. Get out of your corner and talk to others, so we can build something bigger together.
                </li>
                <li>
                  Translate your revolutionary aspirations into effective day-to-day action. Get structure for ensuring your work actively shapes our
                  new world.
                </li>
                <li>
                  You get access to two badass coaches with a hell of a track record. In addition to the sessions, they're offering out-of-band
                  support for targeted questions. For free? That’s insane.
                </li>
                <li>
                  You help us shape this program to be even more impactful the next time around. Have you heard how bad of an issue burnout is? Let’s
                  combat it.
                </li>
              </ul>
            </section>
          </section>

          <section className='pb-[40px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>The human side of open source::</p>
            </section>

            <section className='flex flex-col gap-[10px]'>
              <p className='text-lg leading-[160%]'>
                In OS Reboot, we’re confronting the unspoken psychological challenges of open-source development head-on. Here’s just a taste of what
                we’ll tackle:
              </p>
              <section className='text-lg leading-[160%] pl-[40px]'>
                <ul className='list-disc list-inside flex flex-col gap-[6px]'>
                  <li>burnout & stress</li>
                  <li>WTF is rest</li>
                  <li>social coordination in decentralized development</li>
                </ul>
              </section>
              <p className='text-lg leading-[160%]'>
                And that’s just scratching the surface. We’ll go much deeper, with you driving the topics of conversation through our onboarding form.
                Our goal? To equip you with the psychological and social tools you need to not just survive, but thrive in the open-source world.
              </p>
            </section>
          </section>

          <section className='pb-[40px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'> What you bring:</p>
            </section>
            <section className='text-lg leading-[160%]'>
              <ul className='list-disc list-inside flex flex-col gap-[6px]'>
                <li>
                  Show up, fully. Garbage in, garbage out. If you show up ready to be honest with yourself, the facilitation will give you structure
                  to translate that energy into real world impact.
                </li>
                <li>
                  Your unfiltered input. When you sign up, you tell us what sessions you want. Your real-time feedback helps us course correct along
                  the way. Your feedback determines the future of the program.
                </li>
              </ul>
            </section>
          </section>

          <section className='pb-[40px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>Meet your facilitators:</p>
            </section>

            <section>
              <p className='text-xl leading-[160%] font-medium pb-[10px]'>Noemi Boyer</p>
              <p className='text-lg leading-[160%]'>
                Meet Noemi Boyer - democracy's biggest fan and DemoLab's fearless leader. She's on a mission to shake up how Costa Rica and Latin
                America do democracy, one fired-up citizen at a time. Less dusty frameworks, more "let's get sh*t done."
                <br />
                <br />
                Now she's bringing her magic to OS Reboot as our facilitator extraordinaire. After years of coaching entrepreneurs and navigating
                startup culture, she knows a thing or two about getting brilliant minds to play nice together.
                <br />
                <br />
                In Noemi's sessions, expect zero snooze-worthy PowerPoints and all action. She'll help you turn those "wouldn't it be cool if..."
                moments into "holy cow, we actually did it!" victories. Because if there's one thing Noemi loves more than democracy, it's watching
                good ideas become great solutions.
              </p>
            </section>

            <section className='pt-[60px]'>
              <p className='text-xl leading-[160%] font-medium pb-[10px]'>Amiti Uttarwar</p>
              <p className='text-lg leading-[160%]'>
                Amiti Uttarwar has been a bitcoin P2P protocol engineer since 2019. She's a mountaineer, meditator, and armchair philosopher. She’s
                coached and mentored over 20 full-time open-source devs, and is not slowing down anytime soon.
                <br />
                <br />
                Amiti is on a mission to spark critical engagement around questions like how we work. Now, she’s bringing her passion, creativity, and
                sometimes-kinda-aggro truth seeking energy to OS Reboot, building a program that helps devs dev longer.
              </p>
            </section>
          </section>

          <section className='pb-[40px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'> Key details recap:</p>
            </section>

            <section className='flex flex-col gap-[20px]'>
              <p className='text-lg leading-[160%]'>8 sessions, Feb - July 2025, online @ 4PM GMT.</p>

              <p className='font-semibold text-lg leading-[160%]'>
                Feb 12 <span className='font-normal'>✧</span> Mar 3 <span className='font-normal'>✧</span> Mar 26{" "}
                <span className='font-normal'>✧</span> Apr 16 <span className='font-normal'>✧</span> May 7 <span className='font-normal'>✧</span> Jun
                4 <span className='font-normal'>✧</span> Jun 25 <span className='font-normal'>✧</span> Jul 16
              </p>

              <p className='text-lg leading-[160%]'>If you are stoked to participate but these proposed times don’t work for you, talk to us.</p>

              <div className='flex flex-col gap-[5px] p-[30px] pb-[60px] bg-blue-custom-600 rounded-[10px] w-full'>
                <p className='text-[22px] leading-[160%] font-medium'>Ready to reboot?</p>
                <p className='text-lg'>
                  Ready to reboot? You have until <span className='font-semibold'>February 3rd</span> to sign up & help architect our framework.
                </p>
                <CustomButton
                  href='https://form.jotform.com/250026446325046'
                  props={{
                    className:
                      "rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[14px] px-[38px] text-black text-nowrap border-2 border-black flex items-center justify-center mt-[50px] md:w-fit",
                  }}
                >
                  Join OS Reboot
                </CustomButton>
              </div>
            </section>
          </section>

          <section className='flex flex-col gap-[20px] pb-[40px]'>
            <p className='text-xl leading-[160%] font-medium'>Questions?</p>

            <div>
              <p>Reach out to us.</p>
              <Link href='mailto:waye.dev@gmail.com?subject=Initiative%20proposal' className='flex items-center gap-2'>
                <span className='underline-offset-8 underline'>waye.dev@gmail.com</span>
                <span className='text-blue-custom-100'>→</span>
              </Link>
            </div>
          </section>
        </div>
      </Wrapper>
    </div>
  );
};

export default page;

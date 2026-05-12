import React from "react";
import Wrapper from "@/app/components/wrapper";
import { genPageMetadata } from "@/app/seo";
import { cn } from "@/utils";
import { DetailsCard, RebootImage } from "@/app/components/os-reboot/cards";

export const metadata = genPageMetadata({
  title: "Wayepoints",
  description:
    "1:1 coaching for freedom tech builders — personalized support to help you identify high-leverage ways to increase your impact and sustain it.",
  url: "https://waye.dev/initiatives/wayepoints",
});

/** Icon tiles — navy on cream (Everest); white wells on blue panels (same language as step numbers in “Program overview”) */
const IconTile = ({ children, onBluePanel = false }: { children: React.ReactNode; onBluePanel?: boolean }) => (
  <div
    className={cn(
      "w-11 h-11 sm:w-12 sm:h-12 rounded-[10px] flex items-center justify-center shrink-0 mt-0.5 text-black",
      onBluePanel ? "border-2 border-black bg-white" : "border border-black bg-blue-custom-800"
    )}
  >
    {children}
  </div>
);

const BenefitGrid = ({
  items,
  onBluePanel = false,
}: {
  items: readonly { icon: React.ReactNode; title: string; body: string }[];
  /** White icon wells on blue-custom-800 sections. */
  onBluePanel?: boolean;
}) => (
  <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-x-10 md:gap-y-10'>
    {items.map(({ icon, title, body }) => (
      <div key={title} className='flex gap-3 sm:gap-4 items-start'>
        <IconTile onBluePanel={onBluePanel}>{icon}</IconTile>
        <div className='flex flex-col gap-1.5 min-w-0 flex-1'>
          <h3 className='text-base font-semibold leading-snug text-black'>{title}</h3>
          <p className='text-base leading-7 text-black/85'>{body}</p>
        </div>
      </div>
    ))}
  </div>
);

const iconTarget = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
    <circle cx='12' cy='12' r='9' />
    <path d='M12 6l-2 6 2 2 2-2-2-6z' />
    <circle cx='12' cy='12' r='1.5' fill='currentColor' stroke='none' />
  </svg>
);
const iconRefresh = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
    <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
    <path d='M3 3v5h5' />
  </svg>
);
const iconBars = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
    <path d='M4 20V14 M8 20V9 M12 20V6 M16 20V10 M20 20V5' />
  </svg>
);
const iconGrid = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
    <rect x='5' y='5' width='14' height='14' rx='2' />
    <path d='M12 8v8M8 12h8' />
    <circle cx='6' cy='6' r='1' fill='currentColor' stroke='none' />
    <circle cx='18' cy='6' r='1' fill='currentColor' stroke='none' />
    <circle cx='6' cy='18' r='1' fill='currentColor' stroke='none' />
    <circle cx='18' cy='18' r='1' fill='currentColor' stroke='none' />
  </svg>
);

const coachingStepIcon = (digit: "1" | "2" | "3" | "4") => (
  <span className='text-lg sm:text-xl font-bold tabular-nums leading-none text-black' aria-hidden>
    {digit}
  </span>
);

/** Match OS Reboot [Everest]: alternate cream panels with blue-gray panels */
const panelGray =
  "rounded-[10px] border-2 border-black bg-gray-custom-100 px-5 py-7 sm:px-7 sm:py-8 md:px-9 md:py-9";
const panelBlue =
  "rounded-[10px] border-2 border-black bg-blue-custom-800 px-5 py-7 sm:px-7 sm:py-8 md:px-9 md:py-9";

const page = () => {
  const whatYouGetItems = [
    { icon: iconTarget, title: "Clarify signal from noise", body: "Get clear on what actually matters and where your attention belongs." },
    { icon: iconRefresh, title: "Translate intent into action", body: "Turn goals into testable behaviors and observable milestones." },
    { icon: iconBars, title: "Reduce cognitive load", body: "Build personal systems so you can do less while getting more done." },
    { icon: iconGrid, title: "Sustain your work", body: "Increase clarity, agency, and momentum over the long term." },
  ] as const;

  const coachingItems = [
    { icon: coachingStepIcon("1"), title: "Goal clarity", body: "Clarify the goal you want to move forward." },
    { icon: coachingStepIcon("2"), title: "Patterns & blind spots", body: "Identify patterns, constraints, or blind spots." },
    { icon: coachingStepIcon("3"), title: "Perspectives", body: "Test new perspectives or approaches." },
    { icon: coachingStepIcon("4"), title: "Next step", body: "Leave with a clear next step or experiment." },
  ] as const;

  const howSteps = [
    {
      step: "1",
      title: "Express interest",
      body: (
        <p>
          Fill out a short form to let HRF know you&apos;re interested! If you have any questions, please email us at{" "}
          <a href='mailto:hello@waye.dev' className='underline underline-offset-[0.2em] decoration-black/40 hover:decoration-black'>
            hello@waye.dev
          </a>
          .
        </p>
      ),
    },
    {
      step: "2",
      title: "Match with a coach",
      body: (
        <p>
          You&apos;ll get info on available coaches and select who you want to work with. Each coach has their own intake process to identify where
          you&apos;re at and what your primary goals are.
        </p>
      ),
    },
    {
      step: "3",
      title: "Coaching + feedback",
      body: (
        <p>
          <span className='font-semibold text-black'>6 sessions, 60 minutes each, 3 weeks apart.</span> Sessions are concrete — you&apos;ll leave each one
          with a clear goal and a technique to get you closer to it. If you don&apos;t like your coach, you can change.
        </p>
      ),
    },
    {
      step: "4",
      title: "Closing",
      body: <p>A final check-in to reflect on progress, an invitation to share your feedback, and explore what comes next.</p>,
    },
  ] as const;

  return (
    <div className='bg-gray-custom-100 text-black pt-10 md:pt-[108px] pb-16 md:pb-12 min-h-full'>
      <Wrapper className='h-full'>
        <div className='max-w-[1133px] mx-auto rounded-[20px] w-full h-full sm:border-2 sm:border-black'>
          <article className='bg-white h-full w-full px-4 py-9 sm:px-7 sm:py-10 lg:px-10 lg:py-12 rounded-[20px] min-h-screen border border-black'>
            <div className='flex gap-6 flex-col sm:flex-row sm:relative justify-between'>
              <section className='flex flex-col sm:absolute top-0 left-0'>
                <h1 className='text-4xl sm:text-5xl font-medium tracking-tight leading-[1.08] text-black'>Wayepoints</h1>
              </section>
              <section className='flex justify-end items-end w-full min-w-0 flex-1 sm:mt-8 md:mt-0'>
                <RebootImage />
              </section>
            </div>

            <section className='pt-8 sm:pt-10 pb-10 sm:pb-12'>
              <DetailsCard
                tldrFirst
                intro={
                  <div className='flex flex-col gap-3'>
                    <p className='text-xl sm:text-2xl font-medium leading-snug text-black'>
                      You&apos;re committed to building freedom tech.
                    </p>
                    <p className='text-xl sm:text-2xl font-medium leading-snug text-black/80'>
                      We&apos;re committed to helping you build systems that last.
                    </p>
                  </div>
                }
                timeline={
                  <span>6 sessions. 60 minutes each. Every 3 weeks. Program runs June through November.</span>
                }
                tldr={
                  <span className='flex flex-col gap-3'>
                    <span>Wayepoints are 1:1 coaching sessions for freedom tech builders.</span>
                    <span>Executive coaches help you identify high-leverage ways to increase your impact in sustainable ways.</span>
                  </span>
                }
              />
            </section>

            <section className='pt-2 sm:pt-4 pb-10 sm:pb-12'>
              <div className={panelGray}>
                <h2 className='text-xl sm:text-2xl font-medium leading-snug tracking-tight text-black mb-5'>The challenge</h2>
                <div className='flex flex-col gap-4 text-base leading-7 text-black/90'>
                  <p>High-autonomy environments produce extraordinary work. They also produce a particular kind of exhaustion.</p>
                  <p>When there&apos;s a lot of freedom and very little imposed structure, it&apos;s common to experience:</p>
                  <ul className='list-disc pl-[1.15em] flex flex-col gap-2 marker:text-black/70'>
                    <li className='pl-1'>Ambiguity around what actually matters</li>
                    <li className='pl-1'>Diffuse accountability and long feedback loops</li>
                    <li className='pl-1'>Sustained cognitive load</li>
                    <li className='pl-1'>Isolation and eventual burnout</li>
                  </ul>
                  <p>
                    Executive coaching supports high-agency builders in developing internal structure, clarity, and long-term ways of working.
                  </p>
                  <p className='text-lg sm:text-xl font-medium leading-snug text-black mt-4'>
                    <span className='font-semibold'>Sustainable builders create sustainable infrastructure.</span>
                  </p>
                </div>
              </div>
            </section>

            <section className='pt-2 sm:pt-4 pb-10 sm:pb-12'>
              <div className={panelBlue}>
                <h2 className='text-xl sm:text-2xl font-medium leading-snug tracking-tight text-black mb-3'>
                  Anatomy of a call
                </h2>
                <p className='text-base font-medium leading-7 text-black/90 mb-6'>
                  A structured conversation focused on a specific outcome — practical, concrete, and led by you.
                </p>
                <p className='text-base leading-7 text-black/80 mb-6'>Together with your coach, you will:</p>
                <BenefitGrid items={coachingItems} onBluePanel />
                <div className='flex flex-col gap-4 mt-8 pt-6 border-t border-black/25 text-base leading-7 text-black/90'>
                  <p>
                    Sometimes this means solving a current problem. Sometimes it means seeing a situation differently. Often it means discovering a simpler or
                    more effective path forward.
                  </p>
                  <p className='text-black/80'>
                    The purpose of coaching is not to give you answers. The purpose is to help you see your situation more clearly so you can decide your own
                    next move.
                  </p>
                </div>
              </div>
            </section>

            <section className='pt-2 sm:pt-4 pb-10 sm:pb-12'>
              <div className={panelGray}>
                <h2 className='text-xl sm:text-2xl font-medium leading-snug tracking-tight text-black mb-6'>What you get</h2>
                <BenefitGrid items={whatYouGetItems} />
              </div>
            </section>

            <section className='pt-2 sm:pt-4 pb-10 sm:pb-12' aria-label='Program overview'>
              <div className={cn(panelBlue, "sm:px-8 sm:py-9 md:px-10 md:py-10")}>
                <div className='mb-8 md:mb-10'>
                  <h2 className='text-xl sm:text-2xl font-medium leading-snug tracking-tight text-black'>Program overview</h2>
                  <p className='mt-2 text-sm font-medium uppercase tracking-[0.12em] text-black/60'>Interest → match → sessions → closing</p>
                </div>

                <ol className='list-none m-0 p-0 max-w-3xl'>
                  {howSteps.map(({ step, title, body }, index) => {
                    const isLast = index === howSteps.length - 1;
                    return (
                      <li key={step} className='flex gap-4 sm:gap-5 items-stretch'>
                        <div className='flex flex-col items-center w-11 sm:w-12 shrink-0' aria-hidden>
                          <div className='w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-black bg-white flex items-center justify-center text-sm sm:text-base font-bold text-black tabular-nums'>
                            {step}
                          </div>
                          {!isLast ? <div className='w-0.5 flex-1 min-h-6 bg-black/25 mt-2' /> : null}
                        </div>
                        <div className={`flex-1 min-w-0 ${isLast ? "pb-0" : "pb-8 sm:pb-10"}`}>
                          <h3 className='text-base font-semibold leading-snug text-black pt-0.5'>{title}</h3>
                          <div className='mt-2 text-base leading-7 text-black/90 [&_p]:leading-7 [&_p+_p]:mt-3'>{body}</div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </section>

            <section className='pt-2 sm:pt-4 pb-10 sm:pb-12'>
              <div className={panelGray}>
                <h2 className='text-xl sm:text-2xl font-medium leading-snug tracking-tight text-black mb-6'>The approach</h2>
                <h3 className='text-base sm:text-lg font-medium leading-snug text-black mb-3'>Our values</h3>
                <div className='flex flex-col gap-5 mb-8'>
                  <div>
                    <p className='text-base font-semibold leading-snug text-black mb-1.5'>You are an explorer</p>
                    <p className='text-base leading-7 text-black/90'>
                      You carve your own path. We provide frameworks and signal so you can make decisions more effectively. We don&apos;t make decisions for
                      you.
                    </p>
                  </div>
                  <div>
                    <p className='text-base font-semibold leading-snug text-black mb-1.5'>We are scientists</p>
                    <p className='text-base leading-7 text-black/90'>
                      We practice healthy skepticism. Failure is data. Feelings are data. Discomfort is often information. We define goals, then test, observe,
                      and iterate.
                    </p>
                  </div>
                  <div>
                    <p className='text-base font-semibold leading-snug text-black mb-1.5'>Privacy matters</p>
                    <p className='text-base leading-7 text-black/90'>
                      Chatham House Rule by default. Two exceptions that you are agreeing to by participating: attendance is shared with HRF & Waye coaches may
                      share internally. More details{" "}
                      <a
                        href='https://wayedev.notion.site/wayepoints-operating-overview?source=copy_link'
                        className='underline underline-offset-[0.2em] decoration-black/40 hover:decoration-black'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>
                </div>

                <h3 className='text-base sm:text-lg font-medium leading-snug text-black mb-3 pt-2 border-t border-black/15'>Participation</h3>
                <div className='flex flex-col gap-5'>
                  <div>
                    <p className='text-base font-semibold leading-snug text-black mb-1.5'>Show up ready</p>
                    <p className='text-base leading-7 text-black/90'>
                      This program only works if you bring honesty to your coaching calls. If you do, you&apos;ll see results.
                    </p>
                  </div>
                  <div>
                    <p className='text-base font-semibold leading-snug text-black mb-1.5'>Rescheduling is fine within reason</p>
                    <p className='text-base leading-7 text-black/90'>
                      Life happens. Rescheduling is fine, as long as you provide advance notice and sessions stay within the program timeline.
                    </p>
                  </div>
                  <div>
                    <p className='text-base font-semibold leading-snug text-black mb-1.5'>You can change coaches</p>
                    <p className='text-base leading-7 text-black/90'>
                      If something isn&apos;t feeling right, you can switch coaches at any time.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className='pt-2 sm:pt-4 pb-10 sm:pb-14'>
              <div className={panelBlue}>
                <h2 className='text-xl sm:text-2xl font-medium leading-snug tracking-tight text-black mb-5'>Interested?</h2>
                <div className='flex flex-col gap-4 text-base leading-7 text-black/90'>
                  <p>If you received an invitation from HRF, follow the link in your email to express interest.</p>
                  <p>
                    Questions? Email us at{" "}
                    <a href='mailto:hello@waye.dev' className='underline underline-offset-[0.2em] decoration-black/40 hover:decoration-black'>
                      hello@waye.dev
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </Wrapper>
    </div>
  );
};

export default page;

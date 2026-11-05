import React from "react";
import Wrapper from "@/app/components/wrapper";
import { genPageMetadata } from "@/app/seo";
import CopyButton from "./copy-button";
import { FOLLOW_THROUGH_PROMPT, SOURCES } from "./prompt";

export const metadata = genPageMetadata({
  title: "Finish 2026 Strong: Follow-Through Coach Prompt",
  description:
    "Copy this prompt into any AI tool, share a photo of your worksheet, and it becomes a coach that checks in with you through December 31.",
  url: "https://waye.dev/2026-strong",
});

export default function FinishStrongPage() {
  return (
    <div className='bg-gray-custom-100 text-black pt-10 md:pt-[108px] pb-16 md:pb-12 min-h-full'>
      <Wrapper className='h-full'>
        <div className='max-w-[1133px] mx-auto rounded-[20px] w-full h-full sm:border-2 sm:border-black'>
          <article className='bg-white h-full w-full px-4 py-9 sm:px-7 sm:py-10 lg:px-10 lg:py-12 rounded-[20px] border border-black'>
            <h1 className='text-3xl sm:text-5xl font-medium tracking-tight leading-[1.08] text-black'>
              Finish 2026 Strong: Follow-Through Coach Prompt
            </h1>
            <p className='mt-6 text-lg sm:text-xl leading-8 text-black/85 max-w-3xl'>
              Copy the prompt below into any AI tool, then share a photo of your worksheet. Build an AI coach that checks in with you through December 31.
            </p>

            <p className='mt-4 text-lg sm:text-xl leading-8 text-black/85 max-w-3xl'>
              If your AI tool can&apos;t remember past chats, it will give you a progress log at the end of each check-in. Save it,
              and next time paste the prompt plus your log into a new chat.
            </p>

            <section className='pt-10'>
              <div className='flex items-center justify-between gap-4 mb-4'>
                <h2 className='text-xl sm:text-2xl font-medium leading-snug tracking-tight text-black'>The prompt</h2>
                <CopyButton text={FOLLOW_THROUGH_PROMPT} />
              </div>
              <pre className='bg-blue-custom-1000 border border-black rounded-[14px] p-4 sm:p-6 max-h-[600px] overflow-auto text-sm leading-6 text-black whitespace-pre-wrap break-words font-mono'>
                {FOLLOW_THROUGH_PROMPT}
              </pre>
            </section>

            <section className='pt-10'>
              <h2 className='text-xl sm:text-2xl font-medium leading-snug tracking-tight text-black mb-2'>Sources</h2>
              <p className='text-base leading-7 text-black/80 mb-4'>The research the prompt draws on, in the order it appears.</p>
              <ul className='list-disc pl-[1.15em] flex flex-col gap-1.5 text-sm sm:text-base leading-7 text-black/85 marker:text-black/60'>
                {SOURCES.map(({ label, href }) => (
                  <li key={label} className='pl-1'>
                    {href ? (
                      <a
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='underline underline-offset-[0.2em] decoration-black/40 hover:decoration-black'
                      >
                        {label}
                      </a>
                    ) : (
                      label
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </Wrapper>
    </div>
  );
}

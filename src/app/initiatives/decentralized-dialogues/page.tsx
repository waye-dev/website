import { genPageMetadata } from "@/app/seo";
import Wrapper from "@/app/components/wrapper";
import React from "react";
import CustomButton from "@/app/components/custom-button";
import Link from "next/link";

export const metadata = genPageMetadata({
  title: "Decentralized Dialogues",
  description: `Join this intimate seminar series, designed for Bitcoin developers ready to think critically about the ethical and societal implications of their work.`,
  url: "https://waye.dev/initiatives/decentralized-dialogues",
});

const page = () => {
  return (
    <div className='bg-gray-custom-100 text-black pt-10 md:pt-[128px] pb-[130px]'>
      <Wrapper>
        <div className='max-w-[1030px] mx-auto rounded-[20px] border-2 border-black p-4 md:p-5 lg:p-10 bg-blue-custom-700'>
          <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
            <h1 className='text-[42px] md:text-[52px]'>Decentralized Dialogues</h1>
            <p className='text-[22px] md:text-2xl'>Challenge your perspectives, build better systems.</p>
          </section>

          <section className='flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-6 md:p-5 mb-[60px]'>
            <div className='flex flex-col gap-4 text-lg max-w-[540px]'>
              <section>
                <p className='font-semibold underline underline-offset-4'>12 Virtual Sessions:</p>
                <p> April 2025 – March 2026 at 5PM GMT on the last Wednesday of each month
                </p>
              </section>

              <section>
                <p className='font-semibold underline underline-offset-4'>Seats.</p>
                <p>8 remaining.</p>
              </section>

              <section>
                <p className='font-semibold underline underline-offset-4'>Tl;DR:</p>
                <p>Cryptography, political philosophy and legal theory. 12 seminars where we apply seminal texts to Bitcoin’s implications on power, privacy and freedom. 
                </p>
              </section>
      
            </div>

            <div className='flex flex-col gap-[5px] p-5 md:p-[30px] md:pb-[55px] bg-blue-custom-600 rounded-[10px] w-full md:min-w-[400px]'>
              <p className='text-[22px] leading-[160%] font-medium'>Only 8 spots left. Stop lurking and apply.</p>
              <p className='text-lg'>
              Bitcoin isn’t just software—it’s about sovereignty, disruption, and rewriting the rules. If you’re an OS dev serious about building systems that challenge the status quo, we’re glad you’re here.
              </p>
              <CustomButton
                href='https://docs.google.com/forms/d/e/1FAIpQLSexujtqe0_bRlv1bKGzFZ8DNBlwY_V9w5gQ67KFHZt-B9OoNg/viewform'
                props={{
                  className:
                    "rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[15px] px-[43px] text-black text-nowrap border-2 border-black flex items-center justify-center mt-[25px] md:mt-[50px] md:w-fit underline",
                  target: "_blank",
                }}
              >
                Let's Go
              </CustomButton>
            </div>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>General:</p>
            </section>
            <section className='flex flex-col gap-[27px]'>
              <p className='text-lg leading-[160%]'>
              This is a year-long seminar series for open-source developers ready to discuss the legal, political, and ethical forces shaping Bitcoin.
              </p>
              <p className='text-lg leading-[160%]'>
              We dissect essential readings—from ancient philosophy to cypherpunk manifestos—and show up monthly to debate how these big ideas interact with the code you’re shipping. Think gloves-off salon to engage in these big ideas.
              </p>
            </section>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>What to expect:</p>
            </section>
            <section className='text-lg leading-[28.8px]'>
              <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                <li>
                  <span className='font-semibold'>12 virtual group sessions.</span> (10 participants max) with a truly great group of people. 
                </li>
                <li>
                  <span className='font-semibold'>Pre-session readings.</span> like <em>Plato’s Republic, Hobbes’ Leviathan, Crypto Anarchist Manifesto, Security Without Identification.</em>
                </li>
                <li>
                  <span className='font-semibold'>No lectures. No spectators. Participation encouraged.
                  </span> 
                </li>
              </ul>
            </section>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>Why participate?</p>
            </section>
            <section className='text-lg leading-[28.8px]'>
              <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                <li>
                Because Bitcoin is reshaping how power and governance work—but what does that mean?
                </li>
                <li>
                Because building without context or reflection isn’t enough anymore.
                </li>
                <li>
                Because your code influences systems and people.
                </li>
                <li>
                Because thoughtful developers who care about the bigger picture are essential.
                </li>
              </ul>
            </section>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>What you bring:</p>
            </section>
            <section className='text-lg leading-[28.8px]'>
              <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                <li>
                  <span className='font-semibold'>Curiosity.</span> Show up ready to question and engage.
                </li>
                <li>
                  <span className='font-semibold'>Commitment.</span> Miss more than 2 sessions? This isn’t for you.
                </li>
                <li>
                  <span className='font-semibold'>Perspective.</span> Your input is part of the learning.
                </li>
              </ul>
            </section>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>Meet your facilitators:</p>
            </section>
            <section className='text-lg leading-[28.8px]'>
              <p className='text-xl leading-[160%] font-medium pb-[10px]'>Jesse Posner</p>
              <p className='text-lg leading-[160%]'>
                Jesse Posner went from arguing cases in court to arguing with cryptographic proofs—because who needs a judge when you’ve got math on
                your side? A philosophy-trained mergers-and-acquisitions lawyer once deep in high-stakes banking litigation, he ditched the suits for
                software and never looked back.
                <br />
                <br />
                Jesse earned a B.A. in Liberal Arts from St. John’s College, renowned for its rigorous Great Books curriculum, which fosters deep
                engagement with the foundational works of Western thought. This training in logic and philosophy laid the groundwork for his
                transition into cryptography, where first principles matter more than legal precedent.
                <br />
                <br />
                At Coinbase, he designed key management systems that secured billions, built threshold signature schemes, and even hacked together
                privacy tech just for fun. Now, as a Senior Blockchain Engineer at Block, he’s making self-custody actually usable with Bitkey and
                rewriting the rules of Bitcoin security.
                <br />
                <br />
                From adaptor signatures to FROST, Jesse's work has earned backing from Brink and the Human Rights Foundation. His mission? Making 
                decentralized tech unstoppable, turning privacy into a guarantee, and proving that cryptographers have more power than lawyers ever did.
              </p>
            </section>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'> Key details recap:</p>
            </section>

            <section className='flex flex-col gap-[28px]'>
              <p className='text-lg leading-[160%]'>12 virtual sessions April 2025 – March 2026 at 5PM GMT on the last Wednesday of each month
              </p>
              <p className='font-semibold text-lg leading-[160%]'>
                Apr 30 ✧ May 28 ✧ Jun 25 ✧ Jul 30 ✧ Aug 27 ✧ Sep 24 ✧ Oct 29 ✧ Nov 26 ✧ Dec 31 ✧ Jan 28 ✧ Feb 25 ✧ Mar 25{" "}
              </p>

              <div className='flex flex-col gap-[5px] p-5 md:p-[30px] md:pb-[60px] bg-blue-custom-600 rounded-[10px] w-full'>
                <p className='text-[22px] leading-[160%] font-medium'>Ready to explore bitcoin's transformative potential?</p>
                <p className='text-lg'>
                  You have until <span className='font-semibold'>April 22nd</span> to secure your spot in this exclusive seminar series. Only 10 seats
total — don’t miss out.
                </p>
                <CustomButton
                  href='https://docs.google.com/forms/d/e/1FAIpQLSexujtqe0_bRlv1bKGzFZ8DNBlwY_V9w5gQ67KFHZt-B9OoNg/viewform'
                  props={{
                    className:
                      "rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[14px] px-[38px] text-black text-nowrap border-2 border-black flex items-center justify-center mt-[35px] md:w-fit underline",
                    target: "_blank",
                  }}
                >
                  Join the Dialogue
                </CustomButton>
              </div>
            </section>
          </section>

          <section className='flex flex-col gap-[9px] pb-[45px]'>
            <p className='text-xl leading-[160%] font-medium'>Questions?</p>

            <div className='text-lg leading-[160%]'>
              <p>Let's chat.</p>
              <Link href='mailto:waye.dev@gmail.com' className='flex items-center gap-2'>
                <span className='underline-offset-8 underline'>hello@waye.dev</span>
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

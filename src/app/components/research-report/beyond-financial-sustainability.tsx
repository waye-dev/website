import Image from "next/image";
import { QuoteCards } from "./_components/quotes";
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';
import { AnimatedSvgDots } from "./_components/animated-svg-dots";
import { CircularProgress } from "./_components/circular-progress";

export const BeyondFinancialSustainability = () => {
  return (
    <div>
      <div className='flex flex-col gap-14 text-base md:text-lg text-white font-inter py-24'>
        <h5 className='text-lg md:text-xl lg:text-2xl leading-[120%] pb-6 font-inknutAntiqua text-center  mx-auto'>
          Beyond financial sustainability: <br /> <br /> <span className='text-xl md:text-2xl lg:text-[32px] leading-[120%]'>The hidden costs of freedom tech development</span>
        </h5>

        <section className='flex flex-col gap-2'>
          <h5 className='text-lg md:text-xl leading-[120%] font-bold font-inknutAntiqua'>Role sustainability: the ecosystem thrives, the position may not</h5>
        </section>

        <TakeawayCard>
          <p>
            Despite expressing uncertainty about their roles, contributors are optimistic about the sustainability of Bitcoin and their individual career prospects in the wider ecosystem. Yet, this abundance mindset may mask a critical vulnerability: the prevailing two-year tenure in grant-funded roles quietly drains protocol expertise, as knowledge leaves with each departure and turnover outpaces the accumulation of long-term experience.
          </p>
        </TakeawayCard>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6 flex-wrap justify-between'>
          <section className='flex flex-row gap-6 items-end'>
            <CircularProgress value={69} size={130} />
            <p className='font-inter font-semibold text-[22px] max-w-[340px]'>of participants had held grant-funded roles for two years or less</p>
          </section>

          <section className='flex flex-row-reverse gap-6 items-center md:flex-row'>
            <AnimatedSvgDots 
              svgPath='/svgs/beyond-financial-sustainability/burnout-once.svg' 
              alt='dots animation' 
              width={116} 
              height={102}
              staggerDelay={0.05}
              animationDuration={0.6}
              numerator={14}
              denominator={26}
              numeratorColor='#F9D483'
            />
            <p className='font-inter font-semibold text-right sm:text-left text-[22px] max-w-[340px]'>mentioned experiencing burnout at least once</p>
          </section>
        </div>
    
        <p>
          Across levels of experience, contributors expressed confidence in Bitcoin's long-term sustainability, even as they acknowledged that their own positions may be temporary — a sentiment voiced most often by newer and mid-career developers. <strong>Many in this group view grant-funded development as a strategic career phase rather than a permanent destination</strong>. As noted earlier, 69% of participants had held their grant-funded roles for two years or less. This could reflect the ecosystem's recent growth, normal career progression, or a deeper sustainability challenge: the loss of experienced developers before they can pass on their expertise.
        </p>

        <p>
          The ecosystem's health depends on retaining enough developers long enough to build deep protocol knowledge, but the current model is designed to encourage short-term contributions over long-term commitments. When developers leave, they take with them context and expertise that no amount of logging can fully preserve. Without intentional structures for knowledge transfer, <strong>each departure means losing institutional knowledge that cannot be fully captured in the project history</strong>.
        </p>

        <QuoteCards
          quotes={[
            {
              id: "24",
              text: "I spent a year and a half working on this project and really getting to know it, and then, because I left, they basically had to train a whole new person who has to spend probably similar amount of time to really catch up to speed on how everything works. So that makes me wonder, is it really sustainable?",
              shareId: SHAREABLE_description_IDS.QUOTE_54,
              author: {
                type: "expert",
                respondentNumber: 24,
              },
            },
          ]}
        />

        <p>
          However, contributors aren't alarmed: they see Bitcoin work as a launchpad to other career opportunities in an expanding ecosystem. As one contributor (who had already left his grant-funded role) observed: "it doesn't close any doors, it just opens them." Many accept this replaceability as natural: "everybody's dispensable... it's the ecosystem that's important." But this normalization of transience means that critical knowledge quietly disappears every few years, with no pathways for contributors to remain engaged. <strong>The ecosystem sustains itself not by supporting individuals, but by continuously replacing them.</strong>
        </p>

        <QuoteCards
          quotes={[
            {
              id: "3",
              text: "We need to retain contributors who have had experience with the code base. Only if you're able to sustain new contributors, they will eventually become experienced contributors, and we need experienced contributors for the project sustainability. Otherwise, it's pretty bad, because there's so many intricate stuff in the code base which only experienced contributors see. So if there are no new contributors, there are no experienced contributors.",
              shareId: SHAREABLE_description_IDS.QUOTE_53,
              author: {
                type: "new",
                respondentNumber: 3,
              },
            },
            {
              id: "7",
              text: "The project was sustainable before I joined. I believe any project will be sustainable without any individual, anybody can go. So it's more like, how much the project helps me as a person?",
              shareId: SHAREABLE_description_IDS.QUOTE_53,
              author: {
                type: "new",
                respondentNumber: 7,
              },
            },
            {
              id: "8",
              text: "I don't worry too much, because I know that even if I lose the grants, I can get a job maybe in two months. So I'm very relaxed. And half of it is my mentality, but the other half is that I feel like there's just a lot of money going around right now.",
              author: {
                type: "mid",
                respondentNumber: 8,
              },
            },
            {
              id: "13",
              text: "There's an endless amount of projects and things to work on. There's always more ways we can improve Bitcoin and lots of different types of projects, lots of communities and events and opportunities to network with people and connect with people, and a lot of different organizations that fund this kind of work. There are also a lot of opportunities for hybrid situations where you can use open source to boost your resume and be able to get opportunities to go back into working for a for profit company, or being able to found a company and then still work on open source on the side, and then you could go back into open source full time. So it doesn't really close any doors. It just opens doors. It seems very viable as a career path.",
              author: {
                type: "new",
                respondentNumber: 13,
              },
            },
          ]}
        />
      </div>

      <div className='flex flex-col gap-14 text-base md:text-lg text-white font-inter py-24'>
        <section className='flex flex-col gap-2'>
          <h5 className='text-lg md:text-xl leading-[120%] font-bold font-inknutAntiqua'>Project sustainability: one funding model, two realities</h5>
        </section>

        <TakeawayCard>
          <p>
            The one-size-fits-all grant model fails to recognize the different realities of core infrastructure vs application work. Protocol work needs ongoing funding streams, applications need revenue freedom. Current grant structures constrain both in perpetual dependency, preventing the sustainability they aim to support.
          </p>
        </TakeawayCard>

        <p>
          Contributors recognize that sustainability requirements differ between core protocol and application. For those working on the protocol and its core infrastructure, grants are essential due to the lack of viable business model for their work. Those working on user-facing applications, by contrast, often have potential revenue streams. Yet many say this approach is implicitly discouraged by funders.
        </p>

        <QuoteCards
          quotes={[
            {
              id: "6",
              text: "Right now we have these foundations that are funding our work. But … maybe the more sustainable thing, long term, would be actual business revenue. I might pursue that direction, but it might not be available to everyone. I work on a user-facing product, where I could have paying subscribers, but if you're developing a library, or if you're developing Bitcoin Core, then you basically need sponsors.",
              shareId: SHAREABLE_description_IDS.QUOTE_58,
              author: {
                type: "expert",
                respondentNumber: 6,
              },
            },
          ]}
        />

        <p>
          When application developers propose hybrid models for their projects — combining grants with revenue — they face skepticism from funders, which prevents the very sustainability it aims to encourage. For core infrastructure contributors, the limitation plays out differently: yearly grant renewals incentivize short term deliverables rather than long-term investments. <strong>The result across both is a set of perverse incentives that trap projects in dependency.</strong> Projects with viable revenue streams stay grant-dependent for fear of losing their grants. Individual-only funding prevents team scaling. Pure open-source requirements block sustainable hybrid models. Funders inadvertently optimize for yearly renewal requirements over long-term project sustainability.
        </p>

        <QuoteCards
          quotes={[
            {
              id: "25",
              text: "I know some projects that have become constricted in their development by the expectations of the people who are giving them the grant. So for example, a grant may say: we will only fund one developer directly … so that then means that you can't expand your team and pay other people to work on that thing. They don't want to, they prefer not to give a grant out to a project. And then also, they would prefer to only give grants out to completely free and open source projects. And then some of the projects I know, they have good ideas for creating for profit revenue streams which could help sustain their projects, but they're scared to do that because they don't want to lose the grants. So there is kind of a skewering of incentives that happen just by grants existing. Not being unappreciative of the grant existing in the first place, but you can almost become beholden to the expectations of the people giving you the grant.",
              shareId: SHAREABLE_description_IDS.QUOTE_58,
              author: {
                type: "expert",
                respondentNumber: 25,
              },
            },
            {
              id: "20",
              text: "Just because it's open source doesn't mean it shouldn't be made profitable, because at the end of the day, that's how you make it self-sustainable, and you don't want to be relying on grant organizations the entire way.",
              author: {
                type: "new",
                respondentNumber: 20,
              },
            },
            {
              id: "15",
              text: "That depends on the granting situation in the Bitcoin industry, but I think it's sustainable in the sense that a lot of people have told me … that this is valuable, and this thing has helped them in their Bitcoin journey in some way or other and so, it's definitely valuable for the society. So we will, one way or other, figure out … the only assumption is, as long as granting agencies exist, because there is no business model to this",
              author: {
                type: "new",
                respondentNumber: 15,
              },
            },
            {
              id: "25b",
              text: "[The granting organizations] are great, but I do see some friction there. On their side, they're like: Well, why would we give you money to fund development of something you're going to turn into a business? But then ultimately … we're offering products and services, so we won't have to be reliant upon a grant, and then that capital could be freed up for other projects. So I think there needs to be kind of more nuanced understanding and debate around building sustainability in some of these free and open source projects, where they're not reliant upon just the goodwill of others.",
              author: {
                type: "new",
                respondentNumber: 25,
              },
            },
          ]}
        />
      </div>

      <div className='flex flex-col gap-14 text-base md:text-lg text-white font-inter py-24'>
        <section className='flex flex-col gap-2'>
          <h5 className='text-lg md:text-xl leading-[120%] font-bold font-inknutAntiqua'>Psychological sustainability: burnout as systemic risk</h5>
        </section>

        <TakeawayCard
          text="Psychological wellbeing is as crucial to sustainability as financial stability, yet burnout is primarily treated as an individual problem rather than the systemic issue that it is. Chronic uncertainty, lack of feedback, and always-on rhythms drive exhaustion. The ecosystem's resilience depends on recognizing that psychological sustainability requires structural support, not just individual coping strategies."  
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {psychologicalSustainabilityGridContent.map((item) => (
            <div key={item.text} className='flex flex-row gap-5 items-center'>
              <AnimatedSvgDots 
                svgPath={item.image} 
                alt={item.text} 
                width={102} 
                height={90}
                numerator={item.numerator}
                denominator={item.denominator}
                numeratorColor={item.numeratorColor}
              />
              <p className='text-[15px] font-semibold leading-[140%]'>{item.text}</p>
            </div>
          ))}
        </div>

        <p>
          Beyond financial considerations, psychological sustainability emerges as a critical issue. Over half of participants (14/26) mentioned experiencing burnout at least once in their career, and for 3 contributors it was a primary reason for leaving their grant-funded roles. <strong>Among the top causes of burnout identified by contributors is "working too much in the wrong direction,"</strong> as one participant put it, often connected with the lack of feedback and mentorship (7/26). Another 7 participants cited life events as triggers, while 4 found that setting boundaries exacerbated stress and burnout risk. For them, work becomes so engaging that "I'm always happy to give more to the work stuff, because it's fun for me," yet this same inability to disengage prevents the rest necessary to sustain the work in the first place.
        </p>

        <QuoteCards
          quotes={[
            {
              id: "13",
              text: "There were a lot of moments of doubt, like, maybe I'm not good enough. And I didn't really know, do people like me? Do they not like me? Do they like the work, not like the work? So that would create burnout sometimes, and it could be hard to get motivated, because I'm not really sure: is this actually successful or not, and if not, how do I improve? And how do I get better? And so that would create a sense of burnout and lack of motivation.",
              shareId: SHAREABLE_description_IDS.QUOTE_59,
              author: {
                type: "new",
                respondentNumber: 13,
              },
            },
          ]}
        />

        <p>
          <strong>When burnout occurs, contributors overwhelmingly internalize responsibility for fixing it</strong>. This self-reliance reflects both ecosystem values and practical reality: without clear support structures, developers have nowhere to turn.
        </p>

        <QuoteCards
          quotes={[
            {
              id: "7",
              text: "But [overcoming burnout] that's all on myself. That's all on me to do. I don't think it's dependent on any external body per se.",
              shareId: SHAREABLE_description_IDS.QUOTE_61,
              author: {
                type: "new",
                respondentNumber: 7,
              },
            },
          ]}
        />

        <p>
          <strong>This is where the gap between individual coping and systemic support is starkest.</strong> Contributors adapt through taking breaks ("giving myself permission to not do stuff … and have faith that you will want to come back to it later"), setting boundaries, switching to creative side projects, and practicing meditation. Yet these strategies address symptoms, not causes. Without support structures, burnout remains inevitable. As one participant noted, simply acknowledging burnout as legitimate can help reduce feelings of inadequacy or isolation.
        </p>

        <QuoteCards
          quotes={[
            {
              id: "25",
              text: "I think just being aware of burnout, and hearing the term burnout and it being acknowledged as something which happens to people, makes people feel less kind of inadequate or lonely if they go through that process. So it's good for people to speak about it openly.",
              shareId: SHAREABLE_description_IDS.QUOTE_62,
              author: {
                type: "expert",
                respondentNumber: 25,
              },
            },
          ]}
        />

        <p>
          While some contributors find relief through short breaks and boundary-setting, this becomes increasingly difficult for senior developers maintaining critical infrastructure. The humanitarian stakes create added pressure, with expert developers facing the weight of knowing their absence could directly impact users relying on these tools. For many at this level, adapting to burnout becomes part of the job: "It's the normal set of state of affairs," as one contributor put it.
        </p>

        <QuoteCards
          quotes={[
            {
              id: "23",
              text: "We are trying to solve issues that are getting people in very serious situations. It's a pretty big burden, and being able to talk with someone that understands the urgency, that they don't tell you: \"Oh, why don't you take a few months off,\" you know, they'd understand that they would just make things worse",
              shareId: SHAREABLE_description_IDS.QUOTE_23,
              author: {
                type: "expert",
                respondentNumber: 23,
              },
            },
            {
              id: "15",
              text: "You need to create boundaries, and how exactly to create boundaries and stuff like that. But many young kids I see getting into Bitcoin, they're good, smart kids, really motivated, but they are losing it in their head because of all the excitement, all the things that they get to learn. It's all so very intense. You learn so many things simultaneously. You learn about money, you learn about computers, you learn about softwares. So, yeah, it does affect me also, but it used to affect me much, much more. Then I started doing meditation … doing meditation as a medication.",
              shareId: SHAREABLE_description_IDS.QUOTE_34,
              author: {
                type: "new",
                respondentNumber: 15,
              },
            },
            {
              id: "25",
              text: "We have extreme burnout. … in Bitcoin world, people go to the extreme. … I think a lot is about identity. … Then that identity is kind of pegged to the success of the technology, the price, the idea, how people are talking about it. … Then your sense of identity can kind of fluctuate quite heavily.",
              shareId: SHAREABLE_description_IDS.QUOTE_18,
              author: {
                type: "expert",
                respondentNumber: 25,
              },
            },
            {
              id: "20",
              text: "I have that strategy where if I start to get burned out, I'll just work on some crazy thing, which is fun. So I have a hard time burning out, because, the burnout just leads to not doing what I'm supposed to be doing. But this is better than just crashing and not being productive.",
              author: {
                type: "expert",
                respondentNumber: 20,
              },
            },
            {
              id: "20b",
              text: "I think it's really hard to get someone to admit that they need help. But I would say, maybe, but I don't even know what that would look like.",
              shareId: SHAREABLE_description_IDS.QUOTE_45,
              author: {
                type: "expert",
                respondentNumber: 20,
              },
            },
            {
              id: "6",
              text: "Mostly burnout has been related to just going in the wrong direction, and working too much in the wrong direction, and then noticing that, and questioning decisions.",
              shareId: SHAREABLE_description_IDS.QUOTE_15,
              author: {
                type: "expert",
                respondentNumber: 6,
              },
            },
            {
              id: "12",
              text: "I think the thing with burnout is that you just have to trust that you'll get through it. … I think the hard part of getting through those particular emotions is just having faith that you're going to want to do it again in the future, and not getting into the bad emotional cycle of feeling like you should be doing something when you don't want to. … I can get over being burned out really quickly, because I give myself the space to let go.",
              shareId: SHAREABLE_description_IDS.QUOTE_23,
              author: {
                type: "mid",
                respondentNumber: 12,
              },
            },
            {
              id: "5",
              text: "The burnout for me feels to come more from the family side of stuff. Like, I'm always happy to give more to the work stuff, because it's fun for me.",
              shareId: SHAREABLE_description_IDS.QUOTE_12,
              author: {
                type: "new",
                respondentNumber: 5,
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export const TakeawayCard = ({ text, children }: { text?: string; children?: React.ReactNode }) => {
  return (
    <section className='flex flex-col gap-3 py-8 px-9 bg-blue-custom-1100 rounded-3xl'>
      <section className='flex flex-row gap-2'>
        <Image src='/svgs/notes-icon.svg' alt='note icon' width={31} height={31} />
        <p className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-bold '>Takeaway</p>
      </section>

      {children ? children : <p>{text}</p>}
    </section>
  );
};

export const psychologicalSustainabilityGridContent = [
  {
    image: "/svgs/beyond-financial-sustainability/burnout-once-career.svg",
    text: "mentioned experiencing burnout at least once in their career",
    numerator: 14,
    denominator: 26,
    numeratorColor: "#F9D483",
  },
  {
    image: "/svgs/beyond-financial-sustainability/leaving-grant-funded-roles.svg",
    text: "it was a primary reason for leaving their grant-funded roles",
    numerator: 3,
    denominator: 26,
    numeratorColor: "#91C2FF",
  },
  {
    image: "/svgs/beyond-financial-sustainability/burnout-with-lack-of-feedback.svg",
    text: "connected burnout with lack of feedback and mentorship",
    numerator: 7,
    denominator: 26,
    numeratorColor: "#FFFFFF",
  },
];

"use client"

import { QuoteCards } from "@components/research-report/_components/quotes";
import { SimpleShareButton } from "@/app/components/share-mode/simple-share-button";
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';

export const FolderContentOne = () => {
    return (
        <div className="pb-[80px] sm:pb-[150px]">
            <h2 className="text-[28px] font-inknutAntiqua text-center font-semibold">
                Free from authority, free to burn out
            </h2>

            <p className="text-[16px]">
                <span className="font-bold uppercase">
                    The tension: {' '}
                </span>
                Together with enthusiasm for the technology, the ideals of decentralization and freedom from institutional capture attract developers and sustain motivation. Yet this same ideological commitment accelerates burnout: the social mission justifies self-exploitation, unlimited freedom becomes paralyzing, and cultural rigidity alienates diverse perspectives. The very values that make the work meaningful become the mechanisms of burnout, leaving developers caught between their commitment to freedom technology and their own sustainability. <SimpleShareButton shareId={SHAREABLE_description_IDS.QUOTE_26} />
            </p>

            <div className="text-[16px] space-y-[1rem] pt-[1rem]">
                <span className="inline-block font-bold uppercase">
                    Yes, people are "in for the tech" but also for freedom
                </span>
                <p>
                    All participants were initially drawn to the ecosystem by a fascination with the technology and the prospect of working with top engineers. After joining, however, the vast majority described how their motivation evolved to include a commitment to the ideals of freedom and decentralization embodied by the Bitcoin and Nostr ecosystem. Participants working for over two years on their grant-funded projects reported gaining greater awareness of the humanitarian goals of Bitcoin and Nostr, and a desire to engage with "big picture" thinking. 3/4 of participants explicitly described the meaningfulness of their work as a key motivator, often citing it to justify routines and patterns they acknowledged as unsustainable. <SimpleShareButton shareId={SHAREABLE_description_IDS.QUOTE_27} />
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "6",
                        text: "It's still the best work I've found so far. The autonomy is great in a way, and the work is meaningful, and … the shared values in the Nostr and Bitcoin community and the freedom technology and better future we are pursuing, it's quite privileged in many ways, to have a work like this feels so meaningful. You get even paid for it",
                        author: {
                        type: "expert",
                        respondentNumber: 6,
                        },
                    },
                    {
                        id: "23",
                        text: "You know, how bitcoiners say \"I'm in for the tech\", I came in for much more leaning towards that and the curiosity that transpired and … now I will say that I have a far broader view and a much more humanitarian goal in sight than just a technical one.",
                        author: {
                        type: "expert",
                        respondentNumber: 23,
                        },
                    },
                    {
                        id: "16",
                        text: "At the start, I had like little knowledge about Bitcoin … but then I saw an opportunity and I applied. So it was after the program that I really learned about the project and the potential it provided, and I got really interested and attached to the ideals and the technology",
                        author: {
                        type: "new",
                        respondentNumber: 16,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1rem]">
                <span className="inline-block font-bold uppercase">
                    Permissionlessness attracts, then overwhelms
                </span>
                <p>
                    The no-barrier ethos draws contributors across all experience levels: anyone can build without asking permission. Yet permissionlessness as an operating principle means no schedules, no managers, no external structure. Over half of participants appreciate this flexibility to choose what to work on and when, yet these are precisely the areas where they report the most challenges: <SimpleShareButton shareId={SHAREABLE_description_IDS.QUOTE_29} /> nearly a third struggle with boundaries and a quarter with prioritizing tasks. The initially attractive open-ended nature leaves many contributors, particularly newer ones, paralyzed by infinite possibilities and no clear direction.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "21",
                        text: "It's nice to work for yourself, to have that freedom to do that. But then, of course, the curse is always that no one else is going to do it. So I've got to do it.",
                        author: {
                        type: "mid",
                        respondentNumber: 21,
                        },
                    },
                    {
                        id: "11-1",
                        text: "I can work whenever I want\" translates to \"I can not work whenever I want\", right? And so I had some trouble with that. Like, the whole day, I don't do anything, and then in the evening, ideas would pop in my head and I work 7pm to 10pm, that's not sustainable.",
                        author: {
                        type: "new",
                        respondentNumber: 11,
                        },
                    },
                    {
                        id: "20",
                        text: "I guess that's always been the thing that's drawn me to Bitcoin, the fact that I can build this peer-to-peer transaction system on a social network, and I don't have to ask permission from anyone. So I definitely like that aspect of just not having someone telling me that I can or can't do something, and I can just do it.",
                        author: {
                        type: "expert",
                        respondentNumber: 20,
                        },
                    },
                    {
                        id: "8",
                        text: "I would love to be able to have a stricter routine. But on the other hand, it's great the fact that I don't need to have one.",
                        author: {
                        type: "mid",
                        respondentNumber: 8,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1rem]">
                <span className="inline-block font-bold uppercase">
                    Experience enables, then exhausts
                </span>
                <p>
                    As contributors gain experience, they develop deeper clarity about Bitcoin's humanitarian mission, but not about sustainable work practices. <SimpleShareButton shareId={SHAREABLE_description_IDS.QUOTE_30} /> Instead of learning healthier routines, experienced contributors adapt to cycles of intense work and burnout, driven by the urgency of building critical freedom infrastructure. Over half of participants report experiencing burnout at least once in their professional life, with 3 citing it as a primary reason for leaving their grant-funded position. Yet it's senior developers who normalize it most: for them, burnout is "the normal state of affairs." The sacrificial ethos of OSS, compounded by freedom tech's humanitarian stakes, transforms exhaustion from exception to expectation.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "23",
                        text: "Everybody's burnt out. Everybody I work with is completely burnt out. … Everybody's in the same boat. So no, I think it's a problem beyond just me and a few other people. It's the normal set of state of affairs.",
                        author: {
                        type: "expert",
                        respondentNumber: 23,
                        },
                    },
                    {
                        id: "25",
                        text: "There's a hell of a lot of things to build, and I think a lot of us feel a sense of urgency, because we know that if traditional financial rails fail … people will seek out alternatives, and it's kind of important that those alternatives work. So I think there is kind of a sense of urgency amongst a lot of the people, like myself, who are lucky enough to stumble across this technology. … There's a bunch of tools which you need to build to realize that fallback if everything else breaks.",
                        author: {
                        type: "expert",
                        respondentNumber: 25,
                        },
                    },
                    {
                        id: "4",
                        text: "I think it was a big, long burnout. For a very long time, I just didn't know how to talk about it. And, wow, now I know and see where I am at.",
                        author: {
                        type: "mid",
                        respondentNumber: 4,
                        },
                    },
                    {
                        id: "OSS",
                        text: "I think it's working in free and open source. Actually, I suppose I'm really speaking for myself and the sorts of people I work with, but it's very altruistic and full of personal sacrifice, and you really are working on it because you see the greater good in the thing you're building.",
                        author: {
                        type: "mid",
                        respondentNumber: 4,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1rem]">
                <span className="inline-block font-bold uppercase">
                    Cultural frictions unsettle commitment
                </span>
                <p>
                    A small but notable group of contributors (4/26) reported cultural tensions with the wider Bitcoin community, citing a lack of critical reflection, ideological rigidity, and a preference for hype over substance as the main sources of friction. Some described the culture as "cult-like" or toxic, where performative enthusiasm overshadows technical work. In a few cases, developers reported distancing themselves from the community as a coping strategy. Despite these challenges, contributors expressed continued commitment to Bitcoin as a technical and political project, while navigating the community on their own terms.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "19",
                        text: "I guess every day I hate Bitcoin because it's also full of assholes, and it has its share of problems and discourse, so it feels like every day is a decision to work on it again, but if I'm being realistic, I don't see anything better that I could do with my time, and it's rewarding work.",
                        author: {
                        type: "expert",
                        respondentNumber: 9,
                        },
                    },
                    {
                        id: "11-2",
                        text: "Being a Bitcoiner is bit of a lifestyle, too. Some people are very deep into it. But I think it's good to have a decent balance. You don't want to be too, too deep. You don't want to be in the cult, right?",
                        author: {
                        type: "new",
                        respondentNumber: 11,
                        },
                    },
                    {
                        id: "15-1",
                        text: "People only agree about Bitcoin in life, nothing else. And that's like a general fact in terms of community. So after having a bunch of troublesome experiences, I started maintaining some distance from the community.",
                        author: {
                        type: "new",
                        respondentNumber: 15,
                        },
                    },
                    {
                        id: "39",
                        text: "I think the Bitcoin community itself has these cult-like tendencies which make it, I think, very demoralizing for people who are in the situation I was in … So it just seems like there's a lot more enthusiasm for cheerleading Michael Saylor and the crap he spouts, as opposed to the people who are actually trying to make tangible, positive change in this thing, because it's not ready. It's not. Like there's still so much work to be done.",
                        author: {
                        type: "expert",
                        respondentNumber: 9,
                        },
                    },
                ]}
            />

        </div>
    )
}
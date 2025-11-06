"use client"

import { QuoteCards } from "@components/research-report/_components/quotes";
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';

export const FolderContentTwo = () => {
    return (
        <>
            <h2 className="text-[28px] font-inknutAntiqua text-center font-semibold">
                Collaborating alone
            </h2>

            <p className="text-[16px]">
                <span className="font-bold uppercase">
                    The tension: {' '}
                </span>
                OSS promises collaborative development, peer learning, and community support. In reality, contributors work primarily in isolation — physically alone in remote areas to reduce costs, professionally uncertain without feedback, and struggling to maintain motivation amidst the uncertainty of their work environment. The infrastructure for human connection exists mainly through conferences (considered "taxing" by some) rather than sustained collaboration, leaving developers to self-manage everything from career progression to daily motivation.
            </p>

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Excited to collaborate, but working in isolation
                </span>
                <p>
                    Contributors are drawn by the prospect of collaborating with top engineers they respect, yet end up working mostly in isolation. 8 of 26 participants reported feeling isolated working alone — for two, this isolation was the primary reason for leaving their grant-funded positions. Several participants reported living in small towns or rural areas to reduce living expenses; however, that further adds to the sense of isolation as developers don't have occasions to meet up in person. For those that can, joining a coworking space seems to improve the day-to-day routine.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "17",
                        text: "There wasn't a framework for collaboration, for newcomers. And I was in a space where, honestly, I felt like I could have done more if I was collaborating with other contributors. I tried here and there, but then I couldn't get a mentor.",
                        shareId: SHAREABLE_description_IDS.COLLABORATING_ALONE,
                        author: {
                        type: "new",
                        respondentNumber: 17,
                        },
                    },
                    {
                        id: "10",
                        text: "The lack of structure, the lack of support from other, more experienced engineers and then just the sort of isolation, they're all different aspects of the same thing in a way.",
                        shareId: SHAREABLE_description_IDS.COLLABORATING_ALONE_QUOTE_2,
                        author: {
                        type: "new",
                        respondentNumber: 10,
                        },
                    },
                    {
                        id: "11",
                        text: "Recently, I decided to go to a coworking space. … And so I think that was an instant improvement, you feel much better, because in your coming back, you're like, okay, I went somewhere, did something, I'm coming back. Remote was always overrated",
                        shareId: SHAREABLE_description_IDS.COLLABORATING_ALONE_QUOTE_3,
                        author: {
                        type: "new",
                        respondentNumber: 11,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Growing without guidance
                </span>
                <p>
                    Contributors join to grow professionally through peer learning, but struggle with a chronic lack of consistent feedback. Around 40% of participants reported struggling with feedback — either in receiving it, offering it, or both. This is particularly acute for newer developers: they need feedback most but feel least entitled to ask for it, assuming others are too busy or that they haven't "earned" the right to it. This creates a persistent sense of uncertainty that weighs on developers' day-to-day work — making it harder to assess progress, build confidence, or know when to ask for help. Despite only 3 interviewees having access to formal mentoring, the majority recognized its vital importance for navigation and retention.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "13",
                        text: "There was always some stress in the back of my mind of not doing enough, because it's hard to tell what is enough. There is no KPI. Nobody even tells me if I'm doing good or not. There is this recognition, but it's mostly people who have no idea what I'm doing.",
                        shareId: SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE,
                        author: {
                        type: "new",
                        respondentNumber: 13,
                        },
                    },
                    {
                        id: "16",
                        text: "I think because they [project maintainers] don't know who you are at that point, they can't tell if you're serious or not, they don't like to waste their time. So I don't blame them that they ignored me. But I think getting that feedback or external help is probably the biggest challenge. And if you had somebody who was just there mentoring you and checking out your stuff, it really helps.",
                        shareId: SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE_QUOTE_2,
                        author: {
                        type: "new",
                        respondentNumber: 16,
                        },
                    },
                    {
                        id: "14",
                        text: "For reviewing PRs, I know how it feels when you write a PR and no one looks into it. So I know that even if I just spend some time reading code, and then I tell people, oh, it's all good, I know it's going to help with, first of all with their motivation, but also with the fact that if enough people say, Oh, it's good, then it gets merged.",
                        shareId: SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE_QUOTE_3,
                        author: {
                        type: "new",
                        respondentNumber: 14,
                        },
                    },
                    {
                        id: "13b",
                        text: "In a for profit, you get these performance reviews, you know what people think of your work. But in open source, it's not like that, and I was a little bit shy or embarrassed to go out and solicit that and ask somebody if they think I'm doing good job or not. And it's no one's job or responsibility to do that assessment of me either. So that part, there was a lot of uncertainty.",
                        shareId: SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE_QUOTE_5,
                        author: {
                        type: "new",
                        respondentNumber: 13,
                        },
                    },
                ]}
                />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    No clear career pathways beyond cycling through grants
                </span>
                <p>
                    Unlike traditional employment with defined progression (junior → senior → lead), grant-funded OSS offers no structured advancement. Contributors are excited to deepen their expertise or expand their project scope, but there's no framework for evolving responsibilities or recognition. The implicit "career path" often means either perpetual grant renewals, transitioning to a company, or starting one's own project — but these transitions happen by necessity rather than design, leaving mid-career developers particularly unclear about their professional future.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "5",
                        text: "I'm probably going to do this forever, as long as I possibly can. And the more important thing is: can I do it in a way that is not going to be a total financial strain constantly and be really annoying?",
                        shareId: SHAREABLE_description_IDS.NO_CLEAR_CAREER_QUOTE_2,
                        author: {
                        type: "new",
                        respondentNumber: 5,
                        },
                    },
                ]}
            />
            
            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Predictability of motivation in unpredictable environment
                </span>
                <p>
                    Half of the interviewees struggle with maintaining consistent motivation in their unpredictable work environment, while a quarter experienced ups and downs in energy depending on the task and context, but not motivation. For two contributors, the shifts in motivation ("It was research, then it was ideology, then it was making money, then it was back to ideology") were a key determining factor for departure. Contributors develop various 'self-help' strategies to manage their motivational swings, including walks, exercise, good sleep, envisioning the next day, and structured planning templates like Waye's AIR tool.
                </p>
            </div>
            
            <QuoteCards
                quotes={[
                    {
                        id: "13",
                        text: "Some days, I wouldn't feel very motivated and wouldn't get much done, and because there wasn't really any pressure — you know, I work very well under pressure — that was a little bit of a struggle where I could just not get anything done for a day or a couple days, and it wouldn't matter, really. And so it was hard to hit the same level of output that I would hit when I was working at [a company] where it was very high pressure, with very strict deadlines.",
                        shareId: SHAREABLE_description_IDS.MOTIVATION_CHALLENGES,
                        author: {
                        type: "new",
                        respondentNumber: 13,
                        },
                    },
                    {
                        id: "3",
                        text: "Sometimes you're just feeling that you're not doing enough. You want to do so much, but then you don't do it, and then you get into this self-critical phase, and that negatively impacts till I get out of it. So it's always like waves.",
                        shareId: SHAREABLE_description_IDS.MOTIVATION_QUOTE_2,
                        author: {
                        type: "new",
                        respondentNumber: 3,
                        },
                    },
                    {
                        id: "5",
                        text: "I have ups and downs, but not in motivation. I think the motivation is always there. I think I put a lot of pressure on myself to just to do the thing and do it really well. I always feel like I'm not going fast enough, and that I'm not doing it well enough, which I think is standard in this business, for most of us.",
                        shareId: SHAREABLE_description_IDS.MOTIVATION_QUOTE_3,
                        author: {
                        type: "new",
                        respondentNumber: 5,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    IRL gatherings beyond conferences
                </span>
                <p>
                    While conferences provide community connection, many find them taxing — the travel, preparation, and socializing drain energy rather than restore it. Some experienced contributors report attending 8-10 conferences yearly, which they consider excessive. Among the conferences that contributors mentioned appreciating the most are: Bitcoin Baltics, Honeybadger, Bitcoin++, Africa Bitcoin Conference. More valuable are team offsites and contributor retreats that combine focused work with social activities, exercise, and relationship building. These smaller gatherings address the real need: not knowledge sharing but sustained collaboration. As one participant noted, conferences help "remind that other people exist," but it's the deeper working sessions that make distributed work sustainable.
                </p>
            </div>
            
            <QuoteCards
                quotes={[
                    {
                        id: "6",
                        text: "Conferences kind of help you connect with people, and especially when you work mostly by yourself at home, maybe on your own project, not collaborating with others so much, so conferences help you get connected with a community and keep you real and remind that other people exist.",
                        shareId: SHAREABLE_description_IDS.IRL_GATHERINGS,
                        author: {
                        type: "expert",
                        respondentNumber: 6,
                        },
                    },
                    {
                        id: "25",
                        text: "One of the first Nostr events was in Costa Rica, and it was in a yoga retreat. And that was quite funny, because you had all these pale, miserable looking developers go into this yoga retreat in Costa Rica, and they're all in their black t-shirts, and they're all pale, and beards are overgrown … And then after three days in this yoga retreat, they're walking around barefoot, they got bangles on their wrists, and they're having these philosophical conversations. I thought that was very beneficial for a whole bunch of developers who I work with, and I think it was a good experience for them. And since then, I would like to see maybe more events in somewhere like a yoga retreat, because inevitably, people are going off and doing yoga, and they're eating well, and so it was quite funny. … I saw a transformation in some of my peers, which was probably, I don't know if life long, but I think it was very good for them to take some time out. Mindfulness, forced mindfulness.",
                        shareId: SHAREABLE_description_IDS.IRL_GATHERINGS_QUOTE_2,
                        author: {
                        type: "expert",
                        respondentNumber: 25,
                        },
                    },
                    {
                        id: "20",
                        text: "I feel like that might be a huge missing aspect of a lot of open source teams, this idea of an offsite or just getting together in person. It's kind of hard to get people around from around the world to travel for an open source project since they're not getting paid for, but when it does happen, it's actually really productive, and I would hope we do more of that.",
                        shareId: SHAREABLE_description_IDS.IRL_GATHERINGS_QUOTE_3,
                        author: {
                        type: "expert",
                        respondentNumber: 20,
                        },
                    },
                    {
                        id: "25b",
                        text: "Just trying to slip in more mindfulness does make sense. So, a lot of projects and a lot of developers, they'll feel the need to travel around a lot, and go to a lot of conferences and and that can take its toll. There's usually a lot of alcohol involved, and it's quite high energy and then you feel bad because you're actually neglecting the project. So if you can have that space be more nurturing, and have some mindfulness. I think there is probably, maybe even subconscious, an active move to provide … satellite events at some of these conferences. Like, there's the Bitcoin runners, and in the event, I'll go for a jog around the local city or something, and there's the Bitcoin walkers society as well. And maybe something which you could push is, for some of these conferences, some mindfulness exercises or mindfulness workshops where there could be some meditation, or some guided meditation, or some yoga or something like that, I think that could be great for people.",
                        shareId: SHAREABLE_description_IDS.IRL_GATHERINGS_QUOTE_4,
                        author: {
                        type: "expert",
                        respondentNumber: 25,
                        },
                    },
                ]}
            />
        </>
    )
}

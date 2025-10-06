"use client"

import { QuoteCards } from "@components/research-report/_components/quotes";

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
                    Contributors are drawn by the prospect of collaborating with top engineers they respect, yet end up working mostly in isolation. 8/26 participants reported feeling isolated working alone — for two, this isolation was the primary reason for leaving their grant-funded positions. Several participants reported living in small towns or rural areas to reduce living expenses; however, that further adds to the sense of isolation as developers don't have occasions to meet up in person. For those that can (7/26 participants in our sample), joining a coworking space seems to improve the day-to-day routine.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "17",
                        text: "There wasn't a framework for collaboration, for newcomers. And I was in a space where, honestly, I felt like I could have done more if I was collaborating with other contributors. I tried here and there, but then I couldn't get a mentor.",
                        author: {
                        type: "new",
                        respondentNumber: 17,
                        },
                    },
                    {
                        id: "11",
                        text: "Recently, I decided to go to a coworking space. … And that was an instant improvement. You feel much better, because in your coming back, you're like: \"Okay, I went somewhere, did something, I'm coming back.\" Remote was always overrated.",
                        author: {
                        type: "new",
                        respondentNumber: 11,
                        },
                    },
                    {
                        id: "15",
                        text: "People only agree about Bitcoin in life, nothing else. And that's like a general fact in terms of community. So after having a bunch of troublesome experiences, I started maintaining some distance from the community.",
                        author: {
                        type: "new",
                        respondentNumber: 15,
                        },
                    },
                    {
                        id: "9-1",
                        text: "I think the Bitcoin community itself has these cult-like tendencies which make it, I think, very demoralizing for people who are in the situation I was in … So it just seems like there's a lot more enthusiasm for cheerleading Michael Saylor and the crap he spouts, as opposed to the people who are actually trying to make tangible, positive change in this thing, because it's not ready. It's not. Like there's still so much work to be done.",
                        author: {
                        type: "expert",
                        respondentNumber: 9,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Growing without guidance
                </span>
                <p>
                    Contributors join the ecosystem to grow professionally through peer learning, but struggle with a chronic lack of consistent feedback. Around 40% of participants reported struggling with feedback — either in receiving it, offering it, or both. This is particularly acute for newer developers: they need feedback most but feel least entitled to ask for it, assuming others are too busy or that they haven't "earned" the right to it. This creates a persistent sense of uncertainty that weighs on developers' day-to-day work — making it harder to assess progress, build confidence, or know when to ask for help. Despite only 3 interviewees having access to mentoring, the majority recognized its vital importance for navigation and retention.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "8",
                        text: "I really like going on stage and just sharing my experience, but it takes a lot of energy for me to do that, just all the traveling, etc. And then I also love the socializing part … because it gives me this sense of community. But then I noticed that if I go to a conference and none of my friends are there, then I'm going to feel a bit like: it wasn't really worth it.",
                        author: {
                        type: "mid",
                        respondentNumber: 8,
                        },
                    },
                    {
                        id: "23",
                        text: "Usually, I find conferences kind of draining. I need to prepare the talks ... and I usually find them more taxing than uplifting.",
                        author: {
                        type: "expert",
                        respondentNumber: 23,
                        },
                    },
                    {
                        id: "6",
                        text: "Conferences help you connect with people, especially when you work mostly by yourself at home, maybe on your own project, not collaborating with others so much. So conferences help you get connected with a community and keep you real and remind you that other people exist.",
                        author: {
                        type: "expert",
                        respondentNumber: 6,
                        },
                    },
                    {
                        id: "3",
                        text: "When I started working on grants for the first time, I found it very hard. No one's giving me the question, how should I form the answer? You have to find your own questions. So there was a period in time when I felt like I didn't know what I was doing.",
                        author: {
                        type: "new",
                        respondentNumber: 3,
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
                    Half of the interviewees struggle with maintaining consistent motivation in their unpredictable work environment. Another quarter experience fluctuations in day-to-day energy depending on the task and context, even as their underlying commitment to the ecosystem mission remains steady. For two contributors, the shifts in motivation ("It was research, then it was ideology, then it was making money, then it was back to ideology") were a key determining factor for departure. Contributors develop various "self-help" strategies to manage their motivational swings, including walks, exercise, good sleep, envisioning the next day, and structured planning templates like Waye's AIR tool.
                </p>
            </div>
            
            <QuoteCards
                quotes={[
                    {
                        id: "13",
                        text: "Some days, I wouldn't feel very motivated and wouldn't get much done, and because there wasn't really any pressure — you know, I work very well under pressure — that was a little bit of a struggle where I could just not get anything done for a day or a couple days, and it wouldn't matter, really. And so it was hard to hit the same level of output that I would hit when I was working at [a company] where it was very high pressure, with very strict deadlines.",
                        author: {
                        type: "new",
                        respondentNumber: 13,
                        },
                    },
                    {
                        id: "3",
                        text: "Sometimes you're just feeling that you're not doing enough. You want to do so much, but then you don't do it, and then you get into this self-critical phase, and that negatively impacts till I get out of it. So it's always like waves.",
                        author: {
                        type: "new",
                        respondentNumber: 3,
                        },
                    },
                    {
                        id: "5",
                        text: "I have ups and downs, but not in motivation. I think the motivation is always there. I think I put a lot of pressure on myself to just to do the thing and do it really well. I always feel like I'm not going fast enough, and that I'm not doing it well enough, which I think is standard in this business, for most of us.",
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
                    While conferences provide community connection, many find them taxing — the travel, preparation, and socializing drain energy rather than restore it. Some experienced contributors report attending 8-10 conferences yearly, which they consider excessive. Among the conferences that contributors mentioned appreciating the most are: Baltic Honeybadger, Bitcoin++, Africa Bitcoin Conference. More valuable are team offsites and contributor retreats that combine focused work with social activities, exercise, and relationship building. Instead of focusing on knowledge sharing, these smaller gatherings address the real need: sustained collaboration. As one participant noted, conferences help "remind that other people exist," but it's the deeper working sessions that make distributed work more sustainable.
                </p>
            </div>
            
            <QuoteCards
                quotes={[
                    {
                        id: "9-2",
                        text: "I guess every day I hate Bitcoin because it's also full of assholes, and it has its share of problems and discourse, so it feels like every day is a decision to work on it again, but if I'm being realistic, I don't see anything better that I could do with my time, and it's rewarding work.",
                        author: {
                        type: "expert",
                        respondentNumber: 9,
                        },
                    },
                    {
                        id: "11-2",
                        text: "Being a bitcoiner is bit of a lifestyle, too. Some people are very depp into it. But I think it's good to have a decent balance. You don't want to be too, too deep. You want to be in the cult, right?",
                        author: {
                        type: "new",
                        respondentNumber: 11,
                        },
                    },
                    {
                        id: "15-2",
                        text: "People only agree about Bitcoin in life, nothing else. And that's like a general fact in terms of community. So after having a bunch of troublesome experiences, I started maintaining some distance from the community.",
                        author: {
                        type: "new",
                        respondentNumber: 15,
                        },
                    },
                    {
                        id: "9-3",
                        text: "I think the Bitcoin community itself has these cult-like tendencies which make it, I think, very demoralizing for people who are in the situation I was in … So it just seems like there's a lot more enthusiasm for cheerleading Michael Saylor and the crap he spouts, as opposed to the people who are actually trying to make tangible, positive change in this thing, because it's not ready. It's not. Like there's still so much work to be done.",
                        author: {
                        type: "expert",
                        respondentNumber: 9,
                        },
                    },
                ]}
            />
        </>
    )
}

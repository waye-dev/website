"use client"

import { QuoteCards } from "@components/research-report/_components/quotes";

export const FolderContentFour = () => {
    return (
            <>
            <h2 className="text-[28px] font-inknutAntiqua text-center font-semibold">
                Autonomous over projects,
                but constrained by the funding
                structure
            </h2>

            <p className="text-[16px]">
                <span className="font-bold uppercase">
                    The tension: {' '}
                </span>
                While financial compensation is not a primary motivator, sustainability remains elusive for most contributors. The expanding funding ecosystem has enabled many developers to enter and remain in the space (1A1z 2024) — but the structure of grants often undermines the very autonomy it is meant to support. Yearly renewals, individual funding models, and the opaque social aspects of grants create perverse incentives for people to "write for the grant," as one participant observed, rather than pursue long-term technical visions. While most grants are theoretically open to all, success often depends on informal networks and social capital. Additionally, hands-off funding approaches leave contributors navigating administrative burdens and isolation without adequate support structures.
            </p>

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold">
                    Searching for sustainability amidst generalized unpredictability
                </span>
                <p>
                    16/26 participants described ongoing difficulties navigating financial sustainability. For most, compensation itself is not the issue — it's predictability. Annual cycles of reapplication introduce stress and distraction, especially for contributors whose mother tongue is not English. 10 contributors explicitly identified long-term sustainability as a priority, yet only a few felt they had a stable path toward achieving it.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "10",
                        text: "I don't think that it's 100% sustainable. I'm not sure how that can be done. I think some people actually do this 100% like all the time, but I'm not sure it's that sustainable. Like, having to write a new grant every year is very, very stressful.",
                        author: {
                        type: "new",
                        respondentNumber: 10,
                        },
                    },
                    {
                        id: "14",
                        text: " think it's sustainable for a handful of high-impact people in the ecosystem, people who have shown over time they care about the technology, and their expertise is also evident to people who use the technology. But it takes a while to get to that level of expertise. And so in terms of sustainability, I would say that for a small group, yes, it is. But when you are initially starting out, if you begin now just at an intermediate level, not so much.",
                        author: {
                        type: "new",
                        respondentNumber: 14,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Bitcoin is forever, grants for a year only
                </span>
                <p>
                    Contributors define sustainability in terms of decades and view Bitcoin and OSS development as life-long commitments, even while recognizing role flexibility within the ecosystem. When asked what "long-term" meant to them, contributors consistently described it as at least 5 years, with a majority citing 10 years as their timeframe, and some equating it to the length of their career or beyond. 5/26 interviewees explicitly stated that they couldn't imagine going back to a "normal job" – Bitcoin is for life. Despite this enduring commitment, funding mechanisms remain out of sync. While opportunities for support have grown, most grants operate on short, annual cycles that fail to reflect contributors' long-term orientation. The renewal process is universally stressful, impacting negatively both long-term thinking and daily focus.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "3",
                        text: "If I'm looking for grants, it's very hard. There's so much admin work, so even when I'm trying to work, I keep thinking of my proposal, which I have to write, and I've procrastinated and I feel bad for not doing the grant proposal. So all that admin stuff does affect my productivity a lot, especially the grant renewal every year.",
                        author: {
                        type: "new",
                        respondentNumber: 3,
                        },
                    },
                    {
                        id: "4",
                        text: " think it's sustainable for a handful of high-impact people in the ecosystem, people who have shown over time they care about the technology, and their expertise is also evident to people who use the technology. But it takes a while to get to that level of expertise. And so in terms of sustainability, I would say that for a small group, yes, it is. But when you are initially starting out, if you begin now just at an intermediate level, not so much.",
                        author: {
                        type: "new",
                        respondentNumber: 4,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Individual grants vs team requirements
                </span>
                <p>
                    Particularly for contributors working on self-directed projects, individual grant structures often fall short of what's needed to scale or sustain their work. While grants may support a single developer, they are not suited for the requirements of teams working on projects. The lack of team-based funding models limits long-term planning and ability to focus as individual maintainers need to take on roles beyond development — including grant writing, onboarding, and community management. In one case, a participant chose to use the grant to pay his team, while complementing OSS work with a traditional business.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "5",
                        text: "If somebody was like: \"Okay, wave a magic wand and you want this project to just succeed way better, what are the things you need?\" Pretty top of the list is just money, because I know I can't scale my hours any further, so the only thing I can do is scale the size of the team. And I feel very confident that I'd be able to do that well because of my background, but the economic resource isn't there. And so, I think that's the one thing where I do feel constrained. You know, how do I make this financially sustainable on a broader scale, not just me.",
                        author: {
                        type: "new",
                        respondentNumber: 5,
                        },
                    },
                    {
                        id: "21",
                        text: "This can't be just me, so I need other people to get grants as well. So then it's like, can I help them with that? Is that even how this works? Like, figuring out how to get other maintainers responsible … how to get them committed longer term, which usually means money.",
                        author: {
                        type: "new",
                        respondentNumber: 21,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Realizing your vision vs working for the grant
                </span>
                <p>
                    The individual and short-term structure of grants gives rise to a perverse incentive by which contributors will "write for the grant" instead of pursuing their visions, diverting time and attention from actual development work. The burden falls disproportionately on newer contributors, who may spend a month or more crafting proposals. This creates a cycle where those who most need funding face the highest barriers to obtaining it, while also incentivizing alignment with perceived funder priorities rather than technical vision.
                </p>
            </div>
            
            <QuoteCards
                quotes={[
                    {
                        id: "4",
                        text: "Finding a problem — like some problem that is not too easy, not too hard, that has a chance of being merged, has impact. All these factors are just really hard to navigate, and I wish somebody told me what to do sometimes.",
                        author: {
                        type: "mid",
                        respondentNumber: 4,
                        },
                    },
                    {
                        id: "25",
                        text: "We need to reapply for the grant, and for grants, this is the same thing, which I suppose you have in academia: often people will write for the grant. So if they see a certain area in Bitcoin that is getting a lot of money, say, for example, Ecash … then people will propose a whole bunch of grants for Ecash projects … even if their heart's not entirely in it, in order to secure that funding. I tend not to do that, and I think sometimes that we shoot ourselves in the foot a little bit when it comes to getting grant money …. I've always been kind of hesitant when it comes to getting grants, because I feel often a lot of the people who issue grants have their own agendas.",
                        author: {
                        type: "expert",
                        respondentNumber: 25,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Permissionless entry: open but opaque
                </span>
                <p>
                    While grant programs are presented as open and permissionless, many participants noted that success often depends on informal connections and social capital. While the vast majority of contributors find the yearly renewal stressful, 3 participants (particularly the most expert and visible ones) had never submitted a formal application, instead receiving grants through introductions or past reputations.
                </p>
            </div>
            
            <QuoteCards
                quotes={[
                    {
                        id: "9-4",
                        text: "Long way to answer about writing grants, but unfortunately, it's all tied in with these people and these personalities and these incentives that are part of these organizations. There's no way to untangle them and that's been one of the most important things just for my mental well being, I can't just sit here and be angry and fuel this frustration over it.",
                        author: {
                        type: "mid",
                        respondentNumber: 9,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Hands-off funders: autonomous but abandoned
                </span>
                <p>
                    10/26 contributors have voiced concerns that granting organizations could do more to support their work. This is not so much in terms of compensation, but in providing additional support structures that would help developers navigate the uncertainty of daily work life. Among the aspects where contributors feel have been lacking support are: mentoring, guidance with admin tasks (including taxes, visas etc.), and tooling (one contributor wished for a supercomputer made available for the grantees).
                </p>
            </div>
            
            <QuoteCards
                quotes={[
                    {
                        id: "21",
                        text: "One of the things that has been lacking, I think, with these granting organizations is a community of people solving these problems, … like the admin stuff, taxes and things like that. We're obviously all having the same problems. So we can help one another figure it out",
                        author: {
                        type: "mid",
                        respondentNumber: 21,
                        },
                    },
                ]}
            />
        </>
    )
}

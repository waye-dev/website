"use client"

import { QuoteCards } from "@components/research-report/_components/quotes";

export const FolderContentThree = () => {
    return (
        <>
            <h2 className="text-[28px] font-inknutAntiqua text-center font-semibold">
                The invisible labor of solopreneurship
            </h2>

            <p className="text-[16px]">
                <span className="font-bold uppercase">
                    The tension: {' '}
                </span>
                The OSS ecosystem has already undergone major structural shifts, from distributed communities toward a model where solo maintainers carry outsized responsibility (Eghbal 2020). For freedom tech developers, this burden is amplified by the unique demands of the Bitcoin/Nostr ecosystem, which involves different forms of invisible labor. Contributors must simultaneously be visionary builders and pragmatic managers, technical experts and community leaders, creative innovators and maintenance workers — all while navigating the additional complexities of Bitcoin payments, tax implications, immigration status, and other bureaucratic constraints that affect their ability to work and travel. As projects mature, the most creative contributors find themselves trapped between their desire to build and innovate and the growing responsibility to maintain, manage, and support what they've created. Developers must individually shoulder technical, administrative, and social responsibilities that would typically be distributed across teams in traditional organizations.
            </p>

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    The amorphous scope of OSS contribution
                </span>
                <p>
                    For 15 out of 26 contributors, "coding is not just writing code." What appears as coding in OSS actually encompasses a vast range of less visible work, including research, technical writing, communication, and project management. 6/26 contributors described this variety as both exciting and exhausting: they appreciate the opportunity to grow diverse skills in a value-aligned environment, but struggle without adequate support structures. Unlike tech companies where developers primarily write code, OSS contributors spend significant time on research and consensus-building. Research involves hidden costs that contributors must shoulder independently, while 6 participants reported struggling with project management and organizing their work without support structures.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "4",
                        text: "At the moment … there are better places to enjoy programming than Bitcoin, because the project management is very poor, and it's just a lot of struggle to get work done, to organize, to get review. So if I wanted to do research, I would probably still do something different, something painless.",
                        shareId: "amorphous-scope",
                        author: {
                        type: "mid",
                        respondentNumber: 4,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    The invisibility of maintenance and management work
                </span>
                <p>
                    The most crucial work for project sustainability — reviewing pull requests, training new contributors, maintaining existing code — is also the least visible and recognized. 5/26 contributors reported struggling with the transition from creative development to these maintenance and management tasks. This shift is particularly challenging for experienced developers who must give up hands-on building and innovating to perform essential but unrecognized work. Contributors find themselves spending more time checking others' implementations than creating, leading to frustration and boredom among those who thrive on innovation. Yet this key maintenance work remains largely unacknowledged by funders and the community.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "18",
                        text: "We had a whole year of this creative process, and it was amazing, but I think right now it's kind of boring, because I'm not creating anymore, I'm just checking that every contributor is implementing. It's boring for me to just check and maintain.",
                        shareId: "invisibility-maintenance",
                        author: {
                        type: "expert",
                        respondentNumber: 18,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    The administrative burden of grant funding
                </span>
                <p>
                    Grant funding also creates its own invisible labor burden. In addition to preparing applications, contributors must independently manage payment processing (frequently in BTC), tax compliance, healthcare arrangements, and other admin tasks that are typically handled by organizational infrastructure. Contributors appreciate being paid in BTC for ideological alignment ("it feels right"), but at the same time this administrative overhead remains largely unrecognized, especially affecting those with less experience or external support. In one case, the lack of healthcare and benefits was one of the key reasons for departure from the grant ecosystem.
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "21",
                        text: "All the grants are paid in Bitcoin, which is great. I like that. It's a big experiment, see how this works. I am not an accountant. Luckily, I have one that understands Bitcoin, and how that is actually going to work out long term. I'm just sweeping that under the rug, either let the accountant figure it out or I'll figure it out later. That gives me some anxiety. … Like, am I paying more taxes? I really can't stand that side of business.",
                        shareId: "administrative-burden",
                        author: {
                        type: "mid",
                        respondentNumber: 21,
                        },
                    },
                ]}
            />
            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Location still matters in a borderless environment
                </span>
                <p>
                    Despite the ethos of borderless, permissionless systems, contributors still confront the geopolitical and administrative realities of their local contexts. Immigration status, banking requirements, and national laws regulating foreign exchange can all limit their ability to participate fully in the ecosystem. For some, being paid in Bitcoin creates friction when visa applications demand proof of fiat income, while for others, receiving Bitcoin at all is legally restricted. While only a few contributors voiced this concern, their experiences highlight how the borderless ideal of Bitcoin development runs up against the hidden barriers of national law and bureaucracy, generating additional administrative overhead and constraining work opportunities.
                </p>
            </div>
            
            <QuoteCards
                quotes={[
                    {
                        id: "3",
                        text: "I was applying for grants again and noticed a shift in organizations preferring to only pay in Bitcoin. However I can't legally be paid in Bitcoin for my services according to FEMA laws in my country. So it's been a hassle trying to do both my software development work and also the administrative challenges of receiving funding.",
                        shareId: "location-barriers",
                        author: {
                        type: "new",
                        respondentNumber: 3,
                        },
                    },
                    {
                        id: "10-1",
                        text: "I don't go to a lot of conferences. Unfortunately, there aren't many Bitcoin conferences where I am currently. … Once I tried to go to Europe, there was the whole visa issue, so I miss a lot of those conferences.",
                        shareId: "location-barriers-quote-2",
                        author: {
                        type: "new",
                        respondentNumber: 10,
                        },
                    },
                ]}
            />
        </>
    )
}

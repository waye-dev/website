"use client"

import { QuoteCards } from "@components/research-report/_components/quotes";
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';
import { SimpleShareButton } from "@/app/components/share-mode/simple-share-button";

export const FolderContentThree = () => {
    return (
        <>
            <h2 className="text-[28px] font-inknutAntiqua text-center font-semibold">
                The solopreneur burden
            </h2>

            <p className="text-[16px]">
                <span className="font-bold uppercase">
                    The tension: {' '}
                </span>
                The OSS ecosystem has already undergone major structural shifts, from distributed communities toward a model where solo maintainers carry outsized responsibility (Eghbal 2020). For freedom tech developers, this burden is amplified by the unique demands of the Bitcoin/Nostr ecosystem. Contributors must simultaneously be visionary builders and pragmatic managers, technical experts and community leaders, creative innovators and maintenance workers — all while navigating the additional complexities of Bitcoin payments, tax implications, and the high-stakes nature of financial infrastructure. As projects mature, the most creative contributors find themselves trapped between their desire to build and innovate and the growing responsibility to maintain, manage, and support what they've created. Developers must individually shoulder technical, administrative, and social responsibilities that would typically be distributed across teams in traditional organizations. <SimpleShareButton shareId={SHAREABLE_description_IDS.INVISIBLE_WORK} />
            </p>

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Taking on multiple roles is exciting and, at the same time, exhausting
                </span>
                <p>
                    Contributing to OSS involves a much broader skill set than traditional software development, requiring research, technical writing, communication, and project management alongside coding. 6 out of 26 contributors described this variety as both exciting and exhausting — they appreciate the opportunity to grow diverse skills in a value-aligned environment, but struggle without adequate support structures. Unlike working at tech companies where developers primarily write code, OSS contributors spend significant time on research and consensus-building. Research involves substantial invisible costs that contributors must shoulder independently, while 6 contributors reported to struggle with project management and organizing their work without support structures. <SimpleShareButton shareId={SHAREABLE_description_IDS.AMORPHOUS_SCOPE} />
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "4",
                        text: "At the moment … there are better places to enjoy programming than Bitcoin, because the project management is very poor, and it's just a lot of struggle to get work done, to organize, to get review. So if I wanted to do research, I would probably still do something different, something painless.",
                        shareId: SHAREABLE_description_IDS.AMORPHOUS_SCOPE_QUOTE_2,
                        author: {
                        type: "mid",
                        respondentNumber: 4,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Tradeoffs between creativity and management
                </span>
                <p>
                    As OSS projects mature, contributors face an inevitable shift from creative development to maintenance and contributor management. 5 out of 26 contributors reported struggling with tradeoffs between being creative and managing other contributors. This transition is particularly challenging for experienced developers who must give up hands-on building and innovating to review pull requests, train new contributors, and meet community expectations to maintain a project. Contributors find themselves spending more time checking others' implementations than creating, leading to frustration and boredom among those who thrive on innovation. <SimpleShareButton shareId={SHAREABLE_description_IDS.INVISIBILITY_MAINTENANCE} />
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "18",
                        text: "We had a whole year of this creative process, and it was amazing, but I think right now it's kind of boring, because I'm not creating anymore, I'm just checking that every contributor is implementing. It's boring for me to just check and maintain.",
                        shareId: SHAREABLE_description_IDS.INVISIBILITY_MAINTENANCE_QUOTE_2,
                        author: {
                        type: "expert",
                        respondentNumber: 18,
                        },
                    },
                ]}
            />

            <div className="text-[16px] space-y-[1.5rem]">
                <span className="inline-block font-bold uppercase">
                    Pros and cons of Bitcoin payments
                </span>
                <p>
                    Grants also bring hidden labor. In addition to preparing applications, contributors must often manage incoming payments (frequently in BTC) and handle related responsibilities like healthcare or taxes independently. Contributors appreciate being paid in BTC ("it feels right") but at the same time this administrative overhead can disproportionately impact those with less experience or external support. In one case, the lack of healthcare and benefit was one of the key reasons for departure from the grant ecosystem. <SimpleShareButton shareId={SHAREABLE_description_IDS.ADMINISTRATIVE_BURDEN} />
                </p>
            </div>

            <QuoteCards
                quotes={[
                    {
                        id: "21",
                        text: "All the grants are paid in Bitcoin, which is great. I like that. It's a big experiment, see how this works. I am not an accountant. Luckily, I have one that understands Bitcoin, and how that is actually going to work out long term. I'm just sweeping that under the rug, either let the accountant figure it out or I'll figure it out later. That gives me some anxiety. … Like, am I paying more taxes? I really can't stand that side of business.",
                        shareId: SHAREABLE_description_IDS.ADMINISTRATIVE_BURDEN_QUOTE_2,
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

import { ReactNode } from 'react';
import { List, ListItem } from './list-components';
import { SimpleShareButton } from '@/app/components/share-mode/simple-share-button';
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';

export interface Section {
  id: string;
  textContent: ReactNode;
  animation: 'framesOnly' | 'innerOnly' | 'complete' | null;
}

export const sections: Section[] = [
  {
    id: "00",
    textContent: (
      <div className="max-w-3xl min-h-[200px] flex items-center text-base">
        <p className="mb-4">
        Our findings revealed that the very freedom that attracts developers creates the conditions that drive them away — admin burden, isolation, grant anxiety. But this tyranny of permissionlessness isn't inevitable. While the funding ecosystem for Bitcoin and related technologies is expanding, there are several ways in which funders and stakeholders in the ecosystem can further support grant-funded contributors. <SimpleShareButton shareId={SHAREABLE_description_IDS.NOT_INEVITABLE} />

        </p>
      </div>
    ),
    animation: 'framesOnly',
  },
  {
    id: "01",
    textContent: (
      <div className="max-w-3xl min-h-[200px] flex items-center text-base">
        <p>These recommendations outline concrete steps toward "sustainable permissionlessness" — maintaining open participation while creating structural support for contributors' day-to-day experience. They are directed primarily to funders, since projects and contributors are already bearing the full weight of the tyranny of permissionlessness. <SimpleShareButton shareId={SHAREABLE_description_IDS.KEEPING_OPEN_PARTICIPATION} /></p>
      </div>
    ),
    animation: 'innerOnly',
  },
  {
    id: "02",
    textContent: (
      <div className="max-w-3xl min-h-[200px] flex items-center text-base">
        <div>
          <p className="font-bold">The core principle: sustain entry motivations by making everything else easier.</p>
          <p>Many of the challenges that we identified are not new, and echo decades of experience in open source and civic tech communities. Rather than starting from scratch, we point to proven models and resources that the freedom tech ecosystem can adapt to its unique context to facilitate and support its contributors.</p>
        </div>
      </div>
    ),
    animation: 'framesOnly',
  },
  {
    id: "03",
    textContent: (
      <div className="max-w-3xl min-h-[200px] flex items-center text-base">
        <div>
          <p className="uppercase font-bold mb-4">Restructure funding models</p>
          <List>
            <ListItem>Fund teams, not just individuals: introduce team-oriented grants to support application layer developers. <SimpleShareButton shareId={SHAREABLE_description_IDS.FUND_TEAMS_RECOMMENDATION} /></ListItem>
            <ListItem>Learn from The FOSS Sustainability Fund which supports projects and "the communities that sustain them" through grants that can be awarded to organizations.</ListItem>
            <ListItem>Extend renewal cycles after year 1: reduce the grant-writing burden for proven contributors. <SimpleShareButton shareId={SHAREABLE_description_IDS.EXTEND_RENEWAL} /></ListItem>
            <ListItem>Create revenue friendly grants: encourage profitability in grant-funded applications, based on OSS principles, use licensing cleverly to avoid corporate capture. <SimpleShareButton shareId={SHAREABLE_description_IDS.REVENUE_FRIENDLY} /></ListItem>
            <ListItem>Develop transition pathways: fund alumni roles (mentorship, documentation, part-time maintenance). <SimpleShareButton shareId={SHAREABLE_description_IDS.TRANSITION_PATHWAYS} /></ListItem>
          </List>
        </div>
      </div>
    ),
    animation: 'innerOnly',
  },
  {
    id: "04",
    textContent: (
      <div className="w-full min-h-[200px] flex items-center text-base">
        <div className="w-full">
          <p className="uppercase font-bold mb-4">Provide individual support beyond money</p>
          <List>
            <ListItem>Facilitate admin support: facilitate shared services for taxes, healthcare, legal needs. <SimpleShareButton shareId={SHAREABLE_description_IDS.SHARED_ADMIN} /></ListItem>
            <ListItem>Some community-led initiatives already exist to support admin work for Bitcoin developers: the Bitcoin Legal Defense Fund offers legal support, while Satoshi Pacioli Accounting provides free tax services for OSS Bitcoin developers. More work could be done to support these initiatives and connect them with grant-funded developers.</ListItem>
            <ListItem>Co-working space stipends: combat isolation through physical presence. <SimpleShareButton shareId={SHAREABLE_description_IDS.COWORKING_STIPEND} /></ListItem>
            <ListItem>Mentorship matching: connect new contributors to experienced developers to ease onboarding pains.</ListItem>
            <ListItem>Learn from the Linux Foundation's LFX Mentorship program, which structures mentorship programs connecting experienced maintainers with new contributors.</ListItem>
          </List>
        </div>
      </div>
    ),
    animation: 'framesOnly',
  },
  {
    id: "05",
    textContent: (
      <div className="max-w-3xl min-h-[200px] flex items-center text-base">
        <List>
          <ListItem>Mental health resources: normalize and support initiatives aimed to improve contributors' psychological wellbeing.</ListItem>
          <ListItem>While community-led initiatives such as Open Source Guides provide general self-care tips for OSS maintainers, freedom tech developers face unique stressors. Funders could support tailored programs and resources that understand the specific challenges of building censorship-resistant infrastructure.</ListItem>
          <ListItem>Self-management toolkits: provide productivity resources, time management support, especially for newer contributors.</ListItem>
            <ListItem>Make invisible work visible and valued: explicitly recognize and compensate non-coding work (research, maintenance, mentorship, documentation, management) in grant structures and community recognition systems. <SimpleShareButton shareId={SHAREABLE_description_IDS.MAKE_INVISIBLE_VISIBLE} /></ListItem>
        </List>
      </div>
    ),
    animation: 'innerOnly',
  },
  {
    id: "06",
    textContent: (
      <div className="w-full min-h-[200px] flex items-center text-base">
        <div className="w-full">
          <p className="uppercase font-bold mb-4">Support ecosystem coordination and health</p>
          <List>
            <ListItem>Partner with universities: create structured pathways and talent pipeline into the ecosystem.</ListItem>
            <ListItem>Fund team offsites and developers retreats: provide financial and organizational support for smaller IRL events beyond conferences. <SimpleShareButton shareId={SHAREABLE_description_IDS.FUND_OFFSITES} /></ListItem>
            <ListItem>Document institutional knowledge: capture expertise before developers leave.</ListItem>
            <ListItem>Support community initiatives aimed toward mindfulness and wellbeing: preventive approaches including yoga retreats, mindfulness programs at conferences, wellbeing workshops.</ListItem>
          </List>
        </div>
      </div>
    ),
    animation: 'framesOnly',
  },
  {
    id: "07",
    textContent: (
      <div className="max-w-6xl">
        <p className="font-bold mb-6 text-center">Developers' ideas</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg">
            <p className="text-sm italic mb-3">
              "One thing I've been doing is mentoring other people getting into open source. There's a developer that I mentored for over a year, and I still mentored and helped him get a grant, and then I just took on a new person, and I'm really trying to give these people what I didn't get, and take all these experiences I had and really help them feel supported, and create a space where they can be a beginner and not have the answers, and that they don't have to feel like they're constantly having to prove themselves and impress somebody. And so that's been really gratifying to be able to kind of support other people and but in general, I think Bitcoin open source is an amazing thing, and is and something I continue to be inspired by, and I love working with the open source community and connecting with them."
            </p>
            <p className="text-xs text-gray-600 font-semibold">— Respondent #13 New contributor</p>
          </div>

          <div className="p-4 rounded-lg">
            <p className="text-sm italic mb-3">
              "I feel like that might be a huge missing aspect of a lot of open source teams, this idea of an offsite or just getting together in person. It's kind of hard to get people around from around the world to travel for an open source project since they're not getting paid for, but when it does happen, it's actually really productive, and I would hope we do more of that."
            </p>
            <p className="text-xs text-gray-600 font-semibold">— Respondent #20 Expert contributor</p>
          </div>

          <div className="p-4 rounded-lg">
            <p className="text-sm italic mb-3">
              "Just trying to slip in more mindfulness does make sense. So, a lot of projects and a lot of developers, they'll feel the need to travel around a lot, and go to a lot of conferences and and that can take its toll. There's usually a lot of alcohol involved, and it's quite high energy and then you feel bad because you're actually neglecting the project. So if you can have that space be more nurturing, and have some mindfulness. I think there is probably, maybe even subconscious, an active move to provide … satellite events at some of these conferences. Like, there's the Bitcoin runners, and in the event, I'll go for a jog around the local city or something, and there's a Bitcoin walkers society as well. And maybe something which you could push is, for some of these conferences, some mindfulness exercises or mindfulness workshops where there could be some meditation, or some guided meditation, or some yoga or something like that, I think that could be great for people."
            </p>
            <p className="text-xs text-gray-600 font-semibold">— Respondent #25 Expert contributor</p>
          </div>
        </div>
      </div>
    ),
    animation: 'framesOnly',
  },
];
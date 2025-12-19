export interface Shareabledescription {
  id: string;
  quote: string;
  description: string;
  section: string;
  order: number;
}

export const SHAREABLE_description_IDS = {
  QUOTE_1: 'quote-1',
  QUOTE_2: 'quote-2',
  QUOTE_3: 'quote-3',
  QUOTE_4: 'quote-4',
  QUOTE_5: 'quote-5',
  QUOTE_6: 'quote-6',
  QUOTE_7: 'quote-7',
  QUOTE_8: 'quote-8',
  QUOTE_9: 'quote-9',
  QUOTE_10: 'quote-10',
  QUOTE_11: 'quote-11',
  QUOTE_12: 'quote-12',
  QUOTE_13: 'quote-13',
  QUOTE_14: 'quote-14',
  QUOTE_15: 'quote-15',
  QUOTE_16: 'quote-16',
  QUOTE_17: 'quote-17',
  QUOTE_18: 'quote-18',
  QUOTE_19: 'quote-19',
  QUOTE_20: 'quote-20',
  QUOTE_21: 'quote-21',
  QUOTE_22: 'quote-22',
  QUOTE_23: 'quote-23',
  QUOTE_24: 'quote-24',
  QUOTE_25: 'quote-25',
  QUOTE_26: 'quote-26',
  QUOTE_27: 'quote-27',
  QUOTE_28: 'quote-28',
  QUOTE_29: 'quote-29',
  QUOTE_30: 'quote-30',
  QUOTE_31: 'quote-31',
  QUOTE_32: 'quote-32',
  QUOTE_33: 'quote-33',
  QUOTE_34: 'quote-34',
  QUOTE_35: 'quote-35',
  QUOTE_36: 'quote-36',
  QUOTE_37: 'quote-37',
  QUOTE_38: 'quote-38',
  QUOTE_39: 'quote-39',
  QUOTE_40: 'quote-40',
  QUOTE_41: 'quote-41',
  QUOTE_42: 'quote-42',
  QUOTE_43: 'quote-43',
  QUOTE_44: 'quote-44',
  QUOTE_45: 'quote-45',
  QUOTE_46: 'quote-46',
  QUOTE_47: 'quote-47',
  QUOTE_48: 'quote-48',
  QUOTE_49: 'quote-49',
  QUOTE_50: 'quote-50',
  QUOTE_51: 'quote-51',
  QUOTE_52: 'quote-52',
  QUOTE_53: 'quote-53',
  QUOTE_54: 'quote-54',
  QUOTE_55: 'quote-55',
  QUOTE_56: 'quote-56',
  QUOTE_57: 'quote-57',
  QUOTE_58: 'quote-58',
  QUOTE_59: 'quote-59',
  QUOTE_60: 'quote-60',
  QUOTE_61: 'quote-61',
  QUOTE_62: 'quote-62',
  QUOTE_63: 'quote-63',
  QUOTE_64: 'quote-64',
  QUOTE_65: 'quote-65',
  QUOTE_66: 'quote-66',
  QUOTE_67: 'quote-67',
  QUOTE_68: 'quote-68',
  QUOTE_69: 'quote-69',
  QUOTE_70: 'quote-70',
} as const;

export type ShareabledescriptionId = typeof SHAREABLE_description_IDS[keyof typeof SHAREABLE_description_IDS];

export const shareabledescriptionData: Record<string, Shareabledescription> = {
  [SHAREABLE_description_IDS.QUOTE_1]: {
    id: SHAREABLE_description_IDS.QUOTE_1,
    quote: "This report is the first-ever deep-dive into the working lives of independent developers building censorship-resistant technology and what they need to sustain their work.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Executive summary",
    order: 1
  },
  [SHAREABLE_description_IDS.QUOTE_2]: {
    id: SHAREABLE_description_IDS.QUOTE_2,
    quote: "Our core finding: the very values and features that attract developers to Bitcoin and Nostr, including freedom, autonomy and permissionless participation, become the source of their greatest challenges.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Executive summary",
    order: 2
  },
  [SHAREABLE_description_IDS.QUOTE_3]: {
    id: SHAREABLE_description_IDS.QUOTE_3,
    quote: "This isn’t inevitable. With intentional design, we can maintain permissionless participation while building sustainable work practices.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Executive summary",
    order: 3
  },
  [SHAREABLE_description_IDS.QUOTE_4]: {
    id: SHAREABLE_description_IDS.QUOTE_4,
    quote: "Part 4: Four Strategies for Chaos: Contributors adopt distinct approaches based on experience and project type. With experience, they do not build more sustainable approaches — they simply learn to lean into chaos.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Executive summary",
    order: 4
  },
  [SHAREABLE_description_IDS.QUOTE_5]: {
    id: SHAREABLE_description_IDS.QUOTE_5,
    quote: "Grant structures actively discourage the revenue models that could sustain application development",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Executive summary",
    order: 5
  },
  [SHAREABLE_description_IDS.QUOTE_6]: {
    id: SHAREABLE_description_IDS.QUOTE_6,
    quote: "Open Source Software (OSS) is foundational to our global digital infrastructure.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Study overview",
    order: 6
  },
  [SHAREABLE_description_IDS.QUOTE_7]: {
    id: SHAREABLE_description_IDS.QUOTE_7,
    quote: "Bitcoin introduced a new possibility for open source: by creating a new form of digital money, it also created new capacity to fund its development.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Study overview",
    order: 7
  },
  [SHAREABLE_description_IDS.QUOTE_8]: {
    id: SHAREABLE_description_IDS.QUOTE_8,
    quote: "For the first time, the original OSS vision of sustainable, independent development seems within reach.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Study overview",
    order: 8
  },
  [SHAREABLE_description_IDS.QUOTE_9]: {
    id: SHAREABLE_description_IDS.QUOTE_9,
    quote: "If OSS is to deliver on its promise to decentralize the workforce, then we need to treat these developers' experiences as a primary way of working, rather than as the exception.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Study overview",
    order: 9
  },
  [SHAREABLE_description_IDS.QUOTE_10]: {
    id: SHAREABLE_description_IDS.QUOTE_10,
    quote: "How do full-time, grant-funded, institutionally unaffiliated developers in the Bitcoin and Bitcoin-adjacent (i.e. Nostr) ecosystem work and what do they need to sustainably perform their role?",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Study overview",
    order: 10
  },
  [SHAREABLE_description_IDS.QUOTE_11]: {
    id: SHAREABLE_description_IDS.QUOTE_11,
    quote: "Our analysis revealed a central paradox: the very values and processes that attract developers to the Bitcoin and Nostr ecosystems become the source of their most persistent challenges.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Study overview",
    order: 11
  },
  [SHAREABLE_description_IDS.QUOTE_12]: {
    id: SHAREABLE_description_IDS.QUOTE_12,
    quote: "Without structural support, permissionlessness, the core principle of Bitcoin, can create isolation, burnout, and unsustainable work patterns when applied to human systems.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Study overview",
    order: 12
  },
  [SHAREABLE_description_IDS.QUOTE_13]: {
    id: SHAREABLE_description_IDS.QUOTE_13,
    quote: "Without addressing these systemic challenges, we risk losing the people building tools for human freedom.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Study overview",
    order: 13
  },
  [SHAREABLE_description_IDS.QUOTE_14]: {
    id: SHAREABLE_description_IDS.QUOTE_14,
    quote: "New contributors (<3 years experience in OSS) dominate at 42.3%, indicating healthy ecosystem growth.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Demographics at a glance",
    order: 14
  },
  [SHAREABLE_description_IDS.QUOTE_15]: {
    id: SHAREABLE_description_IDS.QUOTE_15,
    quote: "While overall contributors find their roles somewhat sustainable, a clear pattern emerged: the more the experience, the more unsustainable one’s work process becomes.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Top level analysis: navigating the paradoxes of OSS freedom tech development",
    order: 15
  },
  [SHAREABLE_description_IDS.QUOTE_16]: {
    id: SHAREABLE_description_IDS.QUOTE_16,
    quote: "New contributors are most long-term oriented, and have strongest public goods focus.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Top level analysis: navigating the paradoxes of OSS freedom tech development",
    order: 16
  },
  [SHAREABLE_description_IDS.QUOTE_17]: {
    id: SHAREABLE_description_IDS.QUOTE_17,
    quote: "As contributors gain experience, they become more realistic about openness, time horizons, and commercial realities.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Top level analysis: navigating the paradoxes of OSS freedom tech development",
    order: 17
  },
  [SHAREABLE_description_IDS.QUOTE_18]: {
    id: SHAREABLE_description_IDS.QUOTE_18,
    quote: "Expert contributors also report the highest scores on caring for others (collaborators, community, people outside work), suggesting they channel community care through technical development, which may contribute to their unsustainable work patterns.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Top level analysis: navigating the paradoxes of OSS freedom tech development",
    order: 18
  },
  [SHAREABLE_description_IDS.QUOTE_19]: {
    id: SHAREABLE_description_IDS.QUOTE_19,
    quote: "Participants generally agree on the open and transparent nature of their work environments, but app developers acknowledge they have more centralized and top-down decision making approaches, often because they are the only people working on a project.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Top level analysis: navigating the paradoxes of OSS freedom tech development",
    order: 19
  },
  [SHAREABLE_description_IDS.QUOTE_20]: {
    id: SHAREABLE_description_IDS.QUOTE_20,
    quote: "Nearly all contributors have an autonomous work style, which feels especially isolating to core contributors.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Top level analysis: navigating the paradoxes of OSS freedom tech development",
    order: 20
  },
  [SHAREABLE_description_IDS.QUOTE_21]: {
    id: SHAREABLE_description_IDS.QUOTE_21,
    quote: "This tension was revealed by our interviews. Permissionlessness, the defining principle of Bitcoin and the broader ecosystem, becomes oppressive when applied to human work systems.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Core findings: the tyranny of permissionlessness",
    order: 21
  },
  [SHAREABLE_description_IDS.QUOTE_22]: {
    id: SHAREABLE_description_IDS.QUOTE_22,
    quote: "The very values and features that attract developers to Bitcoin and Nostr, including freedom, autonomy and permissionless participation, become the source of their greatest challenges. We call this the ”tyranny of permissionlessness.”",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Core findings: the tyranny of permissionlessness",
    order: 22
  },
  [SHAREABLE_description_IDS.QUOTE_23]: {
    id: SHAREABLE_description_IDS.QUOTE_23,
    quote: "Our findings suggest that the absence of gatekeepers results in absence of guides; freedom from oversight means freedom from support; the right to contribute becomes the responsibility to self-manage everything.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Core findings: the tyranny of permissionlessness",
    order: 23
  },
  [SHAREABLE_description_IDS.QUOTE_24]: {
    id: SHAREABLE_description_IDS.QUOTE_24,
    quote: "The tyranny doesn't diminish with time, it compounds.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Core findings: the tyranny of permissionlessness",
    order: 24
  },
  [SHAREABLE_description_IDS.QUOTE_25]: {
    id: SHAREABLE_description_IDS.QUOTE_25,
    quote: "Each dimension shows how the very features that attract contributors to the space, mission, openness, autonomy, become the primary causes of unsustainable work patterns.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Core findings: the tyranny of permissionlessness",
    order: 25
  },
  [SHAREABLE_description_IDS.QUOTE_26]: {
    id: SHAREABLE_description_IDS.QUOTE_26,
    quote: "The very values that make the work meaningful become the mechanisms of burnout, leaving developers caught between their commitment to freedom technology and their own sustainability.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Free from authority, free to burn out",
    order: 26
  },
  [SHAREABLE_description_IDS.QUOTE_27]: {
    id: SHAREABLE_description_IDS.QUOTE_27,
    quote: "3/4 of participants explicitly described the meaningfulness of their work as a key motivator, often citing it to justify routines and patterns they acknowledged as unsustainable.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Free from authority, free to burn out",
    order: 27
  },
  [SHAREABLE_description_IDS.QUOTE_28]: {
    id: SHAREABLE_description_IDS.QUOTE_28,
    quote: "The no-barrier ethos draws contributors across all experience levels: anyone can build without asking permission.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Free from authority, free to burn out",
    order: 28
  },
  [SHAREABLE_description_IDS.QUOTE_29]: {
    id: SHAREABLE_description_IDS.QUOTE_29,
    quote: "Over half of participants appreciate this flexibility to choose what to work on and when, yet these are precisely the areas where they report the most challenges.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Free from authority, free to burn out",
    order: 29
  },
  [SHAREABLE_description_IDS.QUOTE_30]: {
    id: SHAREABLE_description_IDS.QUOTE_30,
    quote: "As contributors gain experience, they develop deeper clarity about Bitcoin's humanitarian mission, but not about sustainable work practices.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Free from authority, free to burn out",
    order: 30
  },
  [SHAREABLE_description_IDS.QUOTE_31]: {
    id: SHAREABLE_description_IDS.QUOTE_31,
    quote: "The sacrificial ethos of OSS, compounded by freedom tech's humanitarian stakes, transforms exhaustion from exception to expectation.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Free from authority, free to burn out",
    order: 31
  },
  [SHAREABLE_description_IDS.QUOTE_32]: {
    id: SHAREABLE_description_IDS.QUOTE_32,
    quote: "OSS promises collaborative development, peer learning, and community support. In reality, contributors work primarily in isolation.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Collaborating alone",
    order: 32
  },
  [SHAREABLE_description_IDS.QUOTE_33]: {
    id: SHAREABLE_description_IDS.QUOTE_33,
    quote: "Contributors join the ecosystem to grow professionally through peer learning, but struggle with a chronic lack of consistent feedback.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Collaborating alone",
    order: 33
  },
  [SHAREABLE_description_IDS.QUOTE_34]: {
    id: SHAREABLE_description_IDS.QUOTE_34,
    quote: "Unlike traditional employment with defined progression (junior → senior → lead), grant-funded OSS offers no structured advancement.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Collaborating alone",
    order: 34
  },
  [SHAREABLE_description_IDS.QUOTE_35]: {
    id: SHAREABLE_description_IDS.QUOTE_35,
    quote: "Half of the interviewees struggle with maintaining consistent motivation in their unpredictable work environment.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Collaborating alone",
    order: 35
  },
  [SHAREABLE_description_IDS.QUOTE_36]: {
    id: SHAREABLE_description_IDS.QUOTE_36,
    quote: "The OSS ecosystem has already undergone major structural shifts, from distributed communities toward a model where solo maintainers carry outsized responsibility.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "The invisible labor of solopreneurship",
    order: 36
  },
  [SHAREABLE_description_IDS.QUOTE_37]: {
    id: SHAREABLE_description_IDS.QUOTE_37,
    quote: "Contributors must simultaneously be visionary builders and pragmatic managers, technical experts and community leaders, creative innovators and maintenance workers, all while navigating the additional complexities of Bitcoin payments, tax implications, immigration status, and other bureaucratic constraints that affect their ability to work and travel.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "The invisible labor of solopreneurship",
    order: 37
  },
  [SHAREABLE_description_IDS.QUOTE_38]: {
    id: SHAREABLE_description_IDS.QUOTE_38,
    quote: "As projects mature, the most creative contributors find themselves trapped between their desire to build and innovate and the growing responsibility to maintain, manage, and support what they've created.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "The invisible labor of solopreneurship",
    order: 38
  },
  [SHAREABLE_description_IDS.QUOTE_39]: {
    id: SHAREABLE_description_IDS.QUOTE_39,
    quote: "For 15 out of 26 contributors, “coding is not just writing code.”",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "The invisible labor of solopreneurship",
    order: 39
  },
  [SHAREABLE_description_IDS.QUOTE_40]: {
    id: SHAREABLE_description_IDS.QUOTE_40,
    quote: "Grant funding also creates its own invisible labor burden.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "The invisible labor of solopreneurship",
    order: 40
  },
  [SHAREABLE_description_IDS.QUOTE_41]: {
    id: SHAREABLE_description_IDS.QUOTE_41,
    quote: "Despite the ethos of borderless, permissionless systems, contributors still confront the geopolitical and administrative realities of their local contexts.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "The invisible labor of solopreneurship",
    order: 41
  },
  [SHAREABLE_description_IDS.QUOTE_42]: {
    id: SHAREABLE_description_IDS.QUOTE_42,
    quote: "While financial compensation is not a primary motivator, sustainability remains elusive for most contributors.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Autonomous over projects, but constrained by the funding structure",
    order: 42
  },
  [SHAREABLE_description_IDS.QUOTE_43]: {
    id: SHAREABLE_description_IDS.QUOTE_43,
    quote: "16/26 participants described ongoing difficulties navigating financial sustainability.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Autonomous over projects, but constrained by the funding structure",
    order: 43
  },
  [SHAREABLE_description_IDS.QUOTE_44]: {
    id: SHAREABLE_description_IDS.QUOTE_44,
    quote: "Annual cycles of reapplication introduce stress and distraction, especially for contributors whose mother tongue is not English.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Autonomous over projects, but constrained by the funding structure",
    order: 44
  },
  [SHAREABLE_description_IDS.QUOTE_45]: {
    id: SHAREABLE_description_IDS.QUOTE_45,
    quote: "Contributors define sustainability in terms of decades and view Bitcoin and OSS development as life-long commitments, even while recognizing role flexibility within the ecosystem.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Autonomous over projects, but constrained by the funding structure",
    order: 45
  },
  [SHAREABLE_description_IDS.QUOTE_46]: {
    id: SHAREABLE_description_IDS.QUOTE_46,
    quote: "The lack of team-based funding models limits long-term planning and ability to focus as individual maintainers need to take on roles beyond development, including grant writing, onboarding, and community management.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Autonomous over projects, but constrained by the funding structure",
    order: 46
  },
  [SHAREABLE_description_IDS.QUOTE_47]: {
    id: SHAREABLE_description_IDS.QUOTE_47,
    quote: "The individual and short-term structure of grants gives rise to a perverse incentive by which contributors will “write for the grant” instead of pursuing their visions, diverting time and attention from actual development work.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Autonomous over projects, but constrained by the funding structure",
    order: 47
  },
  [SHAREABLE_description_IDS.QUOTE_48]: {
    id: SHAREABLE_description_IDS.QUOTE_48,
    quote: "While grant programs are presented as open and permissionless, many participants noted that success often depends on informal connections and social capital.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Autonomous over projects, but constrained by the funding structure",
    order: 48
  },
  [SHAREABLE_description_IDS.QUOTE_49]: {
    id: SHAREABLE_description_IDS.QUOTE_49,
    quote: "Hands-off funding approaches leave contributors navigating administrative burdens and isolation without adequate support structures.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Autonomous over projects, but constrained by the funding structure",
    order: 49
  },
  [SHAREABLE_description_IDS.QUOTE_50]: {
    id: SHAREABLE_description_IDS.QUOTE_50,
    quote: "The combination of openness and permissionless ethos, unstructured work environment, lack of support structures, and short-term funding cycles results in a day-to-day routine marked by chaos, which contributors navigate in different ways.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Strategies: 4 approaches to the chaos of day-to-day work",
    order: 50
  },
  [SHAREABLE_description_IDS.QUOTE_51]: {
    id: SHAREABLE_description_IDS.QUOTE_51,
    quote: "Many in this group view grant-funded development as a strategic career phase rather than a permanent destination.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Role sustainability",
    order: 51
  },
  [SHAREABLE_description_IDS.QUOTE_52]: {
    id: SHAREABLE_description_IDS.QUOTE_52,
    quote: "The ecosystem's health depends on retaining enough developers long enough to build deep protocol knowledge, but the current model is designed to encourage short-term contributions over long-term commitments.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Role sustainability",
    order: 52
  },
  [SHAREABLE_description_IDS.QUOTE_53]: {
    id: SHAREABLE_description_IDS.QUOTE_53,
    quote: "Without intentional structures for knowledge transfer, each departure means losing institutional knowledge that cannot be fully captured in the project history.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Role sustainability",
    order: 53
  },
  [SHAREABLE_description_IDS.QUOTE_54]: {
    id: SHAREABLE_description_IDS.QUOTE_54,
    quote: "The ecosystem sustains itself not by supporting individuals, but by continuously replacing them.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Role sustainability",
    order: 54
  },
  [SHAREABLE_description_IDS.QUOTE_55]: {
    id: SHAREABLE_description_IDS.QUOTE_55,
    quote: "The one-size-fits-all grant model fails to recognize the different realities of core infrastructure vs application work.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Project sustainability",
    order: 55
  },
  [SHAREABLE_description_IDS.QUOTE_56]: {
    id: SHAREABLE_description_IDS.QUOTE_56,
    quote: "Protocol work needs ongoing funding streams, applications need revenue freedom.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Project sustainability",
    order: 56
  },
  [SHAREABLE_description_IDS.QUOTE_57]: {
    id: SHAREABLE_description_IDS.QUOTE_57,
    quote: "The result across both is a set of perverse incentives that trap projects in dependency.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Project sustainability",
    order: 57
  },
  [SHAREABLE_description_IDS.QUOTE_58]: {
    id: SHAREABLE_description_IDS.QUOTE_58,
    quote: "Funders inadvertently optimize for yearly renewal requirements over long-term project sustainability.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Project sustainability",
    order: 58
  },
  [SHAREABLE_description_IDS.QUOTE_59]: {
    id: SHAREABLE_description_IDS.QUOTE_59,
    quote: "Psychological wellbeing is as crucial to sustainability as financial stability, yet burnout is primarily treated as an individual problem rather than the systemic issue that it is.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Psychological sustainability",
    order: 59
  },
  [SHAREABLE_description_IDS.QUOTE_60]: {
    id: SHAREABLE_description_IDS.QUOTE_60,
    quote: "The ecosystem's resilience depends on recognizing that psychological sustainability requires structural support, not just individual coping strategies.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Psychological sustainability",
    order: 60
  },
  [SHAREABLE_description_IDS.QUOTE_61]: {
    id: SHAREABLE_description_IDS.QUOTE_61,
    quote: "When burnout occurs, contributors overwhelmingly internalize responsibility for fixing it.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Psychological sustainability",
    order: 61
  },
  [SHAREABLE_description_IDS.QUOTE_62]: {
    id: SHAREABLE_description_IDS.QUOTE_62,
    quote: "Without support structures, burnout remains inevitable.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Hidden costs – Psychological sustainability",
    order: 62
  },
  [SHAREABLE_description_IDS.QUOTE_63]: {
    id: SHAREABLE_description_IDS.QUOTE_63,
    quote: "This “tyranny of permissionlessness” represents one possible, yet critical, failure mode of open, decentralized systems — not an inevitable outcome.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Recommendations: from tyranny to sustainable permissionlessness",
    order: 63
  },
  [SHAREABLE_description_IDS.QUOTE_64]: {
    id: SHAREABLE_description_IDS.QUOTE_64,
    quote: "These recommendations outline concrete steps toward \"sustainable permissionlessness\" — maintaining open participation while creating structural support for contributors’ day-to-day experience.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Recommendations: from tyranny to sustainable permissionlessness",
    order: 64
  },
  [SHAREABLE_description_IDS.QUOTE_65]: {
    id: SHAREABLE_description_IDS.QUOTE_65,
    quote: "This “tyranny of permissionlessness” represents one possible, yet critical, failure mode of open, decentralized systems — not an inevitable outcome.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Recommendations: from tyranny to sustainable permissionlessness",
    order: 65
  },
  [SHAREABLE_description_IDS.QUOTE_66]: {
    id: SHAREABLE_description_IDS.QUOTE_66,
    quote: "These recommendations outline concrete steps toward “sustainable permissionlessness” — maintaining open participation while creating structural support for contributors’ day-to-day experience.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Recommendations: from tyranny to sustainable permissionlessness",
    order: 66
  },
  [SHAREABLE_description_IDS.QUOTE_67]: {
    id: SHAREABLE_description_IDS.QUOTE_67,
    quote: "The core principle: sustain entry motivations by making everything else easier.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "Recommendations: from tyranny to sustainable permissionlessness",
    order: 67
  },
  [SHAREABLE_description_IDS.QUOTE_68]: {
    id: SHAREABLE_description_IDS.QUOTE_68,
    quote: "Fund teams, not just individuals: introduce team-oriented grants to support application layer developers.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "For funders and granting organizations → Restructure funding models",
    order: 68
  },
  [SHAREABLE_description_IDS.QUOTE_69]: {
    id: SHAREABLE_description_IDS.QUOTE_69,
    quote: "Extend renewal cycles after year 1: reduce the grant-writing burden for proven contributors.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "For funders and granting organizations → Restructure funding models",
    order: 69
  },
  [SHAREABLE_description_IDS.QUOTE_70]: {
    id: SHAREABLE_description_IDS.QUOTE_70,
    quote: "Make invisible work visible and valued: explicitly recognize and fundcompensate non-coding work (research, maintenance, mentorship, documentation, management) in grant structures, not just feature development and community recognition systems.",
    description: "Direct quote from Permissionless Paths by @waye_dev\n - the first research report to explore the human experience of permissionless systems.\n\nRead the full report → https://www.waye.dev/initiatives/permissionless-paths/research-report",
    section: "For funders and granting organizations → Provide individual support beyond money",
    order: 70
  },
};

export default shareabledescriptionData;

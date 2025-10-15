export interface Shareabledescription {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  section: string;
  order: number;
}

export const SHAREABLE_description_IDS = {
  FREE_FROM_AUTHORITY: 'free-from-authority',
  PERMISSIONLESSNESS_ATTRACTS: 'permissionlessness-attracts',
  EXPERIENCE_ENABLES: 'experience-enables',
  CULTURAL_FRICTIONS: 'cultural-frictions',
  COLLABORATING_ALONE: 'collaborating-alone',
  GROWING_WITHOUT_GUIDANCE: 'growing-without-guidance',
  NO_CLEAR_CAREER: 'no-clear-career',
  MOTIVATION_CHALLENGES: 'motivation-challenges',
  IRL_GATHERINGS: 'irl-gatherings',
  AMORPHOUS_SCOPE: 'amorphous-scope',
  INVISIBILITY_MAINTENANCE: 'invisibility-maintenance',
  ADMINISTRATIVE_BURDEN: 'administrative-burden',
  LOCATION_BARRIERS: 'location-barriers',
  SEARCHING_SUSTAINABILITY: 'searching-sustainability',
  BITCOIN_FOREVER_GRANTS: 'bitcoin-forever-grants',
  INDIVIDUAL_VS_TEAM: 'individual-vs-team',
  REALIZING_VISION: 'realizing-vision',
  PERMISSIONLESS_ENTRY: 'permissionless-entry',
  FUND_TEAMS: 'fund-teams',
  EXTEND_RENEWAL: 'extend-renewal',
  REVENUE_FRIENDLY: 'revenue-friendly',
  TRANSITION_PATHWAYS: 'transition-pathways',
  SHARED_ADMIN: 'shared-admin',
  COWORKING_STIPEND: 'coworking-stipend',
  MENTORSHIP_INFRASTRUCTURE: 'mentorship-infrastructure',
  INVISIBLE_WORK: 'invisible-work',
  FUND_OFFSITES: 'fund-offsites',
  SUSTAINABLE_PERMISSIONLESSNESS: 'sustainable-permissionlessness',
  CORE_FINDING: 'core-finding', 
  TYRANNY_DEFINITION: 'tyranny-definition',
  INTENTIONAL_DESIGN: 'intentional-design',
  STUDY_STATS: 'study-stats',
  SUSTAINABILITY_CHALLENGES: 'sustainability-challenges',
  PERMISSIONLESSNESS_ISOLATION: 'permissionlessness-isolation',
  SUSTAINABILITY_PARADOX: 'sustainability-paradox',
  FUTURE_ORIENTATION: 'future-orientation',
  EXPERT_CARING: 'expert-caring',
  PERMISSIONLESSNESS_ENABLES: 'permissionlessness-enables',
  FREEDOM_FROM_OVERSIGHT: 'freedom-from-oversight',
  BURNOUT_EXPECTATION: 'burnout-expectation',
  NO_FRAMEWORK: 'no-framework',
  ECOSYSTEM_REPLACEMENT: 'ecosystem-replacement',
  CONSTANT_TURNOVER: 'constant-turnover',
  INSTITUTIONAL_KNOWLEDGE: 'institutional-knowledge',
  ONE_SIZE_FITS_ALL: 'one-size-fits-all',
  YEARLY_RENEWALS: 'yearly-renewals',
  FUNDERS_OPTIMIZE: 'funders-optimize',
  PSYCHOLOGICAL_SUSTAINABILITY: 'psychological-sustainability',
  NOT_INEVITABLE: 'not-inevitable',
  KEEPING_OPEN_PARTICIPATION: 'keeping-open-participation',
  FUND_TEAMS_RECOMMENDATION: 'fund-teams-recommendation',
  MAKE_INVISIBLE_VISIBLE: 'make-invisible-visible',
  SENIOR_APP_DEV_QUOTE_23: 'senior-app-dev-quote-23',
  PERMISSIONLESSNESS_ATTRACTS_QUOTE_11: 'permissionlessness-attracts-quote-11',
  FREE_FROM_AUTHORITY_QUOTE_2: 'free-from-authority-quote-2',
  PERMISSIONLESSNESS_ATTRACTS_QUOTE_2: 'permissionlessness-attracts-quote-2',
  PERMISSIONLESSNESS_ATTRACTS_QUOTE_3: 'permissionlessness-attracts-quote-3',
  EXPERIENCE_ENABLES_QUOTE_2: 'experience-enables-quote-2',
  EXPERIENCE_ENABLES_QUOTE_3: 'experience-enables-quote-3',
  CULTURAL_FRICTIONS_QUOTE_2: 'cultural-frictions-quote-2',
  CULTURAL_FRICTIONS_QUOTE_3: 'cultural-frictions-quote-3',
  CULTURAL_FRICTIONS_QUOTE_4: 'cultural-frictions-quote-4',
  COLLABORATING_ALONE_QUOTE_2: 'collaborating-alone-quote-2',
  COLLABORATING_ALONE_QUOTE_3: 'collaborating-alone-quote-3',
  GROWING_WITHOUT_GUIDANCE_QUOTE_2: 'growing-without-guidance-quote-2',
  GROWING_WITHOUT_GUIDANCE_QUOTE_3: 'growing-without-guidance-quote-3',
  GROWING_WITHOUT_GUIDANCE_QUOTE_4: 'growing-without-guidance-quote-4',
  GROWING_WITHOUT_GUIDANCE_QUOTE_5: 'growing-without-guidance-quote-5',
  NO_CLEAR_CAREER_QUOTE_2: 'no-clear-career-quote-2',
  MOTIVATION_QUOTE_2: 'motivation-quote-2',
  MOTIVATION_QUOTE_3: 'motivation-quote-3',
  MOTIVATION_QUOTE_4: 'motivation-quote-4',
  MOTIVATION_QUOTE_5: 'motivation-quote-5',
  IRL_GATHERINGS_QUOTE_2: 'irl-gatherings-quote-2',
  IRL_GATHERINGS_QUOTE_3: 'irl-gatherings-quote-3',
  IRL_GATHERINGS_QUOTE_4: 'irl-gatherings-quote-4',
  AMORPHOUS_SCOPE_QUOTE_2: 'amorphous-scope-quote-2',
  INVISIBILITY_MAINTENANCE_QUOTE_2: 'invisibility-maintenance-quote-2',
  ADMINISTRATIVE_BURDEN_QUOTE_2: 'administrative-burden-quote-2',
  LOCATION_BARRIERS_QUOTE_2: 'location-barriers-quote-2',
  SEARCHING_SUSTAINABILITY_QUOTE_2: 'searching-sustainability-quote-2',
  SEARCHING_SUSTAINABILITY_QUOTE_3: 'searching-sustainability-quote-3',
  BITCOIN_FOREVER_GRANTS_QUOTE_2: 'bitcoin-forever-grants-quote-2',
  INDIVIDUAL_VS_TEAM_QUOTE_2: 'individual-vs-team-quote-2',
  INDIVIDUAL_VS_TEAM_QUOTE_3: 'individual-vs-team-quote-3',
  REALIZING_VISION_QUOTE_2: 'realizing-vision-quote-2',
} as const;

export type ShareabledescriptionId = typeof SHAREABLE_description_IDS[keyof typeof SHAREABLE_description_IDS];


export const shareabledescriptionData: Record<string, Shareabledescription> = {
  [SHAREABLE_description_IDS.FREE_FROM_AUTHORITY]: {
    id: SHAREABLE_description_IDS.FREE_FROM_AUTHORITY,
    title: "Free from authority, free to burn out",
    description: "It's still the best work I've found so far. The autonomy is great in a way, and the work is meaningful... You get even paid for it.",
    imagePath: "/api/og?id=1",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-57&m=dev
    section: "Free from authority, free to burn out",
    order: 1
  },
  [SHAREABLE_description_IDS.PERMISSIONLESSNESS_ATTRACTS]: {
    id: SHAREABLE_description_IDS.PERMISSIONLESSNESS_ATTRACTS,
    title: "Permissionlessness attracts, then overwhelms",
    description: "It's nice to work for yourself, to have that freedom... but the curse is always that no one else is going to do it. So I've got to do it.",
    imagePath: "/api/og?id=2",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-33&m=dev
    section: "Permissionlessness attracts, then overwhelms",
    order: 2
  },
  [SHAREABLE_description_IDS.EXPERIENCE_ENABLES]: {
    id: SHAREABLE_description_IDS.EXPERIENCE_ENABLES,
    title: "Experience enables, then exhausts",
    description: "Everybody's burnt out. Everybody I work with is completely burnt out... It's the normal state of affairs.",
    imagePath: "/api/og?id=3",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-46&m=dev
    section: "Experience enables, then exhausts",
    order: 3
  },
  [SHAREABLE_description_IDS.CULTURAL_FRICTIONS]: {
    id: SHAREABLE_description_IDS.CULTURAL_FRICTIONS,
    title: "Cultural frictions",
    description: "I guess every day I hate Bitcoin because it's also full of assholes... every day is a decision to work on it again.",
    imagePath: "/api/og?id=4",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-109&m=dev
    section: "Cultural frictions",
    order: 4
  },
  [SHAREABLE_description_IDS.COLLABORATING_ALONE]: {
    id: SHAREABLE_description_IDS.COLLABORATING_ALONE,
    title: "Collaborating alone",
    description: "The lack of structure, the lack of support from experienced engineers, and the isolation... they're all different aspects of the same thing.",
    imagePath: "/api/og?id=5",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-148&m=dev
    section: "Collaborating alone",
    order: 5
  },
  [SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE]: {
    id: SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE,
    title: "Growing without guidance",
    description: "There was always stress in the back of my mind of not doing enough, because there's no KPI... Nobody even tells me if I'm doing good.",
    imagePath: "/api/og?id=6",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-184&m=dev
    section: "Growing without guidance",
    order: 6
  },
  [SHAREABLE_description_IDS.NO_CLEAR_CAREER]: {
    id: SHAREABLE_description_IDS.NO_CLEAR_CAREER,
    title: "No clear career pathways",
    description: "Since it's an open source project, and not a company, it's sometimes hard to feel like you belong.",
    imagePath: "/api/og?id=7",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-222&m=dev
    section: "No clear career pathways",
    order: 7
  },
  [SHAREABLE_description_IDS.MOTIVATION_CHALLENGES]: {
    id: SHAREABLE_description_IDS.MOTIVATION_CHALLENGES,
    title: "Motivation challenges",
    description: "It can be quite bipolar... periods of enthusiasm and productivity, and then periods of feeling underappreciated.",
    imagePath: "/api/og?id=8",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-239&m=dev
    section: "Motivation",
    order: 8
  },
  [SHAREABLE_description_IDS.IRL_GATHERINGS]: {
    id: SHAREABLE_description_IDS.IRL_GATHERINGS,
    title: "IRL gatherings",
    description: "A yoga retreat conference transformed my peers... healthier, philosophical, barefoot developers.",
    imagePath: "/api/og?id=9",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-322&m=dev
    section: "IRL gatherings",
    order: 9
  },
  [SHAREABLE_description_IDS.AMORPHOUS_SCOPE]: {
    id: SHAREABLE_description_IDS.AMORPHOUS_SCOPE,
    title: "Amorphous scope of OSS contribution",
    description: "In Bitcoin Core, sometimes I talk for weeks about a three-line change... lots of technical writing and communication.",
    imagePath: "/api/og?id=10",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-365&m=dev
    section: "Amorphous scope of OSS contribution",
    order: 10
  },
  [SHAREABLE_description_IDS.INVISIBILITY_MAINTENANCE]: {
    id: SHAREABLE_description_IDS.INVISIBILITY_MAINTENANCE,
    title: "Invisibility of maintenance",
    description: "Balancing reviewing PRs and doing your own work is really hard... you want contributors to become autonomous, but you lack time.",
    imagePath: "/api/og?id=11",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-383&m=dev
    section: "Invisibility of maintenance",
    order: 11
  },
  [SHAREABLE_description_IDS.ADMINISTRATIVE_BURDEN]: {
    id: SHAREABLE_description_IDS.ADMINISTRATIVE_BURDEN,
    title: "Administrative burden",
    description: "Taxes were a shitshow.",
    imagePath: "/api/og?id=12",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-346&m=dev
    section: "Administrative burden",
    order: 12
  },
  [SHAREABLE_description_IDS.LOCATION_BARRIERS]: {
    id: SHAREABLE_description_IDS.LOCATION_BARRIERS,
    title: "Location barriers",
    description: "My immigration status limited me from attending conferences... being paid in Bitcoin made visas difficult.",
    imagePath: "/api/og?id=13",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-429&m=dev
    section: "Location barriers",
    order: 13
  },
  [SHAREABLE_description_IDS.SEARCHING_SUSTAINABILITY]: {
    id: SHAREABLE_description_IDS.SEARCHING_SUSTAINABILITY,
    title: "Searching for sustainability",
    description: "It's hard, because I loved open source... but financial instability and isolation made me leave.",
    imagePath: "/api/og?id=14",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-439&m=dev
    section: "Searching for sustainability",
    order: 14
  },
  [SHAREABLE_description_IDS.BITCOIN_FOREVER_GRANTS]: {
    id: SHAREABLE_description_IDS.BITCOIN_FOREVER_GRANTS,
    title: "Bitcoin is forever, grants are yearly",
    description: "Every year you have to apply for a new grant... that makes multi-year projects hard to start.",
    imagePath: "/api/og?id=15",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-467&m=dev
    section: "Bitcoin is forever, grants are yearly",
    order: 15
  },
  [SHAREABLE_description_IDS.INDIVIDUAL_VS_TEAM]: {
    id: SHAREABLE_description_IDS.INDIVIDUAL_VS_TEAM,
    title: "Individual vs team grants",
    description: "I'm working entirely alone on a project that could never be completed by me alone.",
    imagePath: "/api/og?id=16",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-487&m=dev
    section: "Individual vs team grants",
    order: 16
  },
  [SHAREABLE_description_IDS.REALIZING_VISION]: {
    id: SHAREABLE_description_IDS.REALIZING_VISION,
    title: "Realizing your vision vs grants",
    description: "Sometimes I shift priorities to what I think funders want, not my real vision.",
    imagePath: "/api/og?id=17",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-515&m=dev
    section: "Realizing your vision vs grants",
    order: 17
  },
  [SHAREABLE_description_IDS.PERMISSIONLESS_ENTRY]: {
    id: SHAREABLE_description_IDS.PERMISSIONLESS_ENTRY,
    title: "Permissionless entry, opaque grants",
    description: "The reality of grants is that there's a social aspect... you have to be known.",
    imagePath: "/api/og?id=18",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-535&m=dev
    section: "Permissionless entry, opaque grants",
    order: 18
  },
  [SHAREABLE_description_IDS.FUND_TEAMS]: {
    id: SHAREABLE_description_IDS.FUND_TEAMS,
    title: "Fund teams, not just individuals",
    description: "Fund teams, not just individuals. OSS sustainability depends on collective support, not just solo contributors.",
    imagePath: "/api/og?id=19",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-545&m=dev
    section: "Recommendations — Restructure funding models",
    order: 19
  },
  [SHAREABLE_description_IDS.EXTEND_RENEWAL]: {
    id: SHAREABLE_description_IDS.EXTEND_RENEWAL,
    title: "Extend renewal cycles",
    description: "Extend renewal cycles after year 1. Proven contributors should build, not rewrite proposals every year.",
    imagePath: "/api/og?id=20",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-555&m=dev
    section: "Recommendations — Restructure funding models",
    order: 20
  },
  [SHAREABLE_description_IDS.REVENUE_FRIENDLY]: {
    id: SHAREABLE_description_IDS.REVENUE_FRIENDLY,
    title: "Revenue-friendly grants",
    description: "Revenue-friendly grants let open source apps find their own sustainability. OSS shouldn't fear profitability.",
    imagePath: "/api/og?id=21",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-563&m=dev
    section: "Recommendations — Restructure funding models",
    order: 21
  },
  [SHAREABLE_description_IDS.TRANSITION_PATHWAYS]: {
    id: SHAREABLE_description_IDS.TRANSITION_PATHWAYS,
    title: "Transition pathways",
    description: "Transition pathways keep talent engaged. Alumni roles in mentorship and maintenance matter as much as new grants.",
    imagePath: "/api/og?id=22",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-572&m=dev
    section: "Recommendations — Restructure funding models",
    order: 22
  },
  [SHAREABLE_description_IDS.SHARED_ADMIN]: {
    id: SHAREABLE_description_IDS.SHARED_ADMIN,
    title: "Shared admin support",
    description: "Shared admin support for taxes, visas, and healthcare would free devs to focus on building freedom tech.",
    imagePath: "/api/og?id=23",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-581&m=dev
    section: "Recommendations — Provide individual support beyond money",
    order: 23
  },
  [SHAREABLE_description_IDS.COWORKING_STIPEND]: {
    id: SHAREABLE_description_IDS.COWORKING_STIPEND,
    title: "Coworking stipend",
    description: "A coworking stipend is a sustainability tool. Fighting isolation is as crucial as funding.",
    imagePath: "/api/og?id=24",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-591&m=dev
    section: "Recommendations — Provide individual support beyond money",
    order: 24
  },
  [SHAREABLE_description_IDS.MENTORSHIP_INFRASTRUCTURE]: {
    id: SHAREABLE_description_IDS.MENTORSHIP_INFRASTRUCTURE,
    title: "Mentorship is infrastructure",
    description: "Mentorship is infrastructure. Pairing newcomers with experienced devs prevents burnout and drop-off.",
    imagePath: "/api/og?id=25",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-600&m=dev
    section: "Recommendations — Provide individual support beyond money",
    order: 25
  },
  [SHAREABLE_description_IDS.INVISIBLE_WORK]: {
    id: SHAREABLE_description_IDS.INVISIBLE_WORK,
    title: "Make invisible work visible",
    description: "Make invisible work visible. Research, documentation, mentorship, and review are as critical as code.",
    imagePath: "/api/og?id=26",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-410&m=dev
    section: "Recommendations — Provide individual support beyond money",
    order: 26
  },
  [SHAREABLE_description_IDS.FUND_OFFSITES]: {
    id: SHAREABLE_description_IDS.FUND_OFFSITES,
    title: "Fund offsites and retreats",
    description: "Fund offsites and retreats, not just conferences. Deep collaboration requires time, presence, and care.",
    imagePath: "/api/og?id=27",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-609&m=dev
    section: "Recommendations — Support ecosystem coordination",
    order: 27
  },
  [SHAREABLE_description_IDS.SUSTAINABLE_PERMISSIONLESSNESS]: {
    id: SHAREABLE_description_IDS.SUSTAINABLE_PERMISSIONLESSNESS,
    title: "Sustainable permissionlessness",
    description: "Sustainable permissionlessness = keep the openness, add the support. That's how you end the tyranny.",
    imagePath: "/api/og?id=28",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-617&m=dev
    section: "Recommendations — Conclusion",
    order: 28
  },
  [SHAREABLE_description_IDS.CORE_FINDING]: {
    id: SHAREABLE_description_IDS.CORE_FINDING,
    title: "Core finding",
    description: "Our core finding: the very values and features that attract developers to the Bitcoin and Nostr ecosystems — freedom, permissionless participation, autonomy — become the source of their greatest challenges.",
    imagePath: "/api/og?id=1",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-627&m=dev
    section: "Executive Summary",
    order: 29
  },
  [SHAREABLE_description_IDS.TYRANNY_DEFINITION]: {
    id: SHAREABLE_description_IDS.TYRANNY_DEFINITION,
    title: "The tyranny of permissionlessness",
    description: "We call this the tyranny of permissionlessness: while these principles enable open innovation and resist capture, without support structures they lead developers to navigate unlimited responsibility alone.",
    imagePath: "/api/og?id=2",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-636&m=dev
    section: "Executive Summary",
    order: 30
  },
  [SHAREABLE_description_IDS.INTENTIONAL_DESIGN]: {
    id: SHAREABLE_description_IDS.INTENTIONAL_DESIGN,
    title: "Intentional design",
    description: "With intentional design, we can maintain permissionless participation while building sustainable work practices (in Open Source).",
    imagePath: "/api/og?id=3",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-646&m=dev
    section: "Executive Summary",
    order: 31
  },
  [SHAREABLE_description_IDS.STUDY_STATS]: {
    id: SHAREABLE_description_IDS.STUDY_STATS,
    title: "Study statistics",
    description: "42% of participants had less than 3 years of OSS experience, reflecting a steady inflow of developers.",
    imagePath: "/api/og?id=4",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-656&m=dev
    section: "Study Overview",
    order: 32
  },
  [SHAREABLE_description_IDS.SUSTAINABILITY_CHALLENGES]: {
    id: SHAREABLE_description_IDS.SUSTAINABILITY_CHALLENGES,
    title: "Sustainability challenges",
    description: "69% (of participants) have been grant-funded for 2 years or less, indicating potential sustainability challenges.",
    imagePath: "/api/og?id=5",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-666&m=dev
    section: "Study Overview",
    order: 33
  },
  [SHAREABLE_description_IDS.PERMISSIONLESSNESS_ISOLATION]: {
    id: SHAREABLE_description_IDS.PERMISSIONLESSNESS_ISOLATION,
    title: "Permissionlessness creates isolation",
    description: "Without structural support, permissionlessness — the core principle of Bitcoin — can create isolation, burnout, and unsustainable work patterns when applied to human systems.",
    imagePath: "/api/og?id=6",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-676&m=dev
    section: "Study Overview",
    order: 34
  },
  [SHAREABLE_description_IDS.SUSTAINABILITY_PARADOX]: {
    id: SHAREABLE_description_IDS.SUSTAINABILITY_PARADOX,
    title: "The sustainability paradox",
    description: "The sustainability paradox: the more the experience, the more unsustainable one's work process becomes.",
    imagePath: "/api/og?id=7",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-684&m=dev
    section: "Top-level Analysis",
    order: 35
  },
  [SHAREABLE_description_IDS.FUTURE_ORIENTATION]: {
    id: SHAREABLE_description_IDS.FUTURE_ORIENTATION,
    title: "Future orientation",
    description: "All contributors have a strong future orientation for their projects, yet their daily work patterns diverge sharply with experience.",
    imagePath: "/api/og?id=8",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-693&m=dev
    section: "Top-level Analysis",
    order: 36
  },
  [SHAREABLE_description_IDS.EXPERT_CARING]: {
    id: SHAREABLE_description_IDS.EXPERT_CARING,
    title: "Expert contributors care for others",
    description: "Expert contributors report the highest scores on caring for others — collaborators, community, people outside work — even as their own work becomes less sustainable.",
    imagePath: "/api/og?id=9",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-702&m=dev
    section: "Top-level Analysis",
    order: 37
  },
  [SHAREABLE_description_IDS.PERMISSIONLESSNESS_ENABLES]: {
    id: SHAREABLE_description_IDS.PERMISSIONLESSNESS_ENABLES,
    title: "Permissionlessness enables innovation",
    description: "Permissionlessness enables innovation in technical systems, but when extended to human labor systems it can create overwhelming choice and invisible labor.",
    imagePath: "/api/og?id=10",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-711&m=dev
    section: "Core Findings",
    order: 38
  },
  [SHAREABLE_description_IDS.FREEDOM_FROM_OVERSIGHT]: {
    id: SHAREABLE_description_IDS.FREEDOM_FROM_OVERSIGHT,
    title: "Freedom from oversight",
    description: "Freedom from oversight means freedom from support; the right to contribute becomes the responsibility to self-manage everything.",
    imagePath: "/api/og?id=11",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-720&m=dev
    section: "Core Findings",
    order: 39
  },
  [SHAREABLE_description_IDS.BURNOUT_EXPECTATION]: {
    id: SHAREABLE_description_IDS.BURNOUT_EXPECTATION,
    title: "Burnout is the expectation",
    description: "Burnout is not the exception but the expectation — a normal state of affairs.",
    imagePath: "/api/og?id=12",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-729&m=dev
    section: "Core Findings",
    order: 40
  },
  [SHAREABLE_description_IDS.NO_FRAMEWORK]: {
    id: SHAREABLE_description_IDS.NO_FRAMEWORK,
    title: "No framework for evolution",
    description: "Contributors are excited to deepen their expertise, but there is no framework for evolving responsibilities or recognition.",
    imagePath: "/api/og?id=13",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-738&m=dev
    section: "Core Findings",
    order: 41
  },
  [SHAREABLE_description_IDS.ECOSYSTEM_REPLACEMENT]: {
    id: SHAREABLE_description_IDS.ECOSYSTEM_REPLACEMENT,
    title: "Ecosystem sustains by replacement",
    description: "The ecosystem sustains itself not by supporting individuals, but by continuously replacing them.",
    imagePath: "/api/og?id=14",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-746&m=dev
    section: "Beyond Financial Sustainability",
    order: 42
  },
  [SHAREABLE_description_IDS.CONSTANT_TURNOVER]: {
    id: SHAREABLE_description_IDS.CONSTANT_TURNOVER,
    title: "Constant developer turnover",
    description: "The ecosystem depends on constant developer turnover while losing critical knowledge.",
    imagePath: "/api/og?id=15",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-756&m=dev
    section: "Beyond Financial Sustainability",
    order: 43
  },
  [SHAREABLE_description_IDS.INSTITUTIONAL_KNOWLEDGE]: {
    id: SHAREABLE_description_IDS.INSTITUTIONAL_KNOWLEDGE,
    title: "Loss of institutional knowledge",
    description: "Each departure means losing institutional knowledge that cannot be fully captured in the project history.",
    imagePath: "/api/og?id=16",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-766&m=dev
    section: "Beyond Financial Sustainability",
    order: 44
  },
  [SHAREABLE_description_IDS.ONE_SIZE_FITS_ALL]: {
    id: SHAREABLE_description_IDS.ONE_SIZE_FITS_ALL,
    title: "One-size-fits-all grant model",
    description: "The one-size-fits-all grant model fails to recognize the different realities of core infrastructure vs application work.",
    imagePath: "/api/og?id=17",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-776&m=dev
    section: "Beyond Financial Sustainability",
    order: 45
  },
  [SHAREABLE_description_IDS.YEARLY_RENEWALS]: {
    id: SHAREABLE_description_IDS.YEARLY_RENEWALS,
    title: "Yearly grant renewals",
    description: "Yearly grant renewals incentivize short-term deliverables rather than long-term investments.",
    imagePath: "/api/og?id=18",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-785&m=dev
    section: "Beyond Financial Sustainability",
    order: 46
  },
  [SHAREABLE_description_IDS.FUNDERS_OPTIMIZE]: {
    id: SHAREABLE_description_IDS.FUNDERS_OPTIMIZE,
    title: "Funders optimize for renewals",
    description: "Funders inadvertently optimize for yearly renewal requirements over long-term project sustainability.",
    imagePath: "/api/og?id=19",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-793&m=dev
    section: "Beyond Financial Sustainability",
    order: 47
  },
  [SHAREABLE_description_IDS.PSYCHOLOGICAL_SUSTAINABILITY]: {
    id: SHAREABLE_description_IDS.PSYCHOLOGICAL_SUSTAINABILITY,
    title: "Psychological sustainability",
    description: "Psychological sustainability is as crucial as financial stability, yet burnout is treated as an individual problem rather than a systemic issue.",
    imagePath: "/api/og?id=20",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-802&m=dev
    section: "Beyond Financial Sustainability",
    order: 48
  },
  [SHAREABLE_description_IDS.NOT_INEVITABLE]: {
    id: SHAREABLE_description_IDS.NOT_INEVITABLE,
    title: "Not inevitable",
    description: "The tyranny of permissionlessness represents one possible, yet critical, failure mode of open, decentralized systems — not an inevitable outcome.",
    imagePath: "/api/og?id=21",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-811&m=dev
    section: "Recommendations",
    order: 49
  },
  [SHAREABLE_description_IDS.KEEPING_OPEN_PARTICIPATION]: {
    id: SHAREABLE_description_IDS.KEEPING_OPEN_PARTICIPATION,
    title: "Keeping open participation",
    description: "Sustainable permissionlessness means keeping open participation while creating structural support.",
    imagePath: "/api/og?id=22",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-829&m=dev
    section: "Recommendations",
    order: 50
  },
  [SHAREABLE_description_IDS.FUND_TEAMS_RECOMMENDATION]: {
    id: SHAREABLE_description_IDS.FUND_TEAMS_RECOMMENDATION,
    title: "Fund teams recommendation",
    description: "Fund teams, not just individuals.",
    imagePath: "/api/og?id=23",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-821&m=dev
    section: "Recommendations",
    order: 51
  },
  [SHAREABLE_description_IDS.MAKE_INVISIBLE_VISIBLE]: {
    id: SHAREABLE_description_IDS.MAKE_INVISIBLE_VISIBLE,
    title: "Make invisible work visible",
    description: "Make invisible work visible and valued.",
    imagePath: "/api/og?id=24",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-840&m=dev
    section: "Recommendations",
    order: 52
  },
  [SHAREABLE_description_IDS.SENIOR_APP_DEV_QUOTE_23]: {
    id: SHAREABLE_description_IDS.SENIOR_APP_DEV_QUOTE_23,
    title: "Senior app dev style (quote 23)",
    description: "You know, how bitcoiners say 'I'm in for the tech'... now I have a far broader view and a much more humanitarian goal in sight than just a technical one.",
    imagePath: "/api/og?id=29",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=1-2&m=dev
    section: "senior app dev style (quote 23)",
    order: 53
  },
  [SHAREABLE_description_IDS.PERMISSIONLESSNESS_ATTRACTS_QUOTE_11]: {
    id: SHAREABLE_description_IDS.PERMISSIONLESSNESS_ATTRACTS_QUOTE_11,
    title: "Permissionlessness attracts, then overwhelms (quote 11)",
    description: "I can work whenever I want' translates to 'I can not work whenever I want.'... that's not sustainable.",
    imagePath: "/api/og?id=30",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-2&m=dev
    section: "Permissionlessness attracts, then overwhelms (quote 11)",
    order: 54
  },
  [SHAREABLE_description_IDS.FREE_FROM_AUTHORITY_QUOTE_2]: {
    id: SHAREABLE_description_IDS.FREE_FROM_AUTHORITY_QUOTE_2,
    title: "Free from authority, free to burn out",
    description: "At the start, I had little knowledge about Bitcoin... then I saw an opportunity, and I got really attached to the ideals and technology.",
    imagePath: "/api/og?id=31",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-66&m=dev
    section: "Free from authority, free to burn out",
    order: 55
  },
  [SHAREABLE_description_IDS.PERMISSIONLESSNESS_ATTRACTS_QUOTE_2]: {
    id: SHAREABLE_description_IDS.PERMISSIONLESSNESS_ATTRACTS_QUOTE_2,
    title: "Permissionlessness attracts, then overwhelms",
    description: "I guess that's always been the thing that's drawn me to Bitcoin... I don't have to ask permission from anyone. I can just do it.",
    imagePath: "/api/og?id=32",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-74&m=dev
    section: "Permissionlessness attracts, then overwhelms",
    order: 56
  },
  [SHAREABLE_description_IDS.PERMISSIONLESSNESS_ATTRACTS_QUOTE_3]: {
    id: SHAREABLE_description_IDS.PERMISSIONLESSNESS_ATTRACTS_QUOTE_3,
    title: "Permissionlessness attracts, then overwhelms",
    description: "I would love to be able to have a stricter routine. But on the other hand, it's great that I don't need to have one.",
    imagePath: "/api/og?id=33",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-83&m=dev
    section: "Permissionlessness attracts, then overwhelms",
    order: 57
  },
  [SHAREABLE_description_IDS.EXPERIENCE_ENABLES_QUOTE_2]: {
    id: SHAREABLE_description_IDS.EXPERIENCE_ENABLES_QUOTE_2,
    title: "Experience enables, then exhausts",
    description: "There's a hell of a lot of things to build... a sense of urgency because people will seek out alternatives if traditional rails fail.",
    imagePath: "/api/og?id=34",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-93&m=dev
    section: "Experience enables, then exhausts",
    order: 58
  },
  [SHAREABLE_description_IDS.EXPERIENCE_ENABLES_QUOTE_3]: {
    id: SHAREABLE_description_IDS.EXPERIENCE_ENABLES_QUOTE_3,
    title: "Experience enables, then exhausts",
    description: "I think it was a big, long burnout. For a very long time, I just didn't know how to talk about it. Now I see where I am at.",
    imagePath: "/api/og?id=35",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-101&m=dev
    section: "Experience enables, then exhausts",
    order: 59
  },
  [SHAREABLE_description_IDS.CULTURAL_FRICTIONS_QUOTE_2]: {
    id: SHAREABLE_description_IDS.CULTURAL_FRICTIONS_QUOTE_2,
    title: "Cultural frictions",
    description: "Being a Bitcoiner is a lifestyle... You don't want to be in the cult, right?",
    imagePath: "/api/og?id=36",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-119&m=dev
    section: "Cultural frictions",
    order: 60
  },
  [SHAREABLE_description_IDS.CULTURAL_FRICTIONS_QUOTE_3]: {
    id: SHAREABLE_description_IDS.CULTURAL_FRICTIONS_QUOTE_3,
    title: "Cultural frictions",
    description: "People only agree about Bitcoin in life, nothing else... I started maintaining some distance from the community.",
    imagePath: "/api/og?id=37",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-129&m=dev
    section: "Cultural frictions",
    order: 61
  },
  [SHAREABLE_description_IDS.CULTURAL_FRICTIONS_QUOTE_4]: {
    id: SHAREABLE_description_IDS.CULTURAL_FRICTIONS_QUOTE_4,
    title: "Cultural frictions",
    description: "I think the Bitcoin community has cult-like tendencies... there's more enthusiasm for hype than for tangible, positive change.",
    imagePath: "/api/og?id=38",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-138&m=dev
    section: "Cultural frictions",
    order: 62
  },
  [SHAREABLE_description_IDS.COLLABORATING_ALONE_QUOTE_2]: {
    id: SHAREABLE_description_IDS.COLLABORATING_ALONE_QUOTE_2,
    title: "Collaborating alone",
    description: "There wasn't a framework for collaboration... I couldn't get a mentor.",
    imagePath: "/api/og?id=39",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-157&m=dev
    section: "Collaborating alone",
    order: 63
  },
  [SHAREABLE_description_IDS.COLLABORATING_ALONE_QUOTE_3]: {
    id: SHAREABLE_description_IDS.COLLABORATING_ALONE_QUOTE_3,
    title: "Collaborating alone",
    description: "Recently, I decided to go to a coworking space. That was an instant improvement... Remote was always overrated.",
    imagePath: "/api/og?id=40",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-174&m=dev
    section: "Collaborating alone",
    order: 64
  },
  [SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE_QUOTE_2]: {
    id: SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE_QUOTE_2,
    title: "Growing without guidance",
    description: "In a for-profit, you get performance reviews. In open source, it's not like that... lots of uncertainty.",
    imagePath: "/api/og?id=41",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-193&m=dev
    section: "Growing without guidance",
    order: 65
  },
  [SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE_QUOTE_3]: {
    id: SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE_QUOTE_3,
    title: "Growing without guidance",
    description: "For reviewing PRs... even if I just spend some time reading code, it helps motivation and gets things merged.",
    imagePath: "/api/og?id=42",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-21&m=dev
    section: "Growing without guidance",
    order: 66
  },
  [SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE_QUOTE_4]: {
    id: SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE_QUOTE_4,
    title: "Growing without guidance",
    description: "Getting external help or mentoring really helps. Without it, it's the biggest challenge.",
    imagePath: "/api/og?id=43",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-202&m=dev
    section: "Growing without guidance",
    order: 67
  },
  [SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE_QUOTE_5]: {
    id: SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE_QUOTE_5,
    title: "Growing without guidance",
    description: "When I started working on grants... I felt like I didn't know what I was doing.",
    imagePath: "/api/og?id=44",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-212&m=dev
    section: "Growing without guidance",
    order: 68
  },
  [SHAREABLE_description_IDS.NO_CLEAR_CAREER_QUOTE_2]: {
    id: SHAREABLE_description_IDS.NO_CLEAR_CAREER_QUOTE_2,
    title: "No clear career pathways",
    description: "I'm probably going to do this forever, as long as I possibly can... but without constant financial strain.",
    imagePath: "/api/og?id=45",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-230&m=dev
    section: "No clear career pathways",
    order: 69
  },
  [SHAREABLE_description_IDS.MOTIVATION_QUOTE_2]: {
    id: SHAREABLE_description_IDS.MOTIVATION_QUOTE_2,
    title: "Motivation challenges",
    description: "Some days, I wouldn't feel motivated... without pressure, output was low compared to company deadlines.",
    imagePath: "/api/og?id=46",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-249&m=dev
    section: "Motivation",
    order: 70
  },
  [SHAREABLE_description_IDS.MOTIVATION_QUOTE_3]: {
    id: SHAREABLE_description_IDS.MOTIVATION_QUOTE_3,
    title: "Motivation challenges",
    description: "Sometimes you're just feeling that you're not doing enough... you get into a self-critical phase.",
    imagePath: "/api/og?id=47",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-259&m=dev
    section: "Motivation",
    order: 71
  },
  [SHAREABLE_description_IDS.MOTIVATION_QUOTE_4]: {
    id: SHAREABLE_description_IDS.MOTIVATION_QUOTE_4,
    title: "Motivation challenges",
    description: "I think I put a lot of pressure on myself... always feel like I'm not going fast enough.",
    imagePath: "/api/og?id=48",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-166&m=dev
    section: "Motivation",
    order: 72
  },
  [SHAREABLE_description_IDS.MOTIVATION_QUOTE_5]: {
    id: SHAREABLE_description_IDS.MOTIVATION_QUOTE_5,
    title: "Motivation challenges",
    description: "I think I put a lot of pressure on myself... always feel like I'm not going fast enough.",
    imagePath: "/api/og?id=49",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-166&m=dev
    section: "Motivation",
    order: 73
  },
  [SHAREABLE_description_IDS.IRL_GATHERINGS_QUOTE_2]: {
    id: SHAREABLE_description_IDS.IRL_GATHERINGS_QUOTE_2,
    title: "IRL gatherings",
    description: "Conferences help connect people... but if my friends aren't there, it feels less worth it.",
    imagePath: "/api/og?id=50",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-330&m=dev
    section: "IRL gatherings",
    order: 74
  },
  [SHAREABLE_description_IDS.IRL_GATHERINGS_QUOTE_3]: {
    id: SHAREABLE_description_IDS.IRL_GATHERINGS_QUOTE_3,
    title: "IRL gatherings",
    description: "Usually, I find conferences kind of draining... more taxing than uplifting.",
    imagePath: "/api/og?id=51",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-338&m=dev
    section: "IRL gatherings",
    order: 75
  },
  [SHAREABLE_description_IDS.IRL_GATHERINGS_QUOTE_4]: {
    id: SHAREABLE_description_IDS.IRL_GATHERINGS_QUOTE_4,
    title: "IRL gatherings",
    description: "Conferences remind you that other people exist when you're working alone.",
    imagePath: "/api/og?id=52",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-355&m=dev
    section: "IRL gatherings",
    order: 76
  },
  [SHAREABLE_description_IDS.AMORPHOUS_SCOPE_QUOTE_2]: {
    id: SHAREABLE_description_IDS.AMORPHOUS_SCOPE_QUOTE_2,
    title: "Amorphous scope of OSS contribution",
    description: "In Bitcoin, project management is very poor... struggle to organize and get review.",
    imagePath: "/api/og?id=53",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-374&m=dev
    section: "Amorphous scope of OSS contribution",
    order: 77
  },
  [SHAREABLE_description_IDS.INVISIBILITY_MAINTENANCE_QUOTE_2]: {
    id: SHAREABLE_description_IDS.INVISIBILITY_MAINTENANCE_QUOTE_2,
    title: "Invisibility of maintenance",
    description: "I'm just checking that every contributor is implementing. It's boring for me to just check and maintain.",
    imagePath: "/api/og?id=54",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-392&m=dev
    section: "Invisibility of maintenance",
    order: 78
  },
  [SHAREABLE_description_IDS.ADMINISTRATIVE_BURDEN_QUOTE_2]: {
    id: SHAREABLE_description_IDS.ADMINISTRATIVE_BURDEN_QUOTE_2,
    title: "Administrative burden",
    description: "I'm not an accountant... Bitcoin grants give me anxiety about taxes and payments.",
    imagePath: "/api/og?id=55",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-419&m=dev
    section: "Administrative burden",
    order: 79
  },
  [SHAREABLE_description_IDS.LOCATION_BARRIERS_QUOTE_2]: {
    id: SHAREABLE_description_IDS.LOCATION_BARRIERS_QUOTE_2,
    title: "Location barriers",
    description: "I can't legally be paid in Bitcoin in my country... it's a hassle to navigate.",
    imagePath: "/api/og?id=56",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-401&m=dev
    section: "Location barriers",
    order: 80
  },
  [SHAREABLE_description_IDS.SEARCHING_SUSTAINABILITY_QUOTE_2]: {
    id: SHAREABLE_description_IDS.SEARCHING_SUSTAINABILITY_QUOTE_2,
    title: "Searching for sustainability",
    description: "Having to write a new grant every year is very stressful.",
    imagePath: "/api/og?id=57",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-447&m=dev
    section: "Searching for sustainability",
    order: 81
  },
  [SHAREABLE_description_IDS.SEARCHING_SUSTAINABILITY_QUOTE_3]: {
    id: SHAREABLE_description_IDS.SEARCHING_SUSTAINABILITY_QUOTE_3,
    title: "Searching for sustainability",
    description: "Sustainability is possible for a handful of high-impact people, but not for those just starting out.",
    imagePath: "/api/og?id=58",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-457&m=dev
    section: "Searching for sustainability",
    order: 82
  },
  [SHAREABLE_description_IDS.BITCOIN_FOREVER_GRANTS_QUOTE_2]: {
    id: SHAREABLE_description_IDS.BITCOIN_FOREVER_GRANTS_QUOTE_2,
    title: "Bitcoin is forever, grants are yearly",
    description: "Admin work from grants affects productivity... renewals create stress and procrastination.",
    imagePath: "/api/og?id=59",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-477&m=dev
    section: "Bitcoin is forever, grants are yearly",
    order: 83
  },
  [SHAREABLE_description_IDS.INDIVIDUAL_VS_TEAM_QUOTE_2]: {
    id: SHAREABLE_description_IDS.INDIVIDUAL_VS_TEAM_QUOTE_2,
    title: "Individual vs team grants",
    description: "The one thing I need is money to scale the team... I can't scale my hours further.",
    imagePath: "/api/og?id=60",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-496&m=dev
    section: "Individual vs team grants",
    order: 84
  },
  [SHAREABLE_description_IDS.INDIVIDUAL_VS_TEAM_QUOTE_3]: {
    id: SHAREABLE_description_IDS.INDIVIDUAL_VS_TEAM_QUOTE_3,
    title: "Individual vs team grants",
    description: "This can't be just me... how do I get other maintainers responsible and committed long-term?",
    imagePath: "/api/og?id=61",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-505&m=dev
    section: "Individual vs team grants",
    order: 85
  },
  [SHAREABLE_description_IDS.REALIZING_VISION_QUOTE_2]: {
    id: SHAREABLE_description_IDS.REALIZING_VISION_QUOTE_2,
    title: "Realizing your vision vs grants",
    description: "Often people write grants for what's popular, not what they believe in.",
    imagePath: "/api/og?id=62",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-525&m=dev
    section: "Realizing your vision vs grants",
    order: 86
  }
};

export default shareabledescriptionData;

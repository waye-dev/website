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
} as const;

export type ShareabledescriptionId = typeof SHAREABLE_description_IDS[keyof typeof SHAREABLE_description_IDS];


export const shareabledescriptionData: Record<string, Shareabledescription> = {
  [SHAREABLE_description_IDS.FREE_FROM_AUTHORITY]: {
    id: SHAREABLE_description_IDS.FREE_FROM_AUTHORITY,
    title: "Free from authority, free to burn out",
    description: "It's still the best work I've found so far. The autonomy is great in a way, and the work is meaningful... You get even paid for it.",
    imagePath: "/images/og/free-from-authority.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-57&m=dev
    section: "Free from authority, free to burn out",
    order: 1
  },
  [SHAREABLE_description_IDS.PERMISSIONLESSNESS_ATTRACTS]: {
    id: SHAREABLE_description_IDS.PERMISSIONLESSNESS_ATTRACTS,
    title: "Permissionlessness attracts, then overwhelms",
    description: "It's nice to work for yourself, to have that freedom... but the curse is always that no one else is going to do it. So I've got to do it.",
    imagePath: "/images/og/permissionlessness-attracts.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-33&m=dev
    section: "Permissionlessness attracts, then overwhelms",
    order: 2
  },
  [SHAREABLE_description_IDS.EXPERIENCE_ENABLES]: {
    id: SHAREABLE_description_IDS.EXPERIENCE_ENABLES,
    title: "Experience enables, then exhausts",
    description: "Everybody's burnt out. Everybody I work with is completely burnt out... It's the normal state of affairs.",
    imagePath: "/images/og/experience-enables.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-46&m=dev
    section: "Experience enables, then exhausts",
    order: 3
  },
  [SHAREABLE_description_IDS.CULTURAL_FRICTIONS]: {
    id: SHAREABLE_description_IDS.CULTURAL_FRICTIONS,
    title: "Cultural frictions",
    description: "I guess every day I hate Bitcoin because it's also full of assholes... every day is a decision to work on it again.",
    imagePath: "/images/og/cultural-frictions.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-109&m=dev
    section: "Cultural frictions",
    order: 4
  },
  [SHAREABLE_description_IDS.COLLABORATING_ALONE]: {
    id: SHAREABLE_description_IDS.COLLABORATING_ALONE,
    title: "Collaborating alone",
    description: "The lack of structure, the lack of support from experienced engineers, and the isolation... they're all different aspects of the same thing.",
    imagePath: "/images/og/collaborating-alone.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-148&m=dev
    section: "Collaborating alone",
    order: 5
  },
  [SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE]: {
    id: SHAREABLE_description_IDS.GROWING_WITHOUT_GUIDANCE,
    title: "Growing without guidance",
    description: "There was always stress in the back of my mind of not doing enough, because there's no KPI... Nobody even tells me if I'm doing good.",
    imagePath: "/images/og/growing-without-guidance.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-184&m=dev
    section: "Growing without guidance",
    order: 6
  },
  [SHAREABLE_description_IDS.NO_CLEAR_CAREER]: {
    id: SHAREABLE_description_IDS.NO_CLEAR_CAREER,
    title: "No clear career pathways",
    description: "Since it's an open source project, and not a company, it's sometimes hard to feel like you belong.",
    imagePath: "/images/og/no-clear-career.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-222&m=dev
    section: "No clear career pathways",
    order: 7
  },
  [SHAREABLE_description_IDS.MOTIVATION_CHALLENGES]: {
    id: SHAREABLE_description_IDS.MOTIVATION_CHALLENGES,
    title: "Motivation challenges",
    description: "It can be quite bipolar... periods of enthusiasm and productivity, and then periods of feeling underappreciated.",
    imagePath: "/images/og/motivation-challenges.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-239&m=dev
    section: "Motivation",
    order: 8
  },
  [SHAREABLE_description_IDS.IRL_GATHERINGS]: {
    id: SHAREABLE_description_IDS.IRL_GATHERINGS,
    title: "IRL gatherings",
    description: "A yoga retreat conference transformed my peers... healthier, philosophical, barefoot developers.",
    imagePath: "/images/og/irl-gatherings.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-322&m=dev
    section: "IRL gatherings",
    order: 9
  },
  [SHAREABLE_description_IDS.AMORPHOUS_SCOPE]: {
    id: SHAREABLE_description_IDS.AMORPHOUS_SCOPE,
    title: "Amorphous scope of OSS contribution",
    description: "In Bitcoin Core, sometimes I talk for weeks about a three-line change... lots of technical writing and communication.",
    imagePath: "/images/og/amorphous-scope.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-365&m=dev
    section: "Amorphous scope of OSS contribution",
    order: 10
  },
  [SHAREABLE_description_IDS.INVISIBILITY_MAINTENANCE]: {
    id: SHAREABLE_description_IDS.INVISIBILITY_MAINTENANCE,
    title: "Invisibility of maintenance",
    description: "Balancing reviewing PRs and doing your own work is really hard... you want contributors to become autonomous, but you lack time.",
    imagePath: "/images/og/invisibility-maintenance.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-383&m=dev
    section: "Invisibility of maintenance",
    order: 11
  },
  [SHAREABLE_description_IDS.ADMINISTRATIVE_BURDEN]: {
    id: SHAREABLE_description_IDS.ADMINISTRATIVE_BURDEN,
    title: "Administrative burden",
    description: "Taxes were a shitshow.",
    imagePath: "/images/og/administrative-burden.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-346&m=dev
    section: "Administrative burden",
    order: 12
  },
  [SHAREABLE_description_IDS.LOCATION_BARRIERS]: {
    id: SHAREABLE_description_IDS.LOCATION_BARRIERS,
    title: "Location barriers",
    description: "My immigration status limited me from attending conferences... being paid in Bitcoin made visas difficult.",
    imagePath: "/images/og/location-barriers.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-429&m=dev
    section: "Location barriers",
    order: 13
  },
  [SHAREABLE_description_IDS.SEARCHING_SUSTAINABILITY]: {
    id: SHAREABLE_description_IDS.SEARCHING_SUSTAINABILITY,
    title: "Searching for sustainability",
    description: "It's hard, because I loved open source... but financial instability and isolation made me leave.",
    imagePath: "/images/og/searching-sustainability.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-439&m=dev
    section: "Searching for sustainability",
    order: 14
  },
  [SHAREABLE_description_IDS.BITCOIN_FOREVER_GRANTS]: {
    id: SHAREABLE_description_IDS.BITCOIN_FOREVER_GRANTS,
    title: "Bitcoin is forever, grants are yearly",
    description: "Every year you have to apply for a new grant... that makes multi-year projects hard to start.",
    imagePath: "/images/og/bitcoin-forever-grants.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-467&m=dev
    section: "Bitcoin is forever, grants are yearly",
    order: 15
  },
  [SHAREABLE_description_IDS.INDIVIDUAL_VS_TEAM]: {
    id: SHAREABLE_description_IDS.INDIVIDUAL_VS_TEAM,
    title: "Individual vs team grants",
    description: "I'm working entirely alone on a project that could never be completed by me alone.",
    imagePath: "/images/og/individual-vs-team.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-487&m=dev
    section: "Individual vs team grants",
    order: 16
  },
  [SHAREABLE_description_IDS.REALIZING_VISION]: {
    id: SHAREABLE_description_IDS.REALIZING_VISION,
    title: "Realizing your vision vs grants",
    description: "Sometimes I shift priorities to what I think funders want, not my real vision.",
    imagePath: "/images/og/realizing-vision.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-515&m=dev
    section: "Realizing your vision vs grants",
    order: 17
  },
  [SHAREABLE_description_IDS.PERMISSIONLESS_ENTRY]: {
    id: SHAREABLE_description_IDS.PERMISSIONLESS_ENTRY,
    title: "Permissionless entry, opaque grants",
    description: "The reality of grants is that there's a social aspect... you have to be known.",
    imagePath: "/images/og/permissionless-entry.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-535&m=dev
    section: "Permissionless entry, opaque grants",
    order: 18
  },
  [SHAREABLE_description_IDS.FUND_TEAMS]: {
    id: SHAREABLE_description_IDS.FUND_TEAMS,
    title: "Fund teams, not just individuals",
    description: "Fund teams, not just individuals. OSS sustainability depends on collective support, not just solo contributors.",
    imagePath: "/images/og/fund-teams.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-545&m=dev
    section: "Recommendations — Restructure funding models",
    order: 19
  },
  [SHAREABLE_description_IDS.EXTEND_RENEWAL]: {
    id: SHAREABLE_description_IDS.EXTEND_RENEWAL,
    title: "Extend renewal cycles",
    description: "Extend renewal cycles after year 1. Proven contributors should build, not rewrite proposals every year.",
    imagePath: "/images/og/extend-renewal.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-555&m=dev
    section: "Recommendations — Restructure funding models",
    order: 20
  },
  [SHAREABLE_description_IDS.REVENUE_FRIENDLY]: {
    id: SHAREABLE_description_IDS.REVENUE_FRIENDLY,
    title: "Revenue-friendly grants",
    description: "Revenue-friendly grants let open source apps find their own sustainability. OSS shouldn't fear profitability.",
    imagePath: "/images/og/revenue-friendly.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-563&m=dev
    section: "Recommendations — Restructure funding models",
    order: 21
  },
  [SHAREABLE_description_IDS.TRANSITION_PATHWAYS]: {
    id: SHAREABLE_description_IDS.TRANSITION_PATHWAYS,
    title: "Transition pathways",
    description: "Transition pathways keep talent engaged. Alumni roles in mentorship and maintenance matter as much as new grants.",
    imagePath: "/images/og/transition-pathways.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-572&m=dev
    section: "Recommendations — Restructure funding models",
    order: 22
  },
  [SHAREABLE_description_IDS.SHARED_ADMIN]: {
    id: SHAREABLE_description_IDS.SHARED_ADMIN,
    title: "Shared admin support",
    description: "Shared admin support for taxes, visas, and healthcare would free devs to focus on building freedom tech.",
    imagePath: "/images/og/shared-admin.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-581&m=dev
    section: "Recommendations — Provide individual support beyond money",
    order: 23
  },
  [SHAREABLE_description_IDS.COWORKING_STIPEND]: {
    id: SHAREABLE_description_IDS.COWORKING_STIPEND,
    title: "Coworking stipend",
    description: "A coworking stipend is a sustainability tool. Fighting isolation is as crucial as funding.",
    imagePath: "/images/og/coworking-stipend.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-591&m=dev
    section: "Recommendations — Provide individual support beyond money",
    order: 24
  },
  [SHAREABLE_description_IDS.MENTORSHIP_INFRASTRUCTURE]: {
    id: SHAREABLE_description_IDS.MENTORSHIP_INFRASTRUCTURE,
    title: "Mentorship is infrastructure",
    description: "Mentorship is infrastructure. Pairing newcomers with experienced devs prevents burnout and drop-off.",
    imagePath: "/images/og/mentorship-infrastructure.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-600&m=dev
    section: "Recommendations — Provide individual support beyond money",
    order: 25
  },
  [SHAREABLE_description_IDS.INVISIBLE_WORK]: {
    id: SHAREABLE_description_IDS.INVISIBLE_WORK,
    title: "Make invisible work visible",
    description: "Make invisible work visible. Research, documentation, mentorship, and review are as critical as code.",
    imagePath: "/images/og/invisible-work.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-410&m=dev
    section: "Recommendations — Provide individual support beyond money",
    order: 26
  },
  [SHAREABLE_description_IDS.FUND_OFFSITES]: {
    id: SHAREABLE_description_IDS.FUND_OFFSITES,
    title: "Fund offsites and retreats",
    description: "Fund offsites and retreats, not just conferences. Deep collaboration requires time, presence, and care.",
    imagePath: "/images/og/fund-offsites.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-609&m=dev
    section: "Recommendations — Support ecosystem coordination",
    order: 27
  },
  [SHAREABLE_description_IDS.SUSTAINABLE_PERMISSIONLESSNESS]: {
    id: SHAREABLE_description_IDS.SUSTAINABLE_PERMISSIONLESSNESS,
    title: "Sustainable permissionlessness",
    description: "Sustainable permissionlessness = keep the openness, add the support. That's how you end the tyranny.",
    imagePath: "/images/og/sustainable-permissionlessness.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-617&m=dev
    section: "Recommendations — Conclusion",
    order: 28
  },
  [SHAREABLE_description_IDS.CORE_FINDING]: {
    id: SHAREABLE_description_IDS.CORE_FINDING,
    title: "Core finding",
    description: "Our core finding: the very values and features that attract developers to the Bitcoin and Nostr ecosystems — freedom, permissionless participation, autonomy — become the source of their greatest challenges.",
    imagePath: "/images/og/core-finding.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-627&m=dev
    section: "Executive Summary",
    order: 29
  },
  [SHAREABLE_description_IDS.TYRANNY_DEFINITION]: {
    id: SHAREABLE_description_IDS.TYRANNY_DEFINITION,
    title: "The tyranny of permissionlessness",
    description: "We call this the tyranny of permissionlessness: while these principles enable open innovation and resist capture, without support structures they lead developers to navigate unlimited responsibility alone.",
    imagePath: "/images/og/tyranny-definition.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-636&m=dev
    section: "Executive Summary",
    order: 30
  },
  [SHAREABLE_description_IDS.INTENTIONAL_DESIGN]: {
    id: SHAREABLE_description_IDS.INTENTIONAL_DESIGN,
    title: "Intentional design",
    description: "With intentional design, we can maintain permissionless participation while building sustainable work practices (in Open Source).",
    imagePath: "/images/og/intentional-design.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-646&m=dev
    section: "Executive Summary",
    order: 31
  },
  [SHAREABLE_description_IDS.STUDY_STATS]: {
    id: SHAREABLE_description_IDS.STUDY_STATS,
    title: "Study statistics",
    description: "42% of participants had less than 3 years of OSS experience, reflecting a steady inflow of developers.",
    imagePath: "/images/og/study-stats.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-656&m=dev
    section: "Study Overview",
    order: 32
  },
  [SHAREABLE_description_IDS.SUSTAINABILITY_CHALLENGES]: {
    id: SHAREABLE_description_IDS.SUSTAINABILITY_CHALLENGES,
    title: "Sustainability challenges",
    description: "69% (of participants) have been grant-funded for 2 years or less, indicating potential sustainability challenges.",
    imagePath: "/images/og/sustainability-challenges.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-666&m=dev
    section: "Study Overview",
    order: 33
  },
  [SHAREABLE_description_IDS.PERMISSIONLESSNESS_ISOLATION]: {
    id: SHAREABLE_description_IDS.PERMISSIONLESSNESS_ISOLATION,
    title: "Permissionlessness creates isolation",
    description: "Without structural support, permissionlessness — the core principle of Bitcoin — can create isolation, burnout, and unsustainable work patterns when applied to human systems.",
    imagePath: "/images/og/permissionlessness-isolation.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-676&m=dev
    section: "Study Overview",
    order: 34
  },
  [SHAREABLE_description_IDS.SUSTAINABILITY_PARADOX]: {
    id: SHAREABLE_description_IDS.SUSTAINABILITY_PARADOX,
    title: "The sustainability paradox",
    description: "The sustainability paradox: the more the experience, the more unsustainable one's work process becomes.",
    imagePath: "/images/og/sustainability-paradox.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-684&m=dev
    section: "Top-level Analysis",
    order: 35
  },
  [SHAREABLE_description_IDS.FUTURE_ORIENTATION]: {
    id: SHAREABLE_description_IDS.FUTURE_ORIENTATION,
    title: "Future orientation",
    description: "All contributors have a strong future orientation for their projects, yet their daily work patterns diverge sharply with experience.",
    imagePath: "/images/og/future-orientation.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-693&m=dev
    section: "Top-level Analysis",
    order: 36
  },
  [SHAREABLE_description_IDS.EXPERT_CARING]: {
    id: SHAREABLE_description_IDS.EXPERT_CARING,
    title: "Expert contributors care for others",
    description: "Expert contributors report the highest scores on caring for others — collaborators, community, people outside work — even as their own work becomes less sustainable.",
    imagePath: "/images/og/expert-caring.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-702&m=dev
    section: "Top-level Analysis",
    order: 37
  },
  [SHAREABLE_description_IDS.PERMISSIONLESSNESS_ENABLES]: {
    id: SHAREABLE_description_IDS.PERMISSIONLESSNESS_ENABLES,
    title: "Permissionlessness enables innovation",
    description: "Permissionlessness enables innovation in technical systems, but when extended to human labor systems it can create overwhelming choice and invisible labor.",
    imagePath: "/images/og/permissionlessness-enables.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-711&m=dev
    section: "Core Findings",
    order: 38
  },
  [SHAREABLE_description_IDS.FREEDOM_FROM_OVERSIGHT]: {
    id: SHAREABLE_description_IDS.FREEDOM_FROM_OVERSIGHT,
    title: "Freedom from oversight",
    description: "Freedom from oversight means freedom from support; the right to contribute becomes the responsibility to self-manage everything.",
    imagePath: "/images/og/freedom-from-oversight.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-720&m=dev
    section: "Core Findings",
    order: 39
  },
  [SHAREABLE_description_IDS.BURNOUT_EXPECTATION]: {
    id: SHAREABLE_description_IDS.BURNOUT_EXPECTATION,
    title: "Burnout is the expectation",
    description: "Burnout is not the exception but the expectation — a normal state of affairs.",
    imagePath: "/images/og/burnout-expectation.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-729&m=dev
    section: "Core Findings",
    order: 40
  },
  [SHAREABLE_description_IDS.NO_FRAMEWORK]: {
    id: SHAREABLE_description_IDS.NO_FRAMEWORK,
    title: "No framework for evolution",
    description: "Contributors are excited to deepen their expertise, but there is no framework for evolving responsibilities or recognition.",
    imagePath: "/images/og/no-framework.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-738&m=dev
    section: "Core Findings",
    order: 41
  },
  [SHAREABLE_description_IDS.ECOSYSTEM_REPLACEMENT]: {
    id: SHAREABLE_description_IDS.ECOSYSTEM_REPLACEMENT,
    title: "Ecosystem sustains by replacement",
    description: "The ecosystem sustains itself not by supporting individuals, but by continuously replacing them.",
    imagePath: "/images/og/ecosystem-replacement.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-746&m=dev
    section: "Beyond Financial Sustainability",
    order: 42
  },
  [SHAREABLE_description_IDS.CONSTANT_TURNOVER]: {
    id: SHAREABLE_description_IDS.CONSTANT_TURNOVER,
    title: "Constant developer turnover",
    description: "The ecosystem depends on constant developer turnover while losing critical knowledge.",
    imagePath: "/images/og/constant-turnover.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-756&m=dev
    section: "Beyond Financial Sustainability",
    order: 43
  },
  [SHAREABLE_description_IDS.INSTITUTIONAL_KNOWLEDGE]: {
    id: SHAREABLE_description_IDS.INSTITUTIONAL_KNOWLEDGE,
    title: "Loss of institutional knowledge",
    description: "Each departure means losing institutional knowledge that cannot be fully captured in the project history.",
    imagePath: "/images/og/institutional-knowledge.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-766&m=dev
    section: "Beyond Financial Sustainability",
    order: 44
  },
  [SHAREABLE_description_IDS.ONE_SIZE_FITS_ALL]: {
    id: SHAREABLE_description_IDS.ONE_SIZE_FITS_ALL,
    title: "One-size-fits-all grant model",
    description: "The one-size-fits-all grant model fails to recognize the different realities of core infrastructure vs application work.",
    imagePath: "/images/og/one-size-fits-all.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-776&m=dev
    section: "Beyond Financial Sustainability",
    order: 45
  },
  [SHAREABLE_description_IDS.YEARLY_RENEWALS]: {
    id: SHAREABLE_description_IDS.YEARLY_RENEWALS,
    title: "Yearly grant renewals",
    description: "Yearly grant renewals incentivize short-term deliverables rather than long-term investments.",
    imagePath: "/images/og/yearly-renewals.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-785&m=dev
    section: "Beyond Financial Sustainability",
    order: 46
  },
  [SHAREABLE_description_IDS.FUNDERS_OPTIMIZE]: {
    id: SHAREABLE_description_IDS.FUNDERS_OPTIMIZE,
    title: "Funders optimize for renewals",
    description: "Funders inadvertently optimize for yearly renewal requirements over long-term project sustainability.",
    imagePath: "/images/og/funders-optimize.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-793&m=dev
    section: "Beyond Financial Sustainability",
    order: 47
  },
  [SHAREABLE_description_IDS.PSYCHOLOGICAL_SUSTAINABILITY]: {
    id: SHAREABLE_description_IDS.PSYCHOLOGICAL_SUSTAINABILITY,
    title: "Psychological sustainability",
    description: "Psychological sustainability is as crucial as financial stability, yet burnout is treated as an individual problem rather than a systemic issue.",
    imagePath: "/images/og/psychological-sustainability.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-802&m=dev
    section: "Beyond Financial Sustainability",
    order: 48
  },
  [SHAREABLE_description_IDS.NOT_INEVITABLE]: {
    id: SHAREABLE_description_IDS.NOT_INEVITABLE,
    title: "Not inevitable",
    description: "The tyranny of permissionlessness represents one possible, yet critical, failure mode of open, decentralized systems — not an inevitable outcome.",
    imagePath: "/images/og/not-inevitable.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-811&m=dev
    section: "Recommendations",
    order: 49
  },
  [SHAREABLE_description_IDS.KEEPING_OPEN_PARTICIPATION]: {
    id: SHAREABLE_description_IDS.KEEPING_OPEN_PARTICIPATION,
    title: "Keeping open participation",
    description: "Sustainable permissionlessness means keeping open participation while creating structural support.",
    imagePath: "/images/og/keeping-open-participation.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-829&m=dev
    section: "Recommendations",
    order: 50
  },
  [SHAREABLE_description_IDS.FUND_TEAMS_RECOMMENDATION]: {
    id: SHAREABLE_description_IDS.FUND_TEAMS_RECOMMENDATION,
    title: "Fund teams recommendation",
    description: "Fund teams, not just individuals.",
    imagePath: "/images/og/fund-teams-recommendation.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-821&m=dev
    section: "Recommendations",
    order: 51
  },
  [SHAREABLE_description_IDS.MAKE_INVISIBLE_VISIBLE]: {
    id: SHAREABLE_description_IDS.MAKE_INVISIBLE_VISIBLE,
    title: "Make invisible work visible",
    description: "Make invisible work visible and valued.",
    imagePath: "/images/og/make-invisible-visible.jpg",
    // Figma URL: https://www.figma.com/design/nRnzfPlN5mdNxrHYqKjnCz/Social-share?node-id=7-840&m=dev
    section: "Recommendations",
    order: 52
  }
};

export default shareabledescriptionData;

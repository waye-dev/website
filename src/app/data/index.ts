export const SERVICES_SECTION_DATA = [
  {
    src: "Fuel_image_1-p-800",
    cardTitle: "Screw burnout.",
    cardDescription:
      "People are silenced and denied financial freedom every day. As cypherpunks, we are writing code to build censorship-resistant systems. It's effin' hard to turn off your computer, let alone your brain. Burnout is a silent killer.",
    cardSubText: "Don't run out of fuel. Keep building.",
  },
  {
    src: "waye_backpack-p-800",
    cardTitle: "Get focused.",
    cardDescription: `40 hour workweeks are outdated. Want to be an effective knowledge worker? Listen to the research: our brains have a max of ~4 hours of deep focus per day. Sprint hard. Rest hard. Repeat.`,
    cardSubText: "Turn ambition into impact.",
    props: { className: "flex flex-col md:flex-row-reverse gap-8 justify-between items-center " },
  },
  {
    src: "waye_map-p-800",
    cardTitle: "Collaborate effectively.",
    cardDescription: `Burnout isn’t one-size-fits-all. Perplexity says: take a week off. But what if being AFK too long spikes your anxiety? We’ll help pinpoint where you’re at, offer expert recommendations, and create a plan so you can focus on what you do best.`,
    cardSubText: "More code, less burnout.",
  },
] as Array<{
  src: string;
  cardTitle: string;
  cardDescription: string;
  cardSubText: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}>;

export const ABOUT_SECTION_DATA = [
  {
    src: "dialogue-image",
    cardTitle: "We need censorship-resistant technology.",
    cardDescriptionBlocks: [
      "Global freedom needs open-source software and decentralized development ecosystems. Centralization is vulnerable to compromise, whether malicious or unintentional. Opaque systems are ideal for surveillance and backdoors. ",
      "Censorship resistance simply means anyone can participate. Code that can’t be silenced means people can’t be controlled.",
    ],
    cardSubText: "Free code creates a free world.",
    props: { className: "flex flex-col md:flex-row-reverse gap-8 justify-between items-center " },
  },
  {
    src: "Fuel_image_1-p-800",
    cardTitle: "We are scattered.",
    cardDescriptionBlocks: [
      "Decentralized doesn’t mean isolated. In fact, the opposite: effective decentralization necessitates an increase of message exchange. Our social layer needs strong feedback loops. We are not there. ",
      "Developers building freedom technology must be solopreneurs- identify impactful improvements, write & review code, manage project lifecycles, get collaborator buy-in, build community and raise funding. We are losing many of the brightest technical minds, while the rest navigate through muddled, low feedback environments.",
    ],
    cardSubText: "Turn ambition into impact.",
  },
  {
    src: "",
    cardTitle: "Let's do better.",
    cardDescriptionBlocks: [
      "Elite athletes are supported by professionals to transform their natural talent into repeatable excellence. We know the value of psycho-social support for high-achievers.",
      "Waye customizes evidenced-based practices to the unique challenges faced by devs building censorship-resistant technology. Waye empowers devs to build meaningful solutions that last.",
    ],
    cardSubText: "Free minds build freedom technology.",
    props: { className: "flex flex-col gap-8" },
  },
] as Array<{
  src: string;
  cardTitle: string;
  cardDescription: string;
  cardDescriptionBlocks: string[];
  cardSubText: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}>;

export const INITIATIVES_SECTION_DATA = [
  {
    src: "/images/os-reboot-image.png",
    title: "OS Reboot",
    description:
      "OS Reboot is your reset button. Through expert-led monthly deep dives, we cut through the noise, tackle everything from burnout to imposter syndrome, and help you refocus—so you can build with clarity, purpose, and renewed energy.",
    infoText: "",
    advertText: "",
    linkText: "Explore OS Reboot and join an upcoming cohort ",
    href: "/initiatives/os-reboot",
    filterKey: "program",
  },
  {
    src: "/images/dialogue-image.png",
    title: "Decentralized Dialogues",
    description:
      "Explore bitcoin’s implications for humanity through these discussion-based seminars. Learn from Plato and Aristotle to Diffie and Hellman. Engage critically with controversial thinkers and define your internal compass. World-changing open-source infrastructure doesn’t happen aimlessly.",
    infoText: "",
    advertText: "",
    linkText: "Join the Dialogue",
    href: "/initiatives/decentralized-dialogues",
    filterKey: "program",
  },
  {
    src: "/images/toolbox-image.png",
    title: "Developer Toolbox: AIR",
    description:
      "Start improving your work with the AIR (Actions, Intentions, Reflections) template. Build regular feedback loops to understand your work patterns, celebrate wins, set ambitious goals, and identify areas for improvement using evidence-based techniques to maximize your impact.",
    infoText: "",
    advertText: "",
    linkText: "Learn more and get the tool",
    href: "/initiatives/air-tool",
    filterKey: "tool",
  },
  {
    src: "/images/research-image.png",
    title: "Permissionless Paths",
    description:
      "How does grant-funded open-source work differ from traditional employment? This ethnographic research explores independent contributors' mindsets to deepen understanding, shift the Overton window, and drive systemic change. Get in on the ground floor—sign up to be interviewed!",
    infoText: "",
    advertText: "",
    linkText: "More details",
    href: "/initiatives/permissionless-paths",
    filterKey: "research",
  },
  {
    src: "/images/onboarding-image.png",
    title: "The Onboarding Waye",
    description:
      "Waye partners with developer training programs to demystify full-time open-source work. Through Bitcoin Unfiltered, prospective contributors gain raw insights into its challenges and rewards, while Mindsets for Success helps them embrace its unique dynamics and craft personal roadmaps to thrive.",
    infoText: "More details coming soon.",
    advertText: "Do you run a developer training program?",
    linkText: "Join the community",
    href: "mailto:waye.dev@gmail.com?subject=Initiative%20proposal",
    filterKey: "program",
  },
  {
    src: "/images/idea-image.png",
    title: "Your Idea",
    description:
      "Have an idea for a program, workshop, or initiative? Let’s build it. Waye is a community-led ecosystem where developers drive and we create meaningful solutions together.",
    infoText: "",
    advertText: "",
    linkText: "Pitch your idea",
    href: "mailto:waye.dev@gmail.com?subject=Initiative%20proposal",
    props: { style: { backgroundColor: "transparent" } },
    filterKey: "",
  },
];

export const INITIATIVES_FILTER_KEYS = [
  { key: "program", label: "programs" },
  { key: "tool", label: "tools" },
  { key: "research", label: "research" },
  { key: "all", label: "all" },
];

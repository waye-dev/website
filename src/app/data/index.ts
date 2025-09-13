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
    cardSubText: "Individuals do not overthrow oppression, movements do.",
  },
  {
    src: "waye_backpack-p-800",
    cardTitle: "Let's do better.",
    cardDescriptionBlocks: [
      "Elite athletes are supported by professionals to transform their natural talent into repeatable excellence. We know the value of psycho-social support for high-achievers.",
      "Waye customizes evidenced-based practices to the unique challenges faced by devs building censorship-resistant technology. Waye empowers devs to build meaningful solutions that last.",
    ],
    cardSubText: "Free minds build freedom technology.",
    props: { className: "flex flex-col md:flex-row-reverse gap-8 justify-between items-center " },
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
      "Upgrade your mental OS through monthly sessions facilitated by world-class experts. OS Reboot [Freedom] and OS Reboot [Nostr] are underway. Sign up for our newsletter to get notified about the next OS Reboot.",
    infoText: "",
    advertText: "",
    linkText: "Learn more",
    href: "/initiatives/os-reboot#bitcoin",
    filterKey: "program",
  },
  {
    src: "/images/research-image.png",
    title: "Permissionless Paths",
    description: "What do open source devs actually struggle with? This ethnographic research tackles the question head on.",
    infoText: "",
    advertText: "",
    linkText: "Learn more",
    href: "/initiatives/permissionless-paths",
    filterKey: "research",
  },
  {
    src: "/images/dialogue-image.png",
    title: "Decentralized Dialogues",
    description: "Revolutions don’t happen aimlessly. Explore bitcoin’s implications for humanity through these discussion-based seminars.",
    infoText: "",
    advertText: "",
    linkText: "Learn more",
    href: "/initiatives/decentralized-dialogues",
    filterKey: "program",
  },
  {
    src: "/images/toolbox-image.png",
    title: "Developer Toolbox: AIR",
    description:
      "Real talk: how often do you actually reflect on your month-to-month impact? It’s wild how 30 minutes a month can level you up—boosting both your effectiveness and your feel-goods. Self-paced framework here.",
    infoText: "",
    advertText: "",
    linkText: "Learn more & get the tool",
    href: "/initiatives/air-tool",
    filterKey: "tool",
  },
  {
    src: "/images/onboarding-image.png",
    title: "Wayepoint Calls",
    description:
      "A Wayepoint call helps you reflect, reset, and plan next steps. Complete a self-audit, then join a 60-minute session focused on clarity and tangible actions tailored to you.",
    infoText: "",
    advertText: "",
    linkText: "Step 1: Complete this Self Audit",
    href: "https://drive.google.com/file/d/1zL-peL2X-Ijg4dNHxBqGSlKfvHpOycGF/view?usp=sharing",
    filterKey: "program",
    linkText2: "Step 2: Join the waitlist",
    href2: "https://docs.google.com/forms/d/e/1FAIpQLScpLf4OFIVfcu0SMMOt_IyDnbCeMv-jn1zgDgPa6cGou1HxoQ/viewform?usp=dialog",
  },
  {
    src: "/images/idea-image.png",
    title: "Your Idea",
    description: `Have an idea for a program, initiative or research?`,
    infoText: "",
    advertText: "Let’s build it.",
    linkText: "Email us",
    href: "mailto:hello@waye.dev?subject=Initiative%20proposal",
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

export const NAV_LINKS = [
  { href: "/about", text: "About" },
  { href: "/initiatives", text: "Initiatives" },
  { href: "/initiatives/permissionless-paths", text: "Research" },
  { href: "https://github.com/waye-dev/waye/blob/main/doc/FAQ.md", text: "FAQ" },
];

export const FOOTER_LINKS = [
  { text: "Terms of Use", href: "https://github.com/waye-dev/waye/blob/main/doc/TOS.md" },
  { text: "Privacy Policy", href: "https://github.com/waye-dev/waye/blob/main/doc/PRIVACY.md" },
  { text: "Donation Disclosure", href: "https://github.com/waye-dev/waye/blob/main/doc/DISCLOSURE.md" },
  { text: "License: MIT", href: "https://github.com/waye-dev/waye/blob/main/LICENSE" },
  { text: "Bylaws", href: "https://github.com/waye-dev/waye/blob/main/doc/BYLAWS.md" },
];

export const SOCIAL_LINKS = [
  { text: "hello@waye.dev", href: "mailto:hello@waye.dev", src: "/svgs/envelope.svg" },
  { text: "@waye_dev", href: "https://x.com/waye_dev", src: "/svgs/x.svg" },
  {
    text: "waye",
    href: "https://primal.net/p/nprofile1qqs8yjjh4xn7xctqcqjamyms3tghgdjtj00a3jns6rnt2awfe4td7xcc3xfsr",
    src: "/svgs/nostr.svg",
  },
];

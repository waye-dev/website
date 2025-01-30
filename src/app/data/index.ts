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
    cardTitle: "Get Focused.",
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

export const INITIATIVES_SECTION_DATA = [
  {
    src: "/images/os-reboot-image.png",
    title: "OS Reboot: Nostara Edition",
    description:
      "To be effective in open-source, you have to wear many hats. This 8-session coaching protocol supports navigating the complexities of the open-source realm, so you can focus on what you do best: building censorship resistant communication.",
    infoText: "More details coming soon.",
    advertText: "",
    linkText: "Explore the program",
    href: "/initiatives/os-reboot",
  },
  {
    src: "/images/dialogue-image.png",
    title: "Decentralized Dialogues",
    description:
      "Explore bitcoin’s implications for humanity through these discussion-based seminars. Learn from Plato and Aristotle to Diffie and Hellman. Engage critically with controversial thinkers and define your internal compass. World-changing open-source infrastructure doesn’t happen aimlessly.",
    infoText: "More details coming soon.",
    advertText: "",
    linkText: "",
    href: "",
  },
  {
    src: "/images/toolbox-image.png",
    title: "Developer Toolbox: AIR",
    description:
      "Start improving your work with the AIR (Actions, Intentions, Reflections) template. Build regular feedback loops to understand your work patterns, celebrate wins, set ambitious goals, and identify areas for improvement using evidence-based techniques to maximize your impact.",
    infoText: "",
    advertText: "",
    linkText: "Check out the template",
    href: "https://docs.google.com/document/d/17iFCmubO37MeREXWlvjqDFmjx3n9vWTkfJp-ZLy1mDo/edit?usp=sharing",
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
  },
  {
    src: "/images/research-image.png",
    title: "Permissionless Paths",
    description:
      "What makes grant-funded open-source work different from traditional employment? Through an ethnographic lens, this research examines the mindsets of independent contributors, aiming to deepen understanding, shift the Overton window, and uncover opportunities for systemic improvements.",
    infoText: "More details coming soon.",
    advertText: "",
    linkText: "",
    href: "",
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
  },
];

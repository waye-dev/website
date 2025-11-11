import React from "react";

export const sectionSelectors = {
  1: '[data-section="study-overview"]',
  2: '[data-section="top-level-analysis"]',
  3: '[data-section="tyranny-of-permissionlessness"]',
  4: '[data-section="four-strategies-for-chaos"]',
  5: '[data-section="beyond-financial-sustainability"]',
  6: '[data-section="recommendations"]',
  7: '[data-section="toward-sustainable-permissionlessness"]',
} as const;

export const GLOSSARY_TEXT_SECTIONS = [
  {
    title: "STUDY OVERVIEW",
    summary:
      "Context, methodology, and participant demographics. Our 26 participants span 10+ countries. 42% of them have less than 3 years of OSS experience, reflecting a steady inflow of developers, while 69% have been grant-funded for 2 years or less, indicating potential sustainability challenges.",
  },
  {
    title: "TOP-LEVEL ANALYSIS",
    summary:
      "Early reflections with participants surfaced core tensions between commons ideals and commercial realities, sustainable vision and unsustainable practice, especially as experience grows.",
  },
  {
    title: "THE TYRANNY OF PERMISSIONLESSNESS",
    summary: (
      <div>
        <p>Our core findings reveal that four converging dimensions create unsustainable conditions:</p>
        <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
          <li>
            <span className='font-semibold'>Ideological:</span> The social mission that attracts developers justifies self-exploitation
          </li>
          <li>
            <span className='font-semibold'>Structural:</span> Permissionless architecture and work practices create isolated, overwhelming work
          </li>
          <li>
            <span className='font-semibold'>Human:</span> Self-management without support leads to invisible labor and unsustainable patterns
          </li>
          <li>
            <span className='font-semibold'>Institutional:</span> Grant systems reinforce individual struggles rather than providing collective support
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "FOUR STRATEGIES FOR CHAOS",
    summary:
      "Contributors adopt distinct approaches based on experience and project type. With experience, they do not build more sustainable approaches — they simply learn to lean into chaos.",
  },
  {
    title: "BEYOND FINANCIAL SUSTAINABILITY",
    summary: (
      <div>
        Three critical tensions emerge for a sustainable work environment:
        <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
          <li>
            <span>The ecosystem depends on constant developer turnover while losing critical knowledge</span>
          </li>
          <li>
            <span>Grant structures actively discourage the revenue models that could sustain application development</span>
          </li>
          <li>
            <span>
              Over half of participants have experienced burnout, yet the ecosystem treats this as individual failure rather than systemic dysfunction
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "TOWARD SUSTAINABLE PERMISSIONLESSNESS",
    summary: (
      <div>
        <p>
        Concrete recommendations for creating support structures: team-based funding, extended renewal cycles, administrative infrastructure, mental health resources, and transition pathways that maintain engagement beyond direct development.
        </p>
      </div>
    ),
  },
];

export const GLOSSARY_LIST = [
  {
    id: 1,
    title: "Study Overview",
    heightPercentage: 0.6,
    widthPercentage: 0.75,
  },
  {
    id: 2,
    title: "Top-Level Analysis",
    heightPercentage: 0.75,
    widthPercentage: 1.25,
  },
  {
    id: 3,
    title: "Core Findings: The Tyranny of Permissionlessness",
    heightPercentage: 0.9,
    widthPercentage: 0.75,
  },
  {
    id: 4,
    title: "Contributor Work Styles",
    heightPercentage: 0.75,
    widthPercentage: 1.25,
  },
  {
    id: 5,
    title: "The Invisible Labor",
    heightPercentage: 1,
    widthPercentage: 3.5,
  },
  {
    id: 6,
    title: "Recommendations",
    heightPercentage: 0.9,
    widthPercentage: 2.5,
  },
  {
    id: 7,
    title: "Conclusion",
    heightPercentage: 0.9,
    widthPercentage: 2.5,
  },
];


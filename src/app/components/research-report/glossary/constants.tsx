import React from "react";

export interface GlossaryPart {
  id: number;
  title: string;
  summary: string | React.ReactNode;
  sectionSelector: string;
}

export const GLOSSARY_PARTS: GlossaryPart[] = [
  {
    id: 1,
    title: "STUDY OVERVIEW",
    summary:
      "Context, methodology, and participant demographics. Our 26 participants span 10+ countries. 42% of them have less than 3 years of OSS experience, reflecting a steady inflow of developers, while 69% have been grant-funded for 2 years or less, indicating potential sustainability challenges.",
    sectionSelector: '[data-section="study-overview"]',
  },
  {
    id: 2,
    title: "TOP-LEVEL ANALYSIS",
    summary:
      "Early reflections with participants surfaced core tensions between commons ideals and commercial realities, sustainable vision and unsustainable practice, especially as experience grows.",
    sectionSelector: '[data-section="top-level-analysis"]',
  },
  {
    id: 3,
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
    sectionSelector: '[data-section="tyranny-of-permissionlessness"]',
  },
  {
    id: 4,
    title: "FOUR STRATEGIES FOR CHAOS",
    summary:
      "Contributors adopt distinct approaches based on experience and project type. With experience, they do not build more sustainable approaches — they simply learn to lean into chaos.",
    sectionSelector: '[data-section="four-strategies-for-chaos"]',
  },
  {
    id: 5,
    title: "HIDDEN COSTS",
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
    sectionSelector: '[data-section="beyond-financial-sustainability"]',
  },
  {
    id: 6,
    title: "RECOMMENDATIONS",
    summary:
      "Concrete recommendations for creating support structures: team-based funding, extended renewal cycles, administrative infrastructure, mental health resources, and transition pathways that maintain engagement beyond direct development.",
    sectionSelector: '[data-section="recommendations"]',
  },
  {
    id: 7,
    title: "CONCLUSION",
    summary:
      "Toward sustainable permissionlessness. The path forward requires systemic changes to support structures, not just individual resilience.",
    sectionSelector: '[data-section="toward-sustainable-permissionlessness"]',
  },
];

export const TOTAL_PARTS = 7;

// Export GLOSSARY_LIST for sticky-navigation compatibility
export const GLOSSARY_LIST = GLOSSARY_PARTS.map(part => ({
  id: part.id,
  title: part.title,
  heightPercentage: part.id === 5 ? 1.0 : part.id === 3 || part.id === 6 || part.id === 7 ? 0.9 : part.id === 2 || part.id === 4 ? 0.75 : 0.6,
  widthPercentage: part.id === 5 || part.id === 6 || part.id === 7 ? 2.5 : part.id === 2 || part.id === 4 ? 1.25 : 0.75,
}));

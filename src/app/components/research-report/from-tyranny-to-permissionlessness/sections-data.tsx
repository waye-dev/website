import { ReactNode } from 'react';

export interface Section {
  id: string;
  title: string;
  textContent: ReactNode;
  animation: 'framesOnly' | 'innerOnly' | 'complete' | null;
}

export const sections: Section[] = [
  {
    id: "00",
    title: "Hero",
    textContent: (
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">From Tyranny to Permissionlessness</h1>
        <p className="text-lg text-gray-600">An exploration of sustainable decentralized systems</p>
      </div>
    ),
    animation: null,
  },
  {
    id: "01",
    title: "Introduction",
    textContent: (
      <div className="max-w-3xl">
        <p className="mb-4">
          Our findings revealed that the very freedom that attracts developers creates the conditions that drive them away — admin burden, isolation, grant anxiety. This “tyranny of permissionlessness” represents one possible, yet critical, failure mode of open, decentralized systems — not an inevitable outcome. While the funding ecosystem for Bitcoin and related technologies is expanding, there are several ways in which funders and stakeholders in the ecosystem can further support grant-funded contributors.
        </p>
      </div>  
    ),
    animation: 'framesOnly',
  },
  {
    id: "02",
    title: "Core Principle",
    textContent: (
      <div className="max-w-3xl">
        <p>These recommendations outline concrete steps toward "sustainable permissionlessness" — maintaining open participation while creating structural support for contributors’ day-to-day experience. They are directed primarily to funders, since project maintainers and contributors are already bearing the full weight of the tyranny of permissionlessness.</p>
      </div>
    ),
    animation: 'innerOnly',
  },
  {
    id: "03",
    title: "Restructure Funding",
    textContent: (
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Restructure Funding Models</h2>
        <p>Moving towards sustainable funding structures that reduce administrative burden and grant anxiety.</p>
      </div>
    ),
    animation: 'framesOnly',
  },
  {
    id: "04",
    title: "Individual Support",
    textContent: (
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Individual Support Beyond Money</h2>
        <p>Providing mentorship, community, and resources that address isolation and burnout.</p>
      </div>
    ),
    animation: 'innerOnly',
  },
  {
    id: "05",
    title: "Ecosystem Coordination",
    textContent: (
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Ecosystem Coordination</h2>
        <p>Supporting coordination mechanisms that improve the health of the entire ecosystem.</p>
      </div>
    ),
    animation: 'framesOnly',
  },
  {
    id: "06",
    title: "Developers' Ideas",
    textContent: (
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Developers' Ideas</h2>
        <p>Listening to and implementing feedback from those building in the ecosystem.</p>
      </div>
    ),
    animation: 'innerOnly',
  },
];
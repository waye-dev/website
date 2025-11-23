import Image from "next/image";

export const KeyFindings = () => {
  return (
    <div className='flex flex-col gap-4 px-6 sm:px-0'>
      <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-inknutAntiqua font-bold'>Key Findings & Impact </h5>

      <section className='flex md:flex-row-reverse flex-col items-center sm:gap-8 gap-4 sm:pl-16'>
      <article className='flex flex-col gap-4'>
          <p className='text-md'>Our analysis revealed a central paradox:</p>
          <p className='font-inknutAntiqua text-sm'>The very values and processes that attract developers to the Bitcoin and Nostr ecosystems become the source of their most persistent challenges. Without structural support, permissionlessness, the core principle of Bitcoin, can create isolation, burnout, and unsustainable work patterns when applied to human systems.</p>
      </article>
        <Image src='/svgs/key-findings-image.svg' alt='key findings image' width={375} height={308} />
      </section>

      <section className='flex flex-col gap-4 text-md'>
        <p>
          We focused on Bitcoin and Nostr as critical infrastructure within the freedom tech ecosystem, a growing field in OSS building
          censorship-resistant, decentralized infrastructure for financial sovereignty and free speech. The ecosystem's emphasis on decentralized
          development and grant funding ensures that this critical software remains free from gatekeeping and institutional lock-in. Without
          adequate support structures, however, this total autonomy - leads developers to navigate increasingly unsustainable working conditions.
          Given the foundational role OSS plays in advancing digital freedom, addressing these systemic challenges is key to supporting the people that build and maintain these critical tools.
        </p>
        <p>
          While our findings emerge from the freedom tech ecosystem, where the stakes of maintaining decentralization and censorship resistance
          are particularly high, they apply to any open source ecosystem seeking to support full-time, independent contributors and decentralized
          development. This study lays the groundwork for a shared understanding of how these developers work and what they need, providing
          insights that can inform the development of tools, funding programs, and support structures.
        </p>
      </section>
    </div>
  );
};

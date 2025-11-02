import Image from "next/image";

export const KeyFindings = () => {
  return (
    <div className='flex flex-col gap-12'>
      <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-inknutAntiqua font-bold'>Key Findings & Impact </h5>

      <section className='flex md:flex-row flex-col items-center gap-8 pl-16'>
        <Image src='/svgs/key-findings-image.svg' alt='key findings image' width={375} height={308} />

        <article className='flex flex-col gap-4 text-lg max-w-[731px]'>
          <p>Our analysis revealed a central paradox:</p>
          <p className='font-inknutAntiqua text-xl'>
          The very values and processes that attract developers to the Bitcoin and Nostr ecosystems become the source of their most persistent challenges.
          </p>
        </article>
      </section>

      <section className='flex flex-col gap-4 text-lg'>
        <p>
          Without structural support, permissionlessness — the core principle of Bitcoin — can create isolation, burnout, and unsustainable work
          patterns when applied to human systems.
        </p>
        <p>
          We focused on Bitcoin and Nostr as critical infrastructure within the freedom tech ecosystem — a growing field in OSS building
          censorship-resistant, decentralized infrastructure for financial sovereignty and free speech. The ecosystem's emphasis on decentralized
          development and grant funding ensures that this critical software remains free from gatekeeping and institutional lock-in. Without
          adequate support structures, however, this total autonomy leads developers to navigate increasingly unsustainable working conditions.
          Without addressing these systemic challenges, we risk losing the people building tools for human freedom.
        </p>
        <p>
          While our findings emerge from the freedom tech ecosystem — where the stakes of maintaining decentralization and censorship resistance
          are particularly high — they apply to any open source ecosystem seeking to support full-time, independent contributors and decentralized
          development. This study lays the groundwork for a shared understanding of how these developers work and what they need — providing
          insights that can inform the development of tools, funding programs, and support structures.
        </p>
      </section>
    </div>
  );
};

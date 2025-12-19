import Image from "next/image";

export const BitcoinSolution = () => {
  return (
    <div className='flex flex-col gap-8'>
      <h5 className='text-lg md:text-xl lg:text-2xl leading-[120%] font-inknutAntiqua font-bold'>Decentralizing OSS</h5>

      <section className='flex md:flex-row flex-col gap-8'>
        <Image src='/svgs/bitcoin-solution-image.svg' alt='bitcoin solution image' width={353} height={246} />

        <article className='flex flex-col gap-4 text-lg justify-between'>
          <p>
            Bitcoin introduced a new possibility for open source: by creating a new form of digital money, it also created new capacity to fund
            its development.
          </p>
          <p>
            The <strong>Bitcoin</strong> ecosystem, including <strong>Nostr</strong> as its primary decentralized communication layer, now
            supports hundreds of developers through an expanding grant landscape, enabling them to work full-time on OSS projects <i>without</i> an institutional affiliation.
          </p>
          <p>For the first time, the original OSS vision of sustainable, independent development seems within reach.</p>
        </article>
      </section>

      <section className='flex flex-col gap-4 text-lg'>
        <p>
          Yet this arrangement is still treated as a rarity, rather than the radical reimagining of work that it could be. Without institutional
          support, grant-funded OSS developers are expected to navigate engineering issues, project management, and community building on their
          own. We know little about how these developers work, nor how to support them.
        </p>
        <p>
          If OSS is to deliver on its promise to decentralize the workforce, then we need to treat these developers' experiences as a primary way
          of working, rather than as the exception.
        </p>
      </section>
    </div>
  );
};

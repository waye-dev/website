import { CrocAnimation } from "../croc-animation";

export const CoreFindingsTheTyrany = () => {
  return (
    <section>
    <div className='flex flex-col gap-12 px-12 lg:px-56'>
    <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-inknutAntiqua text-center'>
      Core findings: the tyranny of permissionlessness
    </h5>

    <section className='flex flex-col gap-8 text-lg'>
      <p>
        The paradoxes revealed in our opening exercise — between commons and commerce, sustainability and experience, autonomy and isolation — all
        point to a deeper structural tension, revealed by our interviews.
      </p>
      <strong>{`Permissionlessness — the defining principle of Bitcoin and the broader OSS ecosystem — becomes oppressive when applied to human work systems.`}</strong>
      <p>
        We call this <strong>"the tyranny of permissionlessness."</strong>
      </p>
    </section>
    </div>

<CrocAnimation />
  </section>
)
}
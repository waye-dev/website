export const Methodology = () => {
  return (
    <div className='py-24 flex flex-col gap-12'>
      <h1 className='text-[30px] md:text-3xl leading-[120%] font-inknutAntiqua text-center'>Methodology</h1>

      <div className='bg-blue-custom-1000 rounded-3xl border border-black p-10 flex flex-col gap-4'>
        <section className='flex flex-col gap-2'>
          <p className='font-bold'>Study Design</p>

          <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
            <li>Comprehensive literature review of OSS sustainability, developer experience, and burnout research</li>
            <li>Qualitative approach using semi-structured interviews</li>
            <li>
              Two-step inductive coding analysis — identifying themes iteratively from the interviews rather than applying preset frameworks
            </li>
            <li>Focus on capturing social, ideological, and contextual factors</li>
          </ul>
        </section>

        <section className='flex flex-col gap-2'>
          <p className='font-bold'>Participant Selection</p>

          <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
            <li>26 open source developers</li>
            <li>Minimum 12 months grant-funded full-time experience (current or previous)</li>
            <li>Recruited through direct outreach and open call through Waye's channels</li>
            <li>Strategic sampling for diversity (geography, experience, project type)</li>
          </ul>
        </section>

        <section className='flex flex-col gap-2'>
          <p className='font-bold'>Data Collection</p>

          <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
            <li>Conducted between March-May 2025</li>
            <li>45-60 minute remote interviews</li>
            <li>Open-ended format encouraging reflection</li>
            <li>All participants discussed their grant-funded experience regardless of current employment status</li>
            <li>
              Numerical references in findings (e.g. "7/26 participants") illustrate the prevalence of themes identified through coding. These are
              not the result of structured survey questions, but reflect patterns that emerged organically in conversations.
            </li>
          </ul>
        </section>

        <section className='flex flex-col gap-2'>
          <p className='font-bold'>Scope and Limitations</p>

          <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
            <li>Focused on Bitcoin and Nostr as interconnected freedom technologies</li>
            <li>Sample size appropriate for qualitative depth, not statistical generalization</li>
            <li>
              Yet the consistency of experiences across diverse participants suggests broader relevance for decentralized development ecosystems
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

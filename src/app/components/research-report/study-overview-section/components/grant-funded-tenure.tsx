
export const GrantFundedTenure = () => {
  return (
    <div className='flex flex-col gap-14'>
      <h5 className='text-xl md:text-2xl lg:text-[32px] leading-[120%] font-bold font-inknutAntiqua text-center'>Grant-funded tenure </h5>

      <section className='flex flex-col gap-8 text-xl font-inter font-normal px-4 sm:px-0'>
        <p>
          <span className='font-inknutAntiqua text-2xl sm:text-3xl'>73%</span> of the contributors are currently grant-funded, while{" "}
          <span className='font-inknutAntiqua text-2xl sm:text-3xl'>27%</span> have transitioned to employment or independent projects in the ecosystem.
        </p>
        <p>
          Among all participants, <span className='font-inknutAntiqua text-2xl sm:text-3xl'>69%</span> have been in grant-funded roles for 2 years or less,
          while a quarter have sustained funding for 2-5 years and only one participant has been grant-funded for over 5 years.
        </p>
        
        <p>
          Funding was primarily provided by OpenSats, the Human Rights Foundation (HRF), and Btrust, although additional sources were mentioned.
        </p>
      </section>
    </div>
  );
};

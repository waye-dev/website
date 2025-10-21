import { cn } from "@/utils";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";
import { ABOUT_PAGE_DATA } from "@/app/data/about-page";

export default function WhoIsWaye() {
  return (
    <main>
      {/* hero section */}
      <div className='max-h-screen h-[calc(100vh-75.5px)] md:h-[calc(100vh-98.3px)] bg-blue-custom-100 bg-gradient-to-b from-[#1a1f36] to-[#323F6B] via-[#7192f51c] text-gray-custom-100 flex flex-col justify-between relative overflow-hidden'>
        <section className='grid grid-cols-2 h-full'>
          <div></div>

          {/* add responsiveness here */}
          {/* hero text section */}
          <div className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-col gap-6 max-w-[38.75rem] pb-10'>
              <h1 className='text-[42px] md:text-[60px] leading-[140%] md:leading-[80px] text-left font-workSans'>Who is waye ?</h1>

              <section className='flex flex-col gap-4 text-base leading-7'>
                <p>Waye is an open-source movement for people building freedom tech.</p>
                <p>
                  Freedom tech is an emerging movement of decentralized, censorship-resistant technologies designed to protect human autonomy in the
                  digital age.
                </p>
                <p>
                  This movement bigger than any one team, it’s a collective effort. Some people keep things organized, but the movement belongs to
                  everyone who joins in.
                </p>
                <p>
                  To resist institutional capture, independent builders have to work in a decentralized world, aka outside the usual playbook of
                  corporations or states. Like any movement, success needs more than individual sparks. It needs connection, shared practice, and
                  structures that make the work sustainable. Waye exists to turn individual sparks into raging fires.
                </p>
              </section>
            </div>
          </div>

          <div className='absolute -bottom-56 -left-20'>
            <Image src='/images/about-page/about-section.webp' width={3200} height={574} alt='mountains' priority />
          </div>
        </section>
      </div>

      <div className='bg-gray-custom-100 py-24'>
        <Wrapper className='max-w-[1256px] mx-auto'>
          <div className='flex flex-col gap-24'>
            {/* participants section */}
            <div className='flex flex-col gap-8 md:gap-20'>
              <h3 className='text-[34px] md:text-[40px] lg:text-[46px] font-medium leading-[140%] tracking-tighter lg:max-w-[47.375rem]'>
                Here are some of the humans involved in that process
              </h3>

              <section className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 justify-center items-center'>
                <Image src='/svgs/about-page/participants-image.svg' height={550} width={524} alt='participants image' priority />

                <section className='flex flex-col gap-4'>
                  <p className='text-2xl md:text-4xl font-medium'>Participants</p>
                  <section className='flex flex-col gap-5 text-base md:text-lg leading-7'>
                    <p>The coolest thing about Waye? That’s easy, its the participants.</p>
                    <p>
                      Participation runs on a proof-of-work model. Thanks to the support of our donors, our programs are free for builders. Your
                      ticket comes from contributions to the ecosystem.
                    </p>
                    <p>
                      So far, more than 120 accomplished freedom tech builders have joined our programs, representing over 32 countries and a wild
                      variety of perspectives.
                    </p>
                  </section>
                </section>
              </section>
            </div>

            <div className=''>
              {/* Maintainers section */}
              <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
                <section className='w-full h-full flex items-center justify-center relative z-40'>
                  <Image src='/svgs/about-page/maintainers-image.svg' height={550} width={524} alt='maintainers image' priority />
                </section>

                <section className='flex flex-col gap-6'>
                  {ABOUT_PAGE_DATA.maintainers.map((maintainer) => (
                    <AboutUserCard
                      key={maintainer.name}
                      name={maintainer.name}
                      description={maintainer.description}
                      image={maintainer.image}
                      position={maintainer.position as "center" | "left" | "right"}
                    />
                  ))}
                </section>
              </div>

              {/* board of directors section */}
              <div className='flex flex-col gap-8 md:gap-0 items-center justify-center pt-12 md:pt-0 relative z-20'>
                <section className='w-full relative'>
                  {/* director to maintainers line --- complete */}
                  <section className='absolute hidden md:flex items-center justify-center top-0 md:-translate-y-[80%] lg:-translate-y-[76%] xl:-translate-y-[80.5%] -z-40 md:w-[28vw] md:translate-x-[35%] lg:w-[26vw] lg:translate-x-[53%] xl:w-[24vw] xl:translate-x-[50%] 2xl:w-[367px] 2xl:translate-x-[50%]'>
                    <svg
                      width='100%'
                      height='100%'
                      viewBox='0 0 371 255'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      preserveAspectRatio='none'
                      className='w-full h-auto'
                    >
                      <path
                        d='M2 2L13.6332 169.637C17.651 227.535 74.609 266.549 130.047 249.377L205.268 226.077C219.213 221.757 234 220.895 248.353 223.564L369 246'
                        stroke='#010101'
                        strokeWidth='3'
                        strokeLinecap='round'
                        strokeDasharray='6 6'
                        vectorEffect='non-scaling-stroke'
                      />
                    </svg>
                  </section>

                  <section className='flex items-center justify-center'>
                    <Image src='/svgs/about-page/board-of-directors-image.svg' height={227} width={250} alt='maintainers image' priority />
                  </section>
                </section>

                <section className='flex flex-col md:flex-row md:gap-[11.25rem] gap-8 items-center justify-center md:-mt-5'>
                  {ABOUT_PAGE_DATA.boardOfDirectors.map((director) => (
                    <AboutUserCard
                      key={director.name}
                      name={director.name}
                      description={director.description}
                      image={director.image}
                      position={director.position as "center" | "left" | "right"}
                    />
                  ))}
                </section>
              </div>

              {/*designers section */}
              <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-5 lg:gap-12 mt-10'>
                <section className='flex flex-col gap-4 items-center sm:pl-5 lg:pl-10 w-full'>
                  {ABOUT_PAGE_DATA.designers.map((designer, index) => (
                    <section key={designer.name} className={`${index === 1 ? "sm:pl-5 lg:pl-20" : "sm:pr-5 lg:pr-20"}`}>
                      <AboutUserCard
                        key={designer.name}
                        name={designer.name}
                        description={designer.description}
                        image={designer.image}
                        position={designer.position as "center" | "left" | "right"}
                      />
                    </section>
                  ))}
                </section>

                <section className='flex items-center justify-center w-full'>
                  <Image src='/svgs/about-page/designers-image.svg' height={227} width={466} alt='maintainers image' priority />
                </section>
              </div>

              {/* Researchers section */}
              <div className='flex flex-col md:flex-row gap-4 items-center justify-center pt-16 mx-auto w-full'>
                <section className='flex items-center justify-center w-full'>
                  <Image src='/svgs/about-page/researchers-image.svg' height={550} width={524} alt='maintainers image' priority />
                </section>

                <section className='flex flex-col gap-6'>
                  {ABOUT_PAGE_DATA.researchers.map((researcher) => (
                    <AboutUserCard
                      key={researcher.name}
                      name={researcher.name}
                      description={researcher.description}
                      image={researcher.image}
                      position={researcher.position as "center" | "left" | "right"}
                    />
                  ))}
                </section>
              </div>

              {/* Advisors and Facilitators section */}
              <div className='flex flex-col gap-8 pt-20'>
                <section className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center'>
                  <section className='flex items-center justify-center md:hidden'>
                    <Image src='/svgs/about-page/advisors-image.svg' height={239} width={352} alt='maintainers image' priority />
                  </section>

                  <section className='flex flex-col gap-4'>
                    {ABOUT_PAGE_DATA.advisorsAndFacilitators.slice(0, 2).map((advisor) => (
                      <AboutUserCard
                        key={advisor.name}
                        name={advisor.name}
                        description={advisor.description}
                        image={advisor.image}
                        position={advisor.position as "center" | "left" | "right"}
                      />
                    ))}
                  </section>

                  <section className='items-center justify-center hidden md:flex'>
                    <Image src='/svgs/about-page/advisors-image.svg' height={239} width={352} alt='maintainers image' priority />
                  </section>

                  <section className='flex flex-col gap-4'>
                    {ABOUT_PAGE_DATA.advisorsAndFacilitators.slice(2, 4).map((advisor) => (
                      <AboutUserCard
                        key={advisor.name}
                        name={advisor.name}
                        description={advisor.description}
                        image={advisor.image}
                        position={advisor.position as "center" | "left" | "right"}
                      />
                    ))}
                  </section>
                </section>

                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                  {ABOUT_PAGE_DATA.advisorsAndFacilitators.slice(4).map((advisor) => (
                    <AboutUserCard
                      key={advisor.name}
                      name={advisor.name}
                      description={advisor.description}
                      image={advisor.image}
                      position={advisor.position as "center" | "left" | "right"}
                    />
                  ))}
                </section>
              </div>

              {/* sponsors section */}
              <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-6 pt-12'>
                <section className='flex flex-col gap-6 max-w-[31.3rem]'>
                  {ABOUT_PAGE_DATA.sponsors.map((sponsor) => (
                    <AboutUserCard
                      key={sponsor.name}
                      name={sponsor.name}
                      description={sponsor.description}
                      image={sponsor.image}
                      position={sponsor.position as "center" | "left" | "right"}
                    />
                  ))}
                </section>

                <section>
                  <Image src='/svgs/about-page/sponsors-image.svg' height={222} width={403} alt='maintainers image' priority />
                </section>
              </div>
            </div>

            {/* Country  section */}
            <div className='flex flex-col gap-8 md:gap-16'>
              <h3 className='text-[32px] md:text-[40px] lg:text-[46px] font-medium leading-[140%] tracking-tighter lg:max-w-[47.375rem]'>
                Visual map of participant countries{" "}
              </h3>
              <section className='w-full h-full flex items-center justify-center'>
                <Image src='/images/about-page/countries-image.png' height={681} width={1192} alt='country image' priority />
              </section>
            </div>
          </div>
        </Wrapper>
      </div>
    </main>
  );
}

const AboutUserCard = ({
  name,
  description,
  image,
  position,
}: {
  name: string;
  description: string;
  image: string;
  position: "center" | "left" | "right";
}) => {
  const positionClasses = {
    center: "flex-col gap-2",
    left: "flex-row gap-4",
    right: "flex-row-reverse gap-4",
  };

  return (
    <div className={cn("flex items-center justify-center", positionClasses[position])}>
      <Image src={image} alt={name} width={80} height={80} className='w-20 h-20 rounded-full' />

      <section className={`flex flex-col gap-4 ${position === "center" ? "items-center justify-center text-center" : ""}`}>
        <p className={`text-xl md:text-2xl leading-7 font-medium ${position === "right" ? "text-right" : ""}`}>{name}</p>
        <p className='text-base md:text-lg leading-7'>{description}</p>
      </section>
    </div>
  );
};

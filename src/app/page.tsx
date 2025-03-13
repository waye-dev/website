import CustomButton from "./components/custom-button";
import HeroSection from "./components/landing-page/hero-section";
import ServicesSection from "./components/landing-page/service-section";
import EmailSignup from "@/app/components/email-signup";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />

      <div className='max-h-screen pb-[25px] pt-[25px] bg-blue-custom-100 bg-gradient-to-b from-[#1a1f36] to-[#7192f55c] via-[#7192f51c] text-gray-custom-100 flex flex-col justify-between relative'>
        <section className='h-full flex flex-col justify-between text-gray-custom-100'>
          <div className='container mx-auto px-4 md:px-8 pb-9 z-10 h-[85%] md:h-[80%] lg:h-[75%] flex flex-col justify-center items-center'>
            <div className='max-w-4xl mx-auto'>
              <h1 className='text-[34px] md:text-[30px] leading-[140%] md:leading-[80px] mb-2 text-center'>
                Ready to play? Check out our Initiatives.
              </h1>

              <div className='flex flex-col sm:flex-row gap-4 w-full items-center justify-center'>
                <CustomButton
                  href='/initiatives'
                  className='w-full sm:w-[200px] sm:max-w-[200px] text-center'
                >
                  Let's Go
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='pt-[100px] bg-gray-custom-100'>
        <EmailSignup />
      </div>
    </div>
  );
}

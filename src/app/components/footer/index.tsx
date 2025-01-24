"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <div className='flex flex-col'>
      <div className='w-full bg-gray-custom-100 pb-[132px]'>
        <Wrapper className=' flex flex-col gap-[30px] items-center justify-center'>
          <section className='flex flex-col gap-[15px]'>
            <p className='text-[32px] md:text-4xl font-medium text-center'>Stay up-to-date on all things Waye!</p>
            <p className='text-lg text-center'>Subscribe for meaningful updates & insights. No clutter.</p>
          </section>

          <section className='flex relative w-full max-w-[470px]'>
            {/* TODO: add email validation and focused state */}
            <input
              type='email'
              required
              placeholder='yourname@email.com'
              className='w-full rounded-[10px] p-4 min-h-[65px] border-2 border-gray-custom-200'
              onChange={handleSubmit}
            />
            <button className='bg-black text-white rounded-[10px] px-6 absolute right-2 top-2 bottom-2'>Subscribe</button>
          </section>
          {/* TODO: add error states */}

          {success && (
            <div className='w-full flex flex-col items-center gap-[10px] mx-auto'>
              <div className=''>
                <p className=''>Success! Thank you for subscribing :)</p>
              </div>
              <div className=''>
                <p>Oops! Something went wrong.</p>
              </div>
            </div>
          )}
        </Wrapper>
      </div>

      <div className='w-full bg-gray-custom-100 lg:-mb-[0px] -z-50 relative'>
        <Image
          src='/images/mountains_hero_footer.png'
          width={3200}
          height={400}
          className='h-[200px] lg:h-full w-full object-cover object-center'
          alt='mountains footer'
        />
      </div>

      <div className='bg-blue-custom-100  w-full text-gray-custom-100 pb-10 z-20'>
        <Wrapper className='py-[60px] flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-[30px] '>
          <Link href='/' className='text-[40px] font-medium'>
            waye
          </Link>
          <p className='pb-[10px] font-light md:font-medium'>Strengthening the human infrastructure of open source.</p>
          <Link href='mailto:waye.dev@gmail.com' className='pb-[22px] font-light md:font-medium flex items-center gap-3'>
            <Image src='/svgs/envelope.svg' width={20} height={20} alt='envelope' />
            waye.dev@gmail.com
          </Link>
        </Wrapper>

        <Wrapper>
          <div className='border-b border-b-gray-custom-100'></div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Footer;

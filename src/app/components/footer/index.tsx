"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";
import Jotform from "jotform";
import { checkFormValues, isValidEmail, isValidName } from "@/utils";
import { API_KEY, FORM_ID } from "@/config";
import { usePathname } from "next/navigation";

const Footer = () => {
  const jotform = new Jotform(API_KEY);
  const pathname = usePathname();
  const isSubscribePage = pathname === "/subscribe";
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [formValues, setFormValues] = React.useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  React.useEffect(() => {
    checkFormValues(formValues.name, formValues.email, setError);
  }, [formValues.name, formValues.email]);

  async function handleSubscribe() {
    const { name, email } = formValues;

    const getSubmissions = await jotform.form.getSubmissions(FORM_ID, { limit: 1000, orderby: "ENABLED" });
    const isEmailPresent = (getSubmissions.content as unknown as any[]).some((submission: any) => submission.answers["4"].answer === email);

    if (isEmailPresent) {
      setError("You are already subscribed");
      return;
    }

    try {
      setIsLoading(true);
      const submission = await jotform.form.addSubmissions(FORM_ID, [
        {
          "3_first": name,
          "4": email,
        },
      ]);

      setSuccess("Success! Thank you for subscribing :D");
      setFormValues({ name: "", email: "" });
      return submission;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setError("Oops! Something went wrong. Please try again.");
      } else {
        setError("Oops! Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
      setFormValues({ name: "", email: "" });
    }
  }

  const isDisabled = isLoading === true || !isValidName(formValues.name) || !isValidEmail(formValues.email);

  return (
    <div className='flex flex-col'>
      <div className='w-full bg-gray-custom-100 pb-[132px]'>
        <Wrapper className=' flex flex-col gap-[30px] items-center justify-center'>
          {!isSubscribePage && (
            <section className='flex flex-col gap-[15px]'>
              <p className='text-[32px] md:text-4xl font-medium text-center'>Stay up-to-date on all things Waye!</p>
              <p className='text-lg text-center'>Get valuable updates and insights—just the good stuff, no clutter.</p>
            </section>
          )}

          <section className='flex flex-col gap-[16px] w-full max-w-[470px]'>
            <input
              type='text'
              required
              placeholder='Name'
              className='w-full rounded-[10px] p-4 min-h-[65px] border-2 border-gray-custom-200'
              onChange={handleSubmit}
              value={formValues.name}
              name='name'
            />
            <input
              type='email'
              required
              placeholder='yourname@email.com'
              className='w-full rounded-[10px] p-4 min-h-[65px] border-2 border-gray-custom-200'
              onChange={handleSubmit}
              value={formValues.email}
              name='email'
            />
            <button
              className={`bg-black text-white rounded-[10px] px-6 py-4 ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isDisabled}
              onClick={handleSubscribe}
            >
              {isLoading ? "Submitting..." : "Subscribe"}
            </button>
          </section>

          {success ? (
            <div className='w-full flex flex-col items-center gap-[10px] mx-auto'>
              <p>`Success! Thank you for subscribing :)`</p>
            </div>
          ) : formValues.name || (formValues.email && error) ? (
            <div className=''>
              <p>{error}</p>
            </div>
          ) : null}
        </Wrapper>
      </div>

      <div className='w-full bg-gray-custom-100 lg:-mb-[0px] -z-50 relative'>
        <Image
          src='/images/Mountains_hero_footer.png'
          width={3200}
          height={400}
          className='h-[200px] lg:h-full lg:min-h-[350px] w-full object-cover object-center'
          alt='mountains footer'
        />
      </div>

      <div className='bg-blue-custom-100  w-full text-gray-custom-100 pb-10 z-20'>
        <Wrapper className='py-[60px] flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-[30px] '>
          <Link href='/' className='text-[40px] font-medium'>
            <Image src='/images/waye-text.png' width={94} height={34.31} alt='waye footer logo' />
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

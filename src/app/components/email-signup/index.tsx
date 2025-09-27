"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Wrapper from "@/app/components/wrapper";
import { checkFormValues, isValidEmail, isValidName } from "@/utils";

const EmailSignup = () => {
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

    try {
      setIsLoading(true);
      const response = await fetch("/subscribe-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess(data.message);
        setFormValues({ name: "", email: "" });
        setIsLoading(false);
        return;
      }

      if (response.status === 400) {
        const data = await response.json();

        if (data?.title?.toLowerCase().includes("member exists")) {
          setError("You are already subscribed to our newsletter");
          return;
        }
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred, please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  const isDisabled = isLoading === true || !isValidName(formValues.name) || !isValidEmail(formValues.email);

  return (
    <div className='w-full bg-gray-custom-100 pb-[132px]'>
      <Wrapper className=' flex flex-col gap-[30px] items-center justify-center'>
        {!isSubscribePage && (
          <section className='flex flex-col gap-[15px]'>
            <p className='text-[32px] md:text-4xl font-medium text-center'>Join our mailing list</p>
            <p className='text-lg text-center max-w-[604px]'>We have a lot brewing and can't wait to tell you all about it!</p>
          </section>
        )}

        <section className='flex flex-col gap-[16px] w-full max-w-[470px]'>
          <input
            type='text'
            required
            placeholder='Name / Nym'
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
            className={`bg-black text-white rounded-[10px] px-6 py-4 flex items-center justify-center ${isDisabled ? "cursor-not-allowed" : ""}`}
            disabled={isDisabled}
            onClick={handleSubscribe}
          >
            {isLoading ? (
              <>
                <div className='h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin' />
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </section>

        {success ? (
          <div className='w-full flex flex-col items-center gap-[10px] mx-auto'>
            <p>{success}</p>
          </div>
        ) : formValues.name || (formValues.email && error) ? (
          <p className='text-red-500'>{error}</p>
        ) : null}
      </Wrapper>
    </div>
  );
};

export default EmailSignup;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";
import { submitDonationData } from "./actions";
import { DONATION_DESCRIPTIONS, isValidEmail, PRESET_AMOUNTS } from "@/utils";
import { 
  trackDonationPageView, 
  trackDonationSubmit,
  trackDonationSuccess,
  trackDonationFailure 
} from "@/app/utils/analytics";

const getRandomDonationDescription = () => {
  const randomIndex = Math.floor(Math.random() * DONATION_DESCRIPTIONS.length);
  return DONATION_DESCRIPTIONS[randomIndex];
};

export default function DonatePage() {
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [amount, setAmount] = useState<number | "">(PRESET_AMOUNTS[0]);
  const [isTaxDeductible, setIsTaxDeductible] = useState<"yes" | "no">("no");
  const [isSubmitting, setIsSubmitting] = useState({ bitcoin: false, fiat: false });

  useEffect(() => {
    trackDonationPageView();
  }, []);

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    if (raw === "") {
      setAmount("");
      return;
    }
    setAmount(parseInt(raw, 10));
  };

  const canDonate = amount !== "" && (amount as number) > 0;

  const priorityCheck = () => {
    if (!canDonate) return false;

    // For tax deductible donations, require name and email
    if (isTaxDeductible === "yes" && (!donorName.trim() || !donorEmail.trim())) {
      setSubmitMessage("Name and email are required for tax deductible donations");
      return false;
    }

    if (!isValidEmail(donorEmail) && isTaxDeductible === "yes") {
      setSubmitMessage("A valid email address is required");
      return false;
    }

    return true;
  };

  const makeBitcoinDonation = async () => {
    if (!priorityCheck()) return;

    setIsSubmitting({ ...isSubmitting, bitcoin: true });
    setSubmitMessage("");
    trackDonationSubmit('bitcoin', amount as number);

    try {
      // First, create donation record with pending status
      const donationResult = await submitDonationData({
        name: donorName.trim(),
        email: donorEmail.trim(),
        amount: amount as number,
        taxDeductible: isTaxDeductible,
        paymentMethod: "bitcoin",
        status: "pending",
        action: "create",
      });

      if (!donationResult.success) {
        const errorMsg = `Error creating donation record: ${donationResult.error}`;
        setSubmitMessage(errorMsg);
        trackDonationFailure('bitcoin', errorMsg);
        return;
      }

      const donationId = donationResult.data.donationId;
      const randomDescription = getRandomDonationDescription();

      // Then create BTCPay invoice with donation ID in metadata
      const response = await fetch("/api/create-donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount as number,
          currency: "USD",
          checkoutDesc: randomDescription,
          donorName: donorName.trim(),
          donorEmail: donorEmail.trim(),
          taxDeductible: isTaxDeductible,
          donationId: donationId,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        trackDonationSuccess('bitcoin', amount as number);
        window.location.href = data.donationUrl;

        setSubmitMessage("Redirecting to Bitcoin payment page. The donation will be tracked automatically when payment is received.");
      } else {
        const errorMsg = `Error: ${data.error || "Failed to create donation"}`;
        setSubmitMessage(errorMsg);
        trackDonationFailure('bitcoin', errorMsg);
      }
    } catch (error) {
      const errorMsg = "An unexpected error occurred. Please try again.";
      setSubmitMessage(errorMsg);
      trackDonationFailure('bitcoin', errorMsg);
    } finally {
      setIsSubmitting({ ...isSubmitting, bitcoin: false });
    }
  };

  const makeStripeDonation = async () => {
    if (!priorityCheck()) return;

    setIsSubmitting({ ...isSubmitting, fiat: true });
    setSubmitMessage("");
    trackDonationSubmit('fiat', amount as number);

    try {
      // First, create donation record with pending status
      const donationResult = await submitDonationData({
        name: donorName.trim(),
        email: donorEmail.trim(),
        amount: amount as number,
        taxDeductible: isTaxDeductible,
        paymentMethod: "fiat",
        status: "pending",
        action: "create",
      });

      if (!donationResult.success) {
        const errorMsg = `Error creating donation record: ${donationResult.error}`;
        setSubmitMessage(errorMsg);
        trackDonationFailure('fiat', errorMsg);
        return;
      }

      const donationId = donationResult.data.donationId;

      // Then create Stripe checkout session with donation ID in metadata
      const response = await fetch("/api/create-stripe-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount as number,
          taxDeductible: isTaxDeductible,
          donorName: donorName.trim(),
          donorEmail: donorEmail.trim(),
          donationId: donationId,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (data.url) {
          trackDonationSuccess('fiat', amount as number);
          window.location.href = data.url;
        } else {
          const errorMsg = "Error: No checkout URL received";
          setSubmitMessage(errorMsg);
          trackDonationFailure('fiat', errorMsg);
        }
      } else {
        const errorMsg = `Error: ${data.error || "Failed to create checkout session"}`;
        setSubmitMessage(errorMsg);
        trackDonationFailure('fiat', errorMsg);
      }
    } catch (error) {
      console.log(error);
      const errorMsg = "An unexpected error occurred. Please try again.";
      setSubmitMessage(errorMsg);
      trackDonationFailure('fiat', errorMsg);
    } finally {
      setIsSubmitting({ ...isSubmitting, fiat: false });
    }
  };

  const selectedOptionTaxDeductible = Boolean(isTaxDeductible === "yes");

  return (
    <div className='text-gray-custom-100'>
      <section className='w-full bg-blue-custom-100 pt-[72px]'>
        <Image
          src='/images/Mountains_initiatives_2-p-2600.png'
          width={3200}
          height={360}
          alt='mountains footer'
          className='h-[200px] lg:h-full w-full object-cover object-center'
        />
      </section>

      <div className='bg-gray-custom-100 text-[#090909] py-12 md:py-20'>
        <Wrapper>
          <div className='max-w-3xl mx-auto space-y-8'>
          <div className='space-y-3'>
            <h2 className='text-2xl lg:text-4xl font-semibold'>Support Decentralized Technologies</h2>
            <p className='mt-1 text-[#090909]'>
              Help us to provide sustainable support for free and open-source contributors working on freedom tech and projects that help
              decentralized technologies flourish. <br />{" "}
              <span className='text-sm italic'>We are a 501(c)(3) public charity. All donations are tax deductible.</span>
            </p>
          </div>

          <div className='border-b border-gray-400 w-full'></div>

          <div className='space-y-5'>
            <div>
              <p className='mb-2 font-medium'>Do you want this donation to be tax deductible?</p>
              <div className='flex items-center gap-6 text-black'>
                <label className='inline-flex items-center gap-2'>
                  <input
                    type='radio'
                    name='tax_deductible'
                    checked={isTaxDeductible === "yes"}
                    onChange={() => setIsTaxDeductible("yes")}
                    className='h-4 w-4'
                  />
                  <span>Yes</span>
                </label>
                <label className='inline-flex items-center gap-2'>
                  <input
                    type='radio'
                    name='tax_deductible'
                    checked={isTaxDeductible === "no"}
                    onChange={() => setIsTaxDeductible("no")}
                    className='h-4 w-4'
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className='grid gap-4 md:grid-cols-2'>
              <div className='flex flex-col gap-2'>
                <label className='text-sm'>Name {!selectedOptionTaxDeductible && <span>(optional)</span>}</label>
                <input
                  type='text'
                  placeholder='Satoshi Nakamoto'
                  name='donorName'
                  value={donorName}
                  required={isTaxDeductible === "yes"}
                  onChange={(e) => setDonorName(e.target.value)}
                  className='w-full rounded-md border border-gray-300 bg-white/90 px-3 py-3 text-black placeholder-gray-500 focus:outline-none'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-sm'>
                  Email <span>{!selectedOptionTaxDeductible && <span>(optional)</span>}</span>
                </label>
                <input
                  type='email'
                  placeholder='satoshin@gmx.com'
                  name='donorEmail'
                  value={donorEmail}
                  required={isTaxDeductible === "yes"}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className='w-full rounded-md border border-gray-300 bg-white/90 px-3 py-3 text-black placeholder-gray-500 focus:outline-none'
                />
              </div>
            </div>

            <div>
              <p className='mb-3 font-medium'>How much would you like to donate?</p>
              <div className='flex flex-wrap gap-3'>
                {PRESET_AMOUNTS.map((value) => {
                  const active = amount !== "" && amount === value;
                  return (
                    <button
                      key={value}
                      type='button'
                      onClick={() => setAmount(value)}
                      className={`rounded-lg border px-4 py-2 text-black ${
                        active ? "border-orange-500 bg-orange-100/70" : "border-gray-300 bg-white"
                      }`}
                    >
                      ${value}
                    </button>
                  );
                })}
                <div className='relative flex-1'>
                  <span className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'>$</span>
                  <input
                    type='text'
                    inputMode='numeric'
                    pattern='[0-9]*'
                    value={amount === "" ? "" : String(amount)}
                    onChange={handleCustomAmountChange}
                    placeholder='Or enter custom amount'
                    className='w-full rounded-lg border border-gray-300 bg-white py-2 pl-7 pr-3 text-black placeholder-gray-500 focus:outline-none'
                  />
                </div>
              </div>
            </div>

            {/* Status message */}
            {submitMessage && (
              <div
                className={`rounded-lg p-3 text-center ${
                  submitMessage.includes("Error") || submitMessage.includes("required") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
              <button
                type='button'
                onClick={() => makeBitcoinDonation()}
                disabled={!canDonate || isSubmitting.bitcoin}
                className={`flex items-center justify-center gap-3 rounded-xl border px-6 py-5 text-lg font-semibold transition-colors ${
                  canDonate && !isSubmitting.bitcoin
                    ? "border-orange-500 bg-orange-100 text-orange-600 hover:bg-orange-200"
                    : "cursor-not-allowed border-gray-300 bg-gray-200 text-gray-500"
                }`}
              >
                {isSubmitting.bitcoin ? (
                  <div className='flex items-center gap-2'>
                    <div className='h-4 w-4 animate-spin rounded-full border-2 border-orange-600 border-t-transparent'></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <>
                    <span>₿</span>
                    <span>Donate with Bitcoin</span>
                  </>
                )}
              </button>

              <button
                type='button'
                onClick={() => makeStripeDonation()}
                disabled={!canDonate || isSubmitting.fiat}
                className={`flex items-center justify-center gap-3 rounded-xl border px-6 py-5 text-lg font-semibold transition-colors ${
                  canDonate && !isSubmitting.fiat
                    ? "border-blue-500 bg-blue-100 text-blue-600 hover:bg-blue-200"
                    : "cursor-not-allowed border-gray-300 bg-gray-200 text-gray-500"
                }`}
                title={!canDonate ? "Please enter a donation amount" : ""}
              >
                {isSubmitting.fiat ? (
                  <div className='flex items-center gap-2'>
                    <div className='h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent'></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <>
                    <span>
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M2.88539 8.84875C3.55805 6.13983 5.70602 4.04534 8.43056 3.44162L8.88443 3.34105C10.9366 2.88632 13.0634 2.88632 15.1156 3.34105L15.5694 3.44162C18.294 4.04534 20.442 6.13984 21.1146 8.84875C21.6285 10.9182 21.6285 13.0819 21.1146 15.1512C20.442 17.8602 18.294 19.9547 15.5694 20.5584L15.1156 20.659C13.0634 21.1137 10.9366 21.1137 8.88443 20.659L8.43056 20.5584C5.70601 19.9547 3.55805 17.8602 2.88539 15.1513C2.37154 13.0819 2.37154 10.9181 2.88539 8.84875Z'
                          stroke='currentColor'
                          strokeWidth='1.5'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M12.0002 7C12.3826 7 12.6926 7.29199 12.6926 7.65217V8.18573H12.7692C14.0567 8.18573 15 9.24015 15 10.4189C15 10.7791 14.69 11.0711 14.3077 11.0711C13.9253 11.0711 13.6154 10.7791 13.6154 10.4189C13.6154 9.85137 13.1811 9.49008 12.7692 9.49008H12.6926V11.5432L13.6273 11.8634C14.4767 12.1544 15 12.9457 15 13.7838C15 14.8506 14.1451 15.8142 12.9666 15.8142H12.6926V16.3478C12.6926 16.708 12.3826 17 12.0002 17C11.6179 17 11.3079 16.708 11.3079 16.3478V15.8142H11.2308C9.94328 15.8142 9 14.7598 9 13.581C9 13.2208 9.30996 12.9288 9.69231 12.9288C10.0747 12.9288 10.3846 13.2208 10.3846 13.581C10.3846 14.1486 10.8189 14.5098 11.2308 14.5098H11.3079V12.4568L10.3727 12.1365C9.5233 11.8455 9 11.0542 9 10.2161C9 9.14934 9.85491 8.18573 11.0334 8.18573H11.3079V7.65217C11.3079 7.29199 11.6179 7 12.0002 7ZM11.3079 9.49008H11.0334C10.7306 9.49008 10.3846 9.76055 10.3846 10.2161C10.3846 10.5645 10.6001 10.8265 10.8459 10.9107L11.3079 11.0689V9.49008ZM12.6926 12.9312V14.5098H12.9666C13.2694 14.5098 13.6154 14.2394 13.6154 13.7838C13.6154 13.4355 13.3999 13.1735 13.1541 13.0893L12.6926 12.9312Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                    <span>Donate with Fiat</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
      </div>
    </div>
  );
}


"use client";

import { isValidEmail } from "@/utils";
import React, { useState } from "react";
import Modal from "@/app/components/modal";
import { submitDonationData } from "./action";

type DonationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PRESET_AMOUNTS = [50, 100, 250, 500];

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [amount, setAmount] = useState<number | "">(PRESET_AMOUNTS[0]);
  const [isTaxDeductible, setIsTaxDeductible] = useState<"yes" | "no">("no");
  const [isSubmitting, setIsSubmitting] = useState({ bitcoin: false, fiat: false });

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    if (raw === "") {
      setAmount("");
      return;
    }
    setAmount(parseInt(raw, 10));
  };

  const canDonate = amount !== "" && (amount as number) > 0;

  const updateSpreadSheet = async (paymentMethod: "bitcoin" | "fiat") => {
    if (!canDonate) return;

    // For tax deductible donations, require name and email
    if (isTaxDeductible === "yes" && (!donorName.trim() || !donorEmail.trim())) {
      setSubmitMessage("Name and email are required for tax deductible donations");
      return;
    }

    if (!isValidEmail(donorEmail) && isTaxDeductible === "yes") {
      setSubmitMessage("A valid email address is required");
      return;
    }

    setIsSubmitting({ ...isSubmitting, [paymentMethod]: true });
    setSubmitMessage("");

    try {
      const result = await submitDonationData({
        name: donorName.trim(),
        email: donorEmail.trim(),
        amount: amount as number,
        taxDeductible: isTaxDeductible,
        paymentMethod,
      });

      if (result.success) {
        setSubmitMessage("Thank you! Your donation to decentralizing open-source is appreciated.");
        // Reset form after successful submission
        setTimeout(() => {
          setDonorName("");
          setDonorEmail("");
          setAmount(PRESET_AMOUNTS[0]);
          setIsTaxDeductible("no");
          setSubmitMessage("");
          onClose();
        }, 4000);
      } else {
        setSubmitMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setSubmitMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting({ ...isSubmitting, [paymentMethod]: false });
    }
  };

  const btcpayUrl = process.env.BTC_PAY_ENDPOINT ?? "";

  const params = {
    storeId: process.env.BTC_PAY_STORE_ID ?? "",
    price: amount as number,
    currency: "USD",
    checkoutDesc: "donation to waye",
    browserRedirect: "https://waye.dev/gracias",
  };

  const donationUrl = `${btcpayUrl}?${new URLSearchParams(params as unknown as Record<string, string>)}`;

  const makeBitcoinDonation = async () => {
    const queryParams = new URLSearchParams(params as unknown as Record<string, string>);

    try {
      const result = await fetch(`${btcpayUrl}?${queryParams.toString()}`, {
        method: "POST",
      });
      console.log(result);

      const data = await result.json();
      console.log(data.invoiceUrl);

      if (result.ok) {
        // window.open(data.invoiceUrl, "_blank");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setSubmitMessage("");
      }}
      ariaLabel='Donation form'
      className='bg-blue-custom-100 text-[#090909]'
    >
      <div className='space-y-8'>
        <div className='space-y-3'>
          <h2 className='text-2xl lg:text-4xl font-semibold'>Support Decentralized Technologies</h2>
          <p className='mt-1 text-[#090909]'>
            Help us to provide sustainable support for free and open-source contributors working on freedom tech and projects that help decentralized
            technologies flourish. We are a 501(c)(3) public charity. All donations are tax deductible.
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
              <label className='text-sm'>Name (optional)</label>
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
              <label className='text-sm'>Email (optional)</label>
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
                    className={`rounded-lg border px-4 py-2 text-black ${active ? "border-orange-500 bg-orange-100/70" : "border-gray-300 bg-white"}`}
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

          <div className='grid gap-4 md:grid-cols-1'>
            <button
              type='button'
              onClick={() => updateSpreadSheet("bitcoin")}
              disabled={!canDonate || isSubmitting.bitcoin}
              className={`flex items-center justify-center gap-3 rounded-2xl border-2 px-6 py-5 text-lg font-semibold transition-colors ${
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

            {/* to be implemented */}
            {/* <button
              type='button'
              onClick={() => updateSpreadSheet("fiat")}
              disabled={!canDonate || isSubmitting.fiat}
              className={`flex items-center justify-center gap-3 rounded-2xl border-2 px-6 py-5 text-lg font-semibold transition-colors ${
                canDonate && !isSubmitting.fiat
                  ? "border-gray-400 bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "cursor-not-allowed border-gray-300 bg-gray-200 text-gray-500"
              }`}
              title={!canDonate ? "Please enter a donation amount" : ""}
            >
              {isSubmitting.fiat ? (
                <div className='flex items-center gap-2'>
                  <div className='h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-transparent'></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <>
                  <span>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M22.8975 5.62487C22.7895 5.55748 22.6662 5.51868 22.5391 5.51212C22.412 5.50556 22.2853 5.53146 22.1709 5.58737C18.1462 7.55612 15.2719 6.63362 12.2334 5.6605C9.04594 4.63956 5.74125 3.58487 1.17563 5.81425C1.04806 5.87544 0.940404 5.97146 0.865091 6.09124C0.789777 6.21101 0.749878 6.34964 0.75 6.49112V17.7346C0.749982 17.8618 0.782343 17.987 0.844035 18.0983C0.905728 18.2096 0.994725 18.3033 1.10265 18.3708C1.21058 18.4382 1.33388 18.477 1.46096 18.4836C1.58804 18.4903 1.71471 18.4645 1.82906 18.4086C5.85375 16.4399 8.72812 17.3624 11.7712 18.3355C13.575 18.9121 15.4125 19.4999 17.49 19.4999C19.0922 19.4999 20.8397 19.1511 22.8253 18.1817C22.9514 18.1202 23.0577 18.0244 23.1322 17.9054C23.2066 17.7865 23.2461 17.649 23.2463 17.5086V6.26518C23.2474 6.1376 23.2159 6.01184 23.1549 5.8998C23.0939 5.78775 23.0053 5.69313 22.8975 5.62487ZM21.75 17.0314C17.9438 18.7349 15.1641 17.8461 12.2288 16.9077C10.425 16.3311 8.5875 15.7433 6.51 15.7433C5.05041 15.7504 3.60567 16.0368 2.25375 16.5871V6.96831C6.06 5.26487 8.83969 6.15362 11.775 7.09206C14.7103 8.0305 17.7319 8.99987 21.75 7.41456V17.0314ZM12 8.99987C11.4067 8.99987 10.8266 9.17582 10.3333 9.50546C9.83994 9.83511 9.45542 10.3036 9.22836 10.8518C9.0013 11.4 8.94189 12.0032 9.05764 12.5851C9.1734 13.1671 9.45912 13.7016 9.87868 14.1212C10.2982 14.5407 10.8328 14.8265 11.4147 14.9422C11.9967 15.058 12.5999 14.9986 13.1481 14.7715C13.6962 14.5444 14.1648 14.1599 14.4944 13.6666C14.8241 13.1732 15 12.5932 15 11.9999C15 11.2042 14.6839 10.4412 14.1213 9.87855C13.5587 9.31594 12.7956 8.99987 12 8.99987ZM12 13.4999C11.7033 13.4999 11.4133 13.4119 11.1666 13.2471C10.92 13.0823 10.7277 12.848 10.6142 12.5739C10.5006 12.2998 10.4709 11.9982 10.5288 11.7072C10.5867 11.4163 10.7296 11.149 10.9393 10.9392C11.1491 10.7294 11.4164 10.5866 11.7074 10.5287C11.9983 10.4708 12.2999 10.5005 12.574 10.6141C12.8481 10.7276 13.0824 10.9198 13.2472 11.1665C13.412 11.4132 13.5 11.7032 13.5 11.9999C13.5 12.3977 13.342 12.7792 13.0607 13.0605C12.7794 13.3418 12.3978 13.4999 12 13.4999ZM5.25 8.99987V13.4999C5.25 13.6988 5.17098 13.8896 5.03033 14.0302C4.88968 14.1709 4.69891 14.2499 4.5 14.2499C4.30109 14.2499 4.11032 14.1709 3.96967 14.0302C3.82902 13.8896 3.75 13.6988 3.75 13.4999V8.99987C3.75 8.80096 3.82902 8.61019 3.96967 8.46954C4.11032 8.32889 4.30109 8.24987 4.5 8.24987C4.69891 8.24987 4.88968 8.32889 5.03033 8.46954C5.17098 8.61019 5.25 8.80096 5.25 8.99987ZM18.75 14.9999V10.4999C18.75 10.301 18.829 10.1102 18.9697 9.96954C19.1103 9.82889 19.3011 9.74987 19.5 9.74987C19.6989 9.74987 19.8897 9.82889 20.0303 9.96954C20.171 10.1102 20.25 10.301 20.25 10.4999V14.9999C20.25 15.1988 20.171 15.3896 20.0303 15.5302C19.8897 15.6709 19.6989 15.7499 19.5 15.7499C19.3011 15.7499 19.1103 15.6709 18.9697 15.5302C18.829 15.3896 18.75 15.1988 18.75 14.9999Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                  <span>Donate with fiat</span>
                </>
              )}
            </button> */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DonationModal;

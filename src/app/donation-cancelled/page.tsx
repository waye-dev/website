"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";

const DonationCancelledPage = () => {
  return (
    <div className='min-h-screen bg-blue-custom-100 text-gray-custom-100 relative overflow-hidden'>
      <Wrapper>
        <div className='flex flex-col items-center justify-center min-h-screen py-16 px-4'>
          <div className='text-center max-w-2xl mx-auto space-y-8'>
            {/* Cancel Icon */}
            <div className='relative'>
              <div className='w-24 h-24 mx-auto bg-orange-500 rounded-full flex items-center justify-center'>
                <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={3}
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z'
                  />
                </svg>
              </div>
            </div>

            {/* Main Message */}
            <div className='space-y-4'>
              <h1 className='text-4xl md:text-6xl font-bold font-workSans text-white animate-fade-in'>Donation Cancelled</h1>
              <p className='text-xl md:text-2xl text-gray-300 font-workSans animate-fade-in-delay'>Your payment was not completed</p>
            </div>

            {/* Information Message */}
            <div className='bg-blue-custom-400 rounded-2xl p-8 md:p-10 shadow-2xl animate-slide-up'>
              <div className='space-y-6'>
                <div className='flex items-center justify-center mb-6'>
                  <Image src='/images/waye-temp-logo-p-500.png' alt='Waye Logo' width={120} height={31} className='h-8 w-auto' />
                </div>

                <div className='space-y-4 text-white'>
                  <p className='text-lg md:text-xl leading-relaxed'>No worries! Your donation was cancelled and no payment was processed.</p>

                  <p className='text-base md:text-lg'>
                    If you'd still like to support our mission of empowering open-source developers, you can try again or explore other ways to
                    contribute.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay'>
              <Link
                href='/'
                className='inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
              >
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

// Add the same animations from gracias page
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out;
  }
  
  .animate-fade-in-delay {
    animation: fadeIn 0.8s ease-out 0.2s both;
  }
  
  .animate-fade-in-delay-2 {
    animation: fadeIn 0.8s ease-out 0.6s both;
  }
  
  .animate-slide-up {
    animation: slideUp 0.8s ease-out 0.4s both;
  }
  
  .animate-slide-up-delay {
    animation: slideUp 0.8s ease-out 0.6s both;
  }
`;

export default function DonationCancelledPageWithStyles() {
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <DonationCancelledPage />
    </>
  );
}

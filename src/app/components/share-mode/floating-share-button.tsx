"use client";

import React, { useState, useEffect } from "react";
import { useShareMode } from "@/contexts/share-mode-context";

export const FloatingShareButton: React.FC = () => {
  const { isShareModeActive, toggleShareMode } = useShareMode();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Show button after page load and when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    // Show button after initial load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleClick = () => {
    toggleShareMode();

    // Provide haptic feedback if available
    if ("vibrate" in navigator) {
      navigator.vibrate(50);
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <button
        onClick={handleClick}
        className={`flex items-center justify-center py-2.5 px-3 rounded-full gap-2.5 shadow-md shadow-gray-700/50 ${
          isShareModeActive ? "bg-[#3D506B] text-white" : "bg-[#C4DEF9] text-gray-700"
        }`}
        aria-label={isShareModeActive ? "Exit Share Mode" : "Enter Share Mode"}
        title={isShareModeActive ? "Exit Share Mode" : "Enter Share Mode"}
      >
        {isShareModeActive === true && (
          <section className='flex flex-col items-start'>
            <span className='uppercase font-josefinSans text-[7.48px] leading-[100%]'>Turn on</span>
            <p className='uppercase font-josefinSans text-[11.28px] font-normal leading-[100%]'> Share</p>
            <p className='uppercase font-josefinSans text-[11.28px] font-normal leading-[100%]'> Mode</p>
          </section>
        )}

        <div className='bg-white h-9 w-9 rounded-full flex items-center justify-center'>
          <svg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.79 19.9692C13.9867 19.9692 13.3039 19.6881 12.7416 19.1258C12.1793 18.5635 11.8981 17.8807 11.8981 17.0774C11.8981 16.981 11.9222 16.756 11.9704 16.4026L5.19864 12.4504C4.94159 12.6914 4.64437 12.8803 4.30699 13.0172C3.96961 13.1541 3.60812 13.2222 3.22254 13.2216C2.41925 13.2216 1.73645 12.9404 1.17415 12.3781C0.611841 11.8158 0.330688 11.133 0.330688 10.3297C0.330688 9.52641 0.611841 8.84361 1.17415 8.2813C1.73645 7.719 2.41925 7.43785 3.22254 7.43785C3.60812 7.43785 3.96961 7.50629 4.30699 7.64317C4.64437 7.78005 4.94159 7.96866 5.19864 8.20901L11.9704 4.25681C11.9383 4.14434 11.9183 4.03606 11.9106 3.93195C11.9029 3.82785 11.8987 3.71121 11.8981 3.58204C11.8981 2.77875 12.1793 2.09595 12.7416 1.53364C13.3039 0.971338 13.9867 0.690186 14.79 0.690186C15.5933 0.690186 16.2761 0.971338 16.8384 1.53364C17.4007 2.09595 17.6818 2.77875 17.6818 3.58204C17.6818 4.38533 17.4007 5.06813 16.8384 5.63044C16.2761 6.19274 15.5933 6.47389 14.79 6.47389C14.4044 6.47389 14.0429 6.40545 13.7055 6.26857C13.3681 6.13169 13.0709 5.94308 12.8139 5.70273L6.0421 9.65493C6.07423 9.7674 6.09448 9.876 6.10283 9.98075C6.11118 10.0855 6.11504 10.2018 6.1144 10.3297C6.11376 10.4576 6.1099 10.5742 6.10283 10.6796C6.09576 10.785 6.07552 10.8933 6.0421 11.0045L12.8139 14.9567C13.0709 14.7157 13.3681 14.5271 13.7055 14.3908C14.0429 14.2546 14.4044 14.1861 14.79 14.1855C15.5933 14.1855 16.2761 14.4667 16.8384 15.029C17.4007 15.5913 17.6818 16.2741 17.6818 17.0774C17.6818 17.8807 17.4007 18.5635 16.8384 19.1258C16.2761 19.6881 15.5933 19.9692 14.79 19.9692Z'
              fill='#0F172A'
            />
          </svg>
        </div>

        {isShareModeActive === false && (
          <section className='flex flex-col items-start'>
            <span className='uppercase font-josefinSans text-[7.48px] leading-[100%]'>Turn on</span>
            <p className='uppercase font-josefinSans text-[11.28px] font-normal leading-[100%]'> Share</p>
            <p className='uppercase font-josefinSans text-[11.28px] font-normal leading-[100%]'> Mode</p>
          </section>
        )}
      </button>
    </div>
  );
};

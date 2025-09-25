"use client";

import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";
import React, { useEffect, useState } from "react";

const ThankYouPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti animation on page load
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-h-screen bg-blue-custom-100 text-gray-custom-100 relative overflow-hidden'>
      {/* Confetti Animation */}
      {showConfetti && <ConfettiAnimation />}

      <Wrapper>
        <div className='flex flex-col items-center justify-center min-h-screen py-16 px-4'>
          <div className='text-center max-w-2xl mx-auto space-y-8'>
            {/* Success Icon */}
            <div className='relative'>
              <div className='w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center animate-pulse'>
                <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
                </svg>
              </div>
            </div>

            {/* Main Message */}
            <div className='space-y-4'>
              <h1 className='text-4xl md:text-6xl font-bold font-workSans text-white animate-fade-in'>Thank You!</h1>
              <p className='text-xl md:text-2xl text-gray-300 font-workSans animate-fade-in-delay'>Your generous donation has been received</p>
            </div>

            {/* Appreciation Message */}
            <div className='bg-blue-custom-400 rounded-2xl p-8 md:p-10 shadow-2xl animate-slide-up'>
              <div className='space-y-6'>
                <div className='flex items-center justify-center mb-6'>
                  <Image src='/images/waye-temp-logo-p-500.png' alt='Waye Logo' width={120} height={31} className='h-8 w-auto' />
                </div>

                <p className='text-lg md:text-xl text-white leading-relaxed'>
                  Your support helps sustain open-source builders working on freedom tech and decentralized technologies. Together, we're building a
                  more open and permissionless future.
                </p>

                <div className='border-t border-gray-600 pt-6'>
                  <p className='text-gray-300 text-base md:text-lg'>
                    🚀 Your contribution directly supports developers building the tools for tomorrow's decentralized world.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-8'>
              <Link
                href='/'
                className='inline-flex items-center px-8 py-4 bg-blue-custom-200 text-black font-medium text-lg rounded-full hover:bg-blue-custom-500 transition-all duration-300 transform hover:scale-105 shadow-lg'
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

              <Link
                href='/initiatives'
                className='inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-300 font-medium text-lg rounded-full hover:bg-gray-300 hover:text-blue-custom-100 transition-all duration-300 transform hover:scale-105'
              >
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                  />
                </svg>
                Explore Initiatives
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

// Confetti Animation Component
const ConfettiAnimation = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      color: string;
      rotation: number;
      scale: number;
      velocityX: number;
      velocityY: number;
    }>
  >([]);

  useEffect(() => {
    const colors = ["#acd4f7", "#cce5fa", "#FBE5C4", "#28257e", "#1a1f36"];
    const particleCount = 150;

    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -10,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      scale: Math.random() * 0.8 + 0.4,
      velocityX: (Math.random() - 0.5) * 4,
      velocityY: Math.random() * 3 + 2,
    }));

    setParticles(newParticles);

    // Animate particles
    const animateParticles = () => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.velocityX,
            y: particle.y + particle.velocityY,
            rotation: particle.rotation + 5,
            velocityY: particle.velocityY + 0.1, // gravity
          }))
          .filter((particle) => particle.y < window.innerHeight + 50)
      );
    };

    const interval = setInterval(animateParticles, 16);

    // Clean up after 5 seconds
    const cleanup = setTimeout(() => {
      clearInterval(interval);
      setParticles([]);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(cleanup);
    };
  }, []);

  return (
    <div className='fixed inset-0 pointer-events-none z-50'>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className='absolute w-2 h-2 rounded-sm'
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg) scale(${particle.scale})`,
            transition: "none",
          }}
        />
      ))}
    </div>
  );
};

export default ThankYouPage;

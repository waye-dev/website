import React from 'react';
import TopJaw from './top-jaw';
import BottomJaw from './bottom-jaw';

export const Crocodile: React.FC = () => {
  return (
    <div className="flex items-center gap-0">
      {/* Mobile: 1350 * 1.25 = 1687.5px, Desktop: 1350 * 1.5 = 2025px */}
      <div className="w-[1687.5px] h-[393.75px] lg:w-[2025px] lg:h-[472.5px] bg-[#031C51]" />
      {/* Mobile: 400 * 1.25 = 500px, Desktop: 400 * 1.5 = 600px */}
      <div className="flex flex-col gap-0 items-start w-[500px] lg:w-[600px] ml-[-37.5px] lg:ml-[-45px]">
        {/* Mobile: -48 * 1.25 = -60px, Desktop: -48 * 1.5 = -72px */}
        <TopJaw className="block w-full h-auto ml-[-60px] lg:ml-[-72px] z-5" id="top-jaw" />
        {/* Mobile: -120 * 1.25 = -150px, Desktop: -120 * 1.5 = -180px */}
        <BottomJaw className="block -mt-[150px] lg:-mt-[180px] z-10" id="bottom-jaw" />
      </div>
    </div>
  );
};


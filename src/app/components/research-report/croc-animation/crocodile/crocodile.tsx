import React from 'react';
import TopJaw from './top-jaw';
import BottomJaw from './bottom-jaw';

export const Crocodile: React.FC = () => {
  return (
    <div className="flex items-center gap-0 scale-150 origin-center">
      <div className="w-[1350px] h-[315px] bg-[#031C51]" />
      <div className="flex flex-col gap-0 items-start w-[400px] ml-[-30px]">
        {/* <TopJaw className="block w-full h-auto ml-[-36.6px]" id="top-jaw" /> */}
        <TopJaw className="block w-full h-auto ml-[-48px] z-5" id="top-jaw" />
        <BottomJaw className="block -mt-[120px] z-10" id="bottom-jaw" />
      </div>
    </div>
  );
};


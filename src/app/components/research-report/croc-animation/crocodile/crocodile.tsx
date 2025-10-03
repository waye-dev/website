import React from 'react';
import TopJaw from './top-jaw';
import BottomJaw from './bottom-jaw';

export const Crocodile: React.FC = () => {
  return (
    <div className="flex items-center gap-0 scale-150">
      <div className="w-[1300px] h-[300px] bg-[#031C51]" />
      <div className="flex flex-col gap-0 items-start ml-[-10px]">
        <TopJaw className="block w-full h-auto w-[300px] translate-y-[10px]" id="top-jaw" />
        <BottomJaw className="block w-[300px] translate-y-[-30px] scale-125" id="bottom-jaw" />
      </div>
    </div>
  );
};


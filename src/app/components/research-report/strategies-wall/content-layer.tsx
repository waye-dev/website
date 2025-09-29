import React from 'react';

interface ContentLayerProps {
  children: React.ReactNode;
  zIndex: number;
}

export const ContentLayer: React.FC<ContentLayerProps> = ({
  children,
  zIndex
}) => {
  return (
    <div
      className="content-layer col-start-1 row-start-1 relative overflow-hidden"
      style={{
        backgroundColor: '#FBF7EE',
        zIndex,
        height: '100vh'
      }}
    >
        <div className="content-inner w-full max-w-[1000px] xl:max-w-[1250px] mx-auto px-8 my-[200px] shadow-t-lg">
          {children}
      </div>
    </div>
  );
};
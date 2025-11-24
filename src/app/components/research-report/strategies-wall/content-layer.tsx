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
        height: '100dvh',
        boxShadow: '0 -5px 5px rgba(0, 0, 0, 0.03)',
        pointerEvents: 'auto',
      }}
    >
        <div className="content-inner w-full max-w-[1000px] xl:max-w-[1250px] mx-auto px-4 md:px-8 my-[80px] md:my-[150px] pb-[100px] md:pb-0">
          {children}
        </div>
    </div>
  );
};

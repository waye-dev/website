export const getStageFromProgress = (progress: number) => {
  if (progress < 0.4) return 'new';
  if (progress < 0.8) return 'mid';
  return 'expert';
};

export const getAvatarPosition = (progress: number, containerWidth: number) => {
  const avatarWidth = 128;
  const startX = -avatarWidth / 2;
  const endX = containerWidth - avatarWidth / 2;

  const calculatedX = startX + (endX - startX) * progress;


  return calculatedX;
};

export const getAvatarVerticalPosition = (progress: number) => {
  
  const points = [
    { progress: 0.0, y: -50 },
    { progress: 0.2, y: -30 },
    { progress: 0.4, y: -110 },
    { progress: 0.5, y: -120 },
    { progress: 0.7, y: -30 },
    { progress: 1.0, y: -100 }
  ];
  
  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i];
    const next = points[i + 1];
    
    if (progress >= current.progress && progress <= next.progress) {
      const t = (progress - current.progress) / (next.progress - current.progress);
      return current.y + (next.y - current.y) * t;
    }
  }
  
  return progress <= 0 ? points[0].y : points[points.length - 1].y;
};

export const getAvatarColor = (stage: 'new' | 'mid' | 'expert') => {
  const colors = {
    new: '#C4DEF8', 
    mid: '#1B1F35',  
    expert: '#F9D483' 
  };
  return colors[stage];
};
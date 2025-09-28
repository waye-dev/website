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

export const getMobileAvatarTransform = (progress: number, stage: 'new' | 'mid' | 'expert', scrollDirection: 'up' | 'down' = 'down') => {
  // Avatar positions and opacities for stacked animation
  const result = { x: 0, opacity: 1 };

  if (stage === 'new') {
    if (progress < 0.4) {
      // 'new' is visible and in position
      result.x = 0;
      result.opacity = 1;
    } else {
      // 'new' moves left and exits
      const exitProgress = Math.min((progress - 0.4) / 0.1, 1); // Exit over 10% progress
      result.x = -200 * exitProgress;
      result.opacity = 1;
    }
  } else if (stage === 'mid') {
    if (progress < 0.4) {
      // 'mid' is behind 'new', invisible
      result.x = 0;
      result.opacity = 0;
    } else if (progress < 0.8) {
      // 'mid' is now visible as 'new' has moved out
      result.x = 0;
      result.opacity = 1;
    } else {
      // 'mid' moves left and exits
      const exitProgress = Math.min((progress - 0.8) / 0.1, 1);
      result.x = -200 * exitProgress;
      result.opacity = 1;
    }
  } else if (stage === 'expert') {
    if (progress < 0.8) {
      // 'expert' is behind others, invisible
      result.x = 0;
      result.opacity = 0;
    } else {
      // 'expert' is now visible as 'mid' has moved out
      result.x = 0;
      result.opacity = 1;
    }
  }

  return result;
};
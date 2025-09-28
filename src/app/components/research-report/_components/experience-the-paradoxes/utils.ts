export const getStageFromProgress = (progress: number) => {
  if (progress < 0.4) return 'new';
  if (progress < 0.8) return 'mid';
  return 'expert';
};

export const getAvatarPosition = (progress: number, containerWidth: number) => {
  const avatarWidth = 128;
  const startX = -avatarWidth / 2;
  const endX = containerWidth - avatarWidth / 2;
  
  return startX + (endX - startX) * progress;
};
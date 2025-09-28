// Simple utility functions
export const getStageFromProgress = (progress: number) => {
  if (progress < 0.33) return 'new';
  if (progress < 0.85) return 'mid';
  return 'expert';
};

export const getAvatarPosition = (progress: number, containerWidth: number) => {
  const avatarWidth = 128;
  const startX = -avatarWidth / 2;
  const midX = (containerWidth - avatarWidth) / 2;
  const endX = containerWidth - avatarWidth / 2;

  if (progress < 0.33) {
    const localProgress = progress / 0.33;
    return startX + (midX - startX) * localProgress;
  } else if (progress < 0.85) {
    const localProgress = (progress - 0.33) / (0.85 - 0.33);
    return midX + (endX - midX) * localProgress;
  } else {
    return endX;
  }
};
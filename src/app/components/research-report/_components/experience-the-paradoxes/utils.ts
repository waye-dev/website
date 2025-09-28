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

export const getAvatarVerticalPosition = (progress: number) => {
  // 5 ключевых точек для вертикального движения:
  // 0.0 -> y: 0 (базовая позиция)
  // 0.2 -> y: 20 (чуть ниже)
  // 0.4 -> y: -40 (сильно выше)
  // 0.7 -> y: 30 (ниже)
  // 1.0 -> y: -10 (чуть выше)
  
  const points = [
    { progress: 0.0, y: -50 },
    { progress: 0.2, y: -30 },
    { progress: 0.4, y: -110 },
    { progress: 0.5, y: -120 },
    { progress: 0.7, y: -30 },
    { progress: 1.0, y: -100 }
  ];
  
  // Находим две ближайшие точки для интерполяции
  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i];
    const next = points[i + 1];
    
    if (progress >= current.progress && progress <= next.progress) {
      // Линейная интерполяция между точками
      const t = (progress - current.progress) / (next.progress - current.progress);
      return current.y + (next.y - current.y) * t;
    }
  }
  
  // Если progress выходит за границы, возвращаем крайние значения
  return progress <= 0 ? points[0].y : points[points.length - 1].y;
};
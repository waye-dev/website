import { Position } from './types'
import { paradoxData } from './data'

export const getDataValue = (avatarId: string, rowIndex: number): number => {
  const item = paradoxData[rowIndex]
  if (!item) return 0

  switch (avatarId) {
    case 'new':
      return item.new
    case 'mid':
      return item.mid
    case 'senior':
      return item.senior
    default:
      return 0
  }
}

export const getPositionPercentage = (value: number): number => {
  return Math.max(0, Math.min(100, (value / 10) * 100))
}

export const createSmoothPath = (points: Position[]): string => {
  if (points.length < 2) return ''
  
  let path = `M ${points[0].x} ${points[0].y}`
  
  if (points.length === 2) {
    path += ` L ${points[1].x} ${points[1].y}`
  } else {
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)]
      const p1 = points[i]
      const p2 = points[i + 1]
      const p3 = points[Math.min(points.length - 1, i + 2)]
      
      const tension = 0.5
      const t1x = (p2.x - p0.x) * tension
      const t1y = (p2.y - p0.y) * tension
      const t2x = (p3.x - p1.x) * tension
      const t2y = (p3.y - p1.y) * tension
      
      const cp1x = p1.x + t1x / 3
      const cp1y = p1.y + t1y / 3
      const cp2x = p2.x - t2x / 3
      const cp2y = p2.y - t2y / 3
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
    }
  }
  
  return path
}

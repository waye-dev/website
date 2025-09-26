import { AuthorType } from "./quote-card"

export type CardColor = "white" | "cream" | "blue"

export const CARD_COLORS: Record<CardColor, string> = {
  white: "#FFFFFF",
  cream: "#F1ECD6", 
  blue: "#1B1F35"
}

export const getCardColor = (index: number, firstColor: CardColor) => {
  const colorOrder = Object.keys(CARD_COLORS) as CardColor[]
  const firstIndex = colorOrder.indexOf(firstColor)
  const colorIndex = (firstIndex + index) % colorOrder.length
  return CARD_COLORS[colorOrder[colorIndex]]
}

export const getTextColor = (backgroundColor: string) => {
  return backgroundColor === "#1B1F35" ? "#FFFFFF" : "#000000"
}

export const getCardAngle = (index: number, currentIndex: number, isMobile: boolean = false) => {
  if (index === currentIndex) return 0 
  
  const diff = index - currentIndex
  const angle = isMobile ? 5 : 3
  
  if (diff === 1 || diff === -2) return angle
  if (diff === -1 || diff === 2) return -angle
  
  return 0
}

export const getCardZIndex = (index: number, currentIndex: number) => {
  if (index === currentIndex) return 10
  return 5
}

export function getAuthorAvatar(authorType?: AuthorType): string {
  const type = authorType || "new"
  
  const avatarMap: Record<AuthorType, string> = {
    new: "/svgs/research/quotes/junior-avatar.svg",
    experienced: "/svgs/research/quotes/senior-avatar.svg", 
    mid: "/svgs/research/quotes/mid-avatar.svg"
  }
  
  return avatarMap[type]
}

export function getAuthorRole(authorType?: AuthorType): string {
  if (!authorType) return "Contributor"
  
  const roleMap: Record<AuthorType, string> = {
    new: "New contributor",
    experienced: "Experienced contributor",
    mid: "Mid-level contributor"
  }
  
  return roleMap[authorType]
}

export function getAuthorName(respondentNumber?: number): string {
  if (respondentNumber === undefined || respondentNumber === null) {
    return "Respondent #"
  }
  
  return `Respondent #${respondentNumber}`
}


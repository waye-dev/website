export interface ParadoxDataItem {
  Index: number
  Context: string
  Term1: string
  Term2: string
  new: number
  mid: number
  senior: number
}

export interface Avatar {
  id: string
  name: string
  color: string
}

export interface Position {
  x: number
  y: number
}

export interface LinePosition {
  y: number
  left: number
  width: number
}

export interface AvatarState {
  id: string
  currentPosition: Position
  originalPosition: Position
  trail: Position[]
  passedRows: Set<number>
}

export interface BottomPosition {
  y: number
  positions: Position[]
}

export interface ParadoxLineProps {
  item: ParadoxDataItem
  index: number
  avatars: Avatar[]
  avatarStates: AvatarState[]
}

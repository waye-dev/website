import { ParadoxDataItem, Avatar } from './types'

export const paradoxData: ParadoxDataItem[] = [
  { Index: 1, Context: 'Role', Term1: 'Contributor', Term2: 'Maintainer', new: 3.818181818, mid: 4.0625, senior: 5.857142857 },
  { Index: 2, Context: 'Role', Term1: 'User', Term2: 'Fan / Supporter', new: 4.272727273, mid: 6.125, senior: 3.428571429 },
  { Index: 3, Context: 'Role', Term1: 'Hacker', Term2: 'Professional', new: 6.363636364, mid: 5.6875, senior: 3.857142857 },
  { Index: 4, Context: 'Role', Term1: 'Learner', Term2: 'Teacher / coach', new: 3.818181818, mid: 5.75, senior: 5.714285714 },
  { Index: 5, Context: 'Contribution', Term1: 'Tangible', Term2: 'Intangible', new: 3.090909091, mid: 4.5, senior: 2.714285714 },
  { Index: 6, Context: 'Contribution', Term1: 'Code', Term2: 'Community', new: 2.636363636, mid: 4.9375, senior: 3.857142857 },
  { Index: 7, Context: 'Work process', Term1: 'Autonomous', Term2: 'Dependent', new: 2.090909091, mid: 2.5, senior: 3.857142857 },
  { Index: 8, Context: 'Work process', Term1: 'Sprint-oriented', Term2: 'Routine-oriented', new: 6.636363636, mid: 4.1875, senior: 5.571428571 },
  { Index: 9, Context: 'Work process', Term1: 'Short-term', Term2: 'Long-term', new: 9, mid: 6.3125, senior: 7.285714286 },
  { Index: 10, Context: 'Work process', Term1: 'Self-care', Term2: 'Care for others', new: 4.818181818, mid: 3.875, senior: 6.142857143 },
  { Index: 11, Context: 'Work process', Term1: 'Isolated', Term2: 'Collaborative', new: 5, mid: 2.625, senior: 3.857142857 },
  { Index: 12, Context: 'Work process', Term1: 'Sustainable', Term2: 'Unsustainable', new: 3.727272727, mid: 3.3125, senior: 4.571428571 },
  { Index: 13, Context: 'Work env', Term1: 'Transparent', Term2: 'Opaque', new: 2.818181818, mid: 3.3125, senior: 2.571428571 },
  { Index: 14, Context: 'Work env', Term1: 'Commons-oriented', Term2: 'Institutional', new: 2.454545455, mid: 1.25, senior: 1.571428571 },
  { Index: 15, Context: 'Work env', Term1: 'Not-for-profit / public goods', Term2: 'For-profit / commercial', new: 2.818181818, mid: 2.4375, senior: 4 },
  { Index: 16, Context: 'Work env', Term1: 'Open', Term2: 'Close', new: 1.818181818, mid: 3, senior: 3.142857143 },
  { Index: 17, Context: 'Work env', Term1: 'Productivity', Term2: 'For fun', new: 3.545454545, mid: 6, senior: 4.714285714 },
  { Index: 18, Context: 'Leadership / decision-making', Term1: 'Flat', Term2: 'Hierarchical', new: 4.090909091, mid: 4.125, senior: 3.285714286 },
  { Index: 19, Context: 'Leadership / decision-making', Term1: 'Top down', Term2: 'Bottom up', new: 5, mid: 5.125, senior: 5.857142857 },
  { Index: 20, Context: 'Leadership / decision-making', Term1: 'Centralized', Term2: 'Distributed', new: 6.454545455, mid: 5.25, senior: 6 },
]

export const avatars: Avatar[] = [
  { id: 'new', name: 'Junior', color: '#C4DEF8' },
  { id: 'mid', name: 'Mid', color: '#1B1F35' },
  { id: 'senior', name: 'Expert', color: '#F9D483' },
]

export const AVATAR_SIZE = 40
export const TERM_WIDTH = 250
export const LINE_WIDTH = 800

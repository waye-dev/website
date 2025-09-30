
export interface ExperienceCard {
  title: string;
  subtitle: string;
  image: string;
}

export interface ExperienceLevel {
  cards: ExperienceCard[];
  avatar: string;
  alt: string;
  label1: string;
  label2: string;
  labelOffset: { x: number; y: number };
}

export interface ExperienceParadoxesData {
  new: ExperienceLevel;
  mid: ExperienceLevel;
  expert: ExperienceLevel;
}

export type ExperienceStage = 'new' | 'mid' | 'expert';
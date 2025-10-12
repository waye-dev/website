export interface ShareableContent {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  description: string;
  section: string;
}

export interface ShareableContentData {
  [key: string]: ShareableContent;
}

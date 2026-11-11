export type TeacherRecipientKey = 'all' | 'gvcn' | 'toan' | 'van' | 'anh' | 'khtn' | 'sudia';

export interface ClassInformation {
  schoolName: string;
  className: string;
  homeroomTeacher: string;
  studentCount: number;
  schoolYear: string;
  photoCaption: string;
  photoSubCaption: string;
  customPhotoUrl?: string;
}

export interface TeacherLetterContent {
  key: TeacherRecipientKey;
  optionLabel: string;
  salutation: string;
  paragraphs: string[];
  quote: string;
}

export interface TrainStationMilestone {
  id: string;
  stationBadge: string;
  dateLabel: string;
  title: string;
  description: string;
  emoji: string;
  isHighlight?: boolean;
}

export interface StudentWishItem {
  id: string;
  groupBadge: string;
  author: string;
  message: string;
  bgClass: string;
  borderClass: string;
  badgeClass: string;
  authorColorClass: string;
  likes: number;
}


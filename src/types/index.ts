export type Lang = 'en' | 'es';

export type ProjectStatus = 'pilot' | 'past' | 'completed';

export interface LocalizedText {
  en: string;
  es: string;
}

export interface ProjectSectionItem {
  title: LocalizedText;
  body: LocalizedText;
}

export interface ProjectSection {
  title: LocalizedText;
  body?: LocalizedText;
  note?: LocalizedText;
  items?: ProjectSectionItem[];
  ordered?: boolean;
}

export interface Project {
  slug: 'coro' | 'sia' | 'votech';
  status: ProjectStatus;
  title: string;
  category: LocalizedText;
  image: string;
  tagline: LocalizedText;
  description: LocalizedText;
  tech: string[];
  sections: ProjectSection[];
}

export interface Certificate {
  id: string;
  name: LocalizedText;
  issuer: LocalizedText;
  issuerShort: string;
  issuedDate: string; // ISO
  expiresDate?: string;
  durationHours?: number;
  pdfPath: string;
  thumbnail?: string;
  credentialId?: string;
}

export interface SkillGroup {
  key:
    | 'skills.languages'
    | 'skills.frontend'
    | 'skills.backend'
    | 'skills.databases'
    | 'skills.tools';
  tags: string[];
}

import type { Certificate } from '../types';

export const certificates: Certificate[] = [
  {
    id: 'certiplus-full-stack-expert',
    name: {
      en: 'Full Stack Developer Certification Expert',
      es: 'Full Stack Developer Certification Expert',
    },
    issuer: {
      en: 'CERTIPLUS LLC',
      es: 'CERTIPLUS LLC',
    },
    issuerShort: 'CERTIPLUS',
    issuedDate: '2026-10-28',
    expiresDate: '2029-10-27',
    pdfPath: '/certificates/certiplus-fullstack-expert.pdf',
    // Set thumbnail to '/images/certificates/certiplus-thumb.png' when image file is added
    credentialId: 'CP-FSD-EXP-2026',
  },
  {
    id: 'talento-digital-fullstack-intermediate',
    name: {
      en: 'Full Stack Web Development — Intermediate Level',
      es: 'Desarrollo Web Full Stack — Nivel Intermedio',
    },
    issuer: {
      en: 'INDOTEL · IDB · CYMETRIA Group',
      es: 'INDOTEL · BID · CYMETRIA Group',
    },
    issuerShort: 'TALENTO DIGITAL',
    issuedDate: '2026-10-20',
    durationHours: 80,
    pdfPath: '/certificates/certificado-curso-talento-digital.pdf',
    // Set thumbnail to '/images/certificates/talento-digital-thumb.png' when image file is added
    credentialId: 'INDOTEL-BID-2026-80H',
  },
];

export function formatDate(iso: string, lang: 'en' | 'es'): string {
  return new Date(iso).toLocaleDateString(lang === 'es' ? 'es-DO' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

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
    thumbnail: '/images/certificates/certiplus-thumb.png',
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
    thumbnail: '/images/certificates/talento-digital-thumb.png',
    credentialId: 'INDOTEL-BID-2026-80H',
  },
  {
    id: 'efset-english-b1-intermediate',
    name: {
      en: 'EF SET English Certificate — B1 Intermediate (42/100)',
      es: 'Certificación de Inglés EF SET — B1 Intermedio (42/100)',
    },
    issuer: {
      en: 'EF Standard English Test (EF SET)',
      es: 'EF Standard English Test (EF SET)',
    },
    issuerShort: 'EF SET',
    issuedDate: '2026-11-09',
    pdfPath: '/certificates/efset-b1-intermediate.pdf',
    thumbnail: '/images/certificates/efset-b1-thumb.png',
    credentialId: 'XKk5dd',
    verificationUrl: 'https://cert.efset.org/es/XKk5dd',
    score: '42/100 · B1 Intermediate',
  },
];

export function formatDate(iso: string, lang: 'en' | 'es'): string {
  return new Date(iso).toLocaleDateString(lang === 'es' ? 'es-DO' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

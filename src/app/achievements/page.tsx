import AchievementsClient from './AchievementsClient';

export const metadata = {
  title: 'Achievements - Mohamad Dwi Rezky Desyafa',
  description:
    'A curated collection of certificates and badges I have earned throughout my professional and academic journey.',
};

const achievements = [
  {
    id: '1',
    certNumber: '196/EKS/HCLGA/VIII/25',
    date: 'July 2025',
    title: 'Backend Developer Internship',
    issuer: 'Parto.id — Affan Technology Indonesia',
    type: 'Professional',
    category: 'Backend',
    image:
      'http://localhost:3845/assets/03f6f63944087f53f8f97a547f0ee9364db6241b.png', // From Figma
  },
  {
    id: '2',
    certNumber: 'IBM/AI/2026',
    date: 'Aug 2026',
    title: 'AI Engineer Cohort',
    issuer: 'Pijak x IBM SkillsBuild',
    type: 'Academic',
    category: 'AI/ML',
    image:
      'http://localhost:3845/assets/03f6f63944087f53f8f97a547f0ee9364db6241b.png', // Temporary placeholder
  },
  {
    id: '3',
    certNumber: 'DTS/2023',
    date: 'Dec 2023',
    title: 'Baparekraf Digital Talent',
    issuer: 'Kemenparekraf RI',
    type: 'Program',
    category: 'Digital Skill',
    image:
      'http://localhost:3845/assets/03f6f63944087f53f8f97a547f0ee9364db6241b.png', // Temporary placeholder
  },
];

export default function AchievementsPage() {
  return <AchievementsClient achievements={achievements} />;
}

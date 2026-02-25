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
    description:
      'Successfully completed an intensive backend development internship focusing on building scalable RESTful APIs, optimizing database queries, and implementing resilient server architecture for high-traffic e-commerce systems.',
    skills: ['Go', 'PostgreSQL', 'Microservices', 'RESTful API', 'Docker'],
    verifyUrl: 'https://parto.id',
  },
  {
    id: '2',
    certNumber: 'AWS-CCP-2024-882',
    date: 'Aug 2026',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    type: 'Academic',
    category: 'Cloud',
    image:
      'http://localhost:3845/assets/03f6f63944087f53f8f97a547f0ee9364db6241b.png', // Temporary placeholder
    description:
      'Validates overall understanding of the AWS Cloud platform. Key skills include cloud concepts, security, technology, and billing and pricing.',
    skills: ['Cloud Computing', 'AWS Security', 'Infrastructure', 'Billing'],
    verifyUrl: 'https://aws.amazon.com/certification/',
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
    description:
      'Participated in the national digital talent scholarship program, demonstrating proficiency in modern web development frameworks and collaborative project execution.',
    skills: ['Web Development', 'React', 'Problem Solving', 'Teamwork'],
    verifyUrl: 'https://digitalent.kominfo.go.id/',
  },
];

export default function AchievementsPage() {
  return <AchievementsClient achievements={achievements} />;
}

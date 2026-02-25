import { getWritings } from '@/lib/mdx';
import WritingsClient from './WritingsClient';

export const metadata = {
  title: 'Writing - Mohamad Dwi Rezky Desyafa',
  description: 'Selected works and experiments.',
};

export default function WritingsPage() {
  const writings = getWritings();

  // Pass serialized data to client to avoid passing complex Date objects if any, though MDX metadata usually strings
  return <WritingsClient initialWritings={writings} />;
}

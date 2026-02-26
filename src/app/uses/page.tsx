import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Laptop, Monitor, Terminal } from 'lucide-react';
import UsesClient from './UsesClient';

export const metadata = {
  title: 'Uses - Mohamad Dwi Rezky Desyafa',
  description: 'The tools, software, and hardware I use daily.',
};

export default function UsesPage() {
  return <UsesClient />;
}

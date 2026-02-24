import Link from 'next/link';
import { ArrowLeft, Laptop, Monitor, Terminal } from 'lucide-react';

export const metadata = {
  title: 'Uses - Mohamad Dwi Rezky Desyafa',
  description: 'The tools, software, and hardware I use daily.',
};

const setup = [
  {
    category: 'Hardware',
    icon: <Monitor className='w-5 h-5 text-gray-500' />,
    items: [
      {
        name: 'Lenovo ThinkPad',
        description: 'My reliable daily driver for all coding and AI tasks.',
      },
      {
        name: 'Keychron K2 V2',
        description:
          'Mechanical keyboard with Brown switches for an optimal typing experience.',
      },
    ],
  },
  {
    category: 'Software & Editor',
    icon: <Terminal className='w-5 h-5 text-gray-500' />,
    items: [
      {
        name: 'VS Code',
        description:
          'My primary editor with a customized dark theme and strictly curated extensions.',
      },
      {
        name: 'Windows Subsystem for Linux (WSL2)',
        description:
          'For seamless Linux development within the Windows ecosystem.',
      },
      {
        name: 'Docker Desktop',
        description:
          'Essential for containerizing my backend applications and running local databases.',
      },
      {
        name: 'Google Chrome',
        description:
          'Main browser for development with critical React/Next.js dev tools.',
      },
    ],
  },
  {
    category: 'Design',
    icon: <Laptop className='w-5 h-5 text-gray-500' />,
    items: [
      {
        name: 'Figma',
        description:
          'Used for system architecture diagrams, basic UI wireframing, and inspecting design tokens.',
      },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className='max-w-3xl flex flex-col gap-10 pb-20'>
      <div className='flex flex-col gap-2'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors w-fit mb-4'
        >
          <ArrowLeft className='w-4 h-4' /> Back to Home
        </Link>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100'>
          Uses
        </h1>
        <p className='text-gray-600 dark:text-gray-400'>
          A documented list of all the hardware and software I use to build
          things.
        </p>
      </div>

      <div className='flex flex-col gap-12 mt-4'>
        {setup.map((group, index) => (
          <section key={index} className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2'>
              {group.icon}
              <h2 className='text-lg font-bold text-gray-900 dark:text-gray-100'>
                {group.category}
              </h2>
            </div>
            <ul className='flex flex-col gap-6 mt-2'>
              {group.items.map((item, idx) => (
                <li key={idx} className='flex flex-col gap-1 text-sm'>
                  <strong className='text-gray-900 dark:text-gray-200 font-medium text-base'>
                    {item.name}
                  </strong>
                  <span className='text-gray-600 dark:text-gray-400'>
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { MobileNav } from '@/components/sidebar/MobileNav';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

import { ThemeProvider } from '@/components/ThemeProvider';
import ClientCursor from '@/components/ui/ClientCursor';

export const metadata: Metadata = {
  title: 'Mohamad Dwi Rezky Desyafa - Portfolio',
  description: 'Backend & AI Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased text-gray-900 bg-white dark:bg-[#0a0a0a] dark:text-gray-100 flex min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ClientCursor />
          <MobileNav />
          <Sidebar />
          <main className='flex-1 md:ml-[250px] p-8 mt-16 md:mt-0 md:p-12 lg:p-16'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

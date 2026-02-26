import { getProjects, readMDXFile } from '@/lib/mdx';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ImageModal } from '@/components/ui/ImageModal';

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Custom MDX Components for rendering within markdown
const mdxComponents = {
  ImageGrid: ({ children }: { children: React.ReactNode }) => (
    <div className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 my-8 w-full'>
      {children}
    </div>
  ),
  ProjectImage: ({ src, caption }: { src?: string; caption: string }) => (
    <figure className='flex flex-col gap-2 m-0 w-full'>
      <div className='relative w-full aspect-video bg-gray-100 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-md overflow-hidden flex items-center justify-center'>
        {src ? (
          <ImageModal src={src} alt={caption} />
        ) : (
          <div className='w-full h-full' />
        )}
      </div>
      {caption && (
        <figcaption className='text-[9px] uppercase tracking-widest font-mono text-gray-400 dark:text-gray-500'>
          {caption}
        </figcaption>
      )}
    </figure>
  ),
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    'content',
    'projects',
    `${slug}.mdx`,
  );
  const { metadata, content } = readMDXFile(filePath);

  return (
    <article className='flex flex-col lg:flex-row gap-12 lg:gap-16 pb-20'>
      {/* Main Content */}
      <div className='flex-1 max-w-2xl flex flex-col gap-10'>
        <div className='flex flex-col gap-3'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-1.5 text-[11px] text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors w-fit mb-1'
          >
            <ArrowLeft className='w-3 h-3' /> Back to projects
          </Link>
          <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
            {metadata.title}
          </h1>
          <p className='text-sm font-light text-gray-500 dark:text-gray-400 leading-relaxed'>
            {metadata.description}
          </p>
        </div>

        <div className='prose prose-sm prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-img:rounded-md prose-a:text-blue-500 hover:prose-a:text-blue-600 font-light leading-relaxed mt-4'>
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </div>

      {/* Aside Info */}
      <aside className='w-full lg:w-48 xl:w-56 shrink-0 flex flex-col gap-8 lg:mt-6'>
        <div className='flex flex-col gap-6 items-end mt-4'>
          {/* Project Info */}
          <div className='flex flex-col gap-4 items-end w-full'>
            <h3 className='text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500'>
              Project Info
            </h3>

            <div className='flex flex-col gap-3 w-full text-right'>
              <div className='flex flex-col gap-1'>
                <span className='text-[11px] text-gray-500 dark:text-gray-400 font-light'>
                  Year
                </span>
                <span className='text-xs font-medium text-gray-900 dark:text-gray-100'>
                  {metadata.year || '2024'}
                </span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-[11px] text-gray-500 dark:text-gray-400 font-light'>
                  Category
                </span>
                <span className='text-xs font-medium text-gray-900 dark:text-gray-100'>
                  {metadata.category ||
                    (metadata.tags && metadata.tags[0]) ||
                    'Web App'}
                </span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-[11px] text-gray-500 dark:text-gray-400 font-light'>
                  Role
                </span>
                <span className='text-xs font-medium text-gray-900 dark:text-gray-100'>
                  {metadata.role || 'Fullstack Developer'}
                </span>
              </div>
            </div>
          </div>

          <div className='w-full border-t border-gray-100 dark:border-gray-800/60 my-2'></div>

          {/* Links */}
          {(metadata.liveUrl || metadata.githubUrl) && (
            <div className='flex flex-col gap-4 items-end w-full'>
              <h3 className='text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500'>
                Links
              </h3>
              <nav className='flex flex-col gap-2.5 text-xs text-right w-full lg:w-auto'>
                {metadata.liveUrl && (
                  <a
                    href={metadata.liveUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors'
                  >
                    <span>Live Preview</span>
                    <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 transition-opacity'>
                      ↗
                    </span>
                  </a>
                )}
                {metadata.githubUrl && (
                  <a
                    href={metadata.githubUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors'
                  >
                    <span>Source Code</span>
                    <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 transition-opacity'>
                      ↗
                    </span>
                  </a>
                )}
              </nav>
            </div>
          )}
        </div>
      </aside>
    </article>
  );
}

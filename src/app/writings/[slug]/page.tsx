import { getWritings, readMDXFile } from '@/lib/mdx';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const writings = getWritings();
  return writings.map((writing) => ({
    slug: writing.slug,
  }));
}

// Helper to format date
const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return date
      .toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
      .toUpperCase();
  } catch {
    return dateString;
  }
};

// Simple Regex to extract headings from Markdown for the ToC
function extractHeadings(markdown: string) {
  const lines = markdown.split('\n');
  const headings = [];
  for (const line of lines) {
    const match = line.match(/^(#{1,3})\s+(.*)/);
    if (match) {
      // Convert text to an anchor slug
      const slug = match[2]
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      headings.push({ level: match[1].length, text: match[2], slug });
    }
  }
  return headings;
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    'content',
    'writings',
    `${slug}.mdx`,
  );
  const { metadata, content } = readMDXFile(filePath);
  const headings = extractHeadings(content);

  // Helper to get text from nested MDX children
  const stringifyChildren = (children: any): string => {
    if (typeof children === 'string') return children;
    if (Array.isArray(children))
      return children.map(stringifyChildren).join('');
    if (children?.props?.children)
      return stringifyChildren(children.props.children);
    return '';
  };

  const createHeading = (Tag: 'h1' | 'h2' | 'h3') => {
    return function Heading({ children, ...props }: any) {
      const text = stringifyChildren(children);
      const slug = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      return (
        <Tag id={slug} className='scroll-mt-24' {...props}>
          {children}
        </Tag>
      );
    };
  };

  const mdxComponents = {
    h1: createHeading('h1'),
    h2: createHeading('h2'),
    h3: createHeading('h3'),
  };

  return (
    <div className='flex flex-col lg:flex-row gap-12 lg:gap-24 pb-20'>
      {/* Main Content */}
      <article className='flex-1 max-w-3xl flex flex-col'>
        <div className='flex flex-col gap-6 mb-12'>
          <Link
            href='/writings'
            className='inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors w-fit mb-4'
          >
            <ArrowLeft className='w-3 h-3' /> Back to Home
          </Link>
          <div className='flex flex-col gap-6 items-start'>
            {/* Date */}
            <time className='text-[10px] font-mono tracking-[0.1em] uppercase text-gray-400 dark:text-gray-500'>
              {formatDate(metadata.date || '')}
            </time>
            {/* Title */}
            <h1 className='text-3xl md:text-[42px] font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-[1.1] max-w-2xl'>
              {metadata.title}
            </h1>
            {/* Description / Lead */}
            {metadata.description && (
              <p className='text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl mt-2'>
                {metadata.description}
              </p>
            )}
          </div>
        </div>

        {/* Prose Content */}
        {/* Custom configured prose to match the clean Figma typography */}
        <div
          className='prose prose-zinc dark:prose-invert max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 dark:prose-headings:text-gray-100
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:mb-6
          prose-a:text-gray-900 dark:prose-a:text-gray-100 prose-a:underline-offset-4 prose-a:decoration-1 hover:prose-a:decoration-2
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-gray-50 dark:prose-pre:bg-[#111] prose-pre:border prose-pre:border-gray-100 dark:prose-pre:border-gray-800 prose-pre:text-sm prose-pre:p-6
          prose-blockquote:border-l-2 prose-blockquote:border-gray-200 dark:prose-blockquote:border-gray-700 prose-blockquote:pl-6 prose-blockquote:font-normal prose-blockquote:text-gray-500 dark:prose-blockquote:text-gray-400 prose-blockquote:italic'
        >
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>

      {/* Right Aside */}
      <aside className='w-full lg:w-48 xl:w-56 shrink-0 flex flex-col gap-10 lg:mt-[110px]'>
        {/* Table of Contents */}
        {headings.length > 0 && (
          <div className='flex flex-col gap-4'>
            <h3 className='text-[10px] font-mono tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500'>
              On This Page
            </h3>
            <div className='flex flex-col gap-3 text-[12px] text-gray-500 dark:text-gray-400 font-medium'>
              {headings.map((heading) => (
                <a
                  key={heading.slug}
                  href={`#${heading.slug}`}
                  className={`hover:text-gray-900 dark:hover:text-gray-100 transition-colors ${
                    heading.level === 1
                      ? 'font-semibold text-gray-700 dark:text-gray-300'
                      : ''
                  } ${heading.level > 2 ? 'pl-3' : ''}`}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Topics Section */}
        {metadata.tags && metadata.tags.length > 0 && (
          <div className='flex flex-col gap-4'>
            <h3 className='text-[10px] font-mono tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500'>
              Topics
            </h3>
            <div className='flex flex-col gap-3 text-[12px] text-gray-500 dark:text-gray-400 font-medium'>
              {metadata.tags.map((tag: string) => (
                <span
                  key={tag}
                  className='hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-[10px] font-mono tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500'>
            Share
          </h3>
          <div className='flex flex-col gap-3 text-[12px] text-gray-500 dark:text-gray-400 font-medium'>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(metadata.title)}`}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(metadata.title)}`}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

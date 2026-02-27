import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type ContentType = 'projects' | 'writings';

export interface MDXMetadata {
  title: string;
  date?: string;
  description?: string;
  tags?: string[];
  [key: string]: any;
}

export function getMDXFiles(dir: string) {
  try {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
  } catch (error) {
    return [];
  }
}

export function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(rawContent);
  return { metadata: data as MDXMetadata, content };
}

export function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

// Optimization: Get only metadata to save memory when listing files
export function getMDXMetadataOnly(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const rawContent = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(rawContent);
    const slug = path.basename(file, path.extname(file));
    return {
      metadata: data as MDXMetadata,
      slug,
    };
  });
}

export function getProjects() {
  return getMDXData(path.join(process.cwd(), 'content', 'projects'));
}

export function getWritings() {
  return getMDXData(path.join(process.cwd(), 'content', 'writings'));
}

export function getWritingsMetadata() {
  return getMDXMetadataOnly(path.join(process.cwd(), 'content', 'writings'));
}

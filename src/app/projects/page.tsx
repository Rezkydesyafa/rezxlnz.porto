import { getProjects } from '@/lib/mdx';
import ProjectsLayout from './ProjectsLayout';

export const metadata = {
  title: 'Projects - Mohamad Dwi Rezky Desyafa',
  description: 'A showcase of my software engineering and AI projects.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return <ProjectsLayout projects={projects} />;
}

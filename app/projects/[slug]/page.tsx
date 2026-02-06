import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { mockProjects } from '@/lib/mock-data'
import ProjectDetail from '@/components/ProjectDetail'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

async function getProject(slug: string) {
  // Use mock data directly (no database needed)
  return mockProjects.find(p => p.slug === slug) || null
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found - Prime Properties',
    }
  }

  const title = typeof project.title === 'object' ? project.title.en : project.title
  const description = typeof project.description === 'object' ? project.description.en : project.description

  return {
    title: `${title} - Prime Properties`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: project.images.length > 0 ? [project.images[0]] : [],
    },
  }
}

export async function generateStaticParams() {
  // Use mock data directly (no database needed)
  return mockProjects.map(p => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
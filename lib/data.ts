// Data fetching functions that work without database
import { mockProjects } from './mock-data'

export async function getFeaturedProjects() {
  // Return mock data directly
  return mockProjects.filter(p => p.featured).slice(0, 6)
}

export async function getAllProjects() {
  // Return all mock projects
  return mockProjects
}

export async function getProjectBySlug(slug: string) {
  // Find project by slug
  return mockProjects.find(p => p.slug === slug) || null
}

export async function getAllProjectSlugs() {
  // Return all slugs for static generation
  return mockProjects.map(p => ({ slug: p.slug }))
}
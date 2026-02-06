import { Suspense } from 'react'
import { mockProjects } from '@/lib/mock-data'
import ProjectCard from '@/components/ProjectCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Prime Properties',
  description: 'Explore our portfolio of exceptional residential developments featuring modern design, premium amenities, and prime locations.',
}

async function getAllProjects() {
  // Use mock data directly (no database needed)
  return mockProjects
}

async function AllProjectsSection() {
  const projects = await getAllProjects()
  
  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Projects Available</h3>
        <p className="text-gray-600">Check back soon for exciting new developments.</p>
      </div>
    )
  }

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </>
  )
}

export default async function ProjectsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive portfolio of residential developments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={
            <>
              {[...Array(9)].map((_, i) => (
                <div key={i} className="card animate-pulse">
                  <div className="h-64 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-16 bg-gray-200 rounded" />
                    <div className="flex justify-between">
                      <div className="h-4 bg-gray-200 rounded w-1/3" />
                      <div className="h-4 bg-gray-200 rounded w-1/4" />
                    </div>
                  </div>
                </div>
              ))}
            </>
          }>
            <AllProjectsSection />
          </Suspense>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help you discover the perfect property.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  )
}
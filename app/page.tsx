import { Suspense } from 'react'
import { mockProjects } from '@/lib/mock-data'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'

async function getFeaturedProjects() {
  // Use mock data directly (no database needed)
  return mockProjects.filter(p => p.featured).slice(0, 6)
}

// Server Component for fetching data
async function FeaturedProjectsSection() {
  const featuredProjects = await getFeaturedProjects()
  
  return (
    <>
      {featuredProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </>
  )
}

export default async function HomePage() {
  return (
    <div className="pt-16">
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most exceptional residential developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Suspense fallback={
              <>
                {[...Array(6)].map((_, i) => (
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
              <FeaturedProjectsSection />
            </Suspense>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/projects" 
              className="btn-secondary inline-flex items-center"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Building Tomorrow's Communities
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Prime Properties, we're committed to creating exceptional residential 
              experiences that blend innovative design with sustainable living.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">5000+</div>
                <div className="text-gray-600">Happy Residents</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
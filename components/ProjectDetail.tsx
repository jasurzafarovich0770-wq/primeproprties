'use client'

import ImageGallery from '@/components/ImageGallery'
import ContactForm from '@/components/ContactForm'
import { MapPin, Home, DollarSign, Calendar } from 'lucide-react'
import { formatPrice, formatArea } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'

interface ProjectDetailProps {
  project: any
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { t, language } = useLanguage()
  
  // Get translated content
  const getTitle = () => {
    if (typeof project.title === 'object' && project.title[language]) {
      return project.title[language]
    }
    return project.title
  }
  
  const getDescription = () => {
    if (typeof project.description === 'object' && project.description[language]) {
      return project.description[language]
    }
    return project.description
  }
  
  const getLocation = () => {
    if (typeof project.location === 'object' && project.location[language]) {
      return project.location[language]
    }
    return project.location
  }
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return t.completed
      case 'CONSTRUCTION':
        return t.construction
      case 'SOLD_OUT':
        return t.soldOut
      case 'PLANNING':
      default:
        return t.planning
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-100 text-green-800'
      case 'CONSTRUCTION':
        return 'bg-blue-100 text-blue-800'
      case 'SOLD_OUT':
        return 'bg-gray-100 text-gray-800'
      case 'PLANNING':
      default:
        return 'bg-yellow-100 text-yellow-800'
    }
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {getTitle()}
            </h1>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
              {getStatusLabel(project.status)}
            </span>
          </div>
          
          <div className="flex items-center text-gray-600 mb-6">
            <MapPin size={20} className="mr-2" />
            <span className="text-lg">{getLocation()}</span>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl">
            {getDescription()}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Image Gallery */}
            <section>
              <ImageGallery images={project.images} title={getTitle()} />
            </section>

            {/* Project Details */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.projectDetails}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <DollarSign className="text-gray-600 mr-3" size={24} />
                    <h3 className="text-lg font-semibold text-gray-900">{t.pricing}</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatPrice(project.pricePerM2)}{t.perM2}
                  </p>
                  <p className="text-gray-600 mt-1">{t.startingPrice}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Home className="text-gray-600 mr-3" size={24} />
                    <h3 className="text-lg font-semibold text-gray-900">{t.unitSizes}</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatArea(project.minArea)} - {formatArea(project.maxArea)}
                  </p>
                  <p className="text-gray-600 mt-1">{t.availableSizes}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-gray-600 mr-3" size={24} />
                    <h3 className="text-lg font-semibold text-gray-900">{t.location}</h3>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{getLocation()}</p>
                  <p className="text-gray-600 mt-1">{t.primeLocation}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-gray-600 mr-3" size={24} />
                    <h3 className="text-lg font-semibold text-gray-900">{t.status}</h3>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {getStatusLabel(project.status)}
                  </p>
                  <p className="text-gray-600 mt-1">{t.currentPhase}</p>
                </div>
              </div>
            </section>

            {/* Features & Amenities */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.featuresAmenities}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.buildingFeatures}</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>{t.feature1}</li>
                    <li>{t.feature2}</li>
                    <li>{t.feature3}</li>
                    <li>{t.feature4}</li>
                    <li>{t.feature5}</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.communityAmenities}</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>{t.amenity1}</li>
                    <li>{t.amenity2}</li>
                    <li>{t.amenity3}</li>
                    <li>{t.amenity4}</li>
                    <li>{t.amenity5}</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ContactForm 
                projectId={project.id} 
                projectTitle={getTitle()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
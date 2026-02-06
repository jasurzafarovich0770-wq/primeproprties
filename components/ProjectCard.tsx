'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { formatPrice, formatArea } from '@/lib/utils'
import { Project } from '@/types'
import { useLanguage } from '@/contexts/LanguageContext'

interface ProjectCardProps {
  project: Project | any // any for mock data with translations
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, language } = useLanguage()
  
  // Get translated content if available
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.images[0]}
            alt={getTitle()}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
              {getStatusLabel(project.status)}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors duration-200">
            {getTitle()}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{getLocation()}</span>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {getDescription()}
          </p>
          
          <div className="flex justify-between items-center text-sm">
            <div>
              <span className="text-gray-500">{t.from} </span>
              <span className="font-semibold">{formatPrice(project.pricePerM2)}{t.perM2}</span>
            </div>
            <div className="text-gray-500">
              {formatArea(project.minArea)} - {formatArea(project.maxArea)}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
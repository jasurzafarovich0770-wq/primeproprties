// @ts-ignore
import { PrismaClient } from '@prisma/client'

// @ts-ignore
const prisma = new PrismaClient()

enum ProjectStatus {
  PLANNING = 'PLANNING',
  CONSTRUCTION = 'CONSTRUCTION',
  COMPLETED = 'COMPLETED',
  SOLD_OUT = 'SOLD_OUT'
}

async function main() {
  // Clear existing data
  await prisma.lead.deleteMany()
  await prisma.project.deleteMany()

  // Seed projects
  const projects = [
    {
      title: 'Skyline Residences',
      slug: 'skyline-residences',
      description: 'Modern luxury apartments with panoramic city views. Premium finishes and world-class amenities in the heart of downtown.',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
      ],
      pricePerM2: 3500,
      location: 'Downtown District',
      minArea: 45.0,
      maxArea: 120.0,
      status: ProjectStatus.CONSTRUCTION,
      featured: true,
    },
    {
      title: 'Garden Heights',
      slug: 'garden-heights',
      description: 'Eco-friendly residential complex surrounded by green spaces. Perfect blend of nature and modern living.',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop'
      ],
      pricePerM2: 2800,
      location: 'Green Valley',
      minArea: 60.0,
      maxArea: 150.0,
      status: ProjectStatus.PLANNING,
      featured: true,
    },
    {
      title: 'Marina Bay Towers',
      slug: 'marina-bay-towers',
      description: 'Waterfront luxury living with private marina access. Exclusive amenities and breathtaking ocean views.',
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop'
      ],
      pricePerM2: 4200,
      location: 'Marina District',
      minArea: 80.0,
      maxArea: 200.0,
      status: ProjectStatus.COMPLETED,
      featured: false,
    },
    {
      title: 'Urban Lofts',
      slug: 'urban-lofts',
      description: 'Contemporary loft-style apartments in a converted historic building. Industrial charm meets modern comfort.',
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop'
      ],
      pricePerM2: 3200,
      location: 'Arts Quarter',
      minArea: 55.0,
      maxArea: 110.0,
      status: ProjectStatus.CONSTRUCTION,
      featured: false,
    },
    {
      title: 'Sunset Villas',
      slug: 'sunset-villas',
      description: 'Exclusive villa community with private gardens and premium amenities. Luxury living redefined.',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
      ],
      pricePerM2: 5000,
      location: 'Hillside Estate',
      minArea: 150.0,
      maxArea: 300.0,
      status: ProjectStatus.PLANNING,
      featured: true,
    },
    {
      title: 'Central Plaza',
      slug: 'central-plaza',
      description: 'Mixed-use development combining residential, retail, and office spaces in the city center.',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop'
      ],
      pricePerM2: 3800,
      location: 'City Center',
      minArea: 40.0,
      maxArea: 95.0,
      status: ProjectStatus.CONSTRUCTION,
      featured: false,
    },
    {
      title: 'Emerald Heights',
      slug: 'emerald-heights',
      description: 'Luxury high-rise apartments with stunning mountain views and premium amenities. Modern architecture meets comfort.',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
      ],
      pricePerM2: 4500,
      location: 'Mountain View District',
      minArea: 70.0,
      maxArea: 180.0,
      status: ProjectStatus.PLANNING,
      featured: true,
    },
    {
      title: 'Riverside Commons',
      slug: 'riverside-commons',
      description: 'Waterfront residential community with private beach access and recreational facilities. Perfect for family living.',
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
      ],
      pricePerM2: 3900,
      location: 'Riverside Park',
      minArea: 85.0,
      maxArea: 220.0,
      status: ProjectStatus.CONSTRUCTION,
      featured: true,
    },
    {
      title: 'Tech Hub Residences',
      slug: 'tech-hub-residences',
      description: 'Smart apartments designed for modern professionals. Integrated technology and co-working spaces.',
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
      ],
      pricePerM2: 4100,
      location: 'Innovation District',
      minArea: 50.0,
      maxArea: 130.0,
      status: ProjectStatus.COMPLETED,
      featured: false,
    },
    {
      title: 'Golden Gate Towers',
      slug: 'golden-gate-towers',
      description: 'Iconic twin towers offering panoramic city views. Luxury living with world-class amenities and services.',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop'
      ],
      pricePerM2: 5200,
      location: 'Financial District',
      minArea: 90.0,
      maxArea: 250.0,
      status: ProjectStatus.CONSTRUCTION,
      featured: true,
    }
  ]

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    if (typeof process !== 'undefined') {
      process.exit(1)
    }
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
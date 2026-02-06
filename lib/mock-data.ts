// Mock data for development without database
export const mockProjects = [
  {
    id: '1',
    title: {
      uz: 'Skyline Turar-joy Majmuasi',
      ru: 'Жилой Комплекс Skyline',
      en: 'Skyline Residences'
    },
    slug: 'skyline-residences',
    description: {
      uz: 'Shahar panoramasiga ega zamonaviy hashamatli kvartiralar. Premium tugatish va jahon darajasidagi qulayliklar shahar markazida.',
      ru: 'Современные роскошные апартаменты с панорамным видом на город. Премиальная отделка и удобства мирового класса в центре города.',
      en: 'Modern luxury apartments with panoramic city views. Premium finishes and world-class amenities in the heart of downtown.'
    },
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
    ],
    pricePerM2: 3500,
    location: {
      uz: 'Shahar Markazi',
      ru: 'Центр Города',
      en: 'Downtown District'
    },
    minArea: 45.0,
    maxArea: 120.0,
    status: 'CONSTRUCTION' as const,
    featured: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: {
      uz: 'Bog\'li Balandliklar',
      ru: 'Садовые Высоты',
      en: 'Garden Heights'
    },
    slug: 'garden-heights',
    description: {
      uz: 'Yashil maydonlar bilan o\'ralgan ekologik toza turar-joy majmuasi. Tabiat va zamonaviy hayotning mukammal uyg\'unligi.',
      ru: 'Экологически чистый жилой комплекс в окружении зеленых зон. Идеальное сочетание природы и современной жизни.',
      en: 'Eco-friendly residential complex surrounded by green spaces. Perfect blend of nature and modern living.'
    },
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop'
    ],
    pricePerM2: 2800,
    location: {
      uz: 'Yashil Vodiy',
      ru: 'Зеленая Долина',
      en: 'Green Valley'
    },
    minArea: 60.0,
    maxArea: 150.0,
    status: 'PLANNING' as const,
    featured: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: '3',
    title: {
      uz: 'Marina Ko\'rfazi Minoralari',
      ru: 'Башни Марина Бэй',
      en: 'Marina Bay Towers'
    },
    slug: 'marina-bay-towers',
    description: {
      uz: 'Shaxsiy marina kirishiga ega qirg\'oq bo\'yidagi hashamatli turar-joy. Eksklyuziv qulayliklar va hayratlanarli okean manzaralari.',
      ru: 'Роскошная жизнь на набережной с частным доступом к марине. Эксклюзивные удобства и захватывающие виды на океан.',
      en: 'Waterfront luxury living with private marina access. Exclusive amenities and breathtaking ocean views.'
    },
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop'
    ],
    pricePerM2: 4200,
    location: {
      uz: 'Marina Tumani',
      ru: 'Район Марины',
      en: 'Marina District'
    },
    minArea: 80.0,
    maxArea: 200.0,
    status: 'COMPLETED' as const,
    featured: false,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
  },
  {
    id: '4',
    title: {
      uz: 'Urban Loftlar',
      ru: 'Городские Лофты',
      en: 'Urban Lofts'
    },
    slug: 'urban-lofts',
    description: {
      uz: 'Qayta qurilgan tarixiy binodagi zamonaviy loft uslubidagi kvartiralar. Sanoat jozibasi va zamonaviy qulaylik.',
      ru: 'Современные квартиры в стиле лофт в реконструированном историческом здании. Индустриальный шарм и современный комфорт.',
      en: 'Contemporary loft-style apartments in a converted historic building. Industrial charm meets modern comfort.'
    },
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop'
    ],
    pricePerM2: 3200,
    location: {
      uz: 'San\'at Mahallasi',
      ru: 'Квартал Искусств',
      en: 'Arts Quarter'
    },
    minArea: 55.0,
    maxArea: 110.0,
    status: 'CONSTRUCTION' as const,
    featured: false,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: '5',
    title: {
      uz: 'Zumrad Balandliklari',
      ru: 'Изумрудные Высоты',
      en: 'Emerald Heights'
    },
    slug: 'emerald-heights',
    description: {
      uz: 'Tog\' manzarali hashamatli baland qavatli kvartiralar va premium qulayliklar. Zamonaviy arxitektura va qulaylik.',
      ru: 'Роскошные высотные апартаменты с потрясающим видом на горы и премиальными удобствами. Современная архитектура и комфорт.',
      en: 'Luxury high-rise apartments with stunning mountain views and premium amenities. Modern architecture meets comfort.'
    },
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
    ],
    pricePerM2: 4500,
    location: {
      uz: 'Tog\' Manzarasi Tumani',
      ru: 'Район Горный Вид',
      en: 'Mountain View District'
    },
    minArea: 70.0,
    maxArea: 180.0,
    status: 'PLANNING' as const,
    featured: true,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25'),
  },
  {
    id: '6',
    title: {
      uz: 'Daryo Bo\'yi Majmuasi',
      ru: 'Прибрежный Комплекс',
      en: 'Riverside Commons'
    },
    slug: 'riverside-commons',
    description: {
      uz: 'Shaxsiy plyaj kirishi va dam olish inshootlari bilan suv bo\'yidagi turar-joy majmuasi. Oilaviy hayot uchun mukammal.',
      ru: 'Прибрежный жилой комплекс с частным пляжем и рекреационными объектами. Идеально для семейной жизни.',
      en: 'Waterfront residential community with private beach access and recreational facilities. Perfect for family living.'
    },
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    ],
    pricePerM2: 3900,
    location: {
      uz: 'Daryo Bo\'yi Park',
      ru: 'Прибрежный Парк',
      en: 'Riverside Park'
    },
    minArea: 85.0,
    maxArea: 220.0,
    status: 'CONSTRUCTION' as const,
    featured: true,
    createdAt: new Date('2024-01-30'),
    updatedAt: new Date('2024-01-30'),
  },
  {
    id: '7',
    title: {
      uz: 'Tech Hub Turar-joylari',
      ru: 'Резиденции Tech Hub',
      en: 'Tech Hub Residences'
    },
    slug: 'tech-hub-residences',
    description: {
      uz: 'Zamonaviy professionallar uchun mo\'ljallangan aqlli kvartiralar. Integratsiyalangan texnologiya va kovorking zonalari.',
      ru: 'Умные апартаменты для современных профессионалов. Интегрированные технологии и коворкинг-пространства.',
      en: 'Smart apartments designed for modern professionals. Integrated technology and co-working spaces.'
    },
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
    ],
    pricePerM2: 4100,
    location: {
      uz: 'Innovatsiya Tumani',
      ru: 'Инновационный Район',
      en: 'Innovation District'
    },
    minArea: 50.0,
    maxArea: 130.0,
    status: 'COMPLETED' as const,
    featured: false,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
  },
  {
    id: '8',
    title: {
      uz: 'Oltin Darvoza Minoralari',
      ru: 'Башни Золотые Ворота',
      en: 'Golden Gate Towers'
    },
    slug: 'golden-gate-towers',
    description: {
      uz: 'Shahar panoramasini taqdim etuvchi ramziy egizak minoralar. Jahon darajasidagi qulayliklar va xizmatlar bilan hashamatli hayot.',
      ru: 'Знаковые башни-близнецы с панорамным видом на город. Роскошная жизнь с удобствами и услугами мирового класса.',
      en: 'Iconic twin towers offering panoramic city views. Luxury living with world-class amenities and services.'
    },
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop'
    ],
    pricePerM2: 5200,
    location: {
      uz: 'Moliya Tumani',
      ru: 'Финансовый Район',
      en: 'Financial District'
    },
    minArea: 90.0,
    maxArea: 250.0,
    status: 'CONSTRUCTION' as const,
    featured: true,
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-02-05'),
  },
  {
    id: '9',
    title: {
      uz: 'Quyosh Botishi Villalari',
      ru: 'Виллы Закат',
      en: 'Sunset Villas'
    },
    slug: 'sunset-villas',
    description: {
      uz: 'Shaxsiy bog\'lar va premium qulayliklar bilan eksklyuziv villa majmuasi. Hashamatli hayot qayta ta\'riflangan.',
      ru: 'Эксклюзивный комплекс вилл с частными садами и премиальными удобствами. Роскошная жизнь переосмыслена.',
      en: 'Exclusive villa community with private gardens and premium amenities. Luxury living redefined.'
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
    ],
    pricePerM2: 5000,
    location: {
      uz: 'Tepalik Mulki',
      ru: 'Холмистое Поместье',
      en: 'Hillside Estate'
    },
    minArea: 150.0,
    maxArea: 300.0,
    status: 'PLANNING' as const,
    featured: true,
    createdAt: new Date('2024-02-03'),
    updatedAt: new Date('2024-02-03'),
  },
  {
    id: '10',
    title: {
      uz: 'Markaziy Plaza',
      ru: 'Центральная Площадь',
      en: 'Central Plaza'
    },
    slug: 'central-plaza',
    description: {
      uz: 'Shahar markazida turar-joy, savdo va ofis maydonlarini birlashtiruvchi aralash foydalanishli rivojlanish.',
      ru: 'Многофункциональный комплекс, объединяющий жилые, торговые и офисные помещения в центре города.',
      en: 'Mixed-use development combining residential, retail, and office spaces in the city center.'
    },
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop'
    ],
    pricePerM2: 3800,
    location: {
      uz: 'Shahar Markazi',
      ru: 'Центр Города',
      en: 'City Center'
    },
    minArea: 40.0,
    maxArea: 95.0,
    status: 'CONSTRUCTION' as const,
    featured: false,
    createdAt: new Date('2024-01-28'),
    updatedAt: new Date('2024-01-28'),
  },
]
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
    fullDescription: {
      uz: 'Skyline Turar-joy Majmuasi - bu zamonaviy arxitektura va hashamatli hayotning mukammal uyg\'unligi. 35 qavatli ikki minora shahar markazida joylashgan bo\'lib, har bir kvartiradan ajoyib panorama manzarasi ochiladi. Bino eng so\'nggi texnologiyalar va yuqori sifatli materiallar bilan qurilgan.',
      ru: 'Skyline Residences - это идеальное сочетание современной архитектуры и роскошной жизни. Две 35-этажные башни расположены в центре города, откуда открывается потрясающий панорамный вид из каждой квартиры. Здание построено с использованием новейших технологий и высококачественных материалов.',
      en: 'Skyline Residences is the perfect blend of contemporary architecture and luxury living. Two 35-story towers located in the city center, offering stunning panoramic views from every apartment. The building is constructed using the latest technologies and high-quality materials.'
    },
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop'
    ],
    pricePerM2: 3500,
    location: {
      uz: 'Shahar Markazi, Toshkent',
      ru: 'Центр Города, Ташкент',
      en: 'Downtown District, Tashkent'
    },
    address: {
      uz: 'Amir Temur ko\'chasi 15, Toshkent',
      ru: 'улица Амира Темура 15, Ташкент',
      en: '15 Amir Temur Street, Tashkent'
    },
    minArea: 45.0,
    maxArea: 120.0,
    totalUnits: 280,
    floors: 35,
    completionDate: {
      uz: '2025-yil 4-chorak',
      ru: '4 квартал 2025 года',
      en: 'Q4 2025'
    },
    status: 'CONSTRUCTION' as const,
    featured: true,
    bedrooms: [1, 2, 3, 4],
    bathrooms: [1, 2, 3],
    parkingSpaces: 350,
    features: {
      uz: [
        'Zamonaviy arxitektura dizayni',
        'Yuqori sifatli qurilish materiallari',
        'Energiya tejovchi tizimlar',
        'Smart home texnologiyasi',
        'Premium tugatish ishlari',
        'Baland shiftlar (3.2m)',
        'Frantsuz derazalari',
        'Marmar va parket pollar',
        'Italyan oshxona jihozlari',
        'Konditsioner tizimi'
      ],
      ru: [
        'Современный архитектурный дизайн',
        'Высококачественные строительные материалы',
        'Энергоэффективные системы',
        'Технология умного дома',
        'Премиальная отделка',
        'Высокие потолки (3.2м)',
        'Французские окна',
        'Мраморные и паркетные полы',
        'Итальянская кухонная мебель',
        'Система кондиционирования'
      ],
      en: [
        'Modern architectural design',
        'High-quality construction materials',
        'Energy-efficient systems',
        'Smart home technology',
        'Premium finishes',
        'High ceilings (3.2m)',
        'French windows',
        'Marble and parquet floors',
        'Italian kitchen furniture',
        'Air conditioning system'
      ]
    },
    amenities: {
      uz: [
        '24/7 xavfsizlik va konsyerj',
        'Fitnes markazi va spa (500m²)',
        'Tom ustida bog\' va dam olish zonasi',
        'Yer osti parkovkasi (2 qavat)',
        'Bolalar o\'yin maydoni',
        'Basseyn (25m)',
        'Sauna va hammom',
        'Konferens-zal',
        'Restoran va kafe',
        'Supermarket',
        'Yuqori tezlikli liftlar (6 ta)',
        'Velosiped parkovkasi',
        'Qo\'riqlanadigan hudud',
        'Video kuzatuv tizimi'
      ],
      ru: [
        'Охрана и консьерж 24/7',
        'Фитнес-центр и спа (500м²)',
        'Сад и зона отдыха на крыше',
        'Подземная парковка (2 этажа)',
        'Детская игровая площадка',
        'Бассейн (25м)',
        'Сауна и хаммам',
        'Конференц-зал',
        'Ресторан и кафе',
        'Супермаркет',
        'Скоростные лифты (6 шт)',
        'Велопарковка',
        'Охраняемая территория',
        'Система видеонаблюдения'
      ],
      en: [
        '24/7 security and concierge',
        'Fitness center and spa (500m²)',
        'Rooftop garden and lounge',
        'Underground parking (2 levels)',
        'Children\'s playground',
        'Swimming pool (25m)',
        'Sauna and hammam',
        'Conference hall',
        'Restaurant and cafe',
        'Supermarket',
        'High-speed elevators (6 units)',
        'Bicycle parking',
        'Gated community',
        'Video surveillance system'
      ]
    },
    nearbyPlaces: {
      uz: [
        'Metro stantsiyasi - 300m',
        'Maktab - 500m',
        'Bog\'cha - 400m',
        'Shifoxona - 1km',
        'Savdo markazi - 200m',
        'Park - 600m',
        'Bank - 150m',
        'Restoran va kafe - 100m'
      ],
      ru: [
        'Станция метро - 300м',
        'Школа - 500м',
        'Детский сад - 400м',
        'Больница - 1км',
        'Торговый центр - 200м',
        'Парк - 600м',
        'Банк - 150м',
        'Рестораны и кафе - 100м'
      ],
      en: [
        'Metro station - 300m',
        'School - 500m',
        'Kindergarten - 400m',
        'Hospital - 1km',
        'Shopping mall - 200m',
        'Park - 600m',
        'Bank - 150m',
        'Restaurants and cafes - 100m'
      ]
    },
    paymentPlans: {
      uz: [
        'Boshlang\'ich to\'lov - 30%',
        'Qurilish davomida - 40%',
        'Topshirishda - 30%',
        'Ipoteka imkoniyati mavjud',
        'Chegirmalar: Naqd to\'lov - 5%'
      ],
      ru: [
        'Первоначальный взнос - 30%',
        'Во время строительства - 40%',
        'При сдаче - 30%',
        'Возможна ипотека',
        'Скидки: Наличный расчет - 5%'
      ],
      en: [
        'Initial payment - 30%',
        'During construction - 40%',
        'Upon delivery - 30%',
        'Mortgage available',
        'Discounts: Cash payment - 5%'
      ]
    },
    developer: {
      uz: 'Prime Properties Development',
      ru: 'Prime Properties Development',
      en: 'Prime Properties Development'
    },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  // Qolgan loyihalar ham shunday formatda...
  // Qisqartirish uchun faqat asosiy ma'lumotlarni qoldiraman
  {
    id: '2',
    title: {
      uz: 'Bog\'li Balandliklar',
      ru: 'Садовые Высоты',
      en: 'Garden Heights'
    },
    slug: 'garden-heights',
    description: {
      uz: 'Yashil maydonlar bilan o\'ralgan ekologik toza turar-joy majmuasi.',
      ru: 'Экологически чистый жилой комплекс в окружении зеленых зон.',
      en: 'Eco-friendly residential complex surrounded by green spaces.'
    },
    fullDescription: {
      uz: 'Bog\'li Balandliklar - tabiat va zamonaviy hayotning mukammal uyg\'unligi. 15 qavatli 4 ta bino yashil park zonasida joylashgan.',
      ru: 'Садовые Высоты - идеальное сочетание природы и современной жизни. 4 здания по 15 этажей расположены в зеленой парковой зоне.',
      en: 'Garden Heights - perfect blend of nature and modern living. 4 buildings of 15 floors located in a green park zone.'
    },
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop'
    ],
    pricePerM2: 2800,
    location: {
      uz: 'Yashil Vodiy, Toshkent',
      ru: 'Зеленая Долина, Ташкент',
      en: 'Green Valley, Tashkent'
    },
    address: {
      uz: 'Bog\'ishamol ko\'chasi 25, Toshkent',
      ru: 'улица Богишамол 25, Ташкент',
      en: '25 Bogishamol Street, Tashkent'
    },
    minArea: 60.0,
    maxArea: 150.0,
    totalUnits: 320,
    floors: 15,
    completionDate: {
      uz: '2026-yil 2-chorak',
      ru: '2 квартал 2026 года',
      en: 'Q2 2026'
    },
    status: 'PLANNING' as const,
    featured: true,
    bedrooms: [2, 3, 4],
    bathrooms: [2, 3],
    parkingSpaces: 400,
    features: {
      uz: ['Ekologik toza materiallar', 'Quyosh panellari', 'Yomg\'ir suvi yig\'ish tizimi', 'Yashil tomlar', 'Energiya tejovchi oynalar'],
      ru: ['Экологичные материалы', 'Солнечные панели', 'Система сбора дождевой воды', 'Зеленые крыши', 'Энергосберегающие окна'],
      en: ['Eco-friendly materials', 'Solar panels', 'Rainwater harvesting', 'Green roofs', 'Energy-efficient windows']
    },
    amenities: {
      uz: ['Yashil park (2 gektar)', 'Velosiped yo\'llari', 'Piyodalar zonasi', 'Bolalar maydoni', 'Sport maydonchalari'],
      ru: ['Зеленый парк (2 гектара)', 'Велодорожки', 'Пешеходная зона', 'Детская площадка', 'Спортплощадки'],
      en: ['Green park (2 hectares)', 'Bicycle paths', 'Pedestrian zone', 'Children\'s playground', 'Sports grounds']
    },
    nearbyPlaces: {
      uz: ['Metro - 800m', 'Maktab - 300m', 'Park - 100m'],
      ru: ['Метро - 800м', 'Школа - 300м', 'Парк - 100м'],
      en: ['Metro - 800m', 'School - 300m', 'Park - 100m']
    },
    paymentPlans: {
      uz: ['Boshlang\'ich - 25%', 'Qurilish - 50%', 'Topshirish - 25%'],
      ru: ['Первоначальный - 25%', 'Строительство - 50%', 'Сдача - 25%'],
      en: ['Initial - 25%', 'Construction - 50%', 'Delivery - 25%']
    },
    developer: {
      uz: 'Prime Properties Development',
      ru: 'Prime Properties Development',
      en: 'Prime Properties Development'
    },
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  // Qolgan 8 ta loyiha ham shu formatda bo'ladi
  // Qisqartirish uchun asosiy ma'lumotlarni qoldiraman
]

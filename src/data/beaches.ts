export interface Beach {
  id: number;
  name: string;
  island: string;
  latitude: number;
  longitude: number;
  description: string;
  blueFlag: boolean;
  accessible: boolean;
  imageUrl?: string;
  weather?: {
    temperature?: number;
    windSpeed?: number;
    waveHeight?: number;
  };
  capacity?: {
    current: number;
    percentage: number;
    lastUpdate: string;
  };
}

export const beaches: Beach[] = [
  {
    id: 1,
    name: "Playa del Inglés",
    island: "Gran Canaria",
    latitude: 27.7406,
    longitude: -15.576,
    description: "Playa turística muy popular con arena dorada.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.b5OsfLVemZA3-567V6jRFQHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Playa de Las Canteras",
    island: "Gran Canaria",
    latitude: 28.1399,
    longitude: -15.4315,
    description: "Ubicada en la capital, ideal para surf y paseos.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.RDH88_l_XxzZFdypV4iXTAHaEK&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "Playa de Amadores",
    island: "Gran Canaria",
    latitude: 27.7897,
    longitude: -15.7168,
    description: "Cala tranquila con arena clara y ambiente familiar.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.gvHWFCdMQX1Rd-TBFBFgPwHaEK&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "Playa de las Teresitas",
    island: "Tenerife",
    latitude: 28.5123,
    longitude: -16.187,
    description: "Famosa por su arena traída del Sáhara y aguas calmadas.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.uZOdMWfvH0hlDpqr7bjnRwHaE-&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    name: "Playa El Médano",
    island: "Tenerife",
    latitude: 28.0498,
    longitude: -16.5363,
    description: "Spot popular para practicar windsurf y kitesurf.",
    blueFlag: false,
    accessible: false,
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.Lh8vnZM2hQEjGrVRialfwwHaE7&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    name: "Playa de Las Alcaravaneras",
    island: "Gran Canaria",
    latitude: 28.1297,
    longitude: -15.4297,
    description:
      "Playa urbana protegida ideal para deportes náuticos y actividades familiares.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.pEMQn2Z-1vxYg29ZXiEYggHaEw&pid=Api&P=0&h=180",
  },
  {
    id: 7,
    name: "Playa de La Laja",
    island: "Gran Canaria",
    latitude: 28.0497,
    longitude: -15.4197,
    description:
      "Playa urbana de arena negra con 1200 metros de longitud, ideal para surf y deportes acuáticos. Cuenta con servicios de socorrismo y zonas deportivas.",
    blueFlag: false,
    accessible: true,
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.9Luwl1wwv217A1aR3Bxp9AHaCv&pid=Api&P=0&h=180",
    weather: {
      temperature: 22,
      windSpeed: 15,
      waveHeight: 1.5,
    },
  },
  {
    id: 8,
    name: "Playa de Maspalomas",
    island: "Gran Canaria",
    latitude: 27.7366,
    longitude: -15.5866,
    description:
      "Icónica playa con dunas doradas y faro histórico. Reserva natural con 6 km de costa que combina dunas, playa y oasis.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTki3SKbayBj4QyDHubnv5QUrUL55pLunoaow&s",
    weather: {
      temperature: 24,
      windSpeed: 12,
      waveHeight: 0.8,
    },
  },
  {
    id: 9,
    name: "Playa de Melenara",
    island: "Gran Canaria",
    latitude: 27.9925,
    longitude: -15.3731,
    description:
      "Playa familiar con arena dorada y aguas tranquilas, rodeada de restaurantes de pescado fresco y mariscos. Perfecta para el baño y deportes acuáticos.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "data:image/jpeg;base64,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",
    weather: {
      temperature: 23,
      windSpeed: 14,
      waveHeight: 0.8,
    },
  },
  {
    id: 10,
    name: "Playa de Mogán",
    island: "Gran Canaria",
    latitude: 27.8834,
    longitude: -15.7644,
    description:
      "Playa resguardada en un pintoresco pueblo pesquero, conocida como la 'Pequeña Venecia' por sus canales. Ideal para familias con aguas tranquilas y servicios completos.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.grancanaria.com/turismo/fileadmin/_processed_/4/a/csm_playa-mogan-gran-canaria_7d3cc7c76f.jpg",
    weather: {
      temperature: 23,
      windSpeed: 10,
      waveHeight: 0.5,
    },
    capacity: {
      current: 300,
      percentage: 45,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 11,
    name: "Playa de Anfi del Mar",
    island: "Gran Canaria",
    latitude: 27.7697,
    longitude: -15.6647,
    description:
      "Arena blanca y aguas turquesas, muy cuidada. Un paraíso artificial con servicios de primera clase y ambiente familiar.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/95/de/anfi-del-mar.jpg?w=1200&h=-1&s=1",
    weather: {
      temperature: 23,
      windSpeed: 12,
      waveHeight: 0.4,
    },
    capacity: {
      current: 400,
      percentage: 50,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 12,
    name: "Playa de Agaete",
    island: "Gran Canaria",
    latitude: 28.0997,
    longitude: -15.7027,
    description:
      "Piscinas naturales y playa de piedras, con gran ambiente local. Conocida por sus aguas cristalinas y la vista al Teide en días despejados.",
    blueFlag: false,
    accessible: true,
    imageUrl:
      "https://www.grancanaria.com/turismo/fileadmin/_processed_/4/7/csm_piscinas-naturales-agaete_d56b1b0115.jpg",
    weather: {
      temperature: 22,
      windSpeed: 15,
      waveHeight: 0.6,
    },
    capacity: {
      current: 200,
      percentage: 40,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 13,
    name: "Playa de Puerto Rico",
    island: "Gran Canaria",
    latitude: 27.7833,
    longitude: -15.7087,
    description:
      "Turística, con muchas actividades acuáticas. Resguardada y perfecta para el baño familiar, con servicios completos y gran oferta de deportes náuticos.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.grancanaria.com/turismo/fileadmin/_processed_/4/b/csm_playa-puerto-rico-gran-canaria_d24b233e31.jpg",
    weather: {
      temperature: 23,
      windSpeed: 10,
      waveHeight: 0.3,
    },
    capacity: {
      current: 600,
      percentage: 55,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 14,
    name: "Playa de Güigüí",
    island: "Gran Canaria",
    latitude: 27.9089,
    longitude: -15.8282,
    description:
      "Salvaje y aislada, solo accesible a pie o en barco. Una joya natural con arena negra y aguas cristalinas, rodeada de impresionantes acantilados.",
    blueFlag: false,
    accessible: false,
    imageUrl:
      "https://www.grancanaria.com/turismo/fileadmin/_processed_/4/f/csm_guigui-gran-canaria_88c7898889.jpg",
    weather: {
      temperature: 22,
      windSpeed: 18,
      waveHeight: 1.2,
    },
    capacity: {
      current: 50,
      percentage: 25,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 15,
    name: "Playa de Sotavento",
    island: "Fuerteventura",
    latitude: 28.1539,
    longitude: -14.2297,
    description:
      "Meca del windsurf y kitesurf, con condiciones perfectas para deportes acuáticos. Kilómetros de arena dorada y aguas cristalinas.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.fuerteventuraoasispark.com/wp-content/uploads/2022/03/playa-sotavento-fuerteventura.jpg",
    weather: {
      temperature: 24,
      windSpeed: 25,
      waveHeight: 1.5,
    },
    capacity: {
      current: 400,
      percentage: 35,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 16,
    name: "Playa de Cofete",
    island: "Fuerteventura",
    latitude: 28.1297,
    longitude: -14.3936,
    description:
      "Salvaje, aislada y espectacular. Una playa virgen de 12km con impresionantes acantilados como telón de fondo.",
    blueFlag: false,
    accessible: false,
    imageUrl:
      "https://www.fuerteventuraoasispark.com/wp-content/uploads/2022/03/playa-de-cofete-fuerteventura.jpg",
    weather: {
      temperature: 23,
      windSpeed: 20,
      waveHeight: 2.0,
    },
    capacity: {
      current: 100,
      percentage: 20,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 17,
    name: "Playa de Esquinzo-Butihondo",
    island: "Fuerteventura",
    latitude: 28.0747,
    longitude: -14.3276,
    description:
      "Tranquila, ideal para relajarse. Extensa playa de arena dorada perfecta para desconectar.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.fuerteventuraoasispark.com/wp-content/uploads/2022/03/playa-esquinzo-butihondo.jpg",
    weather: {
      temperature: 23,
      windSpeed: 15,
      waveHeight: 0.8,
    },
    capacity: {
      current: 300,
      percentage: 40,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 18,
    name: "Playa del Matorral",
    island: "Fuerteventura",
    latitude: 28.0516,
    longitude: -14.3316,
    description:
      "Muy accesible, junto al faro. Playa urbana con todos los servicios y perfecta para familias.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.fuerteventuraoasispark.com/wp-content/uploads/2022/03/playa-matorral-morro-jable.jpg",
    weather: {
      temperature: 24,
      windSpeed: 12,
      waveHeight: 0.5,
    },
    capacity: {
      current: 500,
      percentage: 45,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 19,
    name: "Playa de La Concha",
    island: "Fuerteventura",
    latitude: 28.6806,
    longitude: -14.0147,
    description:
      "Aguas tranquilas, perfecta para familias. Una bahía natural protegida con aguas cristalinas.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.fuerteventuraoasispark.com/wp-content/uploads/2022/03/playa-concha-el-cotillo.jpg",
    weather: {
      temperature: 23,
      windSpeed: 10,
      waveHeight: 0.3,
    },
    capacity: {
      current: 250,
      percentage: 50,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 20,
    name: "Grandes Playas de Corralejo",
    island: "Fuerteventura",
    latitude: 28.7297,
    longitude: -13.8647,
    description:
      "Arena fina y dunas, dentro del Parque Natural. Kilómetros de playas vírgenes con vistas a Lanzarote.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.fuerteventuraoasispark.com/wp-content/uploads/2022/03/grandes-playas-corralejo.jpg",
    weather: {
      temperature: 24,
      windSpeed: 18,
      waveHeight: 1.0,
    },
    capacity: {
      current: 600,
      percentage: 30,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 21,
    name: "Playa del Castillo",
    island: "Fuerteventura",
    latitude: 28.3797,
    longitude: -13.8647,
    description:
      "Familiar, con buena infraestructura. Playa protegida ideal para el baño y deportes acuáticos.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.fuerteventuraoasispark.com/wp-content/uploads/2022/03/playa-caleta-de-fuste.jpg",
    weather: {
      temperature: 23,
      windSpeed: 14,
      waveHeight: 0.6,
    },
    capacity: {
      current: 400,
      percentage: 55,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 22,
    name: "Playa de Ajuy",
    island: "Fuerteventura",
    latitude: 28.4006,
    longitude: -14.1577,
    description:
      "Arena volcánica negra y vistas impresionantes. Famosa por sus cuevas y acantilados.",
    blueFlag: false,
    accessible: false,
    imageUrl:
      "https://www.fuerteventuraoasispark.com/wp-content/uploads/2022/03/playa-ajuy-fuerteventura.jpg",
    weather: {
      temperature: 22,
      windSpeed: 22,
      waveHeight: 1.8,
    },
    capacity: {
      current: 150,
      percentage: 25,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 23,
    name: "Playa de Los Cristianos",
    island: "Tenerife",
    latitude: 28.0486,
    longitude: -16.7149,
    description:
      "Muy popular entre turistas, con aguas tranquilas y excelentes servicios. Perfecta para familias y actividades acuáticas.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.webtenerife.com/wp-content/uploads/2019/11/playa-los-cristianos-1.jpg",
    weather: {
      temperature: 24,
      windSpeed: 12,
      waveHeight: 0.5,
    },
    capacity: {
      current: 600,
      percentage: 65,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 24,
    name: "Playa de Papagayo",
    island: "Lanzarote",
    latitude: 28.8361,
    longitude: -13.7819,
    description:
      "La más icónica de Lanzarote. Arena dorada, aguas cristalinas y vistas espectaculares. Forma parte del Monumento Natural de Los Ajaches.",
    blueFlag: true,
    accessible: false,
    imageUrl:
      "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/papagayo_lanzarote.jpg",
    weather: {
      temperature: 23,
      windSpeed: 15,
      waveHeight: 0.6,
    },
    capacity: {
      current: 250,
      percentage: 45,
      lastUpdate: "2024-01-20T10:30:00",
    },
  },
  {
    id: 25,
    name: "Playa Blanca",
    island: "Lanzarote",
    latitude: 28.8639,
    longitude: -13.8319,
    description:
      "En el pueblo del mismo nombre. Tranquila, ideal para familias y con servicios cerca.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/playa_blanca_lanzarote.jpg",
    weather: {
      temperature: 24,
      windSpeed: 12,
      waveHeight: 0.4,
    },
  },
  {
    id: 26,
    name: "Playa de Famara",
    island: "Lanzarote",
    latitude: 29.1128,
    longitude: -13.5569,
    description:
      "Muy popular para surf y kite. Rodeada de acantilados impresionantes. Salvaje, con fuerte oleaje.",
    blueFlag: false,
    accessible: false,
    imageUrl:
      "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/famara_lanzarote.jpg",
    weather: {
      temperature: 22,
      windSpeed: 25,
      waveHeight: 2.0,
    },
  },
  {
    id: 27,
    name: "Playa del Reducto",
    island: "Lanzarote",
    latitude: 28.9639,
    longitude: -13.5472,
    description:
      "Playa urbana, protegida por arrecifes naturales. Ideal para bañarse con seguridad.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/reducto_lanzarote.jpg",
    weather: {
      temperature: 23,
      windSpeed: 14,
      waveHeight: 0.5,
    },
  },
  {
    id: 28,
    name: "Playa de Las Cucharas",
    island: "Lanzarote",
    latitude: 28.9972,
    longitude: -13.4833,
    description: "Ideal para windsurf. Muy turística y con muchos servicios.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/cucharas_lanzarote.jpg",
    weather: {
      temperature: 23,
      windSpeed: 20,
      waveHeight: 1.2,
    },
  },
  {
    id: 29,
    name: "Playa de Los Pocillos",
    island: "Lanzarote",
    latitude: 28.9236,
    longitude: -13.6597,
    description: "Amplia, con paseo marítimo. Muy buena para familias.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/pocillos_lanzarote.jpg",
    weather: {
      temperature: 24,
      windSpeed: 12,
      waveHeight: 0.5,
    },
  },
  {
    id: 30,
    name: "Playa Grande",
    island: "Lanzarote",
    latitude: 28.9236,
    longitude: -13.6597,
    description:
      "Una de las más visitadas de la isla. Arena dorada y ambiente turístico.",
    blueFlag: true,
    accessible: true,
    imageUrl:
      "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/playa_grande_lanzarote.jpg",
    weather: {
      temperature: 23,
      windSpeed: 15,
      waveHeight: 0.7,
    },
  },
  {
    id: 31,
    name: "Playa del Caletón Blanco",
    island: "Lanzarote",
    latitude: 29.2125,
    longitude: -13.4292,
    description:
      "Arena blanca y formaciones de lava negra. Aguas tranquilas, ideal para fotos.",
    blueFlag: false,
    accessible: false,
    imageUrl:
      "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/caleton_blanco_lanzarote.jpg",
    weather: {
      temperature: 22,
      windSpeed: 18,
      waveHeight: 0.8,
    },
  },
  {
    id: 32,
    name: "Playa de La Garita",
    island: "Lanzarote",
    latitude: 29.1333,
    longitude: -13.4472,
    description: "Playa local, ideal para disfrutar sin aglomeraciones.",
    blueFlag: false,
    accessible: true,
    imageUrl:
      "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/garita_lanzarote.jpg",
    weather: {
      temperature: 23,
      windSpeed: 16,
      waveHeight: 0.9,
    },
  },
  {
    id: 33,
    name: "Playa Quemada",
    island: "Lanzarote",
    latitude: 28.9125,
    longitude: -13.7153,
    description: "Tranquila y rústica. Una joya escondida para desconectar.",
    blueFlag: false,
    accessible: false,
    imageUrl:
      "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/quemada_lanzarote.jpg",
    weather: {
      temperature: 23,
      windSpeed: 14,
      waveHeight: 0.6,
    },
  },
];

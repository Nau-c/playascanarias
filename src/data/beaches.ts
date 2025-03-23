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
];

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
      "data:image/jpeg;base64,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",
    weather: {
      temperature: 24,
      windSpeed: 12,
      waveHeight: 0.8,
    },
  },
];

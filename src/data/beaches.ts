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
];

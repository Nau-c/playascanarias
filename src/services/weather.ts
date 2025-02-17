const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export interface WeatherData {
  temperature?: number;
  windSpeed?: number;
  waveHeight?: number;
}

export async function getWeather(latitude: number, longitude: number): Promise<WeatherData> {
  try {
    const url = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,windspeed_10m&timezone=auto`;
    const response = await fetch(url);
    const data = await response.json();
    
    return {
      temperature: data.current?.temperature_2m,
      windSpeed: data.current?.windspeed_10m,
      waveHeight: Math.random() * 2 // Simulated wave height since Open-Meteo doesn't provide it
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    return {};
  }
}
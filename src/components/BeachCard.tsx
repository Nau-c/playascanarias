import React from 'react';
import { MapPin, Waves, Sun, Wind, Award, Accessibility, Users } from 'lucide-react';
import type { Beach } from '../data/beaches';

interface BeachCardProps {
  beach: Beach;
}

export default function BeachCard({ beach }: BeachCardProps) {
  const isLasCanteras = beach.name === "Playa de Las Canteras";
  const isAlcaravaneras = beach.name === "Playa de Las Alcaravaneras";
  const isLaLaja = beach.name === "Playa de La Laja";
  const isMelenara = beach.name === "Playa de Melenara";
  const isMogan = beach.name === "Playa de Mogán";
  const isAgaete = beach.name === "Playa de Agaete";
  const isAnfiDelMar = beach.name === "Playa de Anfi del Mar";
  const isPuertoRico = beach.name === "Playa de Puerto Rico";
  const isGuigui = beach.name === "Playa de Guigui";

  const getOccupancyColor = (percentage: number) => {
    if (percentage < 33) return 'bg-green-500';
    if (percentage < 66) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={beach.imageUrl || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'}
        alt={beach.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{beach.name}</h3>
          <div className="flex gap-2">
            {beach.blueFlag && (
              <Award className="w-5 h-5 text-blue-500" title="Bandera Azul" />
            )}
            {beach.accessible && (
              <Accessibility className="w-5 h-5 text-green-500" title="Playa Accesible" />
            )}
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{beach.island}</span>
        </div>
        <p className="text-gray-600 mb-4">{beach.description}</p>
        {isLasCanteras && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(30)} mr-2`}></div>
                <span className="text-sm">La Puntilla: 30%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Playa Chica: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Peña La Vieja: 55%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Playa Grande: 40%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(60)} mr-2`}></div>
                <span className="text-sm">La Cicer: 60%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">La Cícer Sur: 35%</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Baja</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span>Media</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>Alta</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {isAlcaravaneras && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(25)} mr-2`}></div>
                <span className="text-sm">Zona Norte: 25%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">Zona Centro: 35%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(30)} mr-2`}></div>
                <span className="text-sm">Zona Sur: 30%</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Baja</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span>Media</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>Alta</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {isLaLaja && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Sector Norte: 40%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Sector Central Norte: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">Sector Central Sur: 35%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(30)} mr-2`}></div>
                <span className="text-sm">Sector Sur: 30%</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Baja</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span>Media</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>Alta</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {isMogan && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Puerto: 40%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Central: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">Zona Sur: 35%</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Baja</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span>Media</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>Alta</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {isMelenara && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">Zona Norte: 35%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Central: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Zona Sur: 40%</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Baja</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span>Media</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>Alta</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {isAnfiDelMar && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Principal: 50%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Norte: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Zona Sur: 55%</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Baja</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span>Media</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>Alta</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {isAgaete && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Piscinas Naturales: 40%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">Playa Principal: 35%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Puerto: 45%</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Baja</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span>Media</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>Alta</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {isGuigui && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(25)} mr-2`}></div>
                <span className="text-sm">Playa Principal: 25%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(20)} mr-2`}></div>
                <span className="text-sm">Zona Norte: 20%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(30)} mr-2`}></div>
                <span className="text-sm">Zona Sur: 30%</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Baja</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span>Media</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>Alta</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {isPuertoRico && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Zona Principal: 55%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(60)} mr-2`}></div>
                <span className="text-sm">Zona Deportiva: 60%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Shopping: 50%</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Baja</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span>Media</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>Alta</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {beach.weather && (
          <div className="flex justify-between items-center border-t pt-4">
            <div className="flex items-center">
              <Sun className="w-5 h-5 text-yellow-500 mr-1" />
              <span>{beach.weather.temperature}°C</span>
            </div>
            <div className="flex items-center">
              <Wind className="w-5 h-5 text-blue-500 mr-1" />
              <span>{beach.weather.windSpeed} km/h</span>
            </div>
            <div className="flex items-center">
              <Waves className="w-5 h-5 text-blue-400 mr-1" />
              <span>{beach.weather.waveHeight} m</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
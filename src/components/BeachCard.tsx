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
  const isSotavento = beach.name === "Playa de Sotavento";
  const isCofete = beach.name === "Playa de Cofete";
  const isEsquinzo = beach.name === "Playa de Esquinzo-Butihondo";
  const isMatorral = beach.name === "Playa del Matorral";
  const isConcha = beach.name === "Playa de La Concha";
  const isCorralejo = beach.name === "Grandes Playas de Corralejo";
  const isCastillo = beach.name === "Playa del Castillo";
  const isAjuy = beach.name === "Playa de Ajuy";
  const isLosCristianos = beach.name === "Playa de Los Cristianos";
  const isDuque = beach.name === "Playa de Duque";
  const isPapagayo = beach.name === "Playa de Papagayo";
  const isBlanca = beach.name === "Playa Blanca";
  const isFamara = beach.name === "Playa de Famara";
  const isReducto = beach.name === "Playa del Reducto";
  const isCucharas = beach.name === "Playa de Las Cucharas";
  const isPocillos = beach.name === "Playa de Los Pocillos";
  const isPlayaGrande = beach.name === "Playa Grande";
  const isCaletonBlanco = beach.name === "Playa del Caletón Blanco";
  const isGarita = beach.name === "Playa de La Garita";
  const isQuemada = beach.name === "Playa Quemada";


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

        {isSotavento && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Windsurf: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Kitesurf: 50%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">Playa Principal: 35%</span>
              </div>
            </div>
            {/* Legend component */}
          </div>
        )}

        {isCofete && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(20)} mr-2`}></div>
                <span className="text-sm">Zona Norte: 20%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(25)} mr-2`}></div>
                <span className="text-sm">Zona Central: 25%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(15)} mr-2`}></div>
                <span className="text-sm">Zona Sur: 15%</span>
              </div>
            </div>
            {/* Legend component */}
          </div>
        )}
        {isEsquinzo && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Zona Norte: 40%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">Zona Central: 35%</span>
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

        {isMatorral && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Faro: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Central: 50%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 40%</span>
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

        {isConcha && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(30)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 30%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">Zona Central: 35%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(25)} mr-2`}></div>
                <span className="text-sm">Zona Tranquila: 25%</span>
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

        {isCorralejo && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(30)} mr-2`}></div>
                <span className="text-sm">Dunas: 30%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Playa Principal: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Zona Surf: 40%</span>
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

        {isCastillo && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Zona Hotel: 55%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Central: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 50%</span>
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

        {isAjuy && (
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
                <span className="text-sm">Zona Cuevas: 20%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(15)} mr-2`}></div>
                <span className="text-sm">Zona Acantilados: 15%</span>
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

        {isLosCristianos && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(65)} mr-2`}></div>
                <span className="text-sm">Zona Principal: 65%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Zona Puerto: 55%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(70)} mr-2`}></div>
                <span className="text-sm">Zona Comercial: 70%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 45%</span>
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

        {isConcha && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(30)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 30%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">Zona Central: 35%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(25)} mr-2`}></div>
                <span className="text-sm">Zona Tranquila: 25%</span>
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

        {isCorralejo && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(30)} mr-2`}></div>
                <span className="text-sm">Dunas: 30%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Playa Principal: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Zona Surf: 40%</span>
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

        {isCastillo && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Zona Hotel: 55%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Central: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 50%</span>
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

        {isAjuy && (
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
                <span className="text-sm">Zona Cuevas: 20%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(15)} mr-2`}></div>
                <span className="text-sm">Zona Acantilados: 15%</span>
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
        {isDuque && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(60)} mr-2`}></div>
                <span className="text-sm">Zona VIP: 60%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Zona Hoteles: 55%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(65)} mr-2`}></div>
                <span className="text-sm">Zona Central: 65%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 50%</span>
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
        {isPapagayo && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(60)} mr-2`}></div>
                <span className="text-sm">Playa Principal: 60%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Calas: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Mirador: 50%</span>
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
        {isBlanca && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Puerto: 50%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Zona Comercial: 55%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Zona Tranquila: 40%</span>
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

        {isFamara && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(65)} mr-2`}></div>
                <span className="text-sm">Zona Surf: 65%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(70)} mr-2`}></div>
                <span className="text-sm">Zona Kite: 70%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Principal: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Zona Acantilados: 40%</span>
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

        {isReducto && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Norte: 50%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Zona Central: 55%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Sur: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Zona Arrecifes: 40%</span>
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

        {isCucharas && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(70)} mr-2`}></div>
                <span className="text-sm">Zona Windsurf: 70%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Zona Principal: 55%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(60)} mr-2`}></div>
                <span className="text-sm">Zona Turística: 60%</span>
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

        {isPocillos && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Zona Norte: 55%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(60)} mr-2`}></div>
                <span className="text-sm">Zona Central: 60%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Sur: 50%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Paseo: 45%</span>
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

        {isPlayaGrande && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(65)} mr-2`}></div>
                <span className="text-sm">Zona Principal: 65%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(70)} mr-2`}></div>
                <span className="text-sm">Zona Comercial: 70%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 50%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(55)} mr-2`}></div>
                <span className="text-sm">Zona Deportiva: 55%</span>
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

        {isCaletonBlanco && (
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
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(30)} mr-2`}></div>
                <span className="text-sm">Zona Sur: 30%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Piscinas Naturales: 40%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(25)} mr-2`}></div>
                <span className="text-sm">Zona Volcánica: 25%</span>
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

        {isGarita && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(45)} mr-2`}></div>
                <span className="text-sm">Zona Principal: 45%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(40)} mr-2`}></div>
                <span className="text-sm">Zona Familiar: 40%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">Zona Tranquila: 35%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(50)} mr-2`}></div>
                <span className="text-sm">Zona Piscina: 50%</span>
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
        {isQuemada && (
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Ocupación por zonas:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(30)} mr-2`}></div>
                <span className="text-sm">Zona Norte: 30%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(35)} mr-2`}></div>
                <span className="text-sm">Zona Central: 35%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(25)} mr-2`}></div>
                <span className="text-sm">Zona Sur: 25%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(20)} mr-2`}></div>
                <span className="text-sm">Zona Pescadores: 20%</span>
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
  )
}




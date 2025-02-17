import React from 'react';
import { MapPin, Waves, Sun, Wind, Award, Accessibility } from 'lucide-react';
import type { Beach } from '../data/beaches';

interface BeachCardProps {
  beach: Beach;
}

export default function BeachCard({ beach }: BeachCardProps) {
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
              <span>{beach.weather.waveHeight}m</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
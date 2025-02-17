import React from 'react';
import { Umbrella } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Umbrella className="w-8 h-8 text-blue-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Playas Canarias</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#inicio" className="text-gray-600 hover:text-blue-500 transition-colors">Inicio</a></li>
              <li><a href="#playas" className="text-gray-600 hover:text-blue-500 transition-colors">Playas</a></li>
              <li><a href="#clima" className="text-gray-600 hover:text-blue-500 transition-colors">Clima</a></li>
              <li><a href="#contacto" className="text-gray-600 hover:text-blue-500 transition-colors">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
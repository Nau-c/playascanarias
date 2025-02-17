import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Playas Canarias</h3>
            <p className="text-gray-400">
              Tu guía definitiva para descubrir las mejores playas de las Islas Canarias.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#playas" className="text-gray-400 hover:text-white transition-colors">Playas</a></li>
              <li><a href="#clima" className="text-gray-400 hover:text-white transition-colors">Clima</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-400">
              Email: info@playascanarias.com<br />
              Tel: +34 928 123 456
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Playas Canarias. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
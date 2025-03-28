import React, { useEffect, useState } from 'react';
import { Waves, Sun, Wind, } from 'lucide-react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import BeachCard from './components/BeachCard';
import { beaches, type Beach } from './data/beaches';
import { getWeather } from './services/weather';
import BeachSearch from './components/BeachSearch';
import { Analytics } from './components/Analytics';

function App() {
  const [beachesWithWeather, setBeachesWithWeather] = useState<Beach[]>([]);
  const [loading, setLoading] = useState(true);
  // Add these new states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIsland, setSelectedIsland] = useState('');

  // Get unique islands for the filter
  const islands = Array.from(new Set(beaches.map(beach => beach.island)));

  // Filter beaches based on search and island selection
  const filteredBeaches = beachesWithWeather.filter(beach => {
    const matchesSearch = beach.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIsland = selectedIsland ? beach.island === selectedIsland : true;
    return matchesSearch && matchesIsland;
  });

  useEffect(() => {
    async function fetchWeatherData() {
      const updatedBeaches = await Promise.all(
        beaches.map(async (beach) => {
          const weather = await getWeather(beach.latitude, beach.longitude);
          return {
            ...beach,
            weather
          };
        })
      );
      setBeachesWithWeather(updatedBeaches);
      setLoading(false);
    }

    fetchWeatherData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <NavBar />

      <main>
        {/* Inicio Section */}
        <section id="inicio" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Descubre las Mejores Playas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora las hermosas playas de las Islas Canarias, con información actualizada sobre el clima y las condiciones del mar.
            </p>
          </div>
        </section>
        <Analytics />
        {/* Update the search section */}
        <section id="buscador" className="container mx-auto px-4 py-16">
          <BeachSearch
            onSearch={setSearchTerm}
            onIslandFilter={setSelectedIsland}
            islands={islands}
          />
        </section>

        {/* Update the Playas section to use filteredBeaches */}
        <section id="playas" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestras Playas</h2>
          {loading ? (
            <div className="text-center text-gray-600">Cargando información de playas...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBeaches.map(beach => (
                <BeachCard key={beach.id} beach={beach} />
              ))}
            </div>
          )}
        </section>

        {/* Clima Section */}
        <section id="clima" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Clima Actual</h2>
          {loading ? (
            <div className="text-center text-gray-600">Cargando información del clima...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beachesWithWeather.map(beach => (
                <div key={beach.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">{beach.name}</h3>
                  <div className="space-y-2">
                    {beach.weather && (
                      <>
                        <div className="flex items-center">
                          <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                          <span>Temperatura: {beach.weather.temperature}°C</span>
                        </div>
                        <div className="flex items-center">
                          <Wind className="w-5 h-5 text-blue-500 mr-2" />
                          <span>Viento: {beach.weather.windSpeed} km/h</span>
                        </div>
                        <div className="flex items-center">
                          <Waves className="w-5 h-5 text-blue-400 mr-2" />
                          <span>Oleaje: {beach.weather.waveHeight}m</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contacto</h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
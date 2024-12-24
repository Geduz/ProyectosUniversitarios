import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from '../components/Carousel';
import { Utensils } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Utensils className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Chifa Chu Sao Po</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Auténtica Cocina China-Peruana
            </h2>
            <p className="text-lg text-gray-600">
              Bienvenidos a Chifa Chu Sao Po, donde la tradición culinaria china se
              fusiona con los sabores peruanos. Nuestros chefs expertos preparan
              cada plato con ingredientes frescos y técnicas tradicionales para
              ofrecerte una experiencia gastronómica única.
            </p>
            <button
              onClick={() => navigate('/reservation')}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold
                         hover:bg-red-700 transition-colors duration-300
                         transform hover:scale-105"
            >
              Reservar Ahora
            </button>
          </div>
          
          <Carousel />
        </div>
      </main>
    </div>
  );
}
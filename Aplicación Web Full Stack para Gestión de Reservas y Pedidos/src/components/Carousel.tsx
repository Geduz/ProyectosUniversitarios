import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&h=600',
  'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&w=1200&h=600',
  'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?auto=format&fit=crop&w=1200&h=600'
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      <div className="absolute inset-0 transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex' }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} 
               className="w-full h-full object-cover flex-shrink-0" />
        ))}
      </div>
      
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
        <ChevronLeft />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
        <ChevronRight />
      </button>
    </div>
  );
}
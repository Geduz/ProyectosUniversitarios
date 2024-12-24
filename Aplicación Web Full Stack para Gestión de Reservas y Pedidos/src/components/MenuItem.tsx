import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

type MenuItemProps = {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
  onQuantityChange: (id: string, quantity: number) => void;
  quantity: number;
};

export function MenuItem({ 
  id, 
  name, 
  price, 
  description, 
  image, 
  onQuantityChange, 
  quantity 
}: MenuItemProps) {
  return (
    <motion.div 
      className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
      whileHover={{ scale: 1.01 }}
      layout
    >
      {image && (
        <img 
          src={image} 
          alt={name} 
          className="w-24 h-24 object-cover rounded-lg"
        />
      )}
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm font-medium text-gray-900 mt-1">S/. {price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onQuantityChange(id, Math.max(0, quantity - 1))}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Minus className="w-4 h-4" />
        </motion.button>
        <span className="w-8 text-center">{quantity}</span>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onQuantityChange(id, quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Plus className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
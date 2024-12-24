import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

type Table = {
  id: number;
  number: number;
  capacity: number;
  isOccupied: boolean;
};

// Generate 32 tables with different capacities
const tables: Table[] = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  number: i + 1,
  capacity: i % 3 === 0 ? 6 : i % 2 === 0 ? 4 : 2,
  isOccupied: Math.random() < 0.3, // 30% chance of being occupied
}));

type TableSelectionProps = {
  onTableSelect: (tableId: number) => void;
  selectedTable?: number;
};

export function TableSelection({ onTableSelect, selectedTable }: TableSelectionProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {tables.map((table) => (
          <motion.button
            key={table.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => !table.isOccupied && onTableSelect(table.id)}
            className={`
              relative p-4 rounded-lg border-2 transition-colors
              ${table.isOccupied 
                ? 'bg-red-100 border-red-300 cursor-not-allowed' 
                : table.id === selectedTable
                  ? 'bg-green-100 border-green-500'
                  : 'bg-white border-gray-200 hover:border-blue-500'
              }
            `}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium mb-1">Mesa {table.number}</span>
              <Users className="w-6 h-6 mb-1" />
              <span className="text-xs text-gray-500">{table.capacity} pers.</span>
            </div>
            {table.isOccupied && (
              <div className="absolute inset-0 bg-red-500/10 rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium text-red-700">Ocupada</span>
              </div>
            )}
          </motion.button>
        ))}
      </div>
      
      <div className="mt-6 flex gap-4 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border-2 border-gray-200 rounded" />
          <span>Disponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded" />
          <span>Seleccionada</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-100 border-2 border-red-300 rounded" />
          <span>Ocupada</span>
        </div>
      </div>
    </div>
  );
}
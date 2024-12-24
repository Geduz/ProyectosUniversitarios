import React, { useState } from 'react';
import { ReservationSteps } from '../components/ReservationSteps';
import { MenuSection } from '../components/MenuSection';
import { OrderSummary } from '../components/OrderSummary';
import { TableSelection } from '../components/TableSelection';
import { menuItems, MenuItem } from '../data/menuItems';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils } from 'lucide-react';

const steps = [
  { id: 'appetizers', title: 'Entradas', completed: false, current: true },
  { id: 'main', title: 'Plato Principal', completed: false, current: false },
  { id: 'drinks', title: 'Bebidas', completed: false, current: false },
  { id: 'table', title: 'Mesa', completed: false, current: false },
  { id: 'payment', title: 'Pago', completed: false, current: false },
  { id: 'billing', title: 'Facturación', completed: false, current: false },
];

export default function ReservationPage() {
  const [currentStep, setCurrentStep] = useState('appetizers');
  const [orderItems, setOrderItems] = useState<MenuItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>({});
  const [selectedTable, setSelectedTable] = useState<number>();

  const getCurrentItems = () => {
    switch (currentStep) {
      case 'appetizers':
        return menuItems.filter(item => item.category === 'appetizer');
      case 'main':
        return menuItems.filter(item => item.category === 'main');
      case 'drinks':
        return menuItems.filter(item => item.category === 'drink');
      default:
        return [];
    }
  };

  const handleQuantityChange = (id: string, quantity: number, item: MenuItem) => {
    setSelectedItems(prev => ({
      ...prev,
      [id]: quantity
    }));

    if (quantity === 0) {
      setOrderItems(prev => prev.filter(i => i.id !== id));
    } else {
      setOrderItems(prev => {
        const existing = prev.find(i => i.id === id);
        if (existing) {
          return prev.map(i => i.id === id ? { ...i, quantity } : i);
        }
        return [...prev, { ...item, quantity }];
      });
    }
  };

  const handleNext = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'table':
        return <TableSelection onTableSelect={setSelectedTable} selectedTable={selectedTable} />;
      default:
        return (
          <MenuSection
            items={getCurrentItems()}
            onQuantityChange={handleQuantityChange}
            selectedItems={selectedItems}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-700 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2">
            <Utensils className="w-6 h-6" />
            <h1 className="text-xl font-bold">Chifa Chu Sao Po</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <ReservationSteps steps={steps} currentStep={currentStep} />
          
          <div className="flex-1 bg-white rounded-lg shadow p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="md:col-span-2">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">
                      {steps.find(step => step.id === currentStep)?.title}
                    </h2>
                    {currentStep !== 'billing' && (
                      <button
                        onClick={handleNext}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                      >
                        Siguiente
                      </button>
                    )}
                  </div>
                  {renderStepContent()}
                </div>
                
                {currentStep !== 'table' && (
                  <div className="md:col-span-2">
                    <OrderSummary items={orderItems} />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
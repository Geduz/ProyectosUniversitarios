import React from 'react';
import { MenuItem as MenuItemType } from '../data/menuItems';
import { MenuItem } from './MenuItem';
import { motion } from 'framer-motion';

type MenuSectionProps = {
  items: MenuItemType[];
  onQuantityChange: (id: string, quantity: number, item: MenuItemType) => void;
  selectedItems: { [key: string]: number };
};

export function MenuSection({ items, onQuantityChange, selectedItems }: MenuSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      {items.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
          onQuantityChange={(id, quantity) => onQuantityChange(id, quantity, item)}
          quantity={selectedItems[item.id] || 0}
        />
      ))}
    </motion.div>
  );
}
import React from 'react';

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type OrderSummaryProps = {
  items: OrderItem[];
};

export function OrderSummary({ items }: OrderSummaryProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Resumen del Pedido</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>{item.quantity}x {item.name}</span>
            <span>S/. {(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t pt-2 mt-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>S/. {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
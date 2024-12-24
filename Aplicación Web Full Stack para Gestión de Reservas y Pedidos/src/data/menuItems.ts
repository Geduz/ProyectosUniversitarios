// Menu items data structure
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'appetizer' | 'main' | 'drink';
  image?: string;
};

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 'wonton',
    name: 'Wantán Frito',
    description: 'Deliciosas masas rellenas de carne de cerdo y camarón (8 piezas)',
    price: 12.00,
    category: 'appetizer',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=300'
  },
  {
    id: 'spring-rolls',
    name: 'Rollitos Primavera',
    description: 'Rollitos crujientes de verduras y pollo (6 piezas)',
    price: 15.00,
    category: 'appetizer'
  },
  {
    id: 'chi-jau-kay',
    name: 'Chi Jau Kay',
    description: 'Alitas de pollo fritas en salsa oriental',
    price: 18.00,
    category: 'appetizer'
  },
  {
    id: 'sopa-wonton',
    name: 'Sopa Wantán',
    description: 'Caldo con wantanes rellenos de carne y verduras',
    price: 16.00,
    category: 'appetizer'
  },

  // Main Dishes
  {
    id: 'chaufa-especial',
    name: 'Chaufa Especial',
    description: 'Arroz frito con pollo, carne y mariscos',
    price: 25.00,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=300'
  },
  {
    id: 'tallarin-saltado',
    name: 'Tallarín Saltado',
    description: 'Fideos salteados con verduras y carne',
    price: 22.00,
    category: 'main'
  },
  {
    id: 'pollo-tipakay',
    name: 'Pollo Tipakay',
    description: 'Pollo crocante bañado en salsa agridulce',
    price: 28.00,
    category: 'main'
  },
  {
    id: 'kam-lu-wantan',
    name: 'Kam Lu Wantán',
    description: 'Wantanes fritos con cerdo asado y piña en salsa agridulce',
    price: 26.00,
    category: 'main'
  },
  {
    id: 'aeropuerto',
    name: 'Aeropuerto',
    description: 'Combinación de chaufa y tallarín saltado',
    price: 30.00,
    category: 'main'
  },

  // Drinks
  {
    id: 'limonada-china',
    name: 'Limonada China',
    description: 'Refrescante limonada con un toque oriental',
    price: 8.00,
    category: 'drink'
  },
  {
    id: 'te-verde',
    name: 'Té Verde',
    description: 'Té verde tradicional',
    price: 5.00,
    category: 'drink'
  },
  {
    id: 'chicha-morada',
    name: 'Chicha Morada',
    description: 'Bebida tradicional peruana de maíz morado',
    price: 7.00,
    category: 'drink'
  },
  {
    id: 'cerveza-china',
    name: 'Cerveza China Tsingtao',
    description: 'Cerveza tradicional china',
    price: 12.00,
    category: 'drink'
  }
];
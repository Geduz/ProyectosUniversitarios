-- Database structure for the restaurant reservation system

CREATE DATABASE IF NOT EXISTS chifa_restaurant;
USE chifa_restaurant;

-- Users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255),
    is_guest BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    type ENUM('appetizer', 'main', 'drink') NOT NULL
);

-- Menu items table
CREATE TABLE menu_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    available BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Tables table
CREATE TABLE tables (
    id INT PRIMARY KEY AUTO_INCREMENT,
    table_number INT NOT NULL UNIQUE,
    capacity INT NOT NULL,
    status ENUM('available', 'reserved', 'occupied') DEFAULT 'available'
);

-- Reservations table
CREATE TABLE reservations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    table_id INT,
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (table_id) REFERENCES tables(id)
);

-- Order items table
CREATE TABLE order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    reservation_id INT,
    menu_item_id INT,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (reservation_id) REFERENCES reservations(id),
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id)
);

-- Payments table
CREATE TABLE payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    reservation_id INT,
    amount DECIMAL(10,2) NOT NULL,
    payment_method ENUM('credit_card', 'debit_card') NOT NULL,
    status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    transaction_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (reservation_id) REFERENCES reservations(id)
);

-- Insert sample data for categories
INSERT INTO categories (name, type) VALUES
('Entradas', 'appetizer'),
('Platos Principales', 'main'),
('Bebidas', 'drink');

-- Insert sample menu items
INSERT INTO menu_items (category_id, name, description, price) VALUES
(1, 'Wantán Frito', 'Deliciosas masas rellenas de carne', 12.00),
(1, 'Rollitos Primavera', 'Rollitos crujientes de verduras', 15.00),
(2, 'Chaufa Especial', 'Arroz frito con pollo, carne y mariscos', 25.00),
(2, 'Tallarín Saltado', 'Fideos salteados con verduras y carne', 22.00),
(3, 'Limonada China', 'Refrescante limonada con un toque oriental', 8.00),
(3, 'Té Verde', 'Té verde tradicional', 5.00);

-- Insert sample tables
INSERT INTO tables (table_number, capacity) VALUES
(1, 4), (2, 4), (3, 6), (4, 2), (5, 8),
(6, 4), (7, 4), (8, 6), (9, 2), (10, 8);
CREATE DATABASE VenenoDB;
USE VenenoDB;

CREATE TABLE `USERS` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `lastname` VARCHAR(255) NOT NULL,
   `username` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `gender` VARCHAR(30) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `age` VARCHAR(4) NOT NULL,
   `address` VARCHAR(255) NOT NULL,
   `role` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `USERS_PRODUCTS` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `product_id` INT NOT NULL,
   `quantity_purchases` BIGINT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `PRODUCTS` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `price` DECIMAL NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `availability` BIT NOT NULL,
   `amount` INT NOT NULL,
   `cartSale` BIT NOT NULL,
   `category` VARCHAR(255) NOT NULL,
   `gender` VARCHAR(30) NOT NULL,
   `discount` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `SHOPPING_CARTS` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `product_id` INT NOT NULL,
   `amount` INT NOT NULL,
   `price` DECIMAL NOT NULL,
   `gift` BIT,
   `address` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `USERS_PRODUCTS` ADD CONSTRAINT `FK_86f3ed52-1cab-4c95-b682-cf12a5b6e258` FOREIGN KEY (`product_id`) REFERENCES `PRODUCTS`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `USERS_PRODUCTS` ADD CONSTRAINT `FK_007ce80f-e40a-4b13-816c-9cba4220aac4` FOREIGN KEY (`user_id`) REFERENCES `USERS`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `SHOPPING_CARTS` ADD CONSTRAINT `FK_23ad1ab4-8e9b-4ac4-aceb-a757e8790835` FOREIGN KEY (`user_id`) REFERENCES `USERS`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `SHOPPING_CARTS` ADD CONSTRAINT `FK_2297b6aa-fda4-4e83-9875-434b82f0694c` FOREIGN KEY (`product_id`) REFERENCES `PRODUCTS`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO products (id, name, description, price, image, availability, amount, cartSale, category, gender, offer, discount)
VALUES
(1, 'Remeron Manifest', 'Descripción de Remeron Manifest', 15000, '/remeronmanifest-hombre.webp', 1, 10, 0, 'remera', 'varon', 1, 15),
(2, 'Remeron Balance', 'Descripción de Remeron Balance', 15000, 'remeronbalance-mujer.webp', 1, 15, 0, 'remera', 'mujer', 1, 15),
(3, 'Buzo Top Essential', 'Descripción de Buzo Top Essential', 42000, 'buzotopessential-mujer.webp', 1, 8, 0, 'buzo', 'mujer', 0, 20),
(4, 'Campera Velvet Track', 'Descripción de Campera Velvet Track', 18000, '/camperavelvettrack-mujer.webp', 1, 12, 0, 'campera', 'mujer', 1, 20),
(5, 'Buzo Be Night', 'Descripción de Buzo Be Night', 48000, '/buzobenight-hombre-.webp', 1, 7, 0, 'buzo', 'hombre', 1, 20),
(6, 'Campera College Black', 'Descripción de Campera College Black', 54600, '/camperacollageblack-hombre.webp', 1, 9, 0, 'campera', 'hombre', 0, 20),
(7, 'Pantalon Snaps', 'Descripción de Pantalon Snaps', 35700, '/pantalonnab-hombre.webp', 1, 14, 0, 'pantalon', 'varon', 1, 10),
(8, 'Pantalon Track Black', 'Descripción de Pantalon Track Black', 32500, '/pantalontrackpantblack-mujer.webp', 1, 18, 0, 'pantalon', 'mujer', 0, 10),
(9, 'Pantalon Carpenter Black', 'Descripción de Pantalon Carpenter Black', 31500, '/carpenterblackpant-hombre.webp', 1, 6, 0, 'pantalon', 'hombre', 0, 20),
(10, 'Pantalon Parachute NAB Black', 'Descripción de Pantalon Parachute NAB Black', 31500, '/pantalonpanchutenabblack-mujer.webp', 1, 11, 0, 'pantalon', 'mujer', 1, 10),
(11, 'Buzo Ninja Hood', 'Descripción de Buzo Ninja Hood', 52500, '/buzoninjahood.webp', 1, 11, 0, 'buzo', 'hombre', 0, 20),
(12, 'Buzo College', 'Descripción de Buzo College', 50000, '/buzocollege.webp', 1, 11, 0, 'buzo', 'mujer', 0, 20),
(13, 'Remeron Not a Brand Wash', 'Descripción de Remeron Not a Brand Wash', 21000, '/remeronnotabrandwash.webp', 1, 11, 0, 'remera', 'varon', 1, 15),
(14, 'Campera Track Grey', 'Descripción de Campera Track Grey', 48000, 'camperatrackgrey-mujer.webp', 1, 11, 0, 'campera', 'mujer', 0, 20),
(15, 'Campera Kongo Black', 'Descripción de Campera Kong Black', 48000, '/camperakongoblack.webp', 1, 11, 0, 'campera', 'hombre', 0, 20),
(16, 'Gorro pescador', 'Excelente', 15000, '1696979303708.jpg', 1, 2, 0, 'accesorio', 'unisex', 1, 12),
(17, 'Guantes', 'sssssssssssssssssssssssssssssssss', 12000, '1697630038338.jpeg', 1, 100, 0, 'accesorio', 'unisex', 0, 10),
(18, 'Guantes', 'ssssssssssssssssssss', 10000, '1697630297181.avif', 1, 100, 0, 'accesorio', 'unisex', 1, 12),
(19, 'Gorra Essential', 'ssssssssssssssssssssssssss', 15000, '1697630569295.webp', 1, 40, 0, 'accesorio', 'unisex', 0, 20);
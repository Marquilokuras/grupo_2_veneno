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

INSERT INTO `products` (`id`, `name`, `price`, `description`, `image`, `availability`, `amount`, `cartSale`, `category`, `gender`, `discount`, `offer`) VALUES
(1, 'Remeron Manifest', 25000, 'Descripcion de Remeron Manifest', '1701699416005.webp', '1', 50, '0', 'remera', 'varon', 15, 1),
(2, 'Remeron Balance', 15000, 'Descripción de Remeron Balance', '1701699521758.webp', '1', 50, '0', 'remera', 'mujer', 0, 0),
(3, 'Buzo Top Essential', 42000, 'Descripción de Buzo Top Essential', '1701699606716.webp', '1', 25, '0', 'abrigo', 'mujer', 20, 1),
(4, 'Campera Velvet Track', 18000, 'Descripción de Campera Velvet Track', '1701699705934.webp', '1', 25, '0', 'abrigo', 'mujer', 0, 0),
(5, 'Buzo Be Night', 48000, 'Descripción de Buzo Be Night', '1701699804147.webp', '1', 25, '0', 'abrigo', 'varon', 10, 1),
(6, 'Campera College Black', 55600, 'Descripción de Campera College Black', '1701699908501.webp', '1', 25, '0', 'abrigo', 'varon', 0, 0),
(7, 'Pantalon Snaps', 35700, 'Descripción de Pantalon Snaps', '1701700002982.webp', '0', 40, '0', 'pantalon', 'varon', 20, 1),
(8, 'Pantalon Track Black', 32500, 'Descripción de Pantalon Track Black', '1701700207347.webp', '1', 40, '0', 'pantalon', 'mujer', 0, 0),
(9, 'Pantalon Carpenter Black', 31500, 'Descripción de Pantalon Carpenter Black', '1701700305269.webp', '1', 0, '0', 'pantalon', 'varon', 0, 0),
(10, 'Pantalon Parachute NAB Black', 31500, 'Descripción de Pantalon Parachute NAB Black', '1701700379530.webp', '1', 40, '0', 'pantalon', 'mujer', 20, 1),
(11, 'Remeron Not a Brand Wash', 21000, 'Descripción de Remeron Not a Brand Wash', '1701700485421.webp', '1', 50, '0', 'remera', 'varon', 0, 0),
(12, 'Remeron Essential Black', 30000, 'Descripción de Remeron Essential Black', '1701700649499.webp', '1', 50, '0', 'remera', 'mujer', 10, 1),
(13, 'Sombrero Beige ', 16000, 'Descripción de Sombrero Beige', '1701700938844.jpg', '1', 20, '0', 'accesorio', 'unisex', 10, 1),
(14, 'Bufanda', 20000, 'Descripción de Bufanda', '1701701669648.jfif', '1', 30, '0', 'accesorio', 'unisex', 20, 1),
(15, 'Gorra Kango Black', 25000, 'Descripción de Gorra Kango Black', '1701701727825.webp', '1', 15, '0', 'accesorio', 'unisex', 0, 0),
(16, 'Guantes', 15000, 'Descripción de Guantes', '1701701783653.jpeg', '1', 20, '0', 'accesorio', 'unisex', 0, 0);
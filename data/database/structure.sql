CREATE DATABASE VenenoDB;
USE VenenoDB;

CREATE TABLE USERS (
   user_id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(255) NOT NULL,
   lastname VARCHAR(255),
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   gender VARCHAR(30),
   image VARCHAR(255) NOT NULL,
   birthday DATE,
   age VARCHAR(4),
   direction VARCHAR(255),
   role BIT NOT NULL,
   PRIMARY KEY (user_id)
);

CREATE TABLE USERS_PRODUCTS (
   user_product_id INT NOT NULL AUTO_INCREMENT,
   user_id VARCHAR(100) NOT NULL,
   product_id VARCHAR(100) NOT NULL,
   users_product_quantity_purchases BIGINT,
   PRIMARY KEY (user_product_id, user_id, product_id)
);

CREATE TABLE PRODUCTS (
   product_id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(255) NOT NULL,
   price DECIMAL NOT NULL,
   description VARCHAR(255) NOT NULL,
   image VARCHAR(255) NOT NULL,
   reverse VARCHAR(255) NOT NULL,
   availability BIT NOT NULL,
   amount INT NOT NULL,
   cartSale BIT NOT NULL,
   category VARCHAR(255) NOT NULL,
   gender VARCHAR(30),
   offer BIT NOT NULL,
   discount INT,
   PRIMARY KEY (product_id)
);

CREATE TABLE SHOPPING_CARTS (
   shopping_cart_id INT NOT NULL AUTO_INCREMENT,
   user_id VARCHAR(100) NOT NULL,
   product_id VARCHAR(100) NOT NULL,
   amount INT NOT NULL,
   price DECIMAL NOT NULL,
   gift BIT,
   direction VARCHAR(255) NOT NULL,
   PRIMARY KEY (shopping_cart_id, user_id, product_id)
);


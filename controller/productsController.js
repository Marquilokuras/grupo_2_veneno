const path = require('path');
const fs = require('fs');
const { json } = require('express');
const products = require('../data/products.json');
const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');
const arrayPrendas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {

    renderProductCart: (req, res) => {
        const prendasCarrito = arrayPrendas.filter((prenda) => prenda.cartSale === true)
        res.render('productCart', { data: prendasCarrito })
    },

    processProductCart: (req,res) => {
        const { id } = req.params;
        const productId = arrayPrendas.find((prod) => prod.id === id);
        const indexProduct = arrayPrendas.indexOf(productId);

        arrayPrendas[indexProduct] = {
            id: productId.id,
            name: productId.name,
            description: productId.description,
            price: productId.price,
            image: productId.image,
            reverse: productId.reverse,
            disponibility: productId.disponibility,
            amount: productId.amount,
            cartSale: true,
            category: productId.category,
            genre: productId.genre,
            offer: productId.offer,
            discount: productId.discount
        }
        fs.writeFileSync(productsFilePath, JSON.stringify(arrayPrendas));
        res.redirect(`/products/productCart`);
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        const { id } = req.params;
        const productId = arrayPrendas.find((prod) => prod.id === id);
        const indexProduct = arrayPrendas.indexOf(productId);

        arrayPrendas[indexProduct] = {
            id: productId.id,
            name: productId.name,
            description: productId.description,
            price: productId.price,
            image: productId.image,
            reverse: productId.reverse,
            disponibility: true,
            amount: productId.amount,
            cartSale: false,
            category: productId.category,
            genre: productId.genre,
            offer: productId.offer,
            discount: productId.discount
        }

        fs.writeFileSync(productsFilePath, JSON.stringify(arrayPrendas));
        res.redirect(`/products/productCart`);
    },

    products: (req, res) => {
        res.render('product', { data: arrayPrendas });
    },

    create: (req, res) => {
        res.render("create");
    },

    detail: (req, res) => {
        const { id } = req.params;
        const IdProducto = arrayPrendas.find((producto) => producto.id === id);
        console.log(IdProducto)
        const productosRelacionados = arrayPrendas.find((prod)=> prod.category === IdProducto.category && prod.id !== id);
        console.log(IdProducto ,  productosRelacionados)
        res.render('detail', { data: IdProducto , products: productosRelacionados});
    },

    store: (req, res) => {
        console.log(req.body)
        if(req.body.offer === "true"){
            req.body.offer = true
        }
        const nuevoProducto = {
            id: parseInt(arrayPrendas.length) + 1, // Convierte a número
            name: req.body.name,
            description: req.body.description,
            price: parseFloat(req.body.price), // Convierte a número de coma flotante
            image: req.file.filename,
            disponibility: true,
            amount: parseInt(req.body.amount), // Convierte a número
            cartSale: false,
            category: req.body.category,
            genre: req.body.genre,
            offer: req.body.offer !== null ? req.body.offer : false,
            discount: parseFloat(req.body.discount)
        }
        arrayPrendas.push(nuevoProducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(arrayPrendas));
        const nuevoArrayPrendas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("product", { data: nuevoArrayPrendas });
    },

    edit: (req, res) => {
        const { id } = req.params;
        const productId = arrayPrendas.find((prod) => prod.id == id);
        res.render("edit", { datos: productId });
    },

    update: (req, res) => {
        const { id } = req.params;
        const productId = arrayPrendas.find((prod) => prod.id == id);
        const indexProduct = arrayPrendas.indexOf(productId);

        const ifElse = (elem) => {
            if (!elem) {
                return productId.image;
            }
            else {
                return req.file.filename;
            }
        }

        arrayPrendas[indexProduct] = {
            id: productId.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: ifElse(req.file),
            reverse: req.body.reverse,
            disponibility: req.body.disponibility,
            amount: req.body.amount,
            cartSale: req.body.cartSale,
            category: req.body.category,
            genre: req.body.genre,
            offer: req.body.offer,
            discount: req.body.discount
        }
        fs.writeFileSync(productsFilePath, JSON.stringify(arrayPrendas));
        //res.send("Se editó el producto");
        res.redirect("/products");
    },

    delete: (req, res) => {
        //const productsReplace = arrayPrendas.filter((prod)=> prod.id != req.params.id);
        //fs.writeFileSync(productsFilePath, JSON.stringify(productsReplace));
        //res.send("Se eliminó el producto");
        const { id } = req.params;
        const productFind = arrayPrendas.find((prod) => prod.id === id);
        const indexProduct = arrayPrendas.indexOf(productFind);
        arrayPrendas.splice(indexProduct, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(arrayPrendas));
        res.redirect("/products");
    }
}

module.exports = productsController;
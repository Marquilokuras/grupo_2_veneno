const path = require('path');
const fs = require('fs');
const { json } = require('express');
const products = require('../data/products.json');
const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');
const arrayPrendas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {

    renderProductCart: (req, res) => {
        const prendasCarrito = arrayPrendas.filter((prenda) => prenda.cartSale === true);
        const descuento = (prendasCarrito.discount * prendasCarrito.price) / 100;
        const precioDescuento = prendasCarrito.price - descuento;  
        res.render('productCart', { data: prendasCarrito, precioDescuento })
    },

    processProductCart: (req, res) => {
        const { id } = req.params;
        const productId = arrayPrendas.find((prod) => prod.id == id);
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
        const productId = arrayPrendas.find((prod) => prod.id == id);
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
        const numericId = parseInt(id, 10); // Convertir id a número
        const IdProducto = arrayPrendas.find((producto) => producto.id === numericId);
        if (!IdProducto) {
            res.status(404).send("Producto no encontrado");
            return;
        }
        const productosRelacionados = arrayPrendas.filter((prod) => prod.category === IdProducto.category && prod.id !== numericId);
        res.render('detail', { data: IdProducto, products: productosRelacionados });
    },

    store: (req, res) => {
        if (req.body.offer === "true") {
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

        if (req.body.offer === "true") {
            req.body.offer = true
        }
        
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
            price: parseFloat(req.body.price),
            image: ifElse(req.file),
            disponibility: true,
            amount: parseInt(req.body.amount),
            cartSale: false,
            category: req.body.category,
            genre: req.body.genre,
            offer: req.body.offer !== null ? req.body.offer : false,
            discount: parseFloat(req.body.discount)
        }
        fs.writeFileSync(productsFilePath, JSON.stringify(arrayPrendas));
        res.redirect("/products");
    },

    delete: (req, res) => {
        console.log("entro")
        const { id } = req.params;
        const numericId = parseInt(id, 10); 

        const productFind = arrayPrendas.find((prod) => prod.id === numericId);

        if (!productFind) {
            res.status(404).send("Producto no encontrado");
            return;
        }

        const indexProduct = arrayPrendas.indexOf(productFind);
        arrayPrendas.splice(indexProduct, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(arrayPrendas));
        res.redirect("/products");
    },

    girl: (req, res) => {
        let arrayPrendasMujer = [];
        for (let i = 0; i < arrayPrendas.length; i++) {
            if (arrayPrendas[i].genre === "mujer") {
                arrayPrendasMujer.push(arrayPrendas[i]);
            }
        }
        res.render('product', { data: arrayPrendasMujer });
    },

    man: (req, res) => {
        let arrayPrendasHombre = [];
        for (let j = 0; j < arrayPrendas.length; j++) {
            if (arrayPrendas[j].genre === "hombre") {
                arrayPrendasHombre.push(arrayPrendas[j]);
            }
        }
        res.render('product', { data: arrayPrendasHombre });
    },

    remeras: (req, res) => {
        let arrayPrendasRemera= [];
        for (let j = 0; j < arrayPrendas.length; j++) {
            if (arrayPrendas[j].category === "remera") {
                arrayPrendasRemera.push(arrayPrendas[j]);
            }
        }
        res.render('product', { data: arrayPrendasRemera });
    },

    abrigos: (req, res) => {
        let arrayPrendasAbrigos = [];
        for (let j = 0; j < arrayPrendas.length; j++) {
            if (arrayPrendas[j].category === "buzo" ||  arrayPrendas[j].category === "campera" ) {
                arrayPrendasAbrigos.push(arrayPrendas[j]);
            }
        }
        res.render('product', { data: arrayPrendasAbrigos });
    },

    pantalones: (req, res) => {
        let arrayPrendasPantalones = [];
        for (let j = 0; j < arrayPrendas.length; j++) {
            if (arrayPrendas[j].category === "pantalon") {
                arrayPrendasPantalones.push(arrayPrendas[j]);
            }
        }
        res.render('product', { data: arrayPrendasPantalones });
    },

    accesorios: (req, res) => {
        let arrayPrendasAccesorios = [];
        for (let j = 0; j < arrayPrendas.length; j++) {
            if (arrayPrendas[j].category === "accesorio") {
                arrayPrendasAccesorios.push(arrayPrendas[j]);
            }
        }
        res.render('product', { data: arrayPrendasAccesorios});
    }
}

module.exports = productsController;
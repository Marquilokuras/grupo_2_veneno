const path = require('path');
const fs = require('fs');
const { json } = require('express');
const products = require('../data/products.json');
const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');
const arrayPrendas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {

    renderProductCart: (req, res) => {
        const prendasCarrito = arrayPrendas.filter((prenda) => prenda.carritoVenta === true)
        res.render('productCart', { data: prendasCarrito })
    },

    processProductCart: (req,res) => {
        const { id } = req.params;
        const productId = arrayPrendas.find((prod) => prod.id === id);
        const indexProduct = arrayPrendas.indexOf(productId);

        arrayPrendas[indexProduct] = {
            id: productId.id,
            nombre: productId.nombre,
            descripcion: productId.descripcion,
            precio: productId.precio,
            imagen: productId.imagen,
            reverse: productId.reverse,
            disponibilidad: productId.disponibilidad,
            cantidad: productId.cantidad,
            carritoVenta: true,
            categoria: productId.categoria,
            genero: productId.genero,
            oferta: productId.oferta,
            descuento: productId.descuento
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
            nombre: productId.nombre,
            descripcion: productId.descripcion,
            precio: productId.precio,
            imagen: productId.imagen,
            reverse: productId.reverse,
            disponibilidad: productId.disponibilidad,
            cantidad: productId.cantidad,
            carritoVenta: false,
            categoria: productId.categoria,
            genero: productId.genero,
            oferta: productId.oferta,
            descuento: productId.descuento
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
        const productosRelacionados = arrayPrendas.filter((prod)=> prod.categoria === IdProducto.categoria && prod.id !== id);
        res.render('detail', { data: IdProducto , products: productosRelacionados});
    },

    store: (req, res) => {
        const nuevoProducto = {
            id: arrayPrendas.length + 1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: req.file.filename,
            reverse: req.body.reverse,
            disponibilidad: req.body.disponibilidad,
            cantidad: req.body.cantidad,
            carritoVenta: req.body.carritoVenta,
            categoria: req.body.categoria,
            genero: req.body.genero,
            oferta: req.body.oferta,
            descuento: req.body.descuento
        }
        arrayPrendas.push(nuevoProducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(arrayPrendas));

        const nuevoArrayPrendas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        //res.send("Se cargó el producto");
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
                return productId.imagen;
            }
            else {
                return req.file.filename;
            }
        }

        arrayPrendas[indexProduct] = {
            id: productId.id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: ifElse(req.file),
            reverse: req.body.reverse,
            disponibilidad: req.body.disponibilidad,
            cantidad: req.body.cantidad,
            carritoVenta: req.body.carritoVenta,
            categoria: req.body.categoria,
            genero: req.body.genero,
            oferta: req.body.oferta,
            descuento: req.body.descuento
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
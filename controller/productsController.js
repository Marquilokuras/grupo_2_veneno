const path = require('path');
const fs = require('fs');
//const arrayPrendas = require('../dataBase/prendas')

const productsFilePath = path.join(__dirname, '..','data','products.json');
const arrayPrendas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
   
    renderProductCart: (req,res) => {
        const prendasCarrito = arrayPrendas.filter((prenda) => prenda.carritoVenta === true)
        res.render('productCart', { data: prendasCarrito })
    },

    renderProducts: (req,res) => {
        res.render('product');
    },

    renderProductDetail: (req,res) => {
        const IdProducto = arrayPrendas.find((producto)=> producto.id === req.params.id);
        res.render('detail', {data: IdProducto});
    },

    renderProductCreate: (req,res) => {
        res.render("create");
    },

    renderProductStore: (req,res) => {
        // const nuevoProducto = {}
        // arrayPrendas.push(nuevoProducto);
        // res.redirect("/");
        res.send("Se cargó el producto");
    }
}

module.exports = productsController;
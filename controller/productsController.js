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
        res.render('product', {data:arrayPrendas});
    },
    
    renderProductCreate: (req,res) => {
        res.render("create");
    },
    
    renderProductDetail: (req,res) => {
        const IdProducto = arrayPrendas.find((producto)=> producto.id === req.params.id);
        res.render('detail', {data: IdProducto});
    },

    renderProductStore: (req,res) => {
        /*
        const nuevoProducto = {
            id: arrayPrendas.length+1,
        }
        arrayPrendas.push(nuevoProducto);
        */
       //res.send("Se cargó el producto");
       res.redirect("/products");
    },

    renderProductEdit: (req,res) => {
        res.render("edit");
    },

    renderProductUpdate: (req,res) => {
        const id = req.params.id; 
        //res.send("Se editó el producto");
        res.redirect("/products/" + id);
    },
/*
    renderProductDelete: (req,res) => {
        res.send("Se eliminó el producto");
    }
*/
}

module.exports = productsController;
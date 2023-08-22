const path = require('path');
const arrayPrendas = require('../dataBase/prendas')

const productsController = {
   
    renderProductCart: (req,res) => {
        const prendasCarrito = arrayPrendas.filter((prenda) => prenda.carritoVenta === true)
        res.render('productCart', { data: prendasCarrito })
    },

    renderProductDetail: (req,res) => {
        res.render('productDetail')
    },

    renderProductDetailId: (req,res) => {
        /*const IdProducto = arrayPrendas.find((producto)=> producto.id === req.params.id);
        res.render('productDetail', {data: IdProducto});*/
        res.render('productDetail');
    },

}

module.exports = productsController;
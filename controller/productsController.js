const path = require('path');
const arrayPrendas = require('../dataBase/prendas')

const productsController = {
   
    renderProductCart: (req,res) => {
        const prendasCarrito = arrayPrendas.filter((prenda) => prenda.carritoVenta === true)
        res.render('productCart', { data: prendasCarrito })
    },

    renderProductDetail: (req,res) => {
        res.render('productDetail')
    }

}

module.exports = productsController;
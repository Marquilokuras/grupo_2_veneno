const path = require('path');
const arrayPrendas = require('../dataBase/prendas')

const productsController = {
   
    renderProductCart: (req,res) => {
        console.log("controller producto")
        const prendasCarrito = arrayPrendas.filter((prenda) => plato.carritoVenta === true)
        res.render('productCart', { data: prendasCarrito })
    }

}

module.exports = productsController;
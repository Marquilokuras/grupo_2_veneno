const path = require('path');
const arrayPrendas = require('../dataBase/prendas')

const mainController = {

    renderHome:(req,res) => {
        res.render('index', { title: 'Prendas', data: arrayPrendas})
    },
    
    renderProductCart: (req,res) => {
        res.sendFile(path.resolve(__dirname,'../views/products/productCart.html'))
    },

    renderProductDetail:(req,res) => {
        res.sendFile(path.resolve(__dirname,'../views/products/productDetail.html'))
    },

    renderFormulario: (req,res) => {
        res.sendFile(path.resolve(__dirname,'/'))
    },

    renderFormAdministrador: (req,res) => {
        res.sendFile(path.resolve(__dirname,'../views/users/formsAdministrador.html'))
    },

}

module.exports = mainController;
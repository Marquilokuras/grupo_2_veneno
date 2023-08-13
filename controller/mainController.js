const path = require('path');

const mainController = {

    renderHome:(req,res) => {
        res.sendFile(path.resolve(__dirname,'../views/index.html'))
    },
    
    renderProductCart: (req,res) => {
        res.sendFile(path.resolve(__dirname,'./views/products/productCart.html'))
    },

    renderFormulario: (req,res) => {
        res.sendFile(path.resolve(__dirname,'/'))
    },

    renderFormAdministrador: (req,res) => {
        res.sendFile(path.resolve(__dirname,'../views/users/formsAdministrador.html'))
    },

}

module.exports = mainController;
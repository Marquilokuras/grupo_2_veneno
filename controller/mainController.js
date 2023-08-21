const path = require('path');
const arrayPrendas = require('../dataBase/prendas')

const mainController = {

    renderHome:(req,res) => {
        res.render('index', { title: 'Prendas', data: arrayPrendas})
    },

    /*renderProductDetailId: (req,res) => {
        const IdProducto = arrayPrendas.find((producto)=> producto.id === req.params.id);
        res.render('productDetail', {data: IdProducto});
    },*/
    
    renderFormulario: (req,res) => {
        res.sendFile(path.resolve(__dirname,'/'))
    },

    renderFormAdministrador: (req,res) => {
        res.render('formsAdministrador')
    },

}

module.exports = mainController;
const path = require('path');
const arrayPrendas = require('../dataBase/prendas')

const mainController = {

    renderHome:(req,res) => {
        res.render('index', { title: 'Prendas', data: arrayPrendas})
    },
    
    renderFormulario: (req,res) => {
        res.sendFile(path.resolve(__dirname,'/'))
    },

    renderFormAdministrador: (req,res) => {
        res.render('formsAdministrador')
    },

}

module.exports = mainController;
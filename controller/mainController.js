const path = require('path');
const fs = require('fs');
//const arrayPrendas = require('../dataBase/prendas')

const productsFilePath = path.join(__dirname, '..','data','products.json');
const arrayPrendas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    renderHome:(req,res) => {
        const productosEnOferta = arrayPrendas.filter((producto)=>producto.oferta === true);
        res.render('index', { title: 'Prendas', data: productosEnOferta})
    },
    
    renderSearch: (req,res) => {
        const palabra = req.query.search;
		const productosSearch = arrayPrendas.filter((producto)=>producto.nombre.toLowerCase().includes(palabra.toLowerCase()));

        res.render('search', {results: productosSearch});
    },

    renderFormulario: (req,res) => {
        res.sendFile(path.resolve(__dirname,'/'))
    },

    /*
    renderFormAdministrador: (req,res) => {
        res.render('formsAdministrador')
    },
    */
}

module.exports = mainController;
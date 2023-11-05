const path = require('path');
const fs = require('fs');
//const arrayPrendas = require('../dataBase/prendas')
const productsFilePath = path.join(__dirname, '..','data','products.json');
const arrayPrendas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../src/database/models');

const mainController = {

    home:(req,res) => {
        const productosEnOferta = arrayPrendas.filter((producto)=>producto.offer === true);
        res.render('index', { title: 'Prendas', data: productosEnOferta})
    },
    
    search: (req,res) => {
        /* const palabra = req.query.search;
		const productosSearch = arrayPrendas.filter((producto)=>producto.name.toLowerCase().includes(palabra.toLowerCase()));

        res.render('search', {results: productosSearch}); */
        db.Product.findAll()
            .then(products => {
                const palabra = req.query.search
                const productosSearch = products.filter((producto)=>producto.name.toLowerCase().includes(palabra.toLowerCase()))
                res.render('search', {results: productosSearch});
            })
    },

    renderFormulario: (req,res) => {
        res.sendFile(path.resolve(__dirname,'/'))
    },

    redes: (req,res) => {
        res.render('redes')
    },

}

module.exports = mainController;
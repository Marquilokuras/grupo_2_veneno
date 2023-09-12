const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '..','data','products.json');
const arrayPrendas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersController = {
    renderLogin : (req, res) => {
        res.render('login');
    },

    renderRegister: (req, res) => {
        res.render('register');
    },

    createUser: (req,res) =>{
        const productosEnOferta = arrayPrendas.filter((producto)=>producto.oferta === true);
        res.render('index', { title: 'Prendas', data: productosEnOferta})
    }
};

module.exports = usersController;
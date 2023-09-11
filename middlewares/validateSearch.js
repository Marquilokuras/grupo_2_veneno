const  {check, validationResult} = require("express-validator");
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '..','data','products.json');
const arrayPrendas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const validateSearch = [
    check("search").notEmpty()
]

const validationSearch = (req,res,next)=>{
    const errors = validationResult(req);

    if (errors.isEmpty()){
        next();
    }
    else{
        const productosEnOferta = arrayPrendas.filter((producto)=>producto.oferta === true);
        res.render("index", { title: 'Prendas', data: productosEnOferta});
    }
}

module.exports = {validateSearch, validationSearch};
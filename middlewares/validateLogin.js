const { body, validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');
const bycrypt = require('bcryptjs');
const db = require('../src/database/models');
const sequelize = db.sequelize;

//const fileUsers = require('../data/users.json');

const usersFilePath = path.join(__dirname, '..','data','users.json');
let fileUsers;
db.User.findAll().then(users=>{fileUsers = users});
console.log(fileUsers)


const arrLogin = [
    body('email').isEmail().notEmpty().withMessage('Agregar un email válido'),
    body('password').notEmpty().withMessage('Ingrese una constraseña'),
    body('email').custom( (value) => {
        for(let i = 0; i < fileUsers.length; i++){
            if(fileUsers[i].email == value) {
                return true;
            }
        }
        return false;
    }).withMessage('Usuario no se encuentra registrado'),
    body('password').custom( (value, {req}) => {
        for(let i = 0; i < fileUsers.length; i++){
            if(fileUsers[i].email == req.body.email){
                if(bycrypt.compareSync(value, fileUsers[i].password)){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }).withMessage('Usuario o contraseña no coinciden'),
];

const validateLogin = (req, res, next) => {
    const errors = validationResult(req);

        if(errors.isEmpty()) {
            const userLogged = fileUsers.find(usuario => usuario.email == req.body.email);
            delete userLogged.password;
            req.session.usuario = userLogged;
            next();
        }else{
            res.render('login', {errors: errors.mapped(), old: req.body})
        }
    
};

module.exports = {
    arrLogin,
    validateLogin
}
const { body, validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');
const bycrypt = require('bcryptjs');
const db = require('../src/database/models');
const sequelize = db.sequelize;

//const fileUsers = require('../data/users.json');
/* const usersFilePath = path.join(__dirname, '..','data','users.json');
 */

const arrLogin = [
    body('email').isEmail().notEmpty().withMessage('Agregar un email válido'),
    body('password').notEmpty().withMessage('Ingrese una constraseña'),
    body('email').custom((value) => {
        db.User.findAll()
            .then(fileUsers => {
                for (let i = 0; i < fileUsers.length; i++) {
                    if (fileUsers[i].email == value) {
                        console.log("Usuario:")
                        console.log(fileUsers[i])
                        return true;
                    }
                }
/*             throw new Error("El usuario no se encuentra registrado")

 */ console.log("no encontrado")
                return false;
            });

    }).withMessage("El usuario no se encuentra registrado"),
    body('password').custom((value, { req }) => {
        db.User.findAll()
            .then(fileUsers => {
                for (let i = 0; i < fileUsers.length; i++) {
                    if (fileUsers[i].email == req.body.email) {
                        if (bycrypt.compareSync(value, fileUsers[i].password)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            })
    }).withMessage('Usuario o contraseña no coinciden'),
];

const validateLogin = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const userLogged = db.User.findAll()
            .then(fileUsers => {
                fileUsers.find(usuario => usuario.email == req.body.email);
                delete userLogged.password;
                req.session.usuario = userLogged;
                next();
            })
    } else {
        res.render('login', { errors: errors.mapped(), old: req.body })
    }

};

module.exports = {
    arrLogin,
    validateLogin
}
const { body, validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');
const {hashSync} = require('bcryptjs');

const User = require('../data/users.json')
const usersFilePath = path.join(__dirname, '..','data','users.json');

const arrRegister = [
    body('name').notEmpty().withMessage('Debe ingresar su nombre'),
    body('lastname').notEmpty().withMessage('Debe ingresar su apellido'),
    body('userName').notEmpty().withMessage('Debe ingresar un nombre de usuario'),
    body('email').notEmpty().withMessage('Debe ingresar un email').bail().isEmail().withMessage('Debe ingresar un formato de email válido'),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña'),
    body('passwordVerify').notEmpty().withMessage('Debe ingresar la contraseña nuevamente'),
    body('gender').notEmpty().withMessage('Debe seleccionar un género'),
    body('birthday').notEmpty().withMessage('Debe ingresar su año de nacimiento'),
    body('age').notEmpty().withMessage('Debe ingresar su edad'),
    body('direction').notEmpty().withMessage('Debe ingresar su domicilio')
];

const validateRegister = (req, res, next) => {
    const errors = validationResult(req);

    const {name, lastname,userName, email, password,passwordVerify, gender, birthday, age, direction } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    //const existingUser = users.find((user) => user.email === email);

    const imageExist = (element) => {
        if(element){
            return element.filename;
        }
        else{
            return "/img/users/usuario.png";
        }
    }

    try {
        for(let i=0;i<users.length;i++){
            if(email === users[i].email){
                res.render('register',{errors: {msg:"Este email ya está registrado"},old:req.body});
            }
            break;
        }
        /*if (existingUser) {
            res.render('register', {errors:{msg: "Este correo electrónico ya está registrado"},old:req.body});
        }*/
        
        if (errors.isEmpty()) {
            if (password === passwordVerify){
                const newUser = {
                    id:  (users.length + 1).toString(),
                    name,
                    lastname,
                    userName,
                    email,
                    password: hashSync(password,10),
                    passwordVerify: hashSync(passwordVerify,10),
                    gender,
                    image: imageExist(req.file),
                    birthday,
                    age,
                    direction
                }
                delete newUser.passwordVerify;
                users.push(newUser)
                fs.writeFileSync(usersFilePath, JSON.stringify(users));
            }
            else {
                return res.status(400).json({ message: 'Las contraseñas no coinciden' });
                //res.render('register', {errors:{msg:'Las contraseñas no coinciden'}});
            }
            
            next()

        }
        else {
            throw errors
        }
    } catch (err) {
        res.render('register', {errors: err.mapped(), old: req.body })
    }
}

module.exports = {
    arrRegister,
    validateRegister
}
const { body, validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');
const {hashSync} = require('bcryptjs');

const User = require('../data/users.json')
const usersFilePath = path.join(__dirname, '..','data','users.json');

const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Users = db.User;

const arrRegister = [
    body('name').notEmpty().isLength({ min: 2 }).withMessage('Debe ingresar su nombre'),
    body('lastname').notEmpty().isLength({ min: 2 }).withMessage('Debe ingresar su apellido'),
    body('username').notEmpty().withMessage('Debe ingresar un nombre de usuario'),
    body('email').notEmpty().withMessage('Debe ingresar un email').bail().isEmail().withMessage('Debe ingresar un formato de email válido'),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña'),
    body('passwordVerify').notEmpty().withMessage('Debe ingresar la contraseña nuevamente'),
    body('gender').notEmpty().withMessage('Debe seleccionar un género'),
    body('role').notEmpty().withMessage('Debe ingresar un rol'),
    body('age').notEmpty().withMessage('Debe ingresar su edad'),
    body('address').notEmpty().withMessage('Debe ingresar su domicilio'),
];

const validateRegister = (req, res, next) => {
    const errors = validationResult(req);
    req.body.image = req.file.filename;
    
    const {name, lastname,username, email, password,passwordVerify, gender,image , age, address,role } = req.body;
    
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    

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
        console.log(imageExist(req.file))
        if (errors.isEmpty()) {
            if (password === passwordVerify){
                next()
                delete passwordVerify;
                console.log(req.body);
                db.User.create(
                    {
                        name: name,
                        lastname: lastname,
                        username: username,
                        email: email,
                        password:  hashSync(password,10),
                        gender: gender,
                        image: req.body.image,
                        age: age,
                        address: address,
                        role: role
                    }
                )
                /*const newUser = {
                    id:  (users.length + 1),
                    name,
                    lastname,
                    username,
                    email,
                    password: hashSync(password,10),
                    passwordVerify: hashSync(passwordVerify,10),
                    gender,
                    image: imageExist(req.file),
                    age:parseInt(req.body.age),
                    address,
                    role
                }
                console.log(newUser)
                delete newUser.passwordVerify;
                users.push(newUser)
                console.log(users)
                fs.writeFileSync(usersFilePath, JSON.stringify(users));
                Users.create(users);
                fs.writeFileSync(usersFilePath, JSON.stringify(users));*/

            }
            else {
                return res.status(400).json({ message: 'Las contraseñas no coinciden' });
            }
            
            //next()

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
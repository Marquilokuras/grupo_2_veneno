const express = require('express');
const routerUsers = express.Router();
const usersController = require('../controller/usersController');

/** MIDDLEWARE **/
const upload = require('../middlewares/multer');

/** VALIDACIONES **/
const { arrRegister, validateRegister } = require('../middlewares/validateRegister');
const { arrLogin, validateLogin } = require('../middlewares/validateLogin');
/* 
routerUsers.get('/', usersController.renderLogin); */

routerUsers.get('/register', usersController.renderRegister);

routerUsers.post('/register', upload.single("image"), arrRegister, validateRegister, usersController.createUser);   // /register(POST) Accion de creacion, donde se envia el formulario del Usuario

routerUsers.get('/login', usersController.renderLogin);

routerUsers.post('/login', arrLogin, validateLogin, usersController.enterHome );

routerUsers.get('/logout', usersController.logout);

module.exports = routerUsers;
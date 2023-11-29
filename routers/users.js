const express = require('express');
const routerUsers = express.Router();
const usersController = require('../controller/usersController');

/** MIDDLEWARE **/
const upload = require('../middlewares/multer');

/** VALIDACIONES **/
const { arrRegister, validateRegister } = require('../middlewares/validateRegister');
const { arrLogin} = require('../middlewares/validateLogin');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
/* 
routerUsers.get('/', usersController.renderLogin); */

routerUsers.get('/register', guestMiddleware, usersController.renderRegister);

routerUsers.post('/register', upload.single("image"), arrRegister, validateRegister, usersController.createUser);   // /register(POST) Accion de creacion, donde se envia el formulario del Usuario

routerUsers.get('/login', guestMiddleware, usersController.renderLogin);

routerUsers.post('/login', arrLogin, usersController.enterHome );

routerUsers.get('/logout', authMiddleware, usersController.logout);

routerUsers.get('/profile', authMiddleware, usersController.renderProfile);

module.exports = routerUsers;
const express = require('express');
const routerLogin = express.Router();
const loginController = require('../controller/usersController');

    routerLogin.get('/', loginController.renderLogin);

module.exports = routerLogin;
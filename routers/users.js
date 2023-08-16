const express = require('express');
const routerUsers = express.Router();
const usersController = require('../controller/usersController');

    routerUsers.get('/', usersController.renderLogin);

    routerUsers.get('/register', usersController.renderRegister);

module.exports = routerUsers;
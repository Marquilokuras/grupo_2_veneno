const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const User = require('../data/users.json')
const usersFilePath = path.join(__dirname, '..','data','users.json');

const usersController = {
    renderLogin : (req, res) => {
        res.render('login');
    },

    renderRegister: (req, res) => {
        res.render('register');
    },

    createUser: async (req,res) => {
      res.redirect("/users/login");
    }
};

module.exports = usersController;
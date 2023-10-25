const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const User = require('../data/users.json')
const usersFilePath = path.join(__dirname, '..','data','users.json');
const db = require("../src/database/models");

const usersController = {
    renderLogin : (req, res) => {
        res.render('login');
    },

    renderRegister: (req, res) => {
        res.render('register');
    },

    createUser: async (req,res) => {
        db.User.create(req.body);
        res.redirect("/users/login");
    },

    enterHome : (req, res) => {
        res.redirect('/');
    },

    logout : (req, res ) => {
        req.session.destroy();

        res.redirect('/');
    },
    renderProfile : (req,res) => {
        res.render('profile', {user : req.session.usuario});

    }
};

module.exports = usersController;
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../data/users.json')
const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');
const db = require("../src/database/models");

const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Users = db.User;

const usersController = {

    renderLogin: (req, res) => {
        res.render('login');
    },

    renderRegister: (req, res) => {
        res.render('register');
    },

    createUser: (req, res) => {

        res.redirect("/users/login");
    },

    enterHome: (req, res) => {
        const error = validationResult(req);

        if (error.isEmpty()) {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then(result => {

                if (bcrypt.compareSync(req.body.password, result.password)) {
                    delete result.password;
                    req.session.usuario = result;
                    res.redirect('/');
                } else {

                    return res.render('login', {
                        errors: {
                            email: {
                                msg: "Password o Email incorrecto "
                            }
                        }, old: req.body
                    })

                }
            })

        } else {
            res.render('login', { errors: error.mapped(), old: req.body })
        }
    },

    logout: (req, res) => {
        req.session.destroy();

        res.redirect('/');
    },
    renderProfile: (req, res) => {
        res.render('profile', { user: req.session.usuario });

    }
};

module.exports = usersController;
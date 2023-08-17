const path = require('path');

const usersController = {
    renderLogin : (req, res) => {
        res.render('login');
    },

    renderRegister: (req, res) => {
        res.render('register');
    }
};


module.exports = usersController;
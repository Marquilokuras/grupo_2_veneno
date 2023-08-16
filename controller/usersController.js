const path = require('path');

const mainController = {
    renderLogin : (req, res) =>{
        res.sendFile(path.resolve(__dirname, '../views/login.html'));
        //res.render('login',{});
    }
};


module.exports = mainController;
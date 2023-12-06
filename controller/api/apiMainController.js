const db = require("../../src/database/models");
//const Op = db.Sequelize.Op;

const productsController = {
    list: (req,res) => {
        db.Product.findAll()
            .then(product => {
                let result = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: "/products/api/list",
                    },
                    data: product
                }
                res.json(result);
            })
    },

    userList: (req,res) => {
        db.User.findAll()
            .then(user => {
                let result = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: "/api/users/list",
                    },
                    data: user
                }
                res.json(result);
            })
    },
};

module.exports = productsController;
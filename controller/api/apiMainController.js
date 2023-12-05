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
                        url: "/products/api/list"
                    },
                    data: product
                }
                res.json(result);
            })
    },
};

module.exports = productsController;
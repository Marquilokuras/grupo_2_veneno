const db = require("../../src/database/models");

const productsController = {
    list: (req,res) => {
        db.Product.findAll()
            .then(product => {
                let result = {
                    meta : {
                        status: 200,
                        count: product.length,
                        /*countByCategory: {
                            remera: remera.length,
                            pantalon: pantalon.length,
                            abrigo: abrigo.length,
                            accesorio: accesorio.length
                        }*/
                        url: `/api/products/list`
                    },
                    products: product
                    /*
                    products: {
                        id: id,
                        name: name,
                        description: description,
                        detail: `/api/products/${product.id}`
                    }
                    */
                }
                res.json(result);
            })
    },

    detail: (req,res) => {
        const { id } = req.params;
        db.Product.findByPk( id )
            .then(product => {
                let result = {
                    meta : {
                        status: 200,
                        count: 1,
                        url: `/api/products/${id}`
                    },
                    products: product
                    /*
                    []
                    url: "imagen del product"
                    */
                }
                res.json(result);
            })
    }
};

module.exports = productsController;
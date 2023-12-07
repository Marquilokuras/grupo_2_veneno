const express = require("express");
const router = express.Router();
const productsController = require("../../controller/api/apiProductsController");

router.get("/products/list", productsController.list);
router.get("/products/:id", productsController.detail);

module.exports = router;
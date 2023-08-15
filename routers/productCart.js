const express = require('express');
const router = express.Router();
const productController = require('../controller/productsController');
const mainController = require('../controller/mainController');

console.log("router de producto")
router.get('/productCart', productController.renderProductCart);
/* console.log("router post") */
/* router.post('/productCart', mainController.renderFormulario); */

module.exports = router;

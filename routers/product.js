const express = require('express');
const router = express.Router();
const productController = require('../controller/productsController');
const mainController = require('../controller/mainController');

router.get('/', productController.renderProductCart);
router.post('/', mainController.renderFormulario); 

// Product Detail abajo 
router.get('/productDetail', productController.renderProductDetail);
router.get('/productDetail/:id', productController.renderProductDetailId);

module.exports = router;

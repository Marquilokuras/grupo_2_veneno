const express = require('express');
const router = express.Router();
const productDetailController = require('../controller/mainController');

router.get('/productDetail', productDetailController.renderProductDetail);
// router.post('/productDetail', productDetailController.render----);

module.exports = router;

const express = require('express');
const router = express.Router();
const productCartController = require('../controller/mainController');

router.get('/productCart', productCartController.renderProductCart);
router.post('/productCart', productCartController.renderFormulario);

module.exports = router;

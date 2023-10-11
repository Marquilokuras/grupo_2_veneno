const express = require('express');
const router = express.Router();
const homeController = require('../controller/mainController');
const {validateSearch, validationSearch} = require("../middlewares/validateSearch");

router.get('/', homeController.home);
router.get('/search', validateSearch, validationSearch, homeController.search);
router.get('/redes', homeController.redes);

module.exports = router;
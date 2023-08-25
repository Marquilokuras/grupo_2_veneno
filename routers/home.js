const express = require('express');
const router = express.Router();
const homeController = require('../controller/mainController');

router.get('/', homeController.renderHome);
router.get('/search', homeController.renderSearch);

module.exports = router;
const express = require('express');
const router = express.Router();
const formAdministradorController = require('../controller/mainController');

router.get('/formularioAdministrador', formAdministradorController.renderFormAdministrador);
router.post('/', formAdministradorController.renderFormulario);

module.exports = router;
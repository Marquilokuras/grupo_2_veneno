const { body, validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');
const bycrypt = require('bcryptjs');
const db = require('../src/database/models');
const sequelize = db.sequelize;



const arrLogin = [
    body('email').isEmail().notEmpty().withMessage('Agregar un email válido'),
    body('password').notEmpty().withMessage('Ingrese una constraseña'),
];

module.exports = {
    arrLogin
}
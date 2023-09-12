const { body, validationResult } = require('express-validator');

const arrRegister = [
    body('nombre').notEmpty().withMessage('Debes ingresar un nombre de usuario'),
    body('email').notEmpty().withMessage('Debes ingresar tu email').bail().isEmail().withMessage('Debes ingresar un formato de email valido'),
    body('password').notEmpty().withMessage('Debes ingresar tu password')
];

const validateRegister = (req, res, next) => {

    const errors = validationResult(req);

    try {
        if (errors.isEmpty() === true) {
            next()
        } else {
            throw errors
        }
    } catch (err) {
        res.render('register', { errors: errors.mapped(), old: req.body })
    }
}

module.exports = {
    arrRegister,
    validateRegister
}
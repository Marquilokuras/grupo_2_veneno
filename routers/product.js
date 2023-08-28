const express = require('express');
const router = express.Router();
const productController = require('../controller/productsController');
const mainController = require('../controller/mainController');

router.get('/productCart', productController.renderProductCart);
router.post('/productCart', mainController.renderFormulario); 

router.get('/', productController.products);                        //1_ /products (GET) Listado de productos
router.get('/create',productController.create)              //2_ /products/create (GET) Formulario de creacion de productos
router.get('/:id', productController.detail);              //3_ /products/:id (GET) Detalle de un producto particular
router.post('/', productController.store);                //4_ /products (POST) Accion de creacion, donde se envia el formulario
router.get('/:id/edit', productController.edit)          //5_ /products/:id/edit (GET) Formulario de edición de productos
router.put('/:id', productController.update)            //6_ /products/:id (PUT) Acción de edición (a donde se envía el formulario):
//router.delete('/:id', productController.delete)      //7_ /products/:id (DELETE) Acción de borrado




module.exports = router;

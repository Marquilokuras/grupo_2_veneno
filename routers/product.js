const express = require('express');
const router = express.Router();
const productController = require('../controller/productsController');
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        const carpetaDestinoImg = path.join(__dirname, "../public/img");
        cb(null,carpetaDestinoImg);
    },
    filename: (req,file,cb)=>{
        const nombreImgCargada = Date.now() + path.extname(file.originalname);
        cb(null,nombreImgCargada);
    }
});

const upload = multer({storage});

router.get('/productCart', productController.renderProductCart);
router.post('/productCart/:id', productController.processProductCart); 
router.delete('/productCart/delete/:id',upload.single("imagen"), productController.destroy); 

router.get('/girl',productController.girl);
router.get('/man',productController.man);
router.get('/remeras',productController.remeras);
router.get('/abrigos',productController.abrigos);
router.get('/pantalones',productController.pantalones);
router.get('/accesorios',productController.accesorios);
router.get('/', productController.products);                                          //1_ /products (GET) Listado de productos
router.get('/create',productController.create)                                       //2_ /products/create (GET) Formulario de creacion de productos
router.get('/:id', productController.detail);                                       //3_ /products/:id (GET) Detalle de un producto particular
router.post('/', upload.single("image"), productController.store);                //4_ /products (POST) Accion de creacion, donde se envia el formulario
router.get('/edit/:id', productController.edit)                                   //5_ /products/:id/edit (GET) Formulario de edición de productos
router.put('/:id',upload.single("image"),productController.update)              //6_ /products/:id (PUT) Acción de edición (a donde se envía el formulario):
router.delete('/delete/:id', productController.delete)                                 //7_ /products/:id (DELETE) Acción de borrado

module.exports = router;
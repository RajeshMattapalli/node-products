var express = require('express');
var router = express.Router();
var ProductController = require("../controller/productController");
var UserController = require("../controller/userController");

/* ---------Product Routes------------------*/
router.get('/products', ProductController.getProducts);
router.post('/products', ProductController.addProduct);
router.delete('/products/:productId', ProductController.deleteProduct);
router.get('/products/:productId', ProductController.getProductById);
router.put('/products', ProductController.updateProduct)


/* ---------User Routes------------------*/
router.post('/login', UserController.login);
router.post('/registerUser', UserController.registerUser);

module.exports = router;
const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const product = require("../controller/product");

router.get('/allProducts',  catchAsync(product.getAllProducts));
router.get('/allProductsFactory/:id', catchAsync(product.getAllProductsFactory));
router.post('/create', catchAsync(product.create));
router.post('/update', catchAsync(product.update));
router.post('/delete', catchAsync(product.delete));

module.exports = router;
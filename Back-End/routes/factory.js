const express = require('express');
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const factory = require('../controller/factory');
const guaranteeOrder = require('../controller/guaranteeOrder');

router.get('/guaranteeOrder/:id', catchAsync(guaranteeOrder.getGuaranteeOrderByIdFactory));
router.post('/updateAmount', catchAsync(factory.updateAmount));
router.get('/:id', catchAsync(factory.getFactoryById));
router.get('/', catchAsync(factory.getAllFactories));



module.exports = router;
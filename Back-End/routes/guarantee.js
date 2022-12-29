const express = require('express');
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const guarantee = require('../controller/guaranteeCtrl');
const guaranteeOrder = require('../controller/guaranteeOrderCtrl');



router.get('/', catchAsync(guarantee.getAllGuarantees));
router.get('/:id', catchAsync(guarantee.getGuaranteeById));
router.get('/guaranteeOrder/:id', catchAsync(guaranteeOrder.getGuaranteeOrderByIdGuarantee));
router.put('/updateStatusGuarantee/:id', catchAsync(guaranteeOrder.updateStatusGuarantee));

module.exports = router;
const express = require('express');
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const agency = require('../controller/agency');
const order = require('../controller/order');
const guaranteeOrder = require('../controller/guaranteeOrder');


router.post('/updateAmount', catchAsync(agency.updateAmount));
router.get('/order/:id', catchAsync(order.getOderFromIdAgency));
router.post('/createOder/', catchAsync(order.createOder));
router.post('/createGuaranteeOrder/', catchAsync(guaranteeOrder.createGuaranteeOrder));
router.put('/updateNotGuaranteeOrder/:id', catchAsync(guaranteeOrder.updateNotGuaranteeOrder));
router.get('/guaranteeOrder/:id', catchAsync(guaranteeOrder.getGuaranteeOrderByIdAgency));
router.get('/', catchAsync(agency.getAllAgencies));
router.get('/:id', catchAsync(agency.getAgencyById));


module.exports = router;
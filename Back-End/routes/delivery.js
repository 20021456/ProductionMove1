const express = require('express');
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const delivery = require('../controller/delivery');

router.get('/from/:id', catchAsync(delivery.getDeliveriesFromId));
router.get('/to/:id', catchAsync(delivery.getDeliveriesToId));
router.post('/createDeliveryByFactory', catchAsync(delivery.createDeliveryByFactory));
router.post('/createDeliveryByAgency', catchAsync(delivery.createDeliveryByAgency));
router.put('/updateStatus/:id', catchAsync(delivery.updateStatus));

module.exports = router;
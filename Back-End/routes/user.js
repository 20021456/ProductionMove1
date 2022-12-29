const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const users = require("../controller/user");


router.post("/login", catchAsync(users.login));
router.post("/register", catchAsync(users.register));
router.post('/delete', catchAsync(users.delete));
router.post('/update', catchAsync(users.update));
router.get('/userAdmin', catchAsync(users.getUserAdmin));
router.get('/userAgency', catchAsync(users.getUserAgency));
router.get('/userGuarantee', catchAsync(users.getUserGuarantee));
router.get('/userFactory', catchAsync(users.getUserFactory));


module.exports = router;

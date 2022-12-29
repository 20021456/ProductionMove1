const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderModel = new  Schema (
    {
        idAgency: {
            type: String,
        },
        nameAgency: {
            type: String,
        },
        idCustomer: {
            type: String,
        },
        idProduct: {
            type: String,
        },
        nameProduct: {
            type: String,
        },
        price: {
            type: Number,
        },
        status: {
            type: String,
        },
    }
);

module.exports = mongoose.model("Order", orderModel);
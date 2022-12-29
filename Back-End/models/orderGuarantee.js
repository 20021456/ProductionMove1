const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderGuaranteeModel = new Schema (
    {
        idOrder: {
            type: String,
        },   
        error: {
            type: String,
        },
        idAgency: {
            type: String,
        default: '',
        },
        idGuarantee: {
            type: String,
        default: '',
        },
        idFactory: {
            type: String,
        default: '',
        },
        status: {
            type: String,
        },
    }
);

module.exports = mongoose.model("OrderGuarantee", orderGuaranteeModel);
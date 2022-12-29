const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema (
    {
        name: {
            type: String,
        },
        sdt: {
            type: String,
        }, 
        address: {
            type: String,
        },
    }
);

module.exports = mongoose.model("Customer", customerSchema);
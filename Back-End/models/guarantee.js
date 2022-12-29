const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guaranteeSchema = new Schema (
    {
        name: {
            type: String,
        },
        address: {
            type: String,
        },
        account: {
            type: String,
        }
    }
);

module.exports = mongoose.model("Guarantee", guaranteeSchema);
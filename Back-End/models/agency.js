const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agencySchema = new Schema (
    {
        name: {
            type: String,
        },
        address: {
            type: String,
        },
        storage: {
            type: Array,
        },
        account: {
            type: String,
        }
    }
);

module.exports = mongoose.model("Agency", agencySchema);
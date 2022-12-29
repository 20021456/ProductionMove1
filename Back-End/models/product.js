const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema (
    {
        code: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        factory: {
            type: Array,
        },
        agency: {
            type: Array,
        },
        guarantee: {
            type: Array,
        },
    }
);

module.exports = mongoose.model("Product", productSchema);
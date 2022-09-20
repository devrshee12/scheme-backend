const mongoose = require("mongoose");


const SchemeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "must provide the title"],
        trim: true,
    },
    desc:{
        type: String,
        trim: true,
    },
    income:{
        type: String,
        trim: true,
    },
    category: {
        type: Array,
        required: [true, "must provide the category"],
        trim: true,
    },
    criteria: {
        type: Array,
        trim: true,
    },
    docs: {
        type: Array,
        required: [true, "must p"]
    },
    link: {
        type: String,
        trim: true,
    }
})


module.exports = mongoose.model("Scheme", SchemeSchema);

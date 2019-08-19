const mongoose = require('mongoose');
const ReviewSchema = require("./review");

const CakeSchema = new mongoose.Schema({
    baker: String,
    img: String,
    reviews: [ReviewSchema]
}, {timestamps: true});

mongoose.model("Cake", CakeSchema);
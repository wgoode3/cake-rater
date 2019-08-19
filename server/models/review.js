const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    comment: String,
    rating: Number
}, {timestamps: true});

mongoose.model("Review", ReviewSchema);

module.exports = ReviewSchema;
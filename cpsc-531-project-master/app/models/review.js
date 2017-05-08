// load the things we need
var mongoose = require('mongoose');

// define the schema for our review model
var reviewSchema = mongoose.Schema({
    place: String,
    rating: Number,
    written: String,
    date: String,
    user: String,
    image: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Review', reviewSchema);
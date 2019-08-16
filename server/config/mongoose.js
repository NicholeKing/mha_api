console.log("Inside mongoose.js");

const mongoose = require("mongoose");

module.exports = function(db) {
	mongoose.connect(`mongodb://localhost/${db}`, {useNewUrlParser: true});
	require('../models/hero.js');
}
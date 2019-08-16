console.log("Inside hero.js");

const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
	real_name: String,
	alias: String,
	quirk: String,
	status: String
}, {timestamps: true});

mongoose.model("Hero", HeroSchema);
console.log("Connected to heroes.js");

const mongoose = require("mongoose");
const Hero = mongoose.model('Hero');

class Heroes {
	getHeroes(req, res){
		Hero.find()
		    .then(heroes => res.json(heroes))
		    .catch(err => res.json(err));
	}
	getOne(req, res){
		Hero.findById({_id: req.params._id})
			.then(hero => res.json(hero))
			.catch(err => res.json(err));
	}
	create(req, res) {
		let per = new Hero(req.body);
		console.log(req.body);
		per.save()
		   .then(() => res.json({status: "ok"}))
		   .catch(err => res.json(err));
	}
	delete(req, res) {
		Hero.findByIdAndDelete({_id: req.params._id})
		   .then(() => res.json({status: "ok"}))
		   .catch(err => res.json(err));
		};
	update(req, res) {
		Hero.findByIdAndUpdate({_id: req.params._id}, req.body)
			.then(() => res.json({status: "ok"}))
			.catch(err => res.json(err));
	}
}

module.exports = new Heroes();
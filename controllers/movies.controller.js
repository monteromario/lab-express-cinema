const Movie = require("../models/Movie.model");

module.exports.list = (req, res, next) => {
	Movie.find({})
		.then((movies) => {
			res.render("movies", {movies});
			console.log(movies)
		})
		.catch((e) => next(e));
};

module.exports.detail = (req, res, next) => {
	Movie.findById(req.params.id)
		.then((movie) => {
			res.render("movie", movie);
		})
		.catch((e) => next(e));
};
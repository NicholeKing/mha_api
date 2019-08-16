const Heroes = require('../controllers/heroes');

module.exports = function(app) {
	app.get('/heroes', Heroes.getHeroes);
	app.get('/heroes/:_id', Heroes.getOne);
	app.post('/heroes', Heroes.create);
	app.delete('/heroes/:_id', Heroes.delete);
	app.put('/heroes/:_id', Heroes.update);
}
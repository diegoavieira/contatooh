module.exports = function() {
	let controller = {};
	controller.index = function(req, res) {
		res.render('index', {nome: 'Express'});
	};
	return controller;
}
module.exports = function(app) {
	let controller = app.controllers.home;
	app.get('/', controller.index);
}
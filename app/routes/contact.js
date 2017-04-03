module.exports = function(app) {
	let controller = app.controllers.contact;
	app.get('/contacts', controller.contactsList);
	app.get('/contacts/:id', controller.contactGet);
}
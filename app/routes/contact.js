module.exports = app => {
	let controller = app.controllers.contact;
	app.get('/contacts', controller.contactsList);
	app.get('/contacts/:id', controller.getContact);
}
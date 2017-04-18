module.exports = app => {
	let controller = app.controllers.contact;

	app.route('/contacts')
		.get(controller.contactsList);
	
	app.route('/contacts/:id')
		.get(controller.getContact)
		.delete(controller.removeContact);
}
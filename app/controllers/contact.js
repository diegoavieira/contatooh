let contacts = [
	{_id: 1, name: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
	{_id: 2, name: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
	{_id: 3, name: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
];

module.exports = () => {
	let controller = {};
	
	controller.contactsList = (req, res) => {
		res.json(contacts);
	};
	
	controller.getContact = (req, res) => {
		let contactId = req.params.id;
		let contact = contacts.filter(contact => {
			return contact._id == contactId;
		})[0];
		contact ? res.json(contact) : res.status(404).send('Contact not found!');
	};

	controller.removeContact = (req, res) => {
		let contactId = req.params.id;
		contacts = contacts.filter(contatct => {
			return contatct._id != contactId;
		});
		res.status(204).end();
	};

	return controller;
}
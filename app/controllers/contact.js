var contacts = [
	{_id: 1, name: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
	{_id: 2, name: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
	{_id: 3, name: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
];

module.exports = function() {
	var controller = {};
	controller.contactsList = function(req, res) {
		res.json(contacts);
	};
	return controller;
}
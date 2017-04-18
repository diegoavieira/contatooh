angular.module('contatooh').controller('ContactsController', function($scope, $resource) {
	
	$scope.contacts = [];
	$scope.filter = '';

	let Contact = $resource('/contacts/:id');

	function getContacts() {
		Contact.query(function(data) {
			$scope.contacts = data;
		}, function(error) {
			console.log(error);
		});
	};
	getContacts();

	$scope.remove = function(contact) {
		Contact.delete({id: contact._id},
			getContacts,
			function(error) {
				console.log(error);
			}
		);
	};
});
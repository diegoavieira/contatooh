angular.module('contatooh').controller('ContactsController', function($scope) {
	$scope.total = 0;
	$scope.increase = function() {
		$scope.total++;
	};
});
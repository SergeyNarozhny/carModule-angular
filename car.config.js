/**
 * Routes configuration
 * @ngInject [$routeProvider]
 */
function routing($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/static/view/list.html',
			controller: 'main',
			controllerAs: 'main'
		})
		.when('/order/:sid', {
			templateUrl: '/static/view/order.html',
			controller: 'main',
			controllerAs: 'main'
		})
		.when('/confirm/:sid', {
			templateUrl: '/static/view/confirm.html',
			controller: 'main',
			controllerAs: 'main'
		});

	$locationProvider.hashPrefix('');
}
routing.$inject = ['$routeProvider', '$locationProvider'];

export default routing;

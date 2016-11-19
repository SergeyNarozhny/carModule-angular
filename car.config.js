/**
 * Конфигурация маршрутизатора приложения
 * @ngInject [$routeProvider]
 */
function routing($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './static/view/list.html',
			controller: 'main',
			controllerAs: 'main'
		})
		.when('/order/:sid', {
			templateUrl: './static/view/order.html',
			controller: 'main',
			controllerAs: 'main'
		})
		.when('/confirm/:sid', {
			templateUrl: './static/view/confirm.html',
			controller: 'main',
			controllerAs: 'main'
		});
}
routing.$inject = ['$routeProvider'];

export default routing;

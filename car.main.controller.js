import { model } from './model';

/**
 * @class [mainController] Класс основного контроллера приложения
 * @ngInject [$scope, $routeParams] параметры, полученные через DI
 */
export default class mainController {
	/**
	 * @constructor Конструктор класса
	 * @param  $scope
	 * @param  $routeParams
	 */
	constructor($scope, $routeParams, userFactory) {
		this.s = {
			type: 'name',
			order: false
		};
		//this.model = model;
		this.cars = model;
		this.user = userFactory.getData();
		this.sort = function(type) {
			this.s.type = type;
			this.s.order = !this.s.order;
		};


		// Вешаем обработчик события на успешный переход
		$scope.$on('$routeChangeSuccess', () => this.prepareParams($routeParams));

		// @todo $scope.$on('$routeChangeError', ...
	}

	prepareParams(params) {
		this.pag = [];
		if (params.sid) {
			this.car = this.cars.filter(function(car) {
				return car.id == params.sid;
			}).pop();
			this.pag.push({ val: +params.sid });
		}
	}

	processForm() {
		userFactory.setData(this.user);
	}
}

mainController.$inject = ['$scope', '$routeParams', 'userFactory'];

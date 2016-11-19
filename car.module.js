import angular from 'angular';
import ngRoute from 'angular-route';
import mainController from './car.main.controller';
import routing from './car.config';
import uiMask from 'angular-ui-mask';
import userFactory from './car.user.factory';

/**
 * Подключение модуля, роутера, сервиса и контроллера
 */
angular
	.module('car', [ngRoute, uiMask])
	.config(routing)
	.service('userFactory', userFactory)
	.controller('main', mainController);

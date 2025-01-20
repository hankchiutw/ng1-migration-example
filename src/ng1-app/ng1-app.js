import angular from 'angular';
import template from './ng1-app.html';

class MainController {
  static $inject = ['$scope'];

  constructor($scope) {
    $scope.title = 'Here is an AngularJS App';
  }
}

const ng1Module = angular.module('myApp', []);
angular.module('myApp').directive('myAppRoot', () => ({
  controller: MainController,
  template,
}));

export { ng1Module };

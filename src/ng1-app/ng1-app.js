import angular from 'angular';

angular.module('myApp', []);
angular.module('myApp').controller('MainController', [
  '$scope',
  function ($scope) {
    $scope.title = 'Here is an AngularJS App';
  },
]);

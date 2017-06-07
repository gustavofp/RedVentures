'use strict';

angular.module('myApp.home', ['ngRoute', 'myApp.service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$timeout','$scope','produtoService', function($timeout, $scope, produtoService) {

    $scope.produtos = produtoService.getProdutos();

    //$scope.products = [{best-sellers : 'opa'}, {best: 'aeije'}]
    $scope.slickConfigLoaded = true;
    $scope.filtros = [];

    $scope.arrayFiltrado = angular.copy($scope.produtos)

    $scope.incluiFiltro = (filtro) => {
        let i = $.inArray(filtro, $scope.filtros);
        if (i > -1) {
            $scope.filtros.splice(i, 1);
        } else {
            $scope.filtros.push(filtro);
            console.log($scope.filtros);
        }
    }

    $scope.filtroProdutos = function(arrayFiltrado) {

        if ($scope.filtros.length > 0) {
            if ($.inArray(arrayFiltrado.category, $scope.filtros) < 0) {
                return;
            }
        }
        return arrayFiltrado;
    }

}]);

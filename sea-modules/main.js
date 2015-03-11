define(function(require, exports, module) {
	var angular = require("angularjs");
	var $ = require("jquery");
	var main = angular.module("main",[]);
	
	main.controller("mainController",['$scope', '$http',
		function($scope, $http) {
			$http.get('http://localhost:8080/hotelmanage/checkUser').success(function(data) {
				//alert(data);
			}).error(function(){
				alert('error');
			});
			$scope.list = "aaaaa";
		}
	])
	module.exports = main;
});

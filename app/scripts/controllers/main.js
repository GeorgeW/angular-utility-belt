'use strict';

angular.module('angularUiToolbeltApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
  	$scope.dropdown = {
  		title: 'Drop Down',
  		links: ['link home', 'link About', 'Contact', 'Blitz', 'Company', 'Like', 'SEO']
  	};
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

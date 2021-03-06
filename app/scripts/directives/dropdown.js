'use strict';
/*

1. add module as dependency

angular.module('yourModule', ['toolbelt.dropdown']);

2. add $scope.dropdown object in controller (below is example)   

example:

$scope.dropdown = {
	title: 'Drop Down',
	links: ['link home', 'link About', 'Contact', 'Blitz', 'Company', 'Like', 'SEO']
};


*/
angular.module('toolbelt.dropdown', []).directive('dropdown', function() {
	return {
		replace: true,
		transclude: true,
		template: '<ul>' + '<li><a href=""></a>' + '<ul></ul>' + '</li>' + '</ul>',
		restrict: 'EAC',
		link: function postLink(scope, element, attrs) {
			element.find('a').text(scope.dropdown.title);
			scope.dropdown.links.forEach(function(link) {
				var li = document.createElement('li');
				var href = document.createElement('a');
				href.setAttribute('href', '#');
				href.innerHTML = link;
				li.appendChild(href);
				element.find('ul').append(li);

			});

			element.bind('mouseover', function toggle() {
				element.find('ul').css({
					'display': 'block'
				});
			});

			element.bind('mouseout', function() {
				element.find('ul').css({
					'display': 'none'
				});
			});
		}
	};
});
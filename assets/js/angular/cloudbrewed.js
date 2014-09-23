var cloudbrewed = angular.module('cloudbrewed', []);

cloudbrewed.directive('drunkimg', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	element.css("position", "relative");
        	scope.$watch(attrs.drunkimg, function(value) {
		        element.css("-webkit-transform", "rotate(" + value + "deg)");
		        element.css("left", value + "px");
		      });
        }
    };
});
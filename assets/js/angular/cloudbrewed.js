var cloudbrewed = angular.module('cloudbrewed', []);

cloudbrewed.directive('drunkimg', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	element.css("position", "relative");
        	scope.$watch(attrs.drunkimg, function(value) {
		        element.css("-webkit-transform", "rotate(" + value + "deg)");
		        element.css("transform", "rotate(" + value + "deg)");
		      });
        }
    };
});

cloudbrewed.directive('drunktextweight', function(){
	return {
		restrinct: 'A',
		link: function(scope, element, attrs) {
        	scope.$watch(attrs.drunktextweight, function(value) {
        		if (value % 2 == 0) {
        			element.css('font-weight', 'bold');
        		}
        		else {
        			element.css('font-weight', 'normal');
        		}
        	});
		}
	};
});

cloudbrewed.directive('drunktextbeer', function(){
	return {
		restrinct: 'A',
		link: function(scope, element, attrs) {
			scope.originalText = element.text();

        	scope.$watch(attrs.drunktextbeer, function(value) {
        		if (value % 4 == 0) {
        			var replacement = element.text().split(' ').map(function(v){
        				if (v.length % 2 == 0)
        				{
        					return 'BEER';
        				}
        				return v;
        			}).join(' ');

        			element.text(replacement);
        		}
        		else {
        			element.text(scope.originalText);
        		}
        	});
		}
	};
});

cloudbrewed.directive('drunksepia', function(){
	return {
		restrinct: 'A',
		link: function(scope, element, attrs) {
        	scope.$watch(attrs.drunksepia, function(value) {
        		element.css('-webkit-filter', 'sepia(' + value + ')');
        	});
		}
	};
});

cloudbrewed.directive('drunkhue', function(){
	return {
		restrinct: 'A',
		link: function(scope, element, attrs) {
        	scope.$watch(attrs.drunkhue, function(value) {
        		element.css('-webkit-filter', 'hue-rotate(' + value + 'deg)');
        	});
		}
	};
});

cloudbrewed.directive('drunkblur', function(){
	return {
		restrinct: 'A',
		link: function(scope, element, attrs) {
        	scope.$watch(attrs.drunkblur, function(value) {
        		element.css('-webkit-filter', 'blur(' + value + 'px)');
        	});
		}
	};
});
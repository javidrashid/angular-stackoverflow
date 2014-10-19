stackOverflow.directive('setBackgroundColor', [function () {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {
			iElement.on('click', function() {
				$('li').removeClass('changeColor');
				$(this).addClass('changeColor');	
			})
		}
	};
}])
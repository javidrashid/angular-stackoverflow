stackOverflow.directive("whenQuestionsScrolled", function() { 
	return {
		restrict: 'A',
		link: function(scope, elem, attrs) {
			// we get a list of elements of size 1 and need the first element
			raw1 = elem[0];
			// we load more elements when scrolled past a limit
			elem.bind("scroll", function() {
				if (raw1.scrollTop + raw1.offsetHeight + 5 >= raw1.scrollHeight) {
					scope.loading = true;
					// we can give any function which loads more elements into the list
					scope.$apply(attrs.whenQuestionsScrolled);
					
				}
			});
		}
	}
});
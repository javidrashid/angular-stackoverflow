stackOverflow.controller('tagCtrl', function($scope, $http, tagService, appSettings) {
	$scope.appSettings = appSettings;
	tagService.getTags(function(tag_data) {
		$scope.tag_data = tag_data;
	});
	
	$scope.page = 1;
	$scope.totalTags = [];
	$scope.loadMoreTags = function() {
		$scope.loading = true;
		var url = 'http://api.stackexchange.com/2.2/tags?site=stackoverflow&pagesize=70&page=' + $scope.page;
		$http.get(url)
			.success(function(data, status, config, headers) {

				for (var i = 0; i < data.items.length; i++) {
					$scope.totalTags.push(data.items[i]);
				}
				$scope.page += 1;
				$scope.loading = false;
			})
			.error(function(data, status, config, headers) {
				alert('I think StackExchange API is returning some error something with error code ' + status);
			})
	}
	$scope.loadMoreTags();
});
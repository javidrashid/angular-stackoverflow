stackOverflow.controller('questionCtrl', function($scope, questionService, $http) {
  $scope.loading = true; 
  $scope.getQuestions = function(tag_name) {
      questionService.getQuestions(tag_name).then(function(data){
        $scope.data = data;
      })
  }
  $scope.getQuestions('angular');
  $scope.page1 = 1;
	$scope.totalQuestions = [];
	$scope.loadMoreQuestions = function() { console.log('load more questions');
		$scope.loading = true; 
		var url = 'https://api.stackexchange.com/2.2/search?site=stackoverflow&page=' + $scope.page1 + 
		'&pagesize=20&order=desc&sort=activity&tagged=angular';
		$http.get(url)
			.success(function(data, status, config, headers) {
				for (var i = 0; i < data.items.length; i++) {
					$scope.totalQuestions.push(data.items[i]);
				}
				$scope.page1 += 1;
				$scope.loading = false;
				console.log(url);
			})
			.error(function(data, status, config, headers) {
				alert('I think StackExchange API is returning some error something with error code ' + status);
			})
	}
	$scope.loadMoreQuestions();
 });
//http://api.stackexchange.com/2.2/questions?site=stackoverflow&page=1&pagesize=20&order=desc&sort=activity&tagged=java
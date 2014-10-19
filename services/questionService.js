stackOverflow.factory('questionService', function($http, $q) { 
  return {
    getQuestions: function(tag_name) {
      var deferred = $q.defer();
      var url = 'http://api.stackexchange.com/2.2/questions';
      //debugger;
      var config = {
        params: {
          order: 'desc',
          sort: 'activity',
          tagged: tag_name,
          site: 'stackoverflow',
          format: 'json',
          filter: 'withbody',
          jsonp: 'JSON_CALLBACK'
        }
      };
      $http.jsonp(url, config)
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data) {
          deferred.reject(data);
        })
      return deferred.promise;
    }
  }
})


//http://api.stackexchange.com/2.2/questions?site=stackoverflow&page=1&pagesize=20&order=desc&sort=activity&tagged=java
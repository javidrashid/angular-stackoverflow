stackOverflow.factory('answerService', function($http, $q) { 
  return { 
    getAnswers: function(question_id) {
      var deferred = $q.defer();
      var url = 'https://api.stackexchange.com/2.2/questions/' + question_id + '/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody&jsonp=JSON_CALLBACK';
      //debugger;
      /*var config = {
        params: {
          //question_id: question_id,
          //order: 'desc',
          //sort: 'activity',
          site: 'stackoverflow',
          format: 'json',
          order: 'desc',
          sort : 'activity',
          filter: 'withbody',
          jsonp: 'JSON_CALLBACK'
        }
      };*/
      $http.jsonp(url)
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

//https://api.stackexchange.com/2.2/questions/25999282/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody
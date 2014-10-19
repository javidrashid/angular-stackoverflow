stackOverflow.factory('tagService', function($http) { 
  return {
    getTags: function(successcb) {
      $http.get('http://api.stackexchange.com/2.2/tags?site=stackoverflow').
      success(function(tag_data) {
        successcb(tag_data);
        }).
      error(function(data, status, config, headers) {
        alert('The error has occured with status ' + status);
      })
    }
  }
})
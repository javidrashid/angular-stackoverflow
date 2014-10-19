'use strict'
stackOverflow.controller('answerCtrl', function($scope, answerService) {
  $scope.getAnswers = function(question_id, data) {
    answerService.getAnswers(question_id)
      .then(function(data) {
        $scope.answerdata = data;
        $scope.answerlength = data.items.length;
      })
  }
});
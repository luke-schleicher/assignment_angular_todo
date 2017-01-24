todoApp.controller('TodoCtrl',
  ['$scope',
   '$window',
  function($scope, $window){
    $scope.items = [{ text: "Get groceries from the store",
                    dueDate: new Date(),
                    completed: false }];

    $scope.createTodo = function() {
      $scope.newItem.completed = false;
      $scope.items.push($scope.newItem);
      $scope.newItem = {};
    };

  }]
);
todoApp.controller('TodoCtrl',
  ['$scope',
   '$window',
  function($scope, $window){
    $scope.id = 0;
    $scope.items = [{ description: "Get groceries from the store",
                    dueDate: new Date(),
                    completed: false }];
    $scope.notFiltering = true

    $scope.createTodo = function() {
      $scope.newItem.id = $scope.id;
      $scope.newItem.completed = false;
      $scope.items.push($scope.newItem);
      $scope.newItem = {};
      $scope.id += 1;
    };

    $scope.toggleCompleted = function(id) {
      for (var i = 0; i < $scope.items.length; i++) {
        if ($scope.items[i].id === id) {
          $scope.items[i].completed = !$scope.items[i].completed;
          break;
        }
      }
    }

    $scope.deleteItem = function(id) {
        for (var i = 0; i < $scope.items.length; i++) {
        if ($scope.items[i].id === id) {
          $scope.items.splice(i, 1);
          break;
        }
      }
    }

    $scope.toggleShowCompleted = function(){
      $scope.notFiltering = !$scope.notFiltering
    }

    $scope.clearCompleted = function() {
      var i = $scope.items.length
      while (i--) {
        if ($scope.items[i].completed) {
          $scope.items.splice(i, 1);
        }
      }
    }

  }]
);

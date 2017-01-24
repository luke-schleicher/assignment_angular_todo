todoApp.controller('TodoCtrl',
  ['$scope',
   'itemsService',
  function($scope, itemsService){

    $scope.notFiltering = true;

    $scope.createTodo = function() {
      itemsService.createTodo($scope.newItem);
      $scope.newItem = {};
    };

    $scope.toggleCompleted = function(id) {
      itemsService.toggleCompleted(id);
    };

    $scope.deleteItem = function(id) {
      itemsService.deleteItem(id);
    };

    $scope.toggleShowCompleted = function(){
      $scope.notFiltering = !$scope.notFiltering;
    };

    $scope.deleteCompleted = function() {
      itemsService.deleteCompleted();
    };

    $scope.items = itemsService.allItems();

  }]
);

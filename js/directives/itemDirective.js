todoApp.directive('itemDisplay', function(){
  return{
    templateUrl: "js/directives/itemDirective.html",
    restrict: "A",

    scope: true 
  }
})
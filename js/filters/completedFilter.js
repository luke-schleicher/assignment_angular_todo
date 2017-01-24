todoApp.filter("completedFilter", function() {
  return function(collection, notFilteringCompleted) {
    if (notFilteringCompleted) {
      return collection;
    }
  }
})

todoApp.filter("completedFilter", function() {
  return function(collection, notFilteringCompleted) {
    if (notFilteringCompleted) {
      return collection;
    }
    var returnCollection = []

    for(var i = 0; i < collection.length; i++){
      if(!collection[i].completed){
        returnCollection.push(collection[i])
      }
    };

    return returnCollection
  }
})

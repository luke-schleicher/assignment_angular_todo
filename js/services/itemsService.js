todoApp.factory("itemsService", function(){

    var obj = {};
    var _items = [{ description: 'sdkfj', dueDate: 'sdklf', completed: false}];
    var _id = 0;

    obj.allItems = function() {
      return _items;
    };

    obj.createTodo = function(item) {
      var newItem = {};
      newItem.id = _id;
      newItem.description = item.description;
      newItem.dueDate = item.dueDate;
      newItem.completed = false;
      _items.push(newItem);
      _id++;
    };

    obj.toggleCompleted = function(id) {
      for (var i = 0; i < _items.length; i++) {
        if (_items[i].id === id) {
          _items[i].completed = !_items[i].completed;
          break;
        }
      }
    }

    obj.deleteItem = function(id) {
      for (var i = 0; i < _items.length; i++) {
        if (_items[i].id === id) {
          _items.splice(i, 1);
          break;
        }
      }      
    };

    obj.deleteCompleted = function() {
      var i = _items.length;
      while (i--) {
        if (_items[i].completed) {
          _items.splice(i, 1);
        }
      }
    }

    return obj;
})
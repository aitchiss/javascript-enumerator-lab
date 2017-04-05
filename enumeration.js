var Enumeration = function() {}

Enumeration.prototype = {

  // your code here!

  find: function(array, callback){

    var result; 
    array.forEach(function(searchItem){
      
      if ( callback(searchItem) === true ){
        result = searchItem;
      }
    })
    return result;
  },

  map: function(array, callback){
    var newArray = [];
    array.forEach(function(searchItem){

      newArray.push(callback(searchItem));

    })

      return newArray;

  },

  filter: function(array, callback){
    var newArray = []
    array.forEach(function(searchItem){
       if(callback(searchItem)){
        newArray.push(searchItem)
       }

      
    })
    return newArray
  },

  some: function(array, callback){
    var someMatch = false

    array.forEach(function(searchItem){

      if (callback(searchItem)){
        someMatch = true
      }
    })

    return someMatch

  },

  every: function(array, callback){
    var falseCounter = 0

    array.forEach(function(searchItem){
      if (!callback(searchItem)){
        falseCounter++
      }
      
    })

    if (falseCounter > 0){
      return false
    } else {
      return true
    }
  }

}

module.exports = Enumeration;
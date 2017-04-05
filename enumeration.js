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

  }

}

module.exports = Enumeration;
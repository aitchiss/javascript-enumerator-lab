var Enumeration = function() {}

Enumeration.prototype = {

  // your code here!

  find: function(array, callback){

    var result; 
    array.forEach(function(searchItem){
      
      if ( callback(searchItem) === true ){
        // console.log(searchItem)
        result = searchItem;
      }
    })
    return result;
  }

}

module.exports = Enumeration;
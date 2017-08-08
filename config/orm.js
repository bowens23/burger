var connection = require ("./connections.js")




// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  show: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
//cb is a function that got passed as an argument
  add: function(nameofit, cb) { 
     var mySQLQuery = "INSERT INTO burgers (burger_name) VALUES ('" + nameofit + "')"; 
     connection.query(mySQLQuery, function(err, result) { 
       if (err) throw err; 
       cb(result); 
     }); 
   }, 

///www is a generic name of a function that comes from 
   update: function(baz, www){
	var mySQLQuery = "UPDATE burgers SET devoured = 1 WHERE id = "+baz+""; 

	connection.query(mySQLQuery, function(err, result) { 
       if (err) throw err; 
       www(result); 
     }); 
   }
};

// Export the orm object for the model
module.exports = orm;

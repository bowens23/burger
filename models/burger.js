
//this is the  my orm should connect to the orm.  the query stuff will come from the orm.
//var orm = require("../config/config.js")

let connection = require('../config/connections.js');

let burger = {
	show : function(callback){
		connection.query("SELECT * FROM burgers;", function(err, data) {
		    if (err) {
		      throw err;
		    }
		    return callback(data);
		});
	},
	add : function(name, callback){
		console.log (name)
	  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [name], function(err, result) {
	    if (err) {
	      throw err;
	    }
	    callback(result);
	  });		
	},

	update : function(id, callback){

	  connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [id], function(err, result) {
	  	console.log("made it to models file")
	    if (err) {
	      throw err;
	    }

	    callback(result);
	  });
	}
};

module.exports = burger;
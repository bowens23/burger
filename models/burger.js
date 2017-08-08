
//this is the  my orm should connect to the orm.  the query stuff will come from the orm.
//var orm = require("../config/config.js")

var orm = require('../config/orm.js');

let burger = {



	show: function(cb) { 
 		orm.show('burgers', function(res){ 
 			cb(res); 
 		}); 
	}, 

	add: function (name, kallbak) { 
     orm.add(name, function (res){ 
       kallbak(res); 
     }); 
  }, 
	update: function (name, kallbak) { 
     orm.update(name, function (res){ 
       kallbak(res); 
     }); 
  }
}

module.exports = burger;
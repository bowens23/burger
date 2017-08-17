var mysql = require("mysql");

var database_config;
if (process.env.DATABASE_URL) 
{
	database_config = process.env.DATABASE_URL;
} else 
{
	database_config = {
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "burgers_db"
	}
}
var connection = mysql.createConnection(database_config);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

 console.log("connected as id " + connection.threadId);

});
module.exports = connection;
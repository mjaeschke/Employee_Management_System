var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mjaeschke',
  password : 'password1',
  database : 'company_db'
});
 
connection.connect();
module.exports = connection;
//connection.end();

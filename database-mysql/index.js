var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Holacode",
  database: "test"
});

var selectAll = function(callback) {
  connection.query("SELECT * FROM meals", function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(results);
    }
  });
};
var newfunc = function(err, results) {
  console.log(results);
  console.log(err);
};
selectAll(newfunc);
module.exports.selectAll = selectAll;

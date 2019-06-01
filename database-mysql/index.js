var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Holacode",
  database: "test"
});

// var selectAll = function(callback) {
//   connection.query("SELECT * FROM users", function(err, results, fields) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(results);
//     }
//   });
// };
// var newfunc = function(err, results) {
//   console.log(results);
//   console.log(err);
// };
// selectAll(newfunc);
// module.exports.selectAll = selectAll;
exports.postUser = (name, password, cb) => {
  connection.query(
    'INSERT INTO users (name, password) VALUES (?, ?);',
    [name, password],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        cb(results);
      }
    }
  );
};

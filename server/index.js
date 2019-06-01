const express = require("express");
const bodyParser = require("body-parser");
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql/index.js");


const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../react-client/dist"));

app.post("/users", function(request, response){
  const {name, password} = request.body;
  db.postUser(name, password, res => {
    response
    .status(200)
    .send(res)
    .end()
  })
}

);

app.get("/db", function(req, res) {
  db.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log("listening on port 3000!");
});

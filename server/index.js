const express = require('express');
const bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
 const items = require('../database-mysql');


 const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

 app.use(bodyParser.json());
 app.use(express.static(__dirname + '/../react-client/dist'));

 app.get('/List', (request, response) => {
   console.log('here is my req', request.url);

   response
   .status(200)
   .send(groceryList)
   .end();
 });


app.get('/items', function (req, res) {
   items.selectAll(function(err, data) {
     if(err) {
       res.sendStatus(500);
     } else {
       res.json(data);
     }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

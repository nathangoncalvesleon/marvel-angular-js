const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// All other routes should redirect to the index.html
app.route('/')
  .get((req, res) => {
    res.sendFile(path.resolve(__dirname + '/index.html'));
});



app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});





app.use(express.static(__dirname));





//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
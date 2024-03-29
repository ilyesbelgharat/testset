//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.all('*', (req, res) => {  
 res.sendFile(path.join(__dirname + '/dist/index.html'));  
});  
app.listen(process.env.PORT || 8080);  

// Start the app by listening on the default Heroku port


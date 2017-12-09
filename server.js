var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

var config = require('./server/config/config')[env];
require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
// require('./server/config/passport')();
require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');


// var express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const http = require('http');
// var app = express();

// // const api = require('./server/routes/api');
// const api = require('./server/config/routes');

// // Parsers
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Serve the static files
// app.use(express.static(path.join(__dirname, 'dist')));

// // Set API routes
// app.use('/api', api);

// // Send any other routes to the Angular index file
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// // Set port
// const port = process.env.PORT || '3000';
// app.set('port', port);

// // Create the HTTP server
// const server = http.createServer(app);

// server.listen(port, () => console.log(`Running on localhost:${port}`));
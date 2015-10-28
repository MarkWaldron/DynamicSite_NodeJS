var router = require("./router.js");
//Problem: We need a simple way to look at a users badge count
// and JS points from a web browser
//Solution: Use Node.JS to perform the profile query and serve
// our templates via HTTP

// Create a webs server

var http = require('http');
http.createServer(function (request, response){
  router.home(request, response);
  router.user(request, response);
}).listen(3000, '127.0.0.1');
console.log('Server is running at http://127.0.0.1:3000/');

// Function that handles the reading of files and merge in values
  // read from file and get a string
    // merge values in to string

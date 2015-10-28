//Problem: We need a simple way to look at a users badge count
// and JS points from a web browser
//Solution: Use Node.JS to perform the profile query and serve
// our templates via HTTP

//1. Create a webs server

var http = require('http');
http.createServer(function (request, response){
  homeRoute(request, response);
}).listen(3000, '127.0.0.1');
console.log('Server is running at http://127.0.0.1:3000/');

//2. Handle HTTP route GET / and POST /  i.e. Home
  function homeRoute(request, response) {
  // if url == "/" && GET
    // show search
    if(request.url === "/") {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write("Header\n");
      response.write("Search\n");
      response.end("Footer\n");
    }
  // if url == "/" && POST
    // redirect to /:username
};
//3. Handle HTTP route GET /:username i.e. /markwaldron
  // if url == "/..."
    // get json from Treehouse
      // on "end"
        // show Profile
      // on "error"
        // show error

//4. Function that handles the reading of files and merge in values
  // read from file and get a string
    // merge values in to string

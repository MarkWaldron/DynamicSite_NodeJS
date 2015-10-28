var Profile = require("./profile.js");
var renderer = require("./renderer.js");

// Handle HTTP route GET / and POST /  i.e. Home
function home(request, response) {
// if url == "/" && GET
  // show search
  if(request.url === "/") {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    renderer.view("header", {}, response);
    renderer.view("search", {}, response);
    renderer.view("footer", {}, response);
    response.end();
  }
  // if url == "/" && POST
    // redirect to /:username
};
// Handle HTTP route GET /:username i.e. /markwaldron
function user(request, response){
  // if url == "/..."
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    renderer.view("header", {}, response);


    //get json from Treehouse
    var studentProfile = new Profile(username);

    // on "end"
    studentProfile.on("end", function(profileJSON){
      // show Profile

      // store the values we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      // simple response
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);
      response.end();
    });

    // on "error"
    studentProfile.on("error", function(error){
      // show Error
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });

  }
};


module.exports.home = home;
module.exports.user = user;

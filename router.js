var Profile = require("./profile.js");

// Handle HTTP route GET / and POST /  i.e. Home
function home(request, response) {
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
// Handle HTTP route GET /:username i.e. /markwaldron
function user(request, response){
  // if url == "/..."
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");


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
      response.write(values.username + " has " + values.badges + " badges\n");
      response.end("footer\n");
    });

    // on "error"
    studentProfile.on("error", function(error){
      // show Error
      response.write(error.message + "\n");
      response.end("footer\n");
    });

  }
};


module.exports.home = home;
module.exports.user = user;

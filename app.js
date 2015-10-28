//Problem: We need a simple way to look at a users badge count
// and JS points from a web browser
//Solution: Use Node.JS to perform the profile query and serve
// our templates via HTTP

//1. Create a webs server

//2. Handle HTTP route GET / and POST /  i.e. Home
  // if url == "/" && GET
    // show search
  // if url == "/" && POST
    // redirect to /:username

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

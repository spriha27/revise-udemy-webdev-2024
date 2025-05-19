// HINTS:
// 1. Import express and axios
import express from 'express';
import axios from 'axios';

// 2. Create an express app and set the port number.
const port = 3000;
const app = express();

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async (req, res) => {
   try {
    var result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.status(200).render("index.ejs", {
        secret: result.data.secret,
        user: result.data.username
    });
   } catch (error) {
    console.error("Something went wrong.");
    res.status(500).render('index.ejs', {
        secret: "No secret because something went wrong.",
        user: "No User because something went wrong in the server."
    });
   } 
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log("Listening on port " + port);
})
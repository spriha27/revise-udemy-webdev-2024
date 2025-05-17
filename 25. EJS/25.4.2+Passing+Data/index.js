import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname + '/views/index.ejs', {
    heading: "Enter your name below 👇"
  });
});

app.post("/submit", (req, res) => {
  var fname = req.body.fName;
  var lname = req.body.lName;
  var letters = fname.length + lname.length;

  res.render(__dirname + '/views/index.ejs', {
    heading: `There are ${letters} letters in your name.`
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

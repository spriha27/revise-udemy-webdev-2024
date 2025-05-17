//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();
var correctPassword = false;

app.use(bodyParser.urlencoded({extended: true}));

function passwordChecker(request, response, next) {
    var pass = request.body.password;
    if ( pass == "ILoveProgramming"){
        correctPassword = true;
    }
    else{
        correctPassword = false;
        console.error("Wrong Password! You don't get access to my secrets! Nope.");
    }
    next();
}


app.get(("/"), (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.use(passwordChecker);

app.post("/check", (req, res) => {
    if (correctPassword){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.listen(port, () => {
    console.log("Server launched succesfully on port: " + port);
})
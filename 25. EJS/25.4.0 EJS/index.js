import express from "express";
const port = 3000;

const app = express();

app.listen( port, () => {
    console.log("App is listening on port: " + port);
})

app.get('/', (req, res) => {
    res.render("index.ejs", {displayText: sendText});
})

var day = new Date().getDay();
var sendText;

if (day == 6 || day == 0){
    console.log("Weekday");
    sendText = "Hey! It's a weekday, it's time to work hard!"
}
else{
    console.log("Weekend"); 
    sendText = "Hey! It's the weekend, it's time to have fun!"
}

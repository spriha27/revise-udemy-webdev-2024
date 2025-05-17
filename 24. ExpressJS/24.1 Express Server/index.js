import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: +19876543210");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p> Hi I am Spree.</p>");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})


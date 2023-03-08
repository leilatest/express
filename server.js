const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));


var n = new Date();
var d = n.getDay();
var h = n.getHours();
if (d === 0 || d === 6 || h < 9 || 17 < h) {
  app.get("*", (req, res) => {
    res.sendFile(__dirname + "/content/ClosedPage.html");
  });
}
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/content/Home page.html");
 
}); 



app.get("/",(req, res) => {
  res.sendFile(path.resolve("content", "Home page.html"));
});
app.get("/contact",(req, res) => {
  res.sendFile(path.resolve("content", "Contact us.html"));
});
app.get("/services",(req, res) => {
  res.sendFile(path.resolve("content", "Our Services.html"));
});

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is up and running");
});

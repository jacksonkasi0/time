let fs = require("fs");
let path = require("path");
// ----------
let express = require("express");
const app = express();

let date = new Date();
let timeStamp = date.toUTCString();

if (!fs.existsSync("Date")) {
  fs.mkdirSync("Date");
  fs.writeFile(path.resolve("Date", "date.txt"), timeStamp, err => {
    if (err) {
      console.error(err);
    } else {
      console.log("file created successfully!");
    }
  });
} else {
  fs.writeFile(path.resolve("Date", "date.txt"), timeStamp, err => {
    if (err) {
      console.error(err);
    } else {
      console.log("file created successfully");
    }
  });
}

if (fs.existsSync("Date")) {
  app.get("/", (req, res) => {
    res.sendFile(path.resolve("./Date/date.txt"));
  });
}

//sorry, i will fulfil  it after interview .

app.listen(process.env.PORT || 5000);

let fs = require("fs");
let path = require("path");
// ----------

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

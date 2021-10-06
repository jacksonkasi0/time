let fs = require("fs");
let express = require("express");

const app = express();

let date = new Date();

let timeStamp = date.toUTCString();

// fs.writeFile("date.txt", timeStamp, err => {
//   err && console.error(err);
// });

// let time;
// fs.readFile("date.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//   }

//   time = data;
// });

// setTimeout(() => {
//   getDate();
// }, 100);

// function getDate() {
app.get("/", (req, res) => {
  res.send(`<h1> The Current TimeStamp : ${timeStamp}</h1>`);
});
// }

app.listen(process.env.PORT || 5000, () => {
  console.log("server run fine");
});

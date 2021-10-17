let fs = require("fs");
let path = require("path");
// ---

let express = require("express");
let app = express();

let dir = path.join(__dirname, "/myFolder");

app.use("/", express.static(path.join()));

let Data = [];
app.get("/", (req, res) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log(err);
    }
    // ---
    var data = [];

    files.forEach(items => {
      try {
        var isDirectory = fs.statSync(path.resolve(dir, items)).isDirectory();
        //isDirectory === true
        // folder
        if (isDirectory) {
          data.push({ Name: items, Path: dir + "/" + items, Type: "folder" });
        } else {
          // only file
          var ext = path.extname(items);
          if (ext) {
            data.push({
              Name: items,
              Path: dir + "/" + items,
              Type: "ico" + ext
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    });

    // res.json(data)
    Data = [];
    data.forEach(item => {
      Data.push(
        ` 
        <section>
        <figure>
        <div class="imgTag" id=${item.Type} >
        
        <img src="./myFolder/image/${item.Type}.png" alt="" srcset="" />
          </div>
            <figcaption>${item.Name}</figcaption>
          </figure>
          </section>
          `
      );
    });

    module.exports = Data;

    // console.log(Data);

    res.send(
      `
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>File Manager</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="stylesheet" href="./myFolder/css/style.css" />
      </head>
      <body>
        <section>
          <nav class="nav">
          </nav>
        </section>

        <div id="file" >
       ${Data}
        </div>

        <script   src="./time.js"></script> <!-- only for run date function -->
        
        <script  type="module" src="./file.js"></script> 
     
      </body>
    </html>
    `
    );
  });
});

app.listen(process.env.PORT || 5000);

// still not complate

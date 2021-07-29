const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, "./build")));

// GET Data (name, img) related to datecode (tra)
app.get("/api/controls/:tra", (req, res) => {
  tra = req.params.tra;
  fs.readFile(
    path.join(__dirname, `./api/QUALITE/Tracabilite/${tra}.tra`),
    "utf-8",
    (err, data) => {
      data = data.replace(/[\s]+/gm, " ");
      arrayTra = data.split(" ");

      const arr = [];
      for (
        let i = 0, x = 0;
        i < arrayTra.length, x < arrayTra.length / 2;
        i += 2, x++
      ) {
        const chunk = arrayTra.slice(i, i + 2);

        arr.push({ name: chunk[0], img: chunk[1] });
      }

      res.json(arr);
    }
  );
});

// GET Image (img) for specific datecode (tra)
app.get("/api/controls/:tra/file/:img", (req, res) => {
  img = req.params.img;
  const imgFolder = img.substring(0, 3);
  const filepath = path.join(
    __dirname,
    `./api/QUALITE/Tracabilite/${imgFolder}/${img}.jpg`
  );

  res.sendFile(filepath);
});

// GET Control File for datecode (tra)
app.get("/api/controls/:tra/file", (req, res) => {
  tra = req.params.tra;
  const filepath = path.join(
    __dirname,
    `./api/QUALITE/Resultat pour client/${tra}.txt`
  );

  res.download(filepath, `${tra}.txt`);
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});

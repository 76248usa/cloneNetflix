const express = require("express");
const app = express();
const movies = require("./movies.json");
const cors = require("cors");
const { response } = require("express");

app.use(cors());

app.get("/", (req, res) => {
  return res.send("HELLO THERE!");
});

app.get("/movie/:id", (req, res) => {
  //console.log(req);
  const id = req.params.id;
  const movie = movies.find((m) => m.id === id);
  return res.send(movie);
});

app.get("/movies/list", (req, res) => {
  return res.send(movies);
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});

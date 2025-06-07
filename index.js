const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");
const { error } = require("console");

app.use(bodyParser.json());

// endpoint
app.get("/", (req, res) => {
  const sql = "SELECT * FROM mahasiswa";
  db.query(sql, (error, result) => {
    // hasil data sql skema cuyuniversity
    response(200, result, "get all data from mahasiswa", res);
  });
});

app.get("/find", (req, res) => {
    // hasil dari sql skema cuyuniversity select nama_lengkap
  const sql = `SELECT nama_lengkap FROM mahasiswa WHERE nim = ${req.query.nim}`;
  db.query(sql, (error, result) => {
    response(200, result, "Find mahasiswa name: ", res);
  });
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.send("login berhasil");
});

app.put("/username", (req, res) => {
  console.log({ updateData: req.body });
  res.send("update berhasil!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

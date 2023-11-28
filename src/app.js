const express = require("express");
const cors = require("cors");
const api = require("./api");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", api);

module.exports = app;

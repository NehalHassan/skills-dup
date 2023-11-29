const express = require("express");
const cors = require("cors");
const api = require("./api");
const allowCors = require("./allow-cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use(allowCors());
app.use("/api", api);

module.exports = app;

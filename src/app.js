const express = require("express");
const cors = require("cors");
const api = require("./api");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// app.use(function (_, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use("/api", api);

module.exports = app;

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const log = require("./src/services/staticService/logger").LOG;
const route = require("./src/routes/index.route");
const swaggerUI = require("swagger-ui-express");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/v1", route);

// Swagger endpoints

// app.use(
//   "/docs/user",
//   swaggerUI.serveFiles(require("./swagger-useroutput.json")),
//   swaggerUI.setup(require("./swagger-useroutput.json"))
// );

module.exports = app;

require("dotenv").config()

const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = 4000;
const app = express();
const authenticated = require("./middlewares/authenticated")

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:8000",
  })
);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../Frontend/dist")));

app.get("/authorization",(req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist", "index.html"));
});

app.use("/", routes);

// Маршрут для индексного HTML файла
app.get("*",authenticated ,(req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist", "index.html"));
});


mongoose
  .connect(
    process.env.DB_CONNECTION_STRING
  )
  .then(async () => {
    app.listen(port, () => {
      console.log(chalk.green(`Server has been started on port ${port}...`));
    });
  });

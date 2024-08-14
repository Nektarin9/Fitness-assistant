const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");
const routes = require("./routes")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors');


const port = 4000;
const app = express();


app.use(cors({
  origin: 'http://localhost:8000'
}));

app.use(bodyParser.json());
app.use("/", routes);

mongoose
  .connect(
   "mongodb+srv://Nektarin:6258210qwe@cluster0.tf5yuoy.mongodb.net/Fitness?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(async () => {
    app.listen(port, () => {
      console.log(chalk.green(`Server has been started on port ${port}...`));
    });
  });

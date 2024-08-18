const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");
const routes = require("./routes")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');

const port = 4000;
const app = express();

app.use(cors({
  origin: 'http://localhost:8000'
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../Frontend/dist')));

app.use("/", routes);

// Маршрут для индексного HTML файла
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

mongoose
  .connect(
   "тут будет АПИ"
  )
  .then(async () => {
    app.listen(port, () => {
      console.log(chalk.green(`Server has been started on port ${port}...`));
    });
  });

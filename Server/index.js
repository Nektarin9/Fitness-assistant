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
// мультер
const upload = require("./middlewares/upload-file")
// мультер
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:8000",
  })
);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../Frontend/dist")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist", "index.html"));
});

app.use("/", routes);
app.use('/uploads',authenticated, express.static(path.join(__dirname, 'uploads')));

// Маршрут для индексного HTML файла
app.get("*",authenticated ,(req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist", "index.html"));
});




// Указываем Express обслуживать статические файлы из папки 'uploads'



app.post('/upload',authenticated, upload.single('file'), (req, res) => {
  console.log(req.file.filename)
  const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
  res.status(200).send(`Изображение успешно загружено ${imageUrl}`);
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

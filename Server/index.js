require('dotenv').config();

const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = 4000;
const app = express();
const authenticated = require('./middlewares/authenticated');

app.get('/sw.js', (req, res) => {
	res.setHeader('Content-Type', 'application/javascript');
	res.sendFile(path.join(__dirname,'../Frontend/sw.js'));
  });
// мультер
app.use(cookieParser());
app.use(
	cors({
		origin: 'http://localhost:8000',
	}),
);


app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../Frontend/dist')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

app.use('/', routes);

app.use(authenticated);

// Второй вызов app.use для express.static с параметром maxAge
app.use(express.static(path.join(__dirname, 'public'), { maxAge: "1d" }));

// Маршрут для индексного HTML файла
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

mongoose.connect(process.env.DB_CONNECTION_STRING).then(async () => {
	app.listen(port, () => {
		console.log(chalk.green(`Server has been started on port ${port}...`));
	});
});

const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/'); // Укажите папку для сохранения загруженных файлов
	},
	filename: function (req, file, cb) {
		if (req.file) {
			const imagePath = path.join(__dirname, '../public/', req.file.filename);
			if (fs.existsSync(imagePath)) {
				fs.unlinkSync(imagePath);
			}
		}

		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, uniqueSuffix + '-' + file.originalname); // Генерация уникального имени файла
	},
});

const fileFilter = (req, file, cb) => {
	const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; // Разрешенные типы изображений
	if (allowedTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(
			new Error(
				'Недопустимый тип файла. Разрешены только изображения JPEG, PNG и GIF.',
			),
		);
	}
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;

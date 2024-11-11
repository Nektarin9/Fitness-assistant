const Clients = require('../models/clients');
const fs = require('fs');
const path = require('path');

async function removeImage(params) {
	const data = await Clients.findById(params);

	const imageUrl = data.image;
	const urlObj = new URL(imageUrl);
	const fileUrl = urlObj.pathname;
	const filePath = path.join(__dirname, '../public');

	if (fileUrl !== '/default.jpg') {
		fs.unlink(`${filePath}${fileUrl}`, (err) => {
			if (err) {
				console.error('Ошибка при удалении файла:', err);
				return;
			}
		});
	}
}

module.exports = { removeImage };

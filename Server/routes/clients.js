const express = require('express');
const {
	getClients,
	getClient,
	postClient,
	deleteClient,
	updateClient,
	updateTableClient,
} = require('../controller/clients');
const mapClients = require('../helpers/mapClients');
const upload = require('../middlewares/upload-file');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
	try {
		const clients = await getClients();
		res.send(clients.map((client) => mapClients(client)));
	} catch (error) {
		res.send(error);
	}
});

router.get('/:id', async (req, res) => {
	try {
	} catch (error) {
		res.send(error);
	}
	const client = await getClient(req.params.id);

	res.send(mapClients(client));
});

router.post('/', upload.single('imageFile'), async (req, res) => {
	try {
		const { defaultImg, name, phone, age, trainingProgram } = req.body;
		let imageUrl = req.protocol + '://' + req.get('host') + '/';
		if (defaultImg === 'RESET' || defaultImg === '') {
			imageUrl = imageUrl + 'default.jpg';
		} else {
			imageUrl = imageUrl + req.file.filename;
		}

		const newClient = await postClient({
			image: imageUrl,
			name,
			phone,
			age,
			trainingProgram,
		});
		res.send(mapClients(newClient));
	} catch (error) {
		res.send({ error });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await deleteClient(req.params.id);
		res.send(req.params.id);
	} catch (error) {
		res.send({ error });
	}
});

router.patch('/', upload.single('imageFile'), async (req, res) => {
	try {
		const { defaultImg, name, phone, age, id } = req.body;
		let isNewImage = true;
		let imageUrl = req.protocol + '://' + req.get('host') + '/';
		if ((defaultImg !== 'RESET' && req.file) || defaultImg === '') {
			if (req.file) {
				imageUrl = imageUrl + req.file.filename;
			} else {
				isNewImage = false;
			}
		} else if (defaultImg === 'RESET') {
			imageUrl = imageUrl + 'default.jpg';
		} else {
			isNewImage = false;
		}
		const client = await updateClient({
			isNewImage,
			image: imageUrl,
			name,
			phone,
			age,
			params: id,
		});
		res.send(mapClients(client));
	} catch (error) {
		console.log(error);
		res.send({ error });
	}
});

router.patch('/save-table/:id', async (req, res) => {
	try {
		await updateTableClient(req.body, req.params.id);
		res.send(req.body);
	} catch (error) {
		res.send({ error });
	}
});

module.exports = router;

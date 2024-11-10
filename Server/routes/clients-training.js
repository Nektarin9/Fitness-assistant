const express = require('express');
const mapClients = require('../helpers/mapClients');
const { postClientExercise, deleteTraining } = require('../controller/clients-training');

const router = express.Router({ mergeParams: true });

router.post('/:id', async (req, res) => {
	try {
	} catch (error) {
		res.send({ error });
	}
	const newTraning = await postClientExercise(req.body, req.params.id);
	res.send(mapClients(newTraning).trainingProgram.pop());
});

router.post('/', async (req, res) => {
	try {
		await deleteTraining(req.body);
		res.send(req.body);
	} catch (error) {
		res.send({ error });
	}
});

module.exports = router;

const express = require('express');
const { getExercises, postExercises, deleteExercises } = require('../controller/exports');
const mapExercises = require('../helpers/mapExercises');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
	try {
		const exercises = await getExercises(
			req.query.limit,
			req.query.search,
			req.query.page,
		);
		exercises.exercises = [...exercises.exercises.map((item) => mapExercises(item))];
		res.send(exercises);
	} catch (error) {
		res.send({ error });
	}
});

router.post('/', async (req, res) => {
	try {
		const newExercises = await postExercises(req.body);
		res.send(newExercises);
	} catch (error) {
		res.send({ error });
	}
});

router.delete('/:id', async (req, res) => {
	await deleteExercises(req.params.id);
	res.send(req.params.id);
});

module.exports = router;

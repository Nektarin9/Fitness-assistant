const express = require("express");
const mapClients = require("../helpers/mapClients");
const {
  postClientExercise,
  deleteTraining,
} = require("../controller/clients-training");

const router = express.Router({ mergeParams: true });

router.post("/:id", async (req, res) => {
  const newTraning = await postClientExercise(req.body, req.params.id);
  res.send(mapClients(newTraning).trainingProgram.pop());
});

router.delete("/", async (req, res) => {
  await deleteTraining(req.body);
  res.send(req.body);
});

module.exports = router;

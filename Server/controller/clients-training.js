const Clients = require("../models/clients");

async function postClientExercise(data, params) {
  const client = await Clients.findById(params);
  client.training_program.push(data);
  await Clients.updateOne(
    { _id: params }, // Используем _id вместо id
    { $set: client }
  );
  return client;
}

async function deleteTraining({ id, trainingId }) {
  const client = await Clients.findById(id);
  client.training_program.forEach((item, index) => {
    if (item._id.toString() === trainingId) {
      client.training_program.splice(index, 1);
    }
  });
  await Clients.updateOne(
    { _id: id }, // Используем _id вместо id
    { $set: client }
  );
}

module.exports = {
  postClientExercise,
  deleteTraining,
};

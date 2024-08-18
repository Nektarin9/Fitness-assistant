const Clients = require("../models/clients");

async function getClients() {
  const clients = await Clients.find();
  return clients;
}

async function getClient(params) {
  const client = await Clients.findById(params); // Находим объект по ID
  return client;
}

async function postClient({ image, name, phone, age, trainingProgram }) {
  await Clients.create({
    image,
    name,
    phone,
    age,
    training_program: trainingProgram,
  });
}

async function deleteClient(params) {
  await Clients.deleteOne({ _id: params });
}

async function updateClient({ image, name, phone, age }, params) {
  const updatedClientt = { image, name, phone, age };
  await Clients.updateOne(
    { _id: params }, // Используем _id вместо id
    { $set: updatedClientt }
  );

  return updatedClientt;
}

module.exports = {
  getClients,
  getClient,
  postClient,
  deleteClient,
  updateClient,
};

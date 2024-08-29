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
  const newClient = await Clients.create({
    image,
    name,
    phone,
    age,
    training_program: trainingProgram,
  });
  return newClient;
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
  const newClient = await Clients.findById(params);

  return newClient;
}

async function updateTableClient(training, id) {
  const client = await Clients.findById(id); // Находим объект по ID
  client.training_program.forEach((item) => {
    if (item._id.toString() === training.id) {
      item.table = [
        ...training.table.filter(
          ({ description, exercise }) => description || exercise
        ),
      ];
    }
  });

  await Clients.updateOne(
    { _id: id }, // Используем _id вместо id
    { $set: client }
  );
  return training.id;
}

module.exports = {
  getClients,
  getClient,
  postClient,
  deleteClient,
  updateClient,
  updateTableClient,
};

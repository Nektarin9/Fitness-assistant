const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TableSchema = new Schema({

  exercise: {
    type: String,
  },
  description: {
    type: String,
  },
});

const TrainingProgramSchema = new Schema({

  table: [TableSchema],
});

const ClientSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  age: {
    type: String,
  },
  training_program: [TrainingProgramSchema],
});

const Clients = mongoose.model("Clients", ClientSchema);

module.exports = Clients;



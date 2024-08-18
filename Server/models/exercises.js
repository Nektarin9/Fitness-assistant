const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExercisesSchema = new Schema({
  exerciseName: {
    type: String,
  },
  category: {
    type: String,
  },
});

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;

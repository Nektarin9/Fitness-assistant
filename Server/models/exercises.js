const mongoose = require("mongoose");
const ExercisesSchema = mongoose.Schema({
  exerciseName: {
    type: String,
  },
  category: {
    type: String,
  },
});

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;

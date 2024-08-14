const Exercises = require("../models/exercises");

async function getExercises(limit = 8, search = "", page = 1) {
  let filterQuery = {};

  if (search) {
    filterQuery.exerciseName = { $regex: search, $options: "i" };
  }
  const skip = (page - 1) * limit;
  const exercises = await Exercises.find(filterQuery).limit(limit).skip(skip);

  const totalExercises = await Exercises.countDocuments(filterQuery);
  return { exercises, total: totalExercises };
}

async function postExercises({ exerciseName, category }) {
  const newExercises = await Exercises.create({
    exerciseName,
    category,
  });
  return newExercises;
}


async function deleteExercises(id) {
    await Exercises.deleteOne({ _id: id });
}

module.exports = { getExercises, postExercises, deleteExercises };

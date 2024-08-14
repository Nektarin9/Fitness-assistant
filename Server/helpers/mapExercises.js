module.exports = function (exercises) {
  return {
    id: exercises._id,
    exerciseName: exercises.exerciseName,
    category: exercises.category,
  };
};

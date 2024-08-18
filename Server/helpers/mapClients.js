const { replaceKeysInObject } = require("./replace-keysIn-object");

module.exports = function (clients) {
  const regularObject = JSON.parse(JSON.stringify(clients));
  const data = replaceKeysInObject(regularObject)
  return {
    id: data.id,
    image: data.image,
    name: data.name,
    phone: data.phone,
    age: data.age,
    trainingProgram: data.training_program,
  };
};

const { Animal } = require('../models/animals');

async function addAnimal({ log }, animal) {
  log.info(animal, 'inserting animal record');
  return Animal.create(animal);
}

async function getAnimals({ log }) {
  log.info('fetching animal data');
  return Animal.find({});
}

async function emptyAnimalList({ log }) {
  log.info('truncating db');
  return Animal.deleteMany({});
}

module.exports = {
  addAnimal,
  getAnimals,
  emptyAnimalList,
};

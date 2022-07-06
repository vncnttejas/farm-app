const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

async function initTestMongo() {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
  return mongod;
}

async function stopTestMongo(mongod) {
  await mongoose.disconnect();
  await mongod.stop();
}

module.exports = {
  initTestMongo,
  stopTestMongo,
};

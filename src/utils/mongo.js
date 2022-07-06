const mongoose = require('mongoose');

async function initMongo({ uri }) {
  return mongoose.connect(uri);
}

module.exports = {
  initMongo,
};

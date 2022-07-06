const { Schema, default: mongoose } = require('mongoose');

const animalSchema = new Schema({
  name: Schema.Types.String,
  description: Schema.Types.String,
  weight: Schema.Types.Number,
  height: Schema.Types.Number,
  type: Schema.Types.String,
});

animalSchema.index({ name: 1 }, { unique: true });
animalSchema.index({ description: 1 });
animalSchema.index({ weight: -1 });

const Animal = mongoose.model('Animal', animalSchema);

module.exports = {
  Animal,
};

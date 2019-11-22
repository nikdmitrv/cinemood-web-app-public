const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
});

// все фильмы заданной категории
filmSchema.statics.getByCategory = async function (category) {
  return await this.find({ category });
};
// все фильмы
filmSchema.statics.allFilms = async function () {
  return await this.find();
};
// фильм по имени
filmSchema.statics.getByName = async function (title) {
  return await this.findOne({ name: title });
};

module.exports = mongoose.model('Films', filmSchema);

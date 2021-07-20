const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    mainLand: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    countryOrCity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;

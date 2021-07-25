const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// reikia apibrezti kokio tipo duomenys bus saugomi DB

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    continent: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: true,
      min: 0,
    },
    placeType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } /// adds timestamps
);

// exportuoti naujai sukurta objekta pagal sia schema
//                           turetu buti vienaskai musu kolecijos pav.
const PlaceModel = mongoose.model('place', placeSchema);

module.exports = PlaceModel;

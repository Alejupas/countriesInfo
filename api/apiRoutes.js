const express = require('express');
const router = express.Router();
const Place = require('../model/Place');

router.post('/addNewPlace', async (req, res) => {
  console.log(req.body);

  const newPlace = new Place(req.body);
  try {
    const result = await newPlace.save();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.get('/allPlaces', async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json('internal error');
  }
});

router.get('/delete/:id', async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id });
  res.send({ success: true, msg: `Place ${req.body.title} has been deleted.` });
});

router.put('/edit/:id', async (req, res) => {
  const { title, mainLand, population, countryOrCity } = req.body;
  await User.findOneAndUpdate(
    { _id: id },
    {
      title,
      mainLand,
      population,
      countryOrCity,
    }
  );
  res.send({ success: true, msg: `Place ${title} has been updated.` });
});

module.exports = router;

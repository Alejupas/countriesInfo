const express = require('express');
const PlaceModel = require('../models/Place');
const router = express.Router();

// create new place
router.post('/api/place/new', async (req, res) => {
  const gotNewPlaceData = req.body;
  console.log(' gotNewPlaceData', gotNewPlaceData);
  //   res.json('you are about to create a place');
  // naujos vietos sukurimas naudojant modeli
  const newPlace = new PlaceModel(gotNewPlaceData);
  try {
    const creatingNewPlaceResult = await newPlace.save();
    res.json(creatingNewPlaceResult);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all places
router.get('/api/place', async (req, res) => {
  try {
    const allPlacesFromDb = await PlaceModel.find({});
    res.json(allPlacesFromDb);
  } catch (error) {
    res.status(500).json();
  }
});

// filter  places
router.get('/api/place/:filterVal', async (req, res) => {
  const filterBy = req.params.filterVal;
  try {
    const allPlacesFromDb = await PlaceModel.find({ placeType: filterBy });
    res.json(allPlacesFromDb);
  } catch (error) {
    res.status(500).json();
  }
});

// delete a place
router.delete('/api/place/delete/:placeId', async (req, res) => {
  const idOfItemToDelete = req.params.placeId;
  try {
    const deleteResult = await PlaceModel.findByIdAndDelete(idOfItemToDelete);
    res.json(deleteResult);
  } catch (error) {
    res.status(500).json();
  }
});
// Update a place
router.put('/api/place/update/:placeId', async (req, res) => {
  const idOfItemToUpdate = req.params.placeId;
  const updatedPlaceData = req.body;
  try {
    const updateResult = await PlaceModel.findByIdAndUpdate(
      idOfItemToUpdate,
      updatedPlaceData
    );
    res.json(updateResult);
  } catch (error) {
    res.status(500).json();
  }
});
module.exports = router;

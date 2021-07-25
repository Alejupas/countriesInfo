import axios from 'axios';

export const getPlaces = async () => {
  try {
    const allPlacesFromDb = await axios.get('http://localhost:4000/api/place');
    // jei gavom duomenis
    console.log('if we got data');
    if (Array.isArray(allPlacesFromDb.data) && allPlacesFromDb.data.length) {
      // nustatom state i tai ka gavom
      return allPlacesFromDb.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const updatePlaceSend = async (id, updatedDetails) => {
  try {
    const updateResult = await axios.put(
      'http://localhost:4000/api/place/update/' + id,
      updatedDetails
    );
    if (updateResult.data) return true;
  } catch (error) {
    console.error(error);
  }
};

export const createPlaceSend = async (dataToCreateNewPlace) => {
  try {
    const createResult = await axios.post(
      'http://localhost:4000/api/place/new',
      dataToCreateNewPlace
    );
    return createResult.data ? true : false;
  } catch (error) {
    console.error(error);
  }
};

export const deletePlaceSend = async (id) => {
  try {
    const deleteResult = await axios.delete(
      'http://localhost:4000/api/place/delete/' + id
    );
    // console.log('deleteResult', deleteResult.data);
    // atnaujinti sarasa kad neliktu ka istrynem
    if (deleteResult.data) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getFilteredPlaces = async (filterValue) => {
  try {
    const filteredPlaces = await axios.get(
      'http://localhost:4000/api/place/' + filterValue
    );
    if (Array.isArray(filteredPlaces.data) && filteredPlaces.data.length) {
      // nustatom state i tai ka gavom
      return filteredPlaces.data;
    }
  } catch (error) {
    console.error(error);
  }
};

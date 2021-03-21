require('isomorphic-fetch');

const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

const storeNewLocation = (location) => {
  return {
    type: 'SAVE_LOCATION',
    data: location,
  };
};

export const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)));
  };
};

export const saveLocation = (data) => {
  return (dispatch) => {
    return fetch('/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then(json => dispatch(storeNewLocation(json)))
      .catch((error) => {
        return error;
      });
  };
};

export const toggleValidationModal = (errors) => {
  console.log('errors: ', errors)
  return (dispatch) => {
    return dispatch({ type: 'SHOW_MODAL', data: errors })
  }
}
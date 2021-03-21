const initialState = {
  data: [],
  openModal: false,
  errors: [],
  center: [39.750809, -104.996810],
};

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
      });
    case 'SAVE_LOCATION':
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
        center: [action.data.lat, action.data.lng]
      });
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        openModal: !state.openModal,
        errors: action.data,
      });
    default:
      return state;
  }
};

export default Locations;

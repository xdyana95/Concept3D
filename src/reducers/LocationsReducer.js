const initialState = {
  data: [],
  openModal: false,
  errors: [],
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
      });
    case 'SHOW_MODAL':
      console.log('here', state.openModal, action.data)
      return Object.assign({}, state, {
        openModal: !state.openModal,
        errors: action.data
      });
    default:
      return state;
  }
};

export default Locations;

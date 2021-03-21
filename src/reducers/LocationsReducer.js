const initialState = {
  data: [],
};

const Locations = (state = initialState, action) => {
  console.log(state.data);
  switch (action.type) {
    case 'STORE_LOCATIONS':
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
      });
    case 'SAVE_LOCATION':
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
      });
    default:
      return state;
  }
};

export default Locations;

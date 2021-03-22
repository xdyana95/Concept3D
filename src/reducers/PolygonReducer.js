const initialState = {
  polygon: []
};

const Polygon = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POLYGON_POSITION':
      return Object.assign({}, state, {
        polygon: [...state.polygon, action.data]
      });
    case 'REMOVE_POLYGON_POSITION':
      return Object.assign({}, state, {
        polygon: state.polygon.filter((e, i) => i !== action.data)
      })
    default:
      return state;
  }
};

export default Polygon

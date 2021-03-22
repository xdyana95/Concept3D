export const addPolygonPosition = (position) => {
  return (dispatch) => {
    return dispatch({ type: 'ADD_POLYGON_POSITION', data: position })
  }
}

export const removePolygonPosition = (index) => {
  return (dispatch) => {
    return dispatch({ type: 'REMOVE_POLYGON_POSITION', data: index })
  }
}
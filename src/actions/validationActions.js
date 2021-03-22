export const toggleValidationModal = (errors) => {
  return (dispatch) => {
    return dispatch({ type: 'SHOW_MODAL', data: errors })
  }
}
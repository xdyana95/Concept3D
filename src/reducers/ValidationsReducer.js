const initialState = {
  openModal: false,
  errors: [],
};

const Validations = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        openModal: !state.openModal,
        errors: action.data,
      });
    default:
      return state;
  }
};

export default Validations;

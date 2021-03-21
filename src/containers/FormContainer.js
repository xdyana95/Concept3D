import { connect } from 'react-redux'
import Form from '../components/Form'
import { bindActionCreators } from 'redux';
import { saveLocation, toggleValidationModal } from '../actions/locationActions';

const mapStateToProps = (state) => {
  return { openModal: state.Locations.openModal };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveLocation, toggleValidationModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

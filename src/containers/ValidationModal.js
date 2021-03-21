import { connect } from 'react-redux'
import ValidationModal from '../components/ValidationModal'
import { bindActionCreators } from 'redux';
import { toggleValidationModal } from '../actions/locationActions';

const mapStateToProps = (state) => {
  return { errors: state.Locations.errors };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleValidationModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidationModal);

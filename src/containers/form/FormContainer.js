import { connect } from 'react-redux'
import Form from '../../components/form/Form'
import { bindActionCreators } from 'redux';
import { saveLocation } from '../../actions/locationActions';
import { toggleValidationModal } from '../../actions/validationActions';

const mapStateToProps = (state) => {
  return { openModal: state.Validations.openModal };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveLocation, toggleValidationModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

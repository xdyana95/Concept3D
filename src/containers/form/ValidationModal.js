import { connect } from 'react-redux'
import ValidationModal from '../../components/form/ValidationModal'
import { bindActionCreators } from 'redux';
import { toggleValidationModal } from '../../actions/validationActions';

const mapStateToProps = (state) => {
  return { errors: state.Validations.errors };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleValidationModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidationModal);

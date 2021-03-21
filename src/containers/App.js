import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/App.css';
import {fetchAllLocations} from '../actions/locationActions';
import App from '../components/App';

const mapStateToProps = state => {
  return { 
    locations: state.Locations.data, 
    openModal: state.Locations.openModal,
    center: state.Locations.center,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchAllLocations }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

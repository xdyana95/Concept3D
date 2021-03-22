import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AllMarkers from '../../components/map/AllMarkers';
import { addPolygonPosition, removePolygonPosition } from '../../actions/polygonActions';

const mapStateToProps = (state) => {
  return { 
    locations: state.Locations.data,
    polygon: state.Polygon.polygon,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addPolygonPosition, removePolygonPosition }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);

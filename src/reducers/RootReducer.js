import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
import Validations from './ValidationsReducer';
import Polygon from './PolygonReducer';

const RootReducer = combineReducers({
  Locations,
  Validations,
  Polygon
});

export default RootReducer;

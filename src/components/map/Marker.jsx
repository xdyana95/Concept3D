import React, { useCallback } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import tealdot from '../../imgs/tealdot.svg';
import pinkdot from '../../imgs/pinkdot.svg';
import { findLocationInPolygon } from '../../utils/polygonUtils';

const MapMarker = (props) => {
  const { name, location, polygon, addPolygonPosition, removePolygonPosition } = props;

  const icon = L.icon({
    iconUrl: findLocationInPolygon(polygon, location) > -1 ? pinkdot : tealdot,
    iconSize: [15, 15],
  });

  const setPolygon = useCallback((location) => {
    const { lat, lng } = location.latlng;
    const newLocation = [lat, lng];
    const indexInPolygon = findLocationInPolygon(polygon, newLocation);
    indexInPolygon > -1 
      ? removePolygonPosition(indexInPolygon) 
      : addPolygonPosition(newLocation);
  }, [addPolygonPosition, polygon]);

  return (
    <div className="marker-container">
      <Marker position={location} icon={icon} onClick={setPolygon}>
        <Tooltip sticky interactive>
          <div>
            <h4>{name}</h4>
          </div>
        </Tooltip>
      </Marker>
    </div>
  );
}

export default React.memo(MapMarker);

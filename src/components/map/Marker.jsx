import React, { useCallback, useMemo } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { findLocationInPolygon } from '../../utils/polygonUtils';
import greenLeaf from '../../imgs/leaf-green.png'
import redLeaf from '../../imgs/leaf-red.png'
import leafShadow from '../../imgs/leaf-shadow.png'

const MapMarker = (props) => {
  const { name, location, polygon, addPolygonPosition, removePolygonPosition } = props;

  const icon = useMemo(() => L.icon({
    iconUrl: findLocationInPolygon(polygon, location) > -1 ? redLeaf : greenLeaf,
    shadowUrl: leafShadow,
    iconSize:     [20, 50], 
    shadowSize:   [20, 30],  
    popupAnchor:  [-3, -76],
    iconAnchor: [12, 50],
    shadowAnchor: [3, 30],
  }), [polygon, location]);

  const setPolygon = useCallback((location) => {
    const { lat, lng } = location.latlng;
    const newLocation = [lat, lng];
    const indexInPolygon = findLocationInPolygon(polygon, newLocation);
    indexInPolygon > -1 
      ? removePolygonPosition(indexInPolygon) 
      : addPolygonPosition(newLocation);
  }, [addPolygonPosition, removePolygonPosition, polygon]);

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

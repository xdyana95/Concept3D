import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import tealdot from '../imgs/tealdot.svg';

const MapMarker = (props) => {

  const icon = L.icon({
    iconUrl: tealdot,
    iconSize: [15, 15],
  });

  return (
    <div className="marker-container">
      <Marker position={props.location} icon={icon}>
        <Tooltip sticky interactive>
          <div>
            <h4>{props.name}</h4>
          </div>
        </Tooltip>
      </Marker>
    </div>
  );
}

export default React.memo(MapMarker);

import React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import AllMarkers from '../containers/AllMarkers'

const LeafletMap = (props) => {

  return (
    <div className="map-container">
      <Map
        className="map"
        zoomControl={false}
        center={props.center}
        zoom={4}
        maxBounds={[[85, 100], [-85, -280]]}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          maxZoom={10}
          minZoom={2}
        />
        <ZoomControl
          position="bottomright"
        />
        <AllMarkers />
      </Map>
    </div>
  );
 
}

export default LeafletMap;

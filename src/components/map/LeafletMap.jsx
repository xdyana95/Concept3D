import React from 'react';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import AllMarkers from '../../containers/map/AllMarkers'
import { connect } from 'react-redux';

const LeafletMap = (props) => {
  const { center, polygon } = props;

  return (
    <div className="map-container">
      <Map
        className="map"
        zoomControl={false}
        center={center}
        zoom={4}
        maxBounds={[[85, 100], [-85, -280]]}
      >
        <Polygon positions={polygon}/>
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

const mapStateToProps = (state) => {
  return { 
      center: state.Locations.center,
      polygon: state.Polygon.polygon
  }
}

export default React.memo(connect(mapStateToProps)(LeafletMap));

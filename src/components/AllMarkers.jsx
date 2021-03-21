import React from 'react';
import MapMarker from './Marker';

const AllMarkers = (props) => {

    const { locations } = props;

    const markerArray = locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
        />
      );
    });

    return <div className="paths-container">{markerArray}</div>;
}

export default React.memo(AllMarkers);

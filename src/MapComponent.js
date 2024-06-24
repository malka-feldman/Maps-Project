// src/MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAT9OJvb_Wr28q7Wf5gqKFjSFN96YRWTic">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;

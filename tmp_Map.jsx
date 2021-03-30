import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const dataTable = [
  {
    key: 368,
    position: {
      lat: 32.844151,
      lng: -86.591963,
    },
  },
  {
    key: 225,
    position: {
      lat: 31.419105,
      lng: -87.00765,
    },
  },
  {
    key: 381,
    position: {
      lat: 34.367333,
      lng: -86.89353,
    },
  },
];

// withGoogleMap takes a react component and returns one. We call these "Higher Order Components"
const MyMap = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={4}
    defaultCenter={{ lat: 25.7392, lng: -104.9903 }}
    onClick={props.onMapClick}
  >
    {dataTable.map((marker) => (
      <Marker
        key={marker.key}
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

// We use object destructuring here to shorten our code
export default function Map(props) {
  return (
    <MyMap
      className="test"
      containerElement={<div style={{ height: `60%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      onMapLoad={() => {
        console.log('map is loaded');
      }}
      onMapClick={() => {
        console.log('map is clicked');
      }}
      // markers={locations}
      markers={props.mapData}
      onMarkerRightClick={() => {
        console.log('onMarkerRightClick is clicked');
      }}
    />
  );
}

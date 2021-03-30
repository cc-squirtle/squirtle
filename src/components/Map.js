import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const dataTable = [
    {
        key: 368,
        position: {
            lat: 35.65276408536717, 
            lng: 139.71233546727083
        }
    },
    {
        key: 225,
        position: {
            lat: 34.97158036354114, 
            lng: 138.95753531309717
        }
    },
    {
        key: 381,
        position: {
            lat: 35.44024378020946,  
            lng: 139.62879999071512
        }
    }
]

const MyMap = withGoogleMap((props) => (
    <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: 38.0947841436263, lng: 139.86262510034172 }} 
    >
        {dataTable.map((marker) => (
            <Marker
                key={marker.key}
                {...marker}
                onRightClick={() => console.log("marker was clicked")}
            />
        ))}
    </GoogleMap>
));

export default function Map() {
    return (
            <MyMap
                className="map"
                containerElement={<div className="map-container" />}
                mapElement={<div className="map" />}
                onMapLoad={()=> console.log('map is loaded')}
            />
    )
}

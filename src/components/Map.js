import React  from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import axios from 'axios'
import { useState } from 'react';
import cors from 'cors'



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
    const [taps, setTaps] = useState([])
    const dummyLocation = {
        c1: "35.671812626599866",
        c2: "139.73655447363853",
        c3: "35.64245244856602",
        c4: "139.75432142615318"
    }
    let config = {
        method: 'get',
        url: 'https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/area?c1=35.671812626599866&c2=139.73655447363853&c3=35.64245244856602&c4=139.75432142615318',
        headers: { 
          'Authorization': 'Bearer 1|qRCvaTxpPdSaD7JS5UDLY1EOjwYn9du9aqaa8gaW', 
          'Cookie': '__cfduid=d7b2c60129a99d627016e615c3a3989371617092346'
        }
      };
      async function axiosLocation() {
          const result = await axios(config)
          console.log(result);
          console.log(result.data);
      }
      axiosLocation();

    return (
        <MyMap
            containerElement={<div style={{ height: `500px`, width: `900px` }}/>}
            mapElement={<div style={{ height: `100%` }} />}
            onMapLoad={()=> console.log('map is loaded')}
        />
    )
}

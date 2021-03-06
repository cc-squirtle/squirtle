import React, { useEffect, useState, useRef } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
const axios = require('axios');

const defaultTable = [
    {
        id: 47311,
        list: 'japan',
        name: 'Roppongi station',
        longitude: 139.7311884,
        latitude: 35.6644401,
        address:
            '第6DMビル, Roppongi 4 Chome, Tokyo, Chiyoda, Tokyo Prefecture, Japan',
        comment: null,
        category_id: 0,
        coordinate: {
            type: 'Point',
            coordinates: [139.7311884, 35.6644401],
        },
        photo_url:
            'https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/31',
        copyright: null,
        photos: [
            {
                id: 31,
                approved: true,
                url:
                    'https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_47311_5fa14966a0472.jpg',
            },
        ],
    },
    {
        id: 178372,
        list: 'japan',
        name:
            'Site of the Chōshū Domain Edo Mansion / 長州藩主毛利家下屋敷跡碑',
        longitude: 139.732971,
        latitude: 35.6669649,
        address:
            '1-6 Hibiyakōen, Chiyoda City, Tōkyō-to 100-0012〒107-0052 Tōkyō-to, Minato City, Akasaka, 9-chōme−7−9',
        comment:
            'Right next to the pond behind Roppongi Midtown. ミッドタウンの裏にある公園の池の側です！\n\n',
        category_id: 0,
        coordinate: {
            type: 'Point',
            coordinates: [139.732971, 35.6669649],
        },
        photo_url:
            'https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/71',
        copyright: null,
        photos: [
            {
                id: 71,
                approved: true,
                url:
                    'https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_178372_5fa14970054da.jpg',
            },
        ],
    },
    {
        id: 197034,
        list: 'japan',
        name:
            'Takahashi Korekiyo Memorial Park Fountain 高橋是清翁記念公園内噴水',
        longitude: 139.7287382,
        latitude: 35.6740131,
        address: '7 Chome-3-39 Akasaka, Minato City, Tokyo 107-0052',
        comment: 'Water fountain in park公園内公共噴水\n\n',
        category_id: 0,
        coordinate: {
            type: 'Point',
            coordinates: [139.7287382, 35.6740131],
        },
        photo_url:
            'https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/287',
        copyright: null,
        photos: [
            {
                id: 287,
                approved: true,
                url:
                    'https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_197034_5fa14989ec189.jpg',
            },
        ],
    },
    {
        id: 197126,
        list: 'japan',
        name: 'Tokyo Garden Terrace Kioicho',
        longitude: 139.7370976,
        latitude: 35.679517,
        address:
            '1-9, 紀尾井町, Motoakasaka 1 Chome, Tokyo, Chiyoda, Tokyo Prefecture, Japan',
        comment:
            "1階の女子トイレの中Fountain in the 1st floor ladies' toilets\n\n",
        category_id: 0,
        coordinate: {
            type: 'Point',
            coordinates: [139.7370976, 35.679517],
        },
        photo_url:
            'https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/352',
        copyright: null,
        photos: [
            {
                id: 352,
                approved: true,
                url:
                    'https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_197126_5fa14ce731675.jpg',
            },
        ],
    },
    {
        id: 197103,
        list: 'japan',
        name: 'Nogizaka Street Corner Space 乃木坂 道路沿い広場内',
        longitude: 139.7303301,
        latitude: 35.6685951,
        address: '9-chōme-3 Akasaka, Minato City, Tōkyō-to 107-0052',
        comment: 'Fountain inside the corner space広場内噴水\n\n',
        category_id: 0,
        coordinate: {
            type: 'Point',
            coordinates: [139.7303301, 35.6685951],
        },
        photo_url:
            'https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/340',
        copyright: null,
        photos: [
            {
                id: 340,
                approved: true,
                url:
                    'https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_197103_5fa14ce4befb4.jpg',
            },
        ],
    },
    {
        id: 197119,
        list: 'japan',
        name: 'Nagatacho GRiD',
        longitude: 140.739605,
        latitude: 35.679827,
        address:
            'Nagatacho GRID 2 Chome-5-3 Hirakawachō, Chiyoda City, Tokyo 102-0093',
        comment:
            'Open: 09:00 - 23:00*Water server:* Ask community manager in 2F lounge. If they are not present, proceed beyond the counter and turn left past the white brick wall for the water server.2Fのラウンジのカウンターまで進み、コミュニティマネージャーに給水したいとお声掛けください。担当者がいない場合：カウンターの奥の白い壁の左側を通り過ぎると、ウォーターサーバーがあります。*Tap water:* Walk to the end of the 2F corridor. Turn left and you will find a small kitchen.水道水：ラウンジに入らず、廊下の奥まで進むと左側に小さなキッチンと蛇口があります。自由に給水してください。水道水 / Tap water浄水 / Filtered waterお湯 / Hot water\n\n',
        category_id: 4,
        coordinate: {
            type: 'Point',
            coordinates: [139.739605, 35.679827],
        },
        photo_url:
            'https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/348',
        copyright: null,
        photos: [
            {
                id: 348,
                approved: true,
                url:
                    'https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_197119_5fa14ce671fcd.jpg',
            },
            {
                id: 407,
                approved: true,
                url:
                    'https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_197119_5fa1498f013bb.jpg',
            },
        ],
    },
    {
        id: 197211,
        list: 'japan',
        name: '港区立一ツ木児童遊園 Minato ward Hitotsugi Childrens Park',
        longitude: 139.7346937,
        latitude: 36.6732341,
        address:
            '港区立一ツ木児童遊園, Akasaka 5 Chome, Tokyo, Chiyoda, Tokyo Prefecture, Japan',
        comment:
            '公園の中に飲用と手洗い用の蛇口があります。A water fountain and tap inside the park\n\n',
        category_id: 0,
        coordinate: {
            type: 'Point',
            coordinates: [139.7346937, 35.6732341],
        },
        photo_url:
            'https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/416',
        copyright: null,
        photos: [
            {
                id: 416,
                approved: true,
                url:
                    'https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_197211_5fa14990ec9d5.jpg',
            },
        ],
    },
    {
        id: 197212,
        list: 'japan',
        name: '一ツ木公園 Hitotsugi Park',
        longitude: 139.533417,
        latitude: 36.8708179,
        address:
            '5-9, 赤坂五丁目, Akasaka 5 Chome, Tokyo, Chiyoda, Tokyo Prefecture, Japan',
        comment:
            '公園の中に飲用と手洗い用の蛇口があります。Water fountain and tap inside the park\n\n',
        category_id: 0,
        coordinate: {
            type: 'Point',
            coordinates: [139.733417, 35.6708179],
        },
        photo_url:
            'https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/417',
        copyright: null,
        photos: [
            {
                id: 417,
                approved: true,
                url:
                    'https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_197212_5fa1499130250.jpg',
            },
        ],
    },
    {
        id: 198016,
        list: 'japan',
        name: '檜町公園',
        longitude: 138.7327414,
        latitude: 34.6672141,
        address:
            '柿右衛門, Roppongi 4 Chome, Tokyo, Chiyoda, Tokyo Prefecture, Japan',
        comment: '公園内の水飲み場\n\n',
        category_id: 0,
        coordinate: {
            type: 'Point',
            coordinates: [139.7327414, 35.6672141],
        },
        photo_url:
            'https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/1253',
        copyright: null,
        photos: [
            {
                id: 1253,
                approved: true,
                url:
                    'https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_198016_5fa149e48e676.jpg',
            },
            {
                id: 3188,
                approved: true,
                url:
                    'https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_198016_5fa14c4b0f21c.jpg',
            },
        ],
    },
];

const defaultMapView = {
    geometry: {
        bounds: {
            northeast: {
                lat: 45.6412626,
                lng: 154.0031455,
            },
            southwest: {
                lat: 35.3585295,
                lng: 122.8554688,
            },
        },
        location: {
            lat: 38.204824,
            lng: 139.252924,
        },
        viewport: {
            northeast: {
                lat: 45.6412626,
                lng: 154.0031455,
            },
            southwest: {
                lat: 40.3585295,
                lng: 130.8554688,
            },
        },
    },
};

function calcZoom(mapView) {
    let kilo =
        Math.max(
            mapView.geometry.viewport.northeast.lat -
                mapView.geometry.viewport.southwest.lat,
            mapView.geometry.viewport.northeast.lng -
                mapView.geometry.viewport.southwest.lng
        ) * 90;
    let level =
        kilo > 2500
            ? 5
            : kilo > 2000
            ? 5
            : kilo > 1000
            ? 6
            : kilo > 500
            ? 7
            : kilo > 200
            ? 8
            : kilo > 100
            ? 9
            : kilo > 50
            ? 10
            : kilo > 25
            ? 11
            : kilo > 12
            ? 12
            : kilo > 5
            ? 13
            : kilo > 2
            ? 14
            : kilo > 0.75
            ? 15
            : 16;

    return level;
}

export default function Map(props) {
    const [mapView, setMapView] = useState(defaultMapView);
    const [taps, setTaps] = useState(defaultTable);

    async function getMapView(center) {
        try {
            if (center === '') return;
            const data = await axios.get(`/geo?str=${center}`);
            return data.data.results[0];
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(async () => {
        if (props.center !== '') {
            const result = await getMapView(props.center);
            if (!result) {
                console.log('return called');
                return;
            }

            console.log('getMapView result:', result);
            console.log('getMapView viewport:', result.geometry.viewport);
            console.log(
                'getMapView max kilo -> 500px:',
                Math.max(
                    result.geometry.viewport.northeast.lat -
                        result.geometry.viewport.southwest.lat,
                    result.geometry.viewport.northeast.lng -
                        result.geometry.viewport.southwest.lng
                ) * 90
            );

            setMapView(result);
        }
    }, [props.center]);

    async function getTaps() {
        if (mapView === '' || mapView === undefined || !mapView) {
            console.log(
                'getTaps called but mapView is falsy. mapView: ',
                mapView
            );
            return;
        }

        const data = await axios.get(
            `/mymizu?c1=${mapView.geometry.viewport.northeast.lat}&c2=${mapView.geometry.viewport.southwest.lng}&c3=${mapView.geometry.viewport.southwest.lat}&c4=${mapView.geometry.viewport.northeast.lng}`
        );
        // console.log('async function getTaps() data.data: ', data.data);

        // if count is 0, then return undefined
        if (data.data.count === 0) {
            console.log('call return');
            return;
        }

        // add for list
        data.data.taps.forEach(
            (tap) =>
                (tap.list = props.center ? props.center.toLowerCase() : 'japan')
        );
        console.log(data.data.taps);
        return data.data.taps;
    }

    useEffect(async () => {
        if (props.center !== '') {
            const result = await getTaps();
            console.log('useEffect getTaps result: ', result);

            if (result) {
                setTaps(result);
            }
        }
    }, [mapView]);

    function handleClicked(tap) {
        console.log('tap clicked', tap);
        props.setMyTaps((prevTaps) => [...prevTaps, tap]);
        props.setHasChanged(true);
    }

    const MyMap = withGoogleMap((props) => (
        <GoogleMap center={mapView.geometry.location} zoom={calcZoom(mapView)}>
            {taps.map((tap) => (
                <Marker
                    key={tap.id}
                    id={tap.id}
                    position={{ lat: tap.latitude, lng: tap.longitude }}
                    {...tap}
                    onRightClick={() => console.log('tap was clicked')}
                    onClick={() => handleClicked(tap)}
                    icon={{
                        url:
                            'https://mt.googleapis.com/vt/icon/name=icons/spotlight/spotlight-poi.png&scale=1',
                    }}
                />
            ))}
            {props.myTaps.map((tap) => (
                <Marker
                    key={tap.id + 'selected'}
                    id={tap.id + 'selected'}
                    position={{ lat: tap.latitude, lng: tap.longitude }}
                    {...tap}
                    icon={{
                        url:
                            'https://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-blue.png&scale=1',
                    }}
                />
            ))}
        </GoogleMap>
    ));

    return (
        <MyMap
            className="map"
            containerElement={<div className="map-container" />}
            mapElement={<div className="map" />}
            onMapLoad={() => console.log('map is loaded')}
            setMyProps={props.setMyProps}
            myTaps={props.myTaps}
        />
    );
}

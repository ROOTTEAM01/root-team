import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {ImLocation2} from "react-icons/im";
import {divIcon} from 'leaflet';
import {renderToString} from 'react-dom/server';
import './map.css'

export let Map = () => {
    // Установка начальных координат
    const position = [40.164232, 44.513292];

    // Convert ImLocation2 component to HTML string
    const locationIconHtml = renderToString(<ImLocation2 color="#bd0000" size={30}/>);

    // Define custom icon
    const locationIcon = divIcon({
        html: locationIconHtml,
        iconSize: [30, 30],
        className: 'location-icon'
    });

    return (
        <div className='map'>
            <div className='map-container'>
                <MapContainer center={position} zoom={13} style={{height: '360px', width: '100%'}}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} icon={locationIcon}>
                        <Popup>
                            Rootteam
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

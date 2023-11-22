import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet library
import 'leaflet/dist/leaflet.css';

import customMarkerIcon from './logo_mapa.jpeg';

const customIcon = new L.Icon({
    iconUrl: customMarkerIcon, // Path to the custom icon image
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon (tip of the icon)
  });

const MapComponent = ({ coordinates, title }) => {
    return (
        <MapContainer center={coordinates} zoom={13} style={{ width: '100%', height: '400px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={coordinates} icon={customIcon}>
            <Popup>{title}</Popup>
          </Marker>
        </MapContainer>
    );
  };
  
  export default MapComponent;
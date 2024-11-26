import "leaflet/dist/leaflet.css";
import "./Map.css"

import { Circle, MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { Icon } from "leaflet";

import mapPinIcon from "./assets/map-pin.svg";
import { useRef, useState } from "react";
import Leaflet from "leaflet"; // Importando L para acessar o tipo L.Map


interface MapProps {
    userLocation: {
        latitude: number,
        longitude: number,
    },
    markerLocations: {
        latitude: number,
        longitude: number,
        id: string,
        label: string
    }[];
}

function Map({ userLocation, markerLocations }: MapProps) {

    const [center, setCenter] = useState<[number, number]>([userLocation.latitude, userLocation.longitude]);

    const mapRef = useRef<Leaflet.Map | null>(null);

    const handleMarkerClick = (latitude: number, longitude: number) => {
        setCenter([latitude, longitude]); // Atualiza a posição central
        if (mapRef.current) {
            mapRef.current.flyTo([latitude, longitude], 15, { // Usa flyTo para mover o mapa com animação
                animate: true,
                duration: 1, // Duração da animação
            });
        }
    };

    const markerIcon: Icon = new Icon({
        iconUrl: mapPinIcon,
        iconSize: [45, 45],
    });

    return (
        <div className="map">

            <MapContainer
                className="leaflet-container"
                center={center}
                zoom={13}
                scrollWheelZoom={true}
                ref={mapRef}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
                />

                {markerLocations.map((location) => (
                    <Marker
                        key={location.id}
                        position={[location.latitude, location.longitude]}
                        icon={markerIcon}
                        eventHandlers={{
                            click: () => handleMarkerClick(location.latitude, location.longitude), // Atualiza a posição do mapa
                        }}>

                        <Popup>
                            {location.label}
                        </Popup>
                    </Marker>
                ))}

                <Circle
                    center={[userLocation.latitude, userLocation.longitude]}
                    pathOptions={{ color: 'blue' }}
                    radius={150}
                    eventHandlers={{
                        click: () => handleMarkerClick(userLocation.latitude, userLocation.longitude), // Atualiza a posição do mapa
                    }}>
                    <Tooltip>Sua localização</Tooltip>
                </Circle>

            </MapContainer>
        </div>
    )
}

export default Map

import "leaflet/dist/leaflet.css";
import "./Map.css"
import { CircleMarker, MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { Icon } from "leaflet";
import mapPinIcon from "./assets/map-pin.svg";

function Map() {

    const customIcon: Icon = new Icon({
        iconUrl: mapPinIcon,
        iconSize: [45, 45],
    });

    return (
        <div className="map">

            <MapContainer className="leaflet-container" center={[-8.0619662,-34.8742999]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
                />
                <Marker position={[-8.0618064, -34.871831]} icon={customIcon}>
                    <Popup>
                        Pernambuco trabalhando 🚀
                    </Popup>
                </Marker>

                {location && 
                
                <CircleMarker
                    center={[-8.0621248,-34.8818916]}
                    pathOptions={{ color: 'blue' }}
                    radius={20}>
                    <Tooltip>Tooltip for CircleMarker</Tooltip>
                </CircleMarker>}

            </MapContainer>
        </div>
    )
}

export default Map

import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Map() {
    return (
        <MapContainer center={[-8.0618064, -34.871831, 21]} zoom={18} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-8.0618064, -34.871831, 21]}>
                <Popup>
                    Pernambuco trabalhando 🚀
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map

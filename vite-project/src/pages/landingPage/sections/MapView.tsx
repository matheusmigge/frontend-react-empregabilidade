import "./MapView.css"
import MapArrow from "../assets/mapArrow.svg"

function MapView () {

    return (
        <section className="mapView">
            <h2 className="title">Encontre sua vaga ou candidato facilmente com nossa visualização em mapa!</h2>
            <img src={MapArrow} alt="Seta Mapa" className="mapArow"/>
        </section>
    )
}

export default MapView
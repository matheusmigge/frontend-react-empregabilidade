import "../styles/pages-css/home.css"
import MapsIcon from "../assets/assetsHeader/2703072_maker_map_marker_icon 1.svg"
import ListIcon from "../assets/assetsHeader/iconList.svg"
import Header from "../components/Header";

function Home () {


    return(
        <>
        <body className="body-container">
              <Header
              titulo="Vagas disponíveis"
              icon1={MapsIcon}
              icon2={ListIcon}
              btnFilterMap="Mapa"
              btnFilterList="Lista"
              />
        </body>
        </>
    )
}

export default Home;
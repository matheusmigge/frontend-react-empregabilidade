import "./AdvantagesCards.css";
import busSvg from "../assets/bus.svg";
import clockSvg from "../assets/clock.svg";
import jobSvg from "../assets/job.svg";
import TextualButton from "../../../components/textual-button/TextualButton";
import { Link } from "react-router-dom";

function AdvantagesCards() {
  return (
    <section className="advantagesCards">
      <h2 className="cardsTitle">
        Alguns benefícios que você pode ter trabalhando em empresas próximas:
      </h2>

      <div className="cardsContainer">
        <div className="lpCard">
          <span className="text-container">
            <h3 className="textCard">Menos gasto com transporte</h3>
          </span>
          <img src={busSvg} alt="busIcon" />
        </div>

        <div className="lpCard">
          <span className="text-container">
            <h3 className="textCard">Menos tempo de deslocamento</h3>
          </span>
          <img src={clockSvg} alt="busIcon" />
        </div>

        <div className="lpCard">
          <span className="text-container">
            <h3 className="textCard">Maior produtividade</h3>
          </span>
          <img src={jobSvg} alt="busIcon" />
        </div>
      </div>
      <Link to="/entrance" className="linkStyle">
        <TextualButton className="ctaButton" text="quero me cadastrar!" />
      </Link>
    </section>
  );
}

export default AdvantagesCards;

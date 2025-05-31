import "../card/card.css";
import infoIcon from "./assets/case.svg";
import availableIcon from "./assets/availableIcon.svg";
import unavailableIcon from "./assets/unavailableIcon.svg";
import MapPinIcon from "../card/assets/map-pin-white.svg";
import candidatesIcon from "../../assets/candidates.svg";
import TextualButton from "../textual-button/TextualButton";

interface CardProps {
  layoutMode: "job" | "application";
  topText: string;
  logoName?: string;
  jobTitle: string;
  available: boolean;
  info: string;
  radiusDistance?: string;
  maximumApplications?: number;
  currentApplications?: number;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

function Card({
  layoutMode,
  topText,
  logoName,
  jobTitle,
  available,
  info,
  radiusDistance,
  maximumApplications,
  currentApplications
}: CardProps) {
  const statusText = available ? "Em andamento" : "Encerrada";
  const statusIcon = available ? availableIcon : unavailableIcon;

  return (
    <>
      <div className={`card ${available ? "available" : "unavailable"}`}>

        <div className="div-top">

          <p className="logo-text">

            {layoutMode === "job" && logoName ? (
              <img src={logoName} alt="Logo empresa" className="logo" />
            ) : (<div className="candidate-logo">
              <p>{getInitials(topText)}</p>
            </div>)}
            {topText}
          </p>
          <p className="status">
            {statusText}
            <img src={statusIcon} alt="" className="statuslogo" />
          </p>
        </div>

        <div className="div-middle">
          <p className="title">{jobTitle}</p>
        </div>

        <div className="div-bottom">

          <p className="text">

            {info && <img src={infoIcon} alt="" />}
            {info}
          </p>

          {radiusDistance && (<TextualButton imageUrl={MapPinIcon} text={radiusDistance} />)}

          {maximumApplications && currentApplications && (
            <p className="text">
              <img src={candidatesIcon} alt="" />
              {currentApplications} / {maximumApplications}
            </p>)}

        </div>
      </div>
    </>
  );
}

export default Card;

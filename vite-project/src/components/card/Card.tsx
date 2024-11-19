import "../card/card.css";
import infoIcon from "./assets/case.svg";
import candidatesIcon from "./assets/users.svg";
import availableIcon from "./assets/availableIcon.svg";
import unavailableIcon from "./assets/unavailableIcon.svg";

interface CardProps {
  companyName: string;
  logoName: string;
  jobTitle: string;
  available: boolean;
  info: string;
  amount: string;
}

function Card({
  companyName,
  logoName,
  jobTitle,
  available,
  info,
  amount,
}: CardProps) {
  const statusText = available ? "Disponível" : "Indisponível";
  const statusIcon = available ? availableIcon : unavailableIcon;

  return (
    <>
      <div className={`card ${available ? "available" : "unavailable"}`}>

        <div className="div-top">

          <p className="name">
            {logoName && (
              <img src={logoName} alt="Logo empresa" className="logo" />
            )}
            {companyName}
          </p>
          <p className="status">
            {statusText}
            <img src={statusIcon} alt="" className="statuslogo" />
          </p>
        </div>

        <div className="div-middle">
          <p className="title">{`・ ${jobTitle}`}</p>
        </div>

        <div className="div-bottom">

          <p className="info">

            {info && <img src={infoIcon} alt="" className="case" />}
            {info}
          </p>
          <p className="amount">
            <img src={candidatesIcon} alt="" className="candidates" />
            {amount}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;

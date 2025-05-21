import "./Entrance.css";
import logoCompletaVetor from "../../assets/logoCompletaVetor.svg";
import maletaVetor from "../../assets/maletaVetor.svg";
import usuarioVetor from "../../assets/usuarioVetor.svg";
import TextualButton from "../../components/textual-button/TextualButton";
import UserSignIn from "./user-signIn/UserSignIn";
import CompanySignIn from "./company-signIn/CompanySignIn";
import CompanySignUp from "./company-signUp/CompanySignUp";
import UserSignUp from "./user-signUp/UserSignUp";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Entrance() {
  const [registerType, setRegisterType] = useState("candidate");
  const [showCompanySignUp, setShowCompanySignUp] = useState(false);
  const [showUserSignUp, setShowUserSignUp] = useState(false);

  const handleClick = (type: string) => {
    setRegisterType(type);

    if (type === "company") {
      setShowCompanySignUp(showUserSignUp);
      setShowUserSignUp(false);
    } else if (type === "candidate") {
      setShowUserSignUp(showCompanySignUp);
      setShowCompanySignUp(false);
    }
  };

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("userSignUp") === "true") {
      setRegisterType("candidate");
      setShowUserSignUp(true);
    }
  }, [location.search]);

  return (
    <>
      <body className="body-container">
        <section className="leftSide">
          <div className="logoContainer">
            <img src={logoCompletaVetor} alt="Logo da RE9AÇÃO" />
          </div>
          <div className="buttonContainer">
            <TextualButton
              className={`enterpriseButton ${
                registerType === "company" ? "selected" : ""
              }`}
              text="Sou empresa"
              imageUrl={maletaVetor}
              onClick={() => handleClick("company")}
            />
            <TextualButton
              className={`candidateButton ${
                registerType === "candidate" ? "selected" : ""
              }`}
              text="Sou candidato"
              imageUrl={usuarioVetor}
              onClick={() => handleClick("candidate")}
            />
          </div>
          <div className="back-to-lp">
            <p>
              Voltar ao <Link to="/">Início</Link>
            </p>
          </div>
        </section>

        <section className="rightSide">
          {registerType === "company" &&
            (showCompanySignUp ? (
              <CompanySignUp onLoginClick={() => setShowCompanySignUp(false)} />
            ) : (
              <CompanySignIn onSignUpClick={() => setShowCompanySignUp(true)} />
            ))}
          {registerType === "candidate" &&
            (showUserSignUp ? (
              <UserSignUp onLoginClick={() => setShowUserSignUp(false)} />
            ) : (
              <UserSignIn onSignUpClick={() => setShowUserSignUp(true)} />
            ))}
        </section>
      </body>
    </>
  );
}

export default Entrance;

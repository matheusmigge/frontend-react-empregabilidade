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
  // Controla tipo de registro selecionado
  const [registerType, setRegisterType] = useState("candidate");
  // Controla exibição do cadastro de empresa
  const [showCompanySignUp, setShowCompanySignUp] = useState(false);
  // Controla exibição do cadastro de usuário
  const [showUserSignUp, setShowUserSignUp] = useState(false);

  // Alterna entre login/cadastro de empresa ou candidato
  const handleClick = (type: string) => {
    setRegisterType(type);
    if (type === "company") {
      setShowCompanySignUp(showUserSignUp || showCompanySignUp);
      setShowUserSignUp(false);
    } else {
      setShowUserSignUp(showUserSignUp || showCompanySignUp);
      setShowCompanySignUp(false);
    }
  };

  const location = useLocation();

  // Exibe cadastro de usuário se vier da landing page com parâmetro
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("userSignUp") === "true") {
      setRegisterType("candidate");
      setShowUserSignUp(true);
    }
  }, [location.search]);

  return (
    <>
      <body className="entrance">
        <section className="leftSide">
          {/* Logo */}
          <div className="logoContainer">
            <img src={logoCompletaVetor} alt="Logo da RE9AÇÃO" />
          </div>
          {/* Botões para escolher tipo de acesso */}
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
          {/* Link para voltar à landing page */}
          <div className="back-to-lp">
            <p>
              Voltar ao <Link to="/">Início</Link>
            </p>
          </div>
        </section>

        <section className="rightSide">
          {/* Renderiza login/cadastro de empresa */}
          {registerType === "company" &&
            (showCompanySignUp ? (
              <CompanySignUp onLoginClick={() => setShowCompanySignUp(false)} />
            ) : (
              <CompanySignIn onSignUpClick={() => setShowCompanySignUp(true)} />
            ))}
          {/* Renderiza login/cadastro de candidato */}
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

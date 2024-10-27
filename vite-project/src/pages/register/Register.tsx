import "./register.css";
import logoCompletaVetor from "../../assets/logoCompletaVetor.svg";
import maletaVetor from "../../assets/maletaVetor.svg";
import usuarioVetor from "../../assets/usuarioVetor.svg";
import TextualButton from "../../components/textual-button/TextualButton";
import CompanyRegister from "../../components/company-register/CompanyRegister";
import UserRegister from "../../components/user-register/UserRegister";
import { useState } from "react";

function Register() {
  const [registerType, setRegisterType] = useState("candidate");

  const handleClick = (type: string) => {
    setRegisterType(type);
  }

  return (
    <>
      <body className="body-container">

        <section className="leftSide">
          <div className="logoContainer">
            <img src={logoCompletaVetor} alt="Logo da RE9AÇÃO" />
          </div>
          <div className="buttonContainer">
            <TextualButton
              className={`enterpriseButton ${registerType == "company" ? "selected" : ""}`}
              text="Sou empresa"
              imageUrl={maletaVetor}
              onClick={() => handleClick("company")}
            />
            <TextualButton
              className={`candidateButton ${registerType == "candidate" ? "selected" : ""}`}
              text="Sou candidato"
              imageUrl={usuarioVetor}
              onClick={() => handleClick("candidate")}
            />
          </div>
        </section>

        <section className="rightSide">
          {registerType == "company" && <CompanyRegister></CompanyRegister>}
          {registerType == "candidate" && <UserRegister></UserRegister>}
        </section>

      </body>
    </>
  );
}

export default Register;

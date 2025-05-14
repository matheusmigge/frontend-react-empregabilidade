import "./UserSignUp.css";
import TextualButton from "../../../components/textual-button/TextualButton";
import linkedinVetor from "../../../assets/linkedinVetor.svg";
import googleVetor from "../../../assets/googleVetor.svg";
import SymbolButton from "../../../components/symbol-button/SymbolButton";
import logoCompletaVetor from "../../../assets/logoCompletaVetor.svg";
import maletaVetor from "../../../assets/maletaVetor.svg";
import usuarioVetor from "../../../assets/usuarioVetor.svg";
import InputMask from "react-input-mask";
import { useState } from "react";
import { Link } from "react-router-dom";

function UserSignUp2() {
  const [registerType, setRegisterType] = useState("candidate");

  const handleClick = (type: string) => {
    setRegisterType(type);
  };
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
                registerType == "company" ? "selected" : ""
              }`}
              text="Sou empresa"
              imageUrl={maletaVetor}
              onClick={() => handleClick("company")}
            />
            <TextualButton
              className={`candidateButton ${
                registerType == "candidate" ? "selected" : ""
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
          <div className="titleContainer">
            <h1>CADASTRE-SE</h1>
          </div>

          <form className="formContainer">
            {/* PRIMEIRA LINHA */}
            <div className="formContent">
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-cep">CEP</label>
                  <InputMask
                    mask="99999-999"
                    id="user-cep"
                    name="user-cep"
                    placeholder="00000-000"
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-adress">Rua</label>
                  <input
                    type="text"
                    id="user-adress"
                    name="user-adress"
                    placeholder="Informe sua rua aqui"
                  />
                </div>
              </div>
            </div>

            {/* SEGUNDA LINHA */}
            <div className="formContent">
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-neighborhood">Bairro</label>
                  <input
                    type="text"
                    id="user-neighborhood"
                    name="user-neighborhood"
                    placeholder="Informe seu bairro aqui"
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-city">Cidade</label>
                  <input
                    type="text"
                    id="user-city"
                    name="user-city"
                    placeholder="Informe sua cidade aqui"
                  />
                </div>
              </div>
            </div>

            {/* TERCEIRA LINHA */}
            <div className="formContent">
              <div className="inputContainer">
                <div className="inputForm" id="stateInput">
                  <label htmlFor="user-state">Estado</label>
                  <input
                    type="text"
                    id="user-state"
                    name="user-state"
                    placeholder="Informe seu estado aqui"
                    list="states"
                  />
                  <datalist id="states">
                    <option value="Acre (AC)" />
                    <option value="Alagoas (AL)" />
                    <option value="Amapá (AP)" />
                    <option value="Amazonas (AM)" />
                    <option value="Bahia (BA)" />
                    <option value="Ceará (CE)" />
                    <option value="Distrito Federal (DF)" /> 
                    <option value="Espírito Santo (ES)" />
                    <option value="Goiás (GO)" />
                    <option value="Maranhão (MA)" />
                    <option value="Mato Grosso (MT)" />
                    <option value="Mato Grosso do Sul (MS)" />
                    <option value="Minas Gerais (MG)" />
                    <option value="Pará (PA)" />
                    <option value="Paraíba (PB)" />
                    <option value="Paraná (PR)" />
                    <option value="Pernambuco (PE)" />
                    <option value="Piauí (PI)" />
                    <option value="Rio de Janeiro (RJ)" />
                    <option value="Rio Grande do Norte (RN)" />
                    <option value="Rio Grande do Sul (RS)" />
                    <option value="Rondônia (RO)" />
                    <option value="Roraima (RR)" />
                    <option value="Santa Catarina (SC)" />
                    <option value="São Paulo (SP)" />
                    <option value="Sergipe (SE)" />
                    <option value="Tocantins (TO)" />
                  </datalist>
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm" id="houseNumberInput">
                  <label htmlFor="user-house-number">Nº</label>
                  <input
                    type="number"
                    id="user-house-number"
                    name="user-house-number"
                    placeholder="000"
                  />
                </div>
                <div className="inputForm" id="complementInput">
                  <label htmlFor="user-complement">Complemento</label>
                  <input
                    type="text"
                    id="user-complement"
                    name="user-complement"
                    placeholder="Complemente aqui"
                  />
                </div>
              </div>
            </div>

            {/* QUARTA LINHA */}
            <div className="formContent">
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-linkedin">
                    LinkedIn{" "}
                    <span style={{ color: "#adabc3", fontSize: "60%" }}>
                      (Opcional)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="user-linkedin"
                    name="user-linkedin"
                    placeholder="www.linkedin.com/in/seuperfil"
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-portfolio">
                    Seu portifólio{" "}
                    <span style={{ color: "#adabc3", fontSize: "60%" }}>
                      (Opcional)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="user-portfolio"
                    name="user-portfolio"
                    placeholder="www.seuportfolio.com.br"
                  />
                </div>
              </div>
            </div>
          </form>

          <div className="optionsContainer">
            <div className="goBackButton">
              <Link to="/userSignUp1" className="linkStyle">
                <TextualButton
                  text={"VOLTAR"}
                  className="submit"
                ></TextualButton>
              </Link>
            </div>
            <div className="registerCurriculumButton">
              <TextualButton
                text={"CADASTRAR CURRICULO"}
                className="submit"
              ></TextualButton>
            </div>
            <div className="finishLaterButton">
              <Link to="/home" className="linkStyle">
                <TextualButton text={"FINALIZAR DEPOIS"} className="submit" />
              </Link>
            </div>
          </div>

          <div className="buttonContainer">
            <SymbolButton className="symbol-button" imageUrl={linkedinVetor} />

            <SymbolButton className="symbol-button" imageUrl={googleVetor} />
          </div>

          <div className="loginContainer">
            <p>
              Já tem uma conta? <Link to="/entrance">Entrar</Link>
            </p>
          </div>

          <div className="informationContainer">
            <p>
              Ao criar uma conta, você concorda com nossos{" "}
              <a href="">Termos de Serviço</a>,{" "}
              <a href="">Política de Privacidade</a> e nossas{" "}
              <a href="">Configurações de Notificação padrão</a>.
            </p>
          </div>
        </section>
      </body>
    </>
  );
}

export default UserSignUp2;

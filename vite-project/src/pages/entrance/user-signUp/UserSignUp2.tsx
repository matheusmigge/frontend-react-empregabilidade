import "./UserSignUp.css";
import TextualButton from "../../../components/textual-button/TextualButton";
import linkedinVetor from "../../../assets/linkedinVetor.svg";
import googleVetor from "../../../assets/googleVetor.svg";
import SymbolButton from "../../../components/symbol-button/SymbolButton";
import logoCompletaVetor from "../../../assets/logoCompletaVetor.svg";
import maletaVetor from "../../../assets/maletaVetor.svg";
import usuarioVetor from "../../../assets/usuarioVetor.svg";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../user-curriculum/UserContext";

function UserSignUp2() {
  const { userData, setUserData } = useContext(UserContext)!;
  const [registerType, setRegisterType] = useState("candidate");

  // Inicializa o formData com os dados existentes no userData
  const [formData, setFormData] = useState({
    cep: userData.cep || "",
    rua: userData.rua || "",
    bairro: userData.bairro || "",
    cidade: userData.cidade || "",
    estado: userData.estado || "",
    numero: userData.numero || "",
    linkedin: userData.linkedin || "",
    portfolio: userData.portfolio || "",
  });

  const handleClick = (type: string) => {
    setRegisterType(type);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserData({ ...userData, ...formData }); // Mescla os dados existentes com os novos
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
        </section>
        <section className="rightSide">
          <div className="titleContainer">
            <h1>CADASTRE-SE</h1>
          </div>

          <form className="formContainer" onSubmit={handleSubmit}>
            {/* LADO ESQUERDO */}
            <div className="formContent">
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="00000-000"
                    value={formData.cep}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="bairro">Bairro</label>
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    placeholder="Informe seu bairro aqui"
                    value={formData.bairro}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm" id="stateInput">
                  <label htmlFor="estado">Estado</label>
                  <input
                    type="text"
                    id="estado"
                    name="estado"
                    placeholder="Informe seu estado aqui"
                    value={formData.estado}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="linkedin">LinkedIn (Opcional)</label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    placeholder="www.linkedin.com/in/seuperfil"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* LADO DIREITO */}
            <div className="formContent">
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="rua">Rua</label>
                  <input
                    type="text"
                    id="rua"
                    name="rua"
                    placeholder="Informe sua rua aqui"
                    value={formData.rua}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    placeholder="Informe sua cidade aqui"
                    value={formData.cidade}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm" id="houseNumberInput">
                  <label htmlFor="numero">Nº</label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    placeholder="000"
                    value={formData.numero}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputForm" id="complementInput">
                  <label htmlFor="complement">Complemento</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    placeholder="Complemente aqui"
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="portfolio">
                    Seu portifólio (Opcional)
                  </label>
                  <input
                    type="text"
                    id="portfolio"
                    name="portfolio"
                    placeholder="www.seuportfolio.com.br"
                    value={formData.portfolio}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <button>Salvar</button>
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
              <Link to="/userCurriculum" className="linkStyle">
              <TextualButton
                text={"CADASTRAR CURRICULO"}
                className="submit"
              ></TextualButton>
              </Link>
            </div>
            <div className="finishLaterButton">
              <Link to="/home" className="linkStyle">
              <TextualButton
                text={"FINALIZAR DEPOIS"}
                className="submit"
              />
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

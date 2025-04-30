import React, { useState } from "react";
import "./CompanySignUp.css";
import TextualButton from "../../../components/textual-button/TextualButton";
import logoCompletaVetor from "../../../assets/logoCompletaVetor.svg";
import maletaVetor from "../../../assets/maletaVetor.svg";
import usuarioVetor from "../../../assets/usuarioVetor.svg";
import greenPlus from "./assets/GreenPlus.svg";
import crossVetor from "./assets/crossVector.svg";
import { Link } from "react-router-dom";

function CompanySignUp2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          <div className="company-register">
            <div className="titleContainer">
              <h1>CADASTRO DE GESTORES</h1>
            </div>

            <form className="formContainer">
              <div className="formContent">
                <div className="inputTitle">
                  <h2>Gestor da empresa</h2>
                </div>

                <div className="inputContainer">
                  <div className="inputForm">
                    <label htmlFor="manager-email">Email</label>
                    <input
                      type="mail"
                      id="manager-email"
                      name="manager-email"
                      placeholder="Email do gestor geral"
                    />
                  </div>
                  <div className="inputForm">
                    <label htmlFor="manager-password">Senha</label>
                    <input
                      type="password"
                      id="manager-password"
                      name="manager-password"
                      placeholder="Senha para o gestor geral"
                    />
                  </div>
                </div>

                <div className="inputTitle">
                  <h2>Gestor de RH</h2>
                </div>

                <div className="inputContainer">
                  <div className="inputForm">
                    <label htmlFor="rh-email">Email</label>
                    <input
                      type="mail"
                      id="rh-email"
                      name="rh-email"
                      placeholder="Email do gestor de RH"
                    />
                  </div>
                  <div className="inputForm">
                    <label htmlFor="rh-password">Senha</label>
                    <input
                      type="password"
                      id="rh-password"
                      name="rh-password"
                      placeholder="Senha para o gestor de RH"
                    />
                  </div>
                </div>

                <div className="buttonContainer">
                  <div className="returnButton">
                    <Link to="/companySignUp1" className="linkStyle">
                      <TextualButton text={"VOLTAR"} className="backButton" />
                    </Link>
                  </div>
                  <div className="addFunctionButton">
                    <TextualButton
                      text={"ADICIONAR FUNÇÃO"}
                      className="submit"
                      imageUrl={greenPlus}
                      onClick={(event: React.MouseEvent<Element, MouseEvent>) =>
                        handleOpenModal(event)
                      }
                    />
                  </div>
                  <div className="concludeButton">
                    <Link to="/home" className=" linkStyle">
                      <TextualButton text={"CONCLUIR"} className="submit" />
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <div className="closeModal">
                  <button>
                    <img onClick={handleCloseModal} src={crossVetor} />
                  </button>
                </div>

                <div className="modalInputContent">
                  <label htmlFor="function-name">Função</label>
                  <input
                    type="text"
                    id="function-name"
                    name="function-name"
                    placeholder="Função que deseja adicionar"
                  />

                  <label htmlFor="function-email">Email</label>
                  <input
                    type="text"
                    id="function-email"
                    name="function-email"
                    placeholder="Email do funcionário"
                  />

                  <label htmlFor="function-password">Senha</label>
                  <input
                    type="password"
                    id="function-password"
                    name="function-password"
                    placeholder="Senha para o gestor o funcinário"
                  />
                </div>

                <div className="addFunctionButton">
                  <TextualButton text={"ADICIONAR"} className="submit" />
                </div>
              </div>
            </div>
          )}

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

export default CompanySignUp2;

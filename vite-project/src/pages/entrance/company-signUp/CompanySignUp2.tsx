import React, { useState } from "react";
import "./CompanySignUp.css";
import TextualButton from "../../../components/textual-button/TextualButton";
import greenPlus from "./assets/GreenPlus.svg";
import crossVetor from "./assets/crossVector.svg";

function CompanySignUp2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
              <div className="addFunctionButton">
                <TextualButton
                  text={"ADICIONAR FUNÇÃO"}
                  className="submit"
                  imageUrl={greenPlus}
                  onClick={(event: React.MouseEvent<Element, MouseEvent>) =>
                    handleOpenModal(event)
                  }
                ></TextualButton>
              </div>
              <div className="concludeButton">
                <TextualButton
                  text={"CONCLUIR"}
                  className="submit"
                ></TextualButton>
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
              <TextualButton
                text={"ADICIONAR"}
                className="submit"
              ></TextualButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CompanySignUp2;

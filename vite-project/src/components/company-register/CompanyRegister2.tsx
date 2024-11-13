import "./CompanyRegister.css";
import TextualButton from "../textual-button/TextualButton";
import greenPlus from "./assets/GreenPlus.svg";

function CompanyRegister2() {
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
                  type="text"
                  id="manager-email"
                  name="manager-email"
                  placeholder="Digite o email do gestor da sua empresa"
                />
              </div>
              <div className="inputForm">
                <label htmlFor="manager-password">Senha</label>
                <input
                  type="password"
                  id="manager-password"
                  name="manager-password"
                  placeholder="Crie uma senha para o gestor da sua empresa"
                />
              </div>
            </div>

            <div className="inputTitle">
              <h2>Gestor da empresa</h2>
            </div>

            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="rh-email">Email</label>
                <input
                  type="text"
                  id="rh-email"
                  name="rh-email"
                  placeholder="Digite o email do gestor de RH da sua empresa"
                />
              </div>
              <div className="inputForm">
                <label htmlFor="rh-password">Senha</label>
                <input
                  type="password"
                  id="rh-password"
                  name="rh-password"
                  placeholder="Crie uma senha para o gestor de RH da sua empresa"
                />
              </div>
            </div>

            <div className="buttonContainer">
              <div className="addFunctionButton">
                <TextualButton
                  text={"ADICIONAR FUNÇÃO"}
                  className="submit"
                  imageUrl={greenPlus}
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
    </>
  );
}

export default CompanyRegister2;

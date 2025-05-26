import "./UserSignUp.css";
import TextualButton from "../../../components/textual-button/TextualButton";
import linkedinVetor from "../../../assets/linkedinVetor.svg";
import googleVetor from "../../../assets/googleVetor.svg";
import SymbolButton from "../../../components/symbol-button/SymbolButton";
import logoCompletaVetor from "../../../assets/logoCompletaVetor.svg";
import maletaVetor from "../../../assets/maletaVetor.svg";
import usuarioVetor from "../../../assets/usuarioVetor.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function UserSignUp1() {
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
        </section>

        <section className="rightSide">
          <div className="titleContainer">
            <h1>CADASTRE-SE</h1>
          </div>

          <form className="formContainer">
            {/* LADO ESQUERDO */}
            <div className="formContent">
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-name">Nome</label>
                  <input
                    type="text"
                    id="user-name"
                    name="user-name"
                    placeholder="Digite seu email"
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-cpf">CPF</label>
                  <input
                    type="number"
                    id="user-cpf"
                    name="user-cpf"
                    placeholder="000.000.000-00"
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-phone">Telefone</label>
                  <input
                    type="tel"
                    id="user-phone"
                    name="user-phone"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-password">Senha</label>
                  <input
                    type="password"
                    id="user-password"
                    name="user-password"
                    placeholder="Digite sua senha"
                  />
                </div>
              </div>
            </div>

            {/* LADO DIREITO */}
            <div className="formContent">
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-surname">Sobrenome</label>
                  <input
                    type="text"
                    id="user-surname"
                    name="user-surname"
                    placeholder="Digite seu sobrenome"
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-email">Email</label>
                  <input
                    type="email"
                    id="user-email"
                    name="user-email"
                    placeholder="Informe seu email"
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-birth-date">Data de nascimento</label>
                  <input
                    type="date"
                    id="user-birth-date"
                    name="user-birth-date"
                  />
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-password">Confirme sua senha</label>
                  <input
                    type="password"
                    id="user-password"
                    name="user-password"
                    placeholder="Digite sua senha"
                  />
                </div>
              </div>
            </div>
          </form>

          <div className="a">
            <Link to="/userSignUp2" className="linkStyle">
              <TextualButton
                text={"CONTINUAR"}
                className="submit"
              ></TextualButton>
            </Link>
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

export default UserSignUp1;
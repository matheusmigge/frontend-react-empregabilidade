import { useState } from "react";
import TextualButton from "../../../components/textual-button/TextualButton";
import linkedinVetor from "../../../assets/linkedinVetor.svg";
import googleVetor from "../../../assets/googleVetor.svg";
import showPasswordVector from "../../../assets/showPasswordVector.svg";
import hidePasswordVector from "../../../assets/hidePasswordVector.svg";
import "./UserSignIn.css";
import { Link } from "react-router-dom";

function UserSignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="user-login">
        <div className="titleContainer">
          <h1>Conheça diversas oportunidades de emprego</h1>
        </div>
        <form>
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            id="user-email"
            name="user-email"
            placeholder="Digite seu email"
          />

          <label htmlFor="user-password">Senha</label>
          <div className="passwordInputContainer">
            <input
              type={showPassword ? "text" : "password"}
              id="user-password"
              name="user-password"
              placeholder="Digite sua senha"
            />
            <button
              type="button"
              className="togglePasswordButton"
              onClick={togglePasswordVisibility}
            >
              <img
                src={showPassword ? hidePasswordVector : showPasswordVector}
                alt={showPassword ? "Esconder senha" : "Mostrar senha"}
              />
            </button>
          </div>

          <div className="submitContainer">
            <Link to="/home" className="linkStyle">
              <TextualButton text={"ENTRAR"} className="submit"></TextualButton>
            </Link>
          </div>
        </form>

        <hr />

        <div className="buttonContainer">
          <TextualButton
            className="externalRegistrationButton"
            text="Entrar com LinkedIn"
            imageUrl={linkedinVetor}
          />
          <TextualButton
            className="externalRegistrationButton"
            text="Entrar com Google"
            imageUrl={googleVetor}
          />
          <div className="signup-now">
            <p>
              Não possui uma conta? <Link to="/userSignUp1">Cadastre-se</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSignIn;

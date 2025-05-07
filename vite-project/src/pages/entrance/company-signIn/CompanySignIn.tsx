import { useState } from "react";
import TextualButton from "../../../components/textual-button/TextualButton";
import showPasswordVector from "../../../assets/showPasswordVector.svg";
import hidePasswordVector from "../../../assets/hidePasswordVector.svg";
import "./CompanySignIn.css";
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
          <h1>Receba aplicações dos melhores candidados</h1>
        </div>
        <form>
          <label htmlFor="cnpj">CNPJ</label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            placeholder="XX.XXX.XXX/0001-XX"
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

        <div className="buttonsContainer">
          <div className="signup-now">
            <p>
              Não possui uma conta?{" "}
              <Link to="/companySignUp1">Cadastre-se</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSignIn;

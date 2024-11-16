import TextualButton from "../textual-button/TextualButton";
import linkedinVetor from "../../assets/linkedinVetor.svg";
import googleVetor from "../../assets/googleVetor.svg";
import "./UserLogin.css";

function UserLogin() {
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
          <input
            type="password"
            id="user-password"
            name="user-password"
            placeholder="Digite sua senha"
          />

          <TextualButton text={"ENTRAR"} className="submit"></TextualButton>
        </form>

        <hr />

        <div className="buttonContainer">
          <TextualButton
            className="externalRegistrationButton"
            text="Cadastre-se com LinkedIn"
            imageUrl={linkedinVetor}
          />
          <TextualButton
            className="externalRegistrationButton"
            text="Cadastre-se com Google"
            imageUrl={googleVetor}
          />
          <div className="signup-now">
            <p>
              Não possui uma conta? <a href="">Cadastre-se</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;

import "./UserRegister.css";
import TextualButton from "../textual-button/TextualButton";
import linkedinVetor from "../../assets/linkedinVetor.svg";
import googleVetor from "../../assets/googleVetor.svg";
import mailVetor from "../../assets/mailVetor.svg";

function UserRegister() {
  return (
    <>
      <div className="titleContainer">
        <h1>Conheça diversas oportunidades de emprego</h1>
      </div>
      <div className="buttonContainer">
        <TextualButton
          className="externalRegistrationButton"
          text="Cadastre-se com o LinkedIn"
          imageUrl={linkedinVetor}
        />
        <TextualButton
          className="externalRegistrationButton"
          text="Cadastre-se com o Google"
          imageUrl={googleVetor}
        />
        <TextualButton
          className="emailButton"
          text="Cadastre-se com o email"
          imageUrl={mailVetor}
        />
      </div>
      <div className="loginContainer">
        <p>
          Já tem uma conta? <a href="">Entrar</a>
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
    </>
  );
}

export default UserRegister;

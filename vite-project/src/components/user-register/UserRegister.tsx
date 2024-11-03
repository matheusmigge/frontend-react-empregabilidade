import "./UserRegister.css";
import TextualButton from "../textual-button/TextualButton";
import linkedinVetor from "../../assets/linkedinVetor.svg";
import googleVetor from "../../assets/googleVetor.svg";

function UserRegister() {
  return (
    <>
      <div className="titleContainer">
        <h1>Cadastre-se!</h1>
      </div>
      <form className="formContainer">
        <div className="a">
          <div className="b"><label htmlFor="">Nome</label>
          <input
            type="text"
            id="user-name"
            name="user-name"
            placeholder="Digite seu email"
          /></div>
          
          <div className="b"><label htmlFor="">Sobrenome</label>
          <input
            type="text"
            id="user-surname"
            name="user-surname"
            placeholder="Digite seu sobrenome"
          /></div>

          
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            id="user-email"
            name="user-email"
            placeholder="Informe seu email"
          />

          <label htmlFor="">Telefone</label>
          <input
            type="tel"
            id="user-phone"
            name="user-phone"
            placeholder="(00) 00000-0000"
          />
        </div>

        <div>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            id="user-password"
            name="user-password"
            placeholder="Digite sua senha"
          />

          <label htmlFor="">Confirme sua senha</label>
          <input
            type="password"
            id="user-password"
            name="user-password"
            placeholder="Digite sua senha"
          />
        </div>

        <TextualButton text={"PRÓXIMO"} className="submit"></TextualButton>
      </form>
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

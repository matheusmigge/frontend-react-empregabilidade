import "./UserRegister.css";
import TextualButton from "../textual-button/TextualButton";
import linkedinVetor from "../../assets/linkedinVetor.svg";
import googleVetor from "../../assets/googleVetor.svg";
import SymbolButton from "../symbol-button/SymbolButton";

function UserRegister() {
  return (
    <>
      <div className="titleContainer">
        <h1>CADASTRE-SE!</h1>
      </div>

      <form className="formContainer">
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

          <TextualButton text={"CONTINUAR"} className="submit"></TextualButton>
        </div>
      </form>

      <div className="buttonContainer">
        <SymbolButton className="symbol-button" imageUrl={linkedinVetor} />

        <SymbolButton className="symbol-button" imageUrl={googleVetor} />
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

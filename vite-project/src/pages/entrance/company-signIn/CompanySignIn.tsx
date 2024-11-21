import TextualButton from "../../../components/textual-button/TextualButton";
import "./CompanySignIn.css";

function UserSignIn() {
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
          <input
            type="password"
            id="user-password"
            name="user-password"
            placeholder="Digite sua senha"
          />

          <TextualButton text={"ENTRAR"} className="submit"></TextualButton>
        </form>

        <hr />

        <div className="signup-now">
          <p>
            Não possui uma conta? <a href="">Cadastre-se</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default UserSignIn;

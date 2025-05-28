import { useState } from "react";
import TextualButton from "../../../components/textual-button/TextualButton";
import linkedinVetor from "../../../assets/linkedinVetor.svg";
import googleVetor from "../../../assets/googleVetor.svg";
import showPasswordVector from "../../../assets/showPasswordVector.svg";
import hidePasswordVector from "../../../assets/hidePasswordVector.svg";
import "./UserSignIn.css";
import { useNavigate } from "react-router-dom";
import { showErrorAlert } from "../../../components/alerts/ErrorAlert";

function UserSignIn({ onSignUpClick }: { onSignUpClick?: () => void }) {
  // Estados para controle de senha, email, erro e navegação
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Alterna visualização da senha
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Handler de envio do formulário de login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Busca candidato pelo email
      const response = await fetch(
        `http://localhost:3000/candidates?email=${encodeURIComponent(email)}`
      );
      const candidates = await response.json();

      // Valida senha
      if (candidates.length === 0 || candidates[0].password !== password) {
        showErrorAlert("E-mail ou senha incorretos.");
        return;
      }

      // Login válido, redireciona para home
      navigate("/home");
    } catch (err) {
      setError("Erro ao conectar ao servidor.");
    }
  };

  return (
    <>
      <div className="user-login">
        <div className="titleContainer">
          <h1>Conheça diversas oportunidades de emprego</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Campo de email */}
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            id="user-email"
            name="user-email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Campo de senha com botão de exibir/ocultar */}
          <label htmlFor="user-password">Senha</label>
          <div className="passwordInputContainer">
            <input
              type={showPassword ? "text" : "password"}
              id="user-password"
              name="user-password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          {/* Exibe mensagem de erro de conexão, se houver */}
          {error && (
            <div
              className="error-message"
              style={{ color: "#d32f2f", marginTop: 32 }}
            >
              {error}
            </div>
          )}

          {/* Botão de submit */}
          <div className="submitContainer">
            <TextualButton text={"ENTRAR"} className="submit" />
          </div>
        </form>

        <hr />

        {/* Botões de login externo e link para cadastro */}
        <div className="buttonsContainer">
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
              Não possui uma conta?{" "}
              <button
                type="button"
                className="linkStyle"
                onClick={onSignUpClick}
              >
                Cadastre-se
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSignIn;

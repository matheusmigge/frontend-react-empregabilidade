import { useState } from "react";
import TextualButton from "../../../components/textual-button/TextualButton";
import showPasswordVector from "../../../assets/showPasswordVector.svg";
import hidePasswordVector from "../../../assets/hidePasswordVector.svg";
import InputMask from "react-input-mask";
import "./CompanySignIn.css";
import { useNavigate } from "react-router-dom";

function CompanySignIn({ onSignUpClick }: { onSignUpClick?: () => void }) {
  // Estados para controle de senha, CNPJ, erro e navegação
  const [showPassword, setShowPassword] = useState(false);
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Alterna a visualização da senha
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Handler de envio do formulário de login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Busca empresa pelo CNPJ
      const response = await fetch(
        `http://localhost:3000/companies?cnpj=${encodeURIComponent(cnpj)}`
      );
      const companies = await response.json();

      // Valida senha para qualquer tipo de usuário da empresa
      if (
        companies.length === 0 ||
        ![
          companies[0].adminAccountPassword,
          companies[0].managerAccountPassword,
          companies[0].hrmanagerAccountPassword,
        ].includes(password)
      ) {
        setError("CNPJ ou senha incorretos.");
        return;
      }

      // Login bem-sucedido, redireciona para home
      navigate("/home");
    } catch (err) {
      setError("Erro ao conectar ao servidor.");
    }
  };

  return (
    <>
      <div className="user-login">
        <div className="titleContainer">
          <h1>Receba aplicações dos melhores candidados</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Campo de CNPJ com máscara */}
          <label htmlFor="cnpj">CNPJ</label>
          <InputMask
            mask="99.999.999/9999-99"
            id="cnpj"
            name="cnpj"
            placeholder="Digite seu CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
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

          {/* Exibe mensagem de erro, se houver */}
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

        {/* Link para cadastro */}
        <div className="buttonsContainer">
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

export default CompanySignIn;

import { useState } from "react";
import TextualButton from "../../../components/textual-button/TextualButton";
import showPasswordVector from "../../../assets/showPasswordVector.svg";
import hidePasswordVector from "../../../assets/hidePasswordVector.svg";
import InputMask from "react-input-mask";
import "./CompanySignIn.css";
import { Link, useNavigate } from "react-router-dom";

function CompanySignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `http://localhost:3000/companies?cnpj=${encodeURIComponent(cnpj)}`
      );
      const companies = await response.json();

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

      // Login válido, redireciona
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
          <label htmlFor="cnpj">CNPJ</label>
          <InputMask
            mask="99.999.999/9999-99"
            id="cnpj"
            name="cnpj"
            placeholder="Digite seu CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />

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

          {error && (
            <div className="error-message" style={{ color: "#d32f2f", marginTop: 32 }}>
              {error}
            </div>
          )}

          <div className="submitContainer">
              <TextualButton text={"ENTRAR"} className="submit" />
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

export default CompanySignIn;

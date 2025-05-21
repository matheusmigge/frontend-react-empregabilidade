import "./UserSignUp.css";
import TextualButton from "../../../components/textual-button/TextualButton";
import linkedinVetor from "../../../assets/linkedinVetor.svg";
import googleVetor from "../../../assets/googleVetor.svg";
import SymbolButton from "../../../components/symbol-button/SymbolButton";
import showPasswordVector from "../../../assets/showPasswordVector.svg";
import hidePasswordVector from "../../../assets/hidePasswordVector.svg";
import InputMask from "react-input-mask";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSignUp({ onLoginClick }: { onLoginClick?: () => void }) {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [form, setForm] = useState({
    cpf: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
    cep: "",
    adress: "",
    neighborhood: "",
    city: "",
    state: "",
    houseNumber: "",
    complement: "",
    linkedin: "",
    portfolio: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = event.target.value;
    const filteredValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    setState(filteredValue);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section className="rightSide">
      <div className="titleContainer">
        <h1>CADASTRE-SE</h1>
      </div>

      {step === 1 && (
        <form className="formContainer">
          {/* PRIMEIRA LINHA */}
          <div className="formContent">
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-name">Nome</label>
                <input
                  type="text"
                  id="user-name"
                  name="user-name"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => handleInputChange(e, setName)}
                />
              </div>
            </div>
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-surname">Sobrenome</label>
                <input
                  type="text"
                  id="user-surname"
                  name="user-surname"
                  placeholder="Digite seu sobrenome"
                  value={surname}
                  onChange={(e) => handleInputChange(e, setSurname)}
                />
              </div>
            </div>
          </div>

          {/* SEGUNDA LINHA */}
          <div className="formContent">
            <div className="inputForm">
              <label htmlFor="user-cpf">CPF</label>
              <InputMask
                mask="999.999.999-99"
                id="user-cpf"
                name="cpf"
                placeholder="000.000.000-00"
                value={form.cpf}
                onChange={handleFormChange}
              />
            </div>
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-email">Email</label>
                <input
                  type="email"
                  id="user-email"
                  name="email"
                  placeholder="Informe seu email"
                  value={form.email}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </div>

          {/* TERCEIRA LINHA */}
          <div className="formContent">
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-phone">Telefone</label>
                <InputMask
                  mask="(99) 99999-9999"
                  id="user-phone"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  value={form.phone}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-birth-date">Data de nascimento</label>
                <input
                  type="date"
                  id="user-birth-date"
                  name="birthDate"
                  value={form.birthDate}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </div>

          {/* QUARTA LINHA */}
          <div className="formContent">
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-password">Senha</label>
                <div className="passwordInputContainer">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="user-password"
                    name="password"
                    placeholder="Digite sua senha"
                    value={form.password}
                    onChange={handleFormChange}
                  />
                  <button
                    type="button"
                    className="togglePasswordButton"
                    onClick={togglePasswordVisibility}
                  >
                    <img
                      src={
                        showPassword ? hidePasswordVector : showPasswordVector
                      }
                      alt={showPassword ? "Esconder senha" : "Mostrar senha"}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-password-confirm">Confirme sua senha</label>
                <div className="passwordInputContainer">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="user-password-confirm"
                    name="confirmPassword"
                    placeholder="Digite sua senha"
                    value={form.confirmPassword}
                    onChange={handleFormChange}
                  />
                  <button
                    type="button"
                    className="togglePasswordButton"
                    onClick={togglePasswordVisibility}
                  >
                    <img
                      src={
                        showPassword ? hidePasswordVector : showPasswordVector
                      }
                      alt={showPassword ? "Esconder senha" : "Mostrar senha"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="a">
            <TextualButton
              text={"CONTINUAR"}
              className="submit"
              onClick={() => setStep(2)}
            />
          </div>
        </form>
      )}

      {step === 2 && (
        <form className="formContainer">
          {/* PRIMEIRA LINHA */}
          <div className="formContent">
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-cep">CEP</label>
                <InputMask
                  mask="99999-999"
                  id="user-cep"
                  name="cep"
                  placeholder="00000-000"
                  value={form.cep}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-adress">Rua</label>
                <input
                  type="text"
                  id="user-adress"
                  name="adress"
                  placeholder="Informe sua rua aqui"
                  value={form.adress}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </div>

          {/* SEGUNDA LINHA */}
          <div className="formContent">
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-neighborhood">Bairro</label>
                <input
                  type="text"
                  id="user-neighborhood"
                  name="neighborhood"
                  placeholder="Informe seu bairro aqui"
                  value={form.neighborhood}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-city">Cidade</label>
                <input
                  type="text"
                  id="user-city"
                  name="city"
                  placeholder="Informe sua cidade aqui"
                  value={form.city}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </div>

          {/* TERCEIRA LINHA */}
          <div className="formContent">
            <div className="inputContainer">
              <div className="inputForm" id="stateInput">
                <label htmlFor="user-state">Estado</label>
                <input
                  type="text"
                  id="user-state"
                  name="state"
                  placeholder="Informe seu estado aqui"
                  list="states"
                  value={form.state}
                  onChange={handleFormChange}
                />
                <datalist id="states">
                  <option value="Acre (AC)" />
                  <option value="Alagoas (AL)" />
                  <option value="Amapá (AP)" />
                  <option value="Amazonas (AM)" />
                  <option value="Bahia (BA)" />
                  <option value="Ceará (CE)" />
                  <option value="Distrito Federal (DF)" />
                  <option value="Espírito Santo (ES)" />
                  <option value="Goiás (GO)" />
                  <option value="Maranhão (MA)" />
                  <option value="Mato Grosso (MT)" />
                  <option value="Mato Grosso do Sul (MS)" />
                  <option value="Minas Gerais (MG)" />
                  <option value="Pará (PA)" />
                  <option value="Paraíba (PB)" />
                  <option value="Paraná (PR)" />
                  <option value="Pernambuco (PE)" />
                  <option value="Piauí (PI)" />
                  <option value="Rio de Janeiro (RJ)" />
                  <option value="Rio Grande do Norte (RN)" />
                  <option value="Rio Grande do Sul (RS)" />
                  <option value="Rondônia (RO)" />
                  <option value="Roraima (RR)" />
                  <option value="Santa Catarina (SC)" />
                  <option value="São Paulo (SP)" />
                  <option value="Sergipe (SE)" />
                  <option value="Tocantins (TO)" />
                </datalist>
              </div>
            </div>
            <div className="inputContainer">
              <div className="inputForm" id="houseNumberInput">
                <label htmlFor="user-house-number">Nº</label>
                <input
                  type="number"
                  id="user-house-number"
                  name="houseNumber"
                  placeholder="000"
                  value={form.houseNumber}
                  onChange={handleFormChange}
                />
              </div>
              <div className="inputForm" id="complementInput">
                <label htmlFor="user-complement">Complemento</label>
                <input
                  type="text"
                  id="user-complement"
                  name="complement"
                  placeholder="Complemente aqui"
                  value={form.complement}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </div>

          {/* QUARTA LINHA */}
          <div className="formContent">
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-linkedin">
                  LinkedIn{" "}
                  <span style={{ color: "#adabc3", fontSize: "60%" }}>
                    (Opcional)
                  </span>
                </label>
                <input
                  type="text"
                  id="user-linkedin"
                  name="linkedin"
                  placeholder="www.linkedin.com/in/seuperfil"
                  value={form.linkedin}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-portfolio">
                  Seu portifólio{" "}
                  <span style={{ color: "#adabc3", fontSize: "60%" }}>
                    (Opcional)
                  </span>
                </label>
                <input
                  type="text"
                  id="user-portfolio"
                  name="portfolio"
                  placeholder="www.seuportfolio.com.br"
                  value={form.portfolio}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </div>

          <div className="optionsContainer">
            <div className="goBackButton">
              <TextualButton
                text={"VOLTAR"}
                className="submit"
                onClick={() => setStep(1)}
              />
            </div>
            <div className="registerCurriculumButton">
              <TextualButton
                text={"CADASTRAR CURRICULO"}
                className="submit"
              />
            </div>
            <div className="finishLaterButton">
              <TextualButton
                text={"FINALIZAR DEPOIS"}
                className="submit"
                onClick={() => navigate("/home")}
              />
            </div>
          </div>
        </form>
      )}

      <div className="buttonContainer">
        <SymbolButton className="symbol-button" imageUrl={linkedinVetor} />
        <SymbolButton className="symbol-button" imageUrl={googleVetor} />
      </div>

      <div className="loginContainer">
        <p>
          Já tem uma conta?{" "}
          <button
            type="button"
            className="linkStyle"
            onClick={onLoginClick}
          >
            Entrar
          </button>
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
    </section>
  );
}

export default UserSignUp;

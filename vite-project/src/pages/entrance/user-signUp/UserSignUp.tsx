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
import axios from "axios";
import { showErrorAlert } from "../../../components/alerts/ErrorAlert";
import { showSuccessAlert } from "../../../components/alerts/SuccessAlert";

function UserSignUp({ onLoginClick }: { onLoginClick?: () => void }) {
  // Estados principais do formulário
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    surname: "",
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

  // Atualiza campos do formulário
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Alterna visualização da senha
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Valida data de nascimento anterior à data atual (fuso Brasília)
  const isBirthDateValid = (birthDate: string) => {
    if (!birthDate) return false;
    const now = new Date();
    const brasiliaOffset = -3 * 60;
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const brasiliaNow = new Date(utc + brasiliaOffset * 60000);
    const inputDate = new Date(birthDate + "T00:00:00-03:00");
    return inputDate < brasiliaNow;
  };

  // Validação dos campos obrigatórios da etapa 1
  const validateStep1 = () => {
    const cpfMask = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const phoneMask = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!form.name.trim()) {
      showErrorAlert("Preencha o nome.");
      return false;
    }
    if (!form.surname.trim()) {
      showErrorAlert("Preencha o sobrenome.");
      return false;
    }
    if (!cpfMask.test(form.cpf)) {
      showErrorAlert("Preencha o CPF completamente.");
      return false;
    }
    if (!form.email.trim()) {
      showErrorAlert("Preencha o email.");
      return false;
    }
    if (!phoneMask.test(form.phone)) {
      showErrorAlert("Preencha o telefone completamente.");
      return false;
    }
    if (!form.birthDate) {
      showErrorAlert("Preencha a data de nascimento.");
      return false;
    }
    if (!isBirthDateValid(form.birthDate)) {
      showErrorAlert("Informe uma data de nascimento válida.");
      return false;
    }
    if (!form.password) {
      showErrorAlert("Preencha a senha.");
      return false;
    }
    if (form.password !== form.confirmPassword) {
      showErrorAlert("As senhas não coincidem.");
      return false;
    }
    return true;
  };

  // Validação dos campos obrigatórios da etapa 2
  const validateStep2 = () => {
    const cepMask = /^\d{5}-\d{3}$/;
    if (!cepMask.test(form.cep)) {
      showErrorAlert("Preencha o CEP completamente.");
      return false;
    }
    if (!form.adress.trim()) {
      showErrorAlert("Preencha a rua.");
      return false;
    }
    if (!form.neighborhood.trim()) {
      showErrorAlert("Preencha o bairro.");
      return false;
    }
    if (!form.city.trim()) {
      showErrorAlert("Preencha a cidade.");
      return false;
    }
    if (!form.state.trim()) {
      showErrorAlert("Preencha o estado.");
      return false;
    }
    if (!form.houseNumber.trim()) {
      showErrorAlert("Preencha o número da casa.");
      return false;
    }
    return true;
  };

  // Avança para etapa 2 após validação
  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) setStep(2);
  };

  // Envia cadastro do candidato
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    const { confirmPassword, ...dataToSend } = form;
    try {
      await axios.post("http://localhost:3000/candidates", {
        firstName: dataToSend.name.trim(),
        lastName: dataToSend.surname.trim(),
        cpf: dataToSend.cpf,
        email: dataToSend.email,
        phoneNumber: dataToSend.phone,
        dateOfBirth: dataToSend.birthDate,
        password: dataToSend.password,
        address: {
          cep: dataToSend.cep,
          addressType: "",
          addressName: "",
          address: dataToSend.adress,
          number: dataToSend.houseNumber,
          complement: dataToSend.complement || "",
          state: dataToSend.state,
          district: dataToSend.neighborhood,
          lat: "",
          lng: "",
          city: dataToSend.city,
          cityIbge: "",
          ddd: "",
        },
        linkedInURL: dataToSend.linkedin || "",
        portfolioURL: dataToSend.portfolio || "",
        resume: {
          professionalSummary: "",
          experiences: [],
          education: [],
          coursesAndCertifications: [],
          skillsAndCompetencies: [],
          languages: [],
        },
      });
      // Exibe alerta de sucesso ao fazer login automaticamente após cadastro
      showSuccessAlert("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      showErrorAlert("Erro ao cadastrar candidato!");
    }
  };

  return (
    <section className="rightSide">
      <div className="titleContainer">
        <h1>CADASTRE-SE</h1>
      </div>

      {step === 1 && (
        <form className="formContainer" onSubmit={handleContinue}>
          {/* Linha 1: nome e sobrenome */}
          <div className="formContent">
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-name">Nome</label>
                <input
                  type="text"
                  id="user-name"
                  name="name"
                  placeholder="Digite seu nome"
                  value={form.name}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="inputContainer">
              <div className="inputForm">
                <label htmlFor="user-surname">Sobrenome</label>
                <input
                  type="text"
                  id="user-surname"
                  name="surname"
                  placeholder="Digite seu sobrenome"
                  value={form.surname}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </div>

          {/* Linha 2: CPF e email */}
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

          {/* Linha 3: telefone e data de nascimento */}
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
                  max={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>
          </div>

          {/* Linha 4: senha e confirmação */}
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
                <label htmlFor="user-password-confirm">
                  Confirme sua senha
                </label>
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

          {/* Botão continuar */}
          <div className="a">
            <TextualButton
              text={"CONTINUAR"}
              className="submit"
              type="submit"
            />
          </div>
        </form>
      )}

      {step === 2 && (
        <form className="formContainer" onSubmit={handleRegister}>
          {/* Linha 1: CEP e rua */}
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

          {/* Linha 2: bairro e cidade */}
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

          {/* Linha 3: estado, número e complemento */}
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
                <label htmlFor="user-complement" style={{ marginLeft: "1em" }}>
                  Complemento{" "}
                  <span style={{ color: "#adabc3", fontSize: "60%" }}>
                    (Opcional)
                  </span>
                </label>
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

          {/* Linha 4: LinkedIn e portfólio */}
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

          {/* Botões de navegação e ações */}
          <div className="optionsContainer">
            <div className="goBackButton">
              <TextualButton
                text={"VOLTAR"}
                className="backButton"
                type="button"
                onClick={() => setStep(1)}
              />
            </div>
            <div className="registerCurriculumButton">
              <TextualButton
                text={"CADASTRAR CURRICULO"}
                className="submit"
                type="button"
              />
            </div>
            <div className="finishLaterButton">
              <TextualButton
                text={"FINALIZAR DEPOIS"}
                className="submit"
                type="button"
                onClick={() =>
                  handleRegister(
                    new Event("submit") as unknown as React.FormEvent
                  )
                }
              />
            </div>
          </div>
        </form>
      )}

      {/* Botões de login externo */}
      <div className="buttonContainer">
        <SymbolButton className="symbol-button" imageUrl={linkedinVetor} />
        <SymbolButton className="symbol-button" imageUrl={googleVetor} />
      </div>

      {/* Link para login */}
      <div className="loginContainer">
        <p>
          Já tem uma conta?{" "}
          <button type="button" className="linkStyle" onClick={onLoginClick}>
            Entrar
          </button>
        </p>
      </div>
      {/* Informações legais */}
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

import "./CompanySignUp.css";
import TextualButton from "../../../components/textual-button/TextualButton";
import imageUploadVector from "./assets/imageUploadVector.svg";
import SymbolButton from "../../../components/symbol-button/SymbolButton";
import showPasswordVector from "../../../assets/showPasswordVector.svg";
import hidePasswordVector from "../../../assets/hidePasswordVector.svg";
import greenPlus from "./assets/GreenPlus.svg";
import crossVetor from "./assets/crossVector.svg";
import InputMask from "react-input-mask";
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CompanySignUp({ onLoginClick }: { onLoginClick?: () => void }) {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showModalPassword, setShowModalPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logo, setLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const [newCompany, setNewCompany] = useState({
    name: "",
    email: "",
    phone: "",
    CNPJ: "",
    managerEmail: "",
    managerPassword: "",
    rhEmail: "",
    rhPassword: "",
  });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleModalPasswordVisibility = () => setShowModalPassword((prev) => !prev);

  const handleImageUploadClick = () => fileInputRef.current?.click();
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setLogo(imageUrl);
    }
  };

  const handleOpenModal = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  const endPoint = "http://localhost:3000/companies";
  const createCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${endPoint}`, newCompany);
      console.log("Empresa criada: ", response.data);
      setStep(2);
    } catch (error) {
      console.error("Erro ao criar empresa", error);
    }
  };

  return (
    <section className="rightSide">
      <div className="company-register">
        <div className="titleContainer">
          <h1>
            {step === 1 ? "CADASTRE SUA EMPRESA" : "CADASTRO DE GESTORES"}
          </h1>
        </div>

        {step === 1 && (
          <form className="formContainer" onSubmit={createCompany}>
            <div className="formContent">
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="company-name">Nome da empresa</label>
                  <input
                    type="text"
                    id="company-name"
                    name="company-name"
                    placeholder="Exemplo S.A."
                    value={newCompany.name}
                    onChange={(e) =>
                      setNewCompany({ ...newCompany, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="inputForm">
                  <label htmlFor="cnpj">CNPJ</label>
                  <InputMask
                    mask="99.999.999/9999-99"
                    id="cnpj"
                    name="cnpj"
                    placeholder="Digite seu CNPJ"
                    value={newCompany.CNPJ}
                    onChange={(e) =>
                      setNewCompany({ ...newCompany, CNPJ: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="phone">Telefone</label>
                  <InputMask
                    mask="(99) 99999-9999"
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    value={newCompany.phone}
                    onChange={(e) =>
                      setNewCompany({ ...newCompany, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="inputForm">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exemplo@email.com"
                    value={newCompany.email}
                    onChange={(e) =>
                      setNewCompany({ ...newCompany, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="user-password">Senha</label>
                  <div className="passwordInputContainer">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="user-password"
                      name="user-password"
                      placeholder="Digite sua senha"
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
                </div>
                <div className="inputForm">
                  <label htmlFor="user-password-confirm">Confirme sua senha</label>
                  <div className="passwordInputContainer">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="user-password-confirm"
                      name="user-password-confirm"
                      placeholder="Digite sua senha"
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
                </div>
              </div>

              <div className="inputContainer">
                <div className="inputForm" id="imageUploadContainer">
                  <label className="uploadLabel">Logo</label>
                  <div
                    className="uploadWrapper"
                    onClick={handleImageUploadClick}
                  >
                    <SymbolButton
                      imageUrl={logo || imageUploadVector}
                      className="imageUploadButton"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      className="hiddenFileInput"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>

              <div className="buttonContainer">
                <TextualButton text={"CONTINUAR"} className="submit" onClick={() => setStep(2)} />
              </div>
            </div>
          </form>
        )}

        {step === 2 && (
          <form className="formContainer">
            <div className="formContent">
              <div className="inputTitle">
                <h2>Gestor da empresa</h2>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="manager-email">Email</label>
                  <input
                    type="mail"
                    id="manager-email"
                    name="manager-email"
                    placeholder="Email do gestor geral"
                    value={newCompany.managerEmail}
                    onChange={(e) =>
                      setNewCompany({ ...newCompany, managerEmail: e.target.value })
                    }
                  />
                </div>
                <div className="inputForm">
                  <label htmlFor="manager-password">Senha</label>
                  <div className="passwordInputContainer">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="manager-password"
                      name="manager-password"
                      placeholder="Senha do gestor geral"
                      value={newCompany.managerPassword}
                      onChange={(e) =>
                        setNewCompany({ ...newCompany, managerPassword: e.target.value })
                      }
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
                </div>
              </div>

              <div className="inputTitle">
                <h2>Gestor de RH</h2>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="rh-email">Email</label>
                  <input
                    type="mail"
                    id="rh-email"
                    name="rh-email"
                    placeholder="Email do gestor de RH"
                    value={newCompany.rhEmail}
                    onChange={(e) =>
                      setNewCompany({ ...newCompany, rhEmail: e.target.value })
                    }
                  />
                </div>
                <div className="inputForm">
                  <label htmlFor="rh-password">Senha</label>
                  <div className="passwordInputContainer">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="rh-password"
                      name="rh-password"
                      placeholder="Senha do gestor de RH"
                      value={newCompany.rhPassword}
                      onChange={(e) =>
                        setNewCompany({ ...newCompany, rhPassword: e.target.value })
                      }
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
                </div>
              </div>

              <div className="buttonContainer">
                <div className="returnButton">
                  <TextualButton text={"VOLTAR"} className="backButton" onClick={() => setStep(1)} />
                </div>
                <div className="addFunctionButton">
                  <TextualButton
                    text={"ADICIONAR FUNÇÃO"}
                    className="submit"
                    imageUrl={greenPlus}
                    onClick={handleOpenModal}
                  />
                </div>
                <div className="concludeButton">
                  <TextualButton text={"CONCLUIR"} className="submit" onClick={() => navigate("/home")} />
                </div>
              </div>
            </div>
          </form>
        )}

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="closeModal">
                <button>
                  <img onClick={handleCloseModal} src={crossVetor} alt="Fechar" />
                </button>
              </div>

              <div className="modalInputContent">
                <label htmlFor="function-name">Função</label>
                <input
                  type="text"
                  id="function-name"
                  name="function-name"
                  placeholder="Função que deseja adicionar"
                />

                <label htmlFor="function-email">Email</label>
                <input
                  type="text"
                  id="function-email"
                  name="function-email"
                  placeholder="Email do funcionário"
                />

                <label htmlFor="function-password">Senha</label>
                <div className="passwordInputContainer">
                  <input
                    type={showModalPassword ? "text" : "password"}
                    id="function-password"
                    name="function-password"
                    placeholder="Senha para o funcionário"
                  />
                  <button
                    type="button"
                    className="togglePasswordButton"
                    onClick={toggleModalPasswordVisibility}
                  >
                    <img
                      src={showModalPassword ? hidePasswordVector : showPasswordVector}
                      alt={showModalPassword ? "Esconder senha" : "Mostrar senha"}
                    />
                  </button>
                </div>
              </div>

              <div className="addFunctionButton">
                <TextualButton text={"ADICIONAR"} className="submit" />
              </div>
            </div>
          </div>
        )}

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
      </div>
    </section>
  );
}

export default CompanySignUp;

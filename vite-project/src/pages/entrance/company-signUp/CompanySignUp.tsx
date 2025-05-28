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
import { showErrorAlert } from "../../../components/alerts/ErrorAlert";
import { showSuccessAlert } from "../../../components/alerts/SuccessAlert";

function CompanySignUp({ onLoginClick }: { onLoginClick?: () => void }) {
  // Estados principais do formulário
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showModalPassword, setShowModalPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logo, setLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  // Dados da empresa
  const [companyData, setCompanyData] = useState({
    name: "",
    cnpj: "",
    logoUrl: "",
    phoneNumber: "",
    adminAccountEmail: "",
    adminAccountPassword: "",
    adminAccountPasswordConfirm: "",
    managers: [
      {
        managerAccountRole: "Gestor Geral",
        managerAccountEmail: "",
        managerAccountPassword: "",
      },
      {
        managerAccountRole: "Gestor de RH",
        managerAccountEmail: "",
        managerAccountPassword: "",
      },
    ],
    accountCreationDate: new Date().toISOString().slice(0, 10),
  });

  // Estados do modal de função extra
  const [modalRole, setModalRole] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalPassword, setModalPassword] = useState("");

  // Abre seletor de arquivo
  const handleImageUploadClick = () => fileInputRef.current?.click();

  // --- Versão original do upload de imagem (descomente para reverter) ---
  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     const imageUrl = URL.createObjectURL(file);
  //     setLogo(imageUrl);
  //     setCompanyData({ ...companyData, logoUrl: imageUrl });
  //   }
  // };

  // Upload de imagem prototipo (sempre usa a mesma imagem)
  const handleImageChange = () => {
    const imageUrl = "https://i.ibb.co/6X65zND/company1.png";
    setLogo(imageUrl);
    setCompanyData({ ...companyData, logoUrl: imageUrl });
  };

  // Atualiza campos do formulário principal
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  // Atualiza campos dos gestores
  const handleManagerChange = (
    index: number,
    field: "managerAccountEmail" | "managerAccountPassword",
    value: string
  ) => {
    const updatedManagers = [...companyData.managers];
    updatedManagers[index][field] = value;
    setCompanyData({ ...companyData, managers: updatedManagers });
  };

  // Valida e avança para etapa 2
  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    const cnpjMask = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    const phoneMask = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!cnpjMask.test(companyData.cnpj)) {
      showErrorAlert("Preencha o CNPJ completamente.");
      return;
    }
    if (!phoneMask.test(companyData.phoneNumber)) {
      showErrorAlert("Preencha o telefone completamente.");
      return;
    }
    if (
      companyData.adminAccountPassword !==
      companyData.adminAccountPasswordConfirm
    ) {
      showErrorAlert("As senhas não coincidem.");
      return;
    }
    if (!companyData.logoUrl) {
      showErrorAlert("Envie o logo da empresa.");
      return;
    }
    setStep(2);
  };

  // Valida e envia dados da etapa 2
  const handleSubmitStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    const incompleteManager = companyData.managers.some(
      (m) =>
        (m.managerAccountEmail.trim() && !m.managerAccountPassword.trim()) ||
        (!m.managerAccountEmail.trim() && m.managerAccountPassword.trim())
    );
    if (incompleteManager) {
      showErrorAlert("Preencha corrretamente os campos de e-mail e senha dos gestores.");
      return;
    }
    const managersFiltered = companyData.managers.filter(
      (m) => m.managerAccountEmail.trim() && m.managerAccountPassword.trim()
    );
    const { adminAccountPasswordConfirm, ...dataToSend } = companyData;
    try {
      await axios.post("http://localhost:3000/companies", {
        ...dataToSend,
        managers: managersFiltered,
      });
      navigate("/home");
    } catch (error) {
      showErrorAlert("Erro ao cadastrar empresa!");
    }
  };

  // Alterna visualização de senha principal
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  // Alterna visualização de senha do modal
  const toggleModalPasswordVisibility = () =>
    setShowModalPassword((prev) => !prev);

  // Abre modal de função extra
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  // Fecha modal de função extra
  const handleCloseModal = () => setIsModalOpen(false);

  // Adiciona nova função/gestor pelo modal
  const handleAddFunction = () => {
    const emailRegex = /^[\w\-.]+@[\w\-]+(\.[\w\-]+)*$/;
    if (!modalRole || !modalEmail || !modalPassword) {
      showErrorAlert("Preencha todos os campos da função.");
      return;
    }
    if (!emailRegex.test(modalEmail)) {
      showErrorAlert("Digite um email válido para o funcionário.");
      return;
    }
    setCompanyData((prev) => ({
      ...prev,
      managers: [
        ...prev.managers,
        {
          managerAccountRole: modalRole,
          managerAccountEmail: modalEmail,
          managerAccountPassword: modalPassword,
        },
      ],
    }));
    setModalRole("");
    setModalEmail("");
    setModalPassword("");
    setIsModalOpen(false);
    showSuccessAlert("Função adicionada com sucesso!");
  };

  return (
    <section className="rightSide">
      <div className="company-register">
        <div className="titleContainer">
          <h1>
            {step === 1
              ? "CADASTRE SUA EMPRESA"
              : "CADASTRO DE GESTORES (Opcional)"}
          </h1>
        </div>

        {/* Etapa 1: dados da empresa */}
        {step === 1 && (
          <form className="formContainer" onSubmit={handleSubmitStep1}>
            <div className="formContent">
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="name">Nome da empresa</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Exemplo S.A."
                    value={companyData.name}
                    onChange={handleChange}
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
                    value={companyData.cnpj}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="phoneNumber">Telefone</label>
                  <InputMask
                    mask="(99) 99999-9999"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="(00) 00000-0000"
                    value={companyData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="inputForm">
                  <label htmlFor="adminAccountEmail">E-mail</label>
                  <input
                    type="email"
                    id="adminAccountEmail"
                    name="adminAccountEmail"
                    placeholder="exemplo@email.com"
                    value={companyData.adminAccountEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="adminAccountPassword">Senha</label>
                  <div className="passwordInputContainer">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="adminAccountPassword"
                      name="adminAccountPassword"
                      placeholder="Digite sua senha"
                      value={companyData.adminAccountPassword}
                      onChange={handleChange}
                      required
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
                <div className="inputForm">
                  <label htmlFor="adminAccountPasswordConfirm">
                    Confirme a senha
                  </label>
                  <div className="passwordInputContainer">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="adminAccountPasswordConfirm"
                      name="adminAccountPasswordConfirm"
                      placeholder="Confirme sua senha"
                      value={companyData.adminAccountPasswordConfirm}
                      onChange={handleChange}
                      required
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

              {/* Upload do logo da empresa */}
              <div className="inputContainer">
                <div className="inputForm" id="imageUploadContainer">
                  <label className="uploadLabel">Logo</label>
                  <div className="uploadWrapper">
                    <SymbolButton
                      imageUrl={logo || imageUploadVector}
                      className="imageUploadButton"
                      type="button"
                      onClick={handleImageUploadClick}
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
                <TextualButton
                  text={"CONTINUAR"}
                  className="submit"
                  type="submit"
                />
              </div>
            </div>
          </form>
        )}

        {/* Etapa 2: cadastro de gestores */}
        {step === 2 && (
          <form className="formContainer" onSubmit={handleSubmitStep2}>
            <div className="formContent">
              <div className="inputTitle">
                <h2>Gestor da empresa</h2>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="managerAccountEmail">Email</label>
                  <input
                    type="email"
                    id="managerAccountEmail"
                    name="managerAccountEmail"
                    placeholder="E-mail do gestor geral"
                    value={companyData.managers[0].managerAccountEmail}
                    onChange={(e) =>
                      handleManagerChange(
                        0,
                        "managerAccountEmail",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="inputForm">
                  <label htmlFor="managerAccountPassword">Senha</label>
                  <div className="passwordInputContainer">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="managerAccountPassword"
                      name="managerAccountPassword"
                      placeholder="Senha do gestor geral"
                      value={companyData.managers[0].managerAccountPassword}
                      onChange={(e) =>
                        handleManagerChange(
                          0,
                          "managerAccountPassword",
                          e.target.value
                        )
                      }
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

              <div className="inputTitle">
                <h2>Gestor de RH</h2>
              </div>
              <div className="inputContainer">
                <div className="inputForm">
                  <label htmlFor="rhManagerAccountEmail">Email</label>
                  <input
                    type="email"
                    id="rhManagerAccountEmail"
                    name="rhManagerAccountEmail"
                    placeholder="E-mail do gestor de RH"
                    value={companyData.managers[1].managerAccountEmail}
                    onChange={(e) =>
                      handleManagerChange(
                        1,
                        "managerAccountEmail",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="inputForm">
                  <label htmlFor="rhManagerAccountPassword">Senha</label>
                  <div className="passwordInputContainer">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="rhManagerAccountPassword"
                      name="rhManagerAccountPassword"
                      placeholder="Senha do gestor de RH"
                      value={companyData.managers[1].managerAccountPassword}
                      onChange={(e) =>
                        handleManagerChange(
                          1,
                          "managerAccountPassword",
                          e.target.value
                        )
                      }
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

              {/* Botões de navegação e adicionar função extra */}
              <div className="buttonContainer">
                <div className="returnButton">
                  <TextualButton
                    text={"VOLTAR"}
                    className="backButton"
                    onClick={() => setStep(1)}
                  />
                </div>
                <div className="addFunctionButton">
                  <TextualButton
                    text={"ADICIONAR FUNÇÃO"}
                    type="button"
                    imageUrl={greenPlus}
                    onClick={handleOpenModal}
                  />
                </div>
                <div className="concludeButton">
                  <TextualButton
                    text={"CONCLUIR"}
                    className="submit"
                    type="submit"
                  />
                </div>
              </div>
            </div>
          </form>
        )}

        {/* Modal para adicionar função extra */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="closeModal">
                <button>
                  <img
                    onClick={handleCloseModal}
                    src={crossVetor}
                    alt="Fechar"
                  />
                </button>
              </div>

              <div className="modalInputContent">
                <label htmlFor="function-name">Função</label>
                <input
                  type="text"
                  id="function-name"
                  name="function-name"
                  placeholder="Função que deseja adicionar"
                  value={modalRole}
                  onChange={(e) => setModalRole(e.target.value)}
                />

                <label htmlFor="function-email">Email</label>
                <input
                  type="email"
                  id="function-email"
                  name="function-email"
                  placeholder="Email do funcionário"
                  value={modalEmail}
                  onChange={(e) => setModalEmail(e.target.value)}
                  required
                  pattern="^[\w\-.]+@[\w\-]+(\.[\w\-]+)*$"
                />

                <label htmlFor="function-password">Senha</label>
                <div className="passwordInputContainer">
                  <input
                    type={showModalPassword ? "text" : "password"}
                    id="function-password"
                    name="function-password"
                    placeholder="Senha para o funcionário"
                    value={modalPassword}
                    onChange={(e) => setModalPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="togglePasswordButton"
                    onClick={toggleModalPasswordVisibility}
                  >
                    <img
                      src={
                        showModalPassword
                          ? hidePasswordVector
                          : showPasswordVector
                      }
                      alt={
                        showModalPassword ? "Esconder senha" : "Mostrar senha"
                      }
                    />
                  </button>
                </div>
              </div>

              <div className="addFunctionButton">
                <TextualButton
                  text={"ADICIONAR"}
                  className="submit"
                  onClick={handleAddFunction}
                />
              </div>
            </div>
          </div>
        )}

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
      </div>
    </section>
  );
}

export default CompanySignUp;

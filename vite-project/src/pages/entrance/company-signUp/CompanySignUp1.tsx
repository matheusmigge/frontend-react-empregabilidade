import "./CompanySignUp.css";
import TextualButton from "../../../components/textual-button/TextualButton";
import logoCompletaVetor from "../../../assets/logoCompletaVetor.svg";
import maletaVetor from "../../../assets/maletaVetor.svg";
import usuarioVetor from "../../../assets/usuarioVetor.svg";
import imageUploadVector from "./assets/imageUploadVector.svg";
import { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SymbolButton from "../../../components/symbol-button/SymbolButton";

function CompanySignUp1() {
  const endPoint = "http://localhost:3000/companies";

  const [newCompany, setNewCompany] = useState({
    name: "",
    email: "",
    phone: "",
    CNPJ: "",
  });

  const createCompany = async () => {
    try {
      const response = await axios.post(`${endPoint}`, newCompany);
      console.log("Empresa criada: ", response.data);
      setNewCompany({
        name: "",
        email: "",
        phone: "",
        CNPJ: "",
      });
    } catch (error) {
      console.error("Erro ao criar empresa", error);
    }
  };

  const [registerType, setRegisterType] = useState("candidate");

  const handleClick = (type: string) => {
    setRegisterType(type);
  };

  // Estado e referência para upload da logo
  const [logo, setLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Aciona o input de arquivo ao clicar no botão
  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Captura a imagem selecionada
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setLogo(imageUrl);
    }
  };

  return (
    <>
      <body className="body-container">
        <section className="leftSide">
          <div className="logoContainer">
            <img src={logoCompletaVetor} alt="Logo da RE9AÇÃO" />
          </div>
          <div className="buttonContainer">
            <TextualButton
              className={`enterpriseButton ${
                registerType === "company" ? "selected" : ""
              }`}
              text="Sou empresa"
              imageUrl={maletaVetor}
              onClick={() => handleClick("company")}
            />
            <TextualButton
              className={`candidateButton ${
                registerType === "candidate" ? "selected" : ""
              }`}
              text="Sou candidato"
              imageUrl={usuarioVetor}
              onClick={() => handleClick("candidate")}
            />
          </div>
          <div className="back-to-lp">
            <p>
              Voltar ao <Link to="/">Início</Link>
            </p>
          </div>
        </section>

        <section className="rightSide">
          <div className="company-register">
            <div className="titleContainer">
              <h1>CADASTRE SUA EMPRESA</h1>
            </div>

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
                    <input
                      type="text"
                      id="cnpj"
                      name="cnpj"
                      placeholder="XX. XXX. XXX/0001-XX"
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
                    <input
                      type="tel"
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
                      placeholder="example@email.com"
                      value={newCompany.email}
                      onChange={(e) =>
                        setNewCompany({ ...newCompany, email: e.target.value })
                      }
                      required
                    />
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
                  <Link to="/companySignUp2" className="linkStyle">
                    <TextualButton text={"CONTINUAR"} className="submit" />
                  </Link>
                </div>
              </div>
            </form>

            <div className="loginContainer">
              <p>
                Já tem uma conta? <Link to="/entrance">Entrar</Link>
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
      </body>
    </>
  );
}

export default CompanySignUp1;

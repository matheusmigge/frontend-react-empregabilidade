import "./userCurriculum.css";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import Header from "../../../components/header/Header";
import bellIcon from "../../../components/header/assets/bell.svg";
import userIcon from "../../../components/header/assets/Ellipse 1.svg";
import goBackVector from "../../vacancy/assets/goBackVector.svg";
import { Link } from "react-router-dom";
import AccordionBox from "../../vacancy/accordionBox/AccordionBox";

export default function UserCurriculum () {
  const [telefone, setTelefone] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmaSenha, setMostrarConfirmaSenha] = useState(false);

  // Estados para endereço
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [erroCep, setErroCep] = useState("");

  function formatarTelefone(valor: string) {
    valor = valor.replace(/\D/g, "");
    if (valor.length <= 2) return `(${valor}`;
    if (valor.length <= 7) return `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    if (valor.length <= 11)
      return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
    return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
  }

  // Função para buscar o endereço pelo CEP
  async function buscarCep(valor: string) {
    const cepLimpo = valor.replace(/\D/g, "");
    if (cepLimpo.length !== 8) {
      setErroCep("CEP deve ter 8 dígitos.");
      setRua("");
      setBairro("");
      setCidade("");
      setEstado("");
      return;
    }
    setErroCep("");
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await response.json();
      if (data.erro) {
        setErroCep("CEP não encontrado.");
        setRua("");
        setBairro("");
        setCidade("");
        setEstado("");
      } else {
        setRua(data.logradouro || "");
        setBairro(data.bairro || "");
        setCidade(data.localidade || "");
        setEstado(data.uf || "");
      }
    } catch {
      setErroCep("Erro ao buscar CEP.");
      setRua("");
      setBairro("");
      setCidade("");
      setEstado("");
    }
  }

    return (
      <>
      <div>
        <Link to="/userSignUp2" className="linkStyle">
          <Header
            imgUrl1={bellIcon}
            imgUrl2={userIcon}
            imgUrl={goBackVector}
          ></Header>
        </Link>
      </div>
      
      <body className="body-container">
        <section className="titleContainer">
          <h1 className="curriculumTitle">Preenchimento de informações</h1>
          <div className="blueBar"></div>

          <div className="curriculumAccordionContainer">

            <AccordionBox title="Dados pessoais">

              <div className="curriculumFormContainer">
              
                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Nome</p>
                  <input type="text" className="curriculumInputField" placeholder="Digite seu Primeiro nome" />
                </div>

                <div  className="curriculumFormField">
                <p className="curriculumAccordionText">Sobrenome</p>
                <input type="text" className="curriculumInputField" placeholder="Digite seu Sobrenome" />
                </div>
                
                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">CPF</p>
                  <input type="text" className="curriculumInputField" placeholder="Digite seu CPF"/>
                </div>

                <div  className="curriculumFormField">
                <p className="curriculumAccordionText">Data de nascimento</p>
                <input type="date" className="curriculumInputField"/>
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Email</p>
                  <input type="email" className="curriculumInputField" placeholder="Digite seu Gmail" />
                </div>

                <div className="curriculumFormField">
      <p className="curriculumAccordionText">Telefone</p>
      <input
        type="tel"
        className="curriculumInputField"
        placeholder=" (00) 00000-0000"
        value={telefone}
        onChange={e => setTelefone(formatarTelefone(e.target.value))}
        maxLength={15}
      />
    </div>

    <div className="curriculumFormField">
      <p className="curriculumAccordionText">Senha</p>
      <div style={{ position: "relative" }}>
        <input
          type={mostrarSenha ? "text" : "password"}
          className="curriculumInputField"
          name="user-password"
          placeholder="Digite sua senha"
          style={{ paddingRight: "35px" }}
        />
        <span
          onClick={() => setMostrarSenha((v) => !v)}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer"
          }}
          title={mostrarSenha ? "Esconder senha" : "Mostrar senha"}
        >
          {mostrarSenha ? <FiEyeOff size={24} /> : <FiEye size={24} />}
        </span>
      </div>
    </div>

    <div className="curriculumFormField">
      <p className="curriculumAccordionText">Confirme sua senha</p>
      <div style={{ position: "relative" }}>
        <input
          type={mostrarConfirmaSenha ? "text" : "password"}
          className="curriculumInputField"
          name="user-password"
          placeholder="Confirme sua senha"
          style={{ paddingRight: "35px" }}
        />
        <span
          onClick={() => setMostrarConfirmaSenha((v) => !v)}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer"
          }}
          title={mostrarConfirmaSenha ? "Esconder senha" : "Mostrar senha"}
        >
          {mostrarConfirmaSenha ? <FiEyeOff size={24} /> : <FiEye size={24} />}
        </span>
      </div>
    </div>

    {/* LinkedIn e Portfólio movidos para Dados pessoais */}
    <div className="curriculumFormField">
      <p className="curriculumAccordionText">Linkedin</p>
      <input
        type="url"
        className="curriculumInputField"
        name="user-linkedin"
        placeholder="Link do seu Linkedin"
      />
    </div>

    <div className="curriculumFormField">
      <p className="curriculumAccordionText">Portfólio</p>
      <input
        type="url"
        className="curriculumInputField"
        name="user-portfolio"
        placeholder="Link do seu Portfólio"
      />
    </div>
              </div>
             
            </AccordionBox>
          </div>

          <div className="curriculumAccordionContainer">

            <AccordionBox title="Informações adicionais">

              <div className="curriculumFormContainer">
              
                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">CEP</p>
                  <input
                    type="text"
                    className="curriculumInputField"
                    placeholder="Informe seu Código postal"
                    value={cep}
                    onChange={e => {
                      const valor = e.target.value.replace(/\D/g, "").slice(0, 8);
                      setCep(valor);
                    }}
                    onBlur={e => buscarCep(e.target.value)}
                    maxLength={8}
                  />
                  {erroCep && <span style={{ color: "red", fontSize: "14px" }}>{erroCep}</span>}
                </div>

                <div  className="curriculumFormField">
                <p className="curriculumAccordionText">Rua</p>
                <input
                  type="text"
                  className="curriculumInputField"
                  placeholder="Informe seu endereço"
                  value={rua}
                  onChange={e => setRua(e.target.value)}
                />
                </div>
                
                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Bairro</p>
                  <input
                    type="text"
                    className="curriculumInputField"
                    placeholder="Informe seu bairro"
                    value={bairro}
                    onChange={e => setBairro(e.target.value)}
                  />
                </div>

                <div  className="curriculumFormField">
                <p className="curriculumAccordionText">Cidade</p>
                <input
                  type="text"
                  className="curriculumInputField"
                  placeholder="Informe sua cidade"
                  value={cidade}
                  onChange={e => setCidade(e.target.value)}
                />
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Estado</p>
                  <input
                    type="text"
                    className="curriculumInputField"
                    placeholder="Informe seu Estado"
                    value={estado}
                    onChange={e => setEstado(e.target.value)}
                  />
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Nº</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe o Número residêncial"/>
                </div>

                {/* Complemento (opcional) dentro de Endereço */}
                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Complemento (opcional)</p>
                  <input
                    type="text"
                    className="curriculumInputField"
                    placeholder="Apartamento, bloco, referência, etc."
                  />
                </div>
                  
              </div>
             
            </AccordionBox>

          </div>

          <div className="curriculumAccordionContainer">
            <AccordionBox title="Experiências profissionais">

                <div className="curriculumFormContainer1">

                <div className="curriculumExperienceField">

                  <p className="curriculumAccordionText">Empresa</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe sua experiência profissional" />

                  <p className="curriculumAccordionText">Cargo</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe sua experiência profissional" />

                  <p className="curriculumAccordionText">Período</p>
                  <div>
                  <input type="date" className="curriculumInputFieldExp" />
                  
                  <input type="date" className="curriculumInputFieldExp" />
                  </div>

                  <p className="curriculumAccordionText">resumo</p>
                  <textarea name="" className="curriculumInputFieldProfExp" placeholder="Faça um breve resumo sobre suas funções na empresa!"></textarea>

                  <div className="botoes-container">
                    <button className="btn excluir">
                      <span className="icon">🗑️</span> Excluir
                    </button>
                    <button className="btn editar">
                      <span className="icon">✏️</span> Editar
                    </button>
                    <button className="btn confirmar">
                      <span className="icon">✓</span> Confirmar
                    </button>
                  </div>

                </div>

                <div className="curriculumAccordionContainer">

                  <p className="curriculumAccordionText">Empresa</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe sua experiência profissional" />

                  <p className="curriculumAccordionText">Cargo</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe sua experiência profissional" />

                  <p className="curriculumAccordionText">Período</p>
                  <div>
                  <input type="date" className="curriculumInputFieldExp" />
                  
                  <input type="date" className="curriculumInputFieldExp" />
                  </div>

                  <p className="curriculumAccordionText">Resumo</p>
                  <textarea name="" className="curriculumInputFieldProfExp" placeholder="Faça um breve resumo sobre suas funções na empresa!"></textarea>
                  
                  <div className="botoes-container">
                    <button className="btn excluir">
                      <span className="icon">🗑️</span> Excluir
                    </button>
                    <button className="btn editar">
                      <span className="icon">✏️</span> Editar
                    </button>
                    <button className="btn confirmar">
                      <span className="icon">✓</span> Confirmar
                    </button>
                  </div>
                </div>

              </div>


              <div className="add-button-container">
                  <button className="add-button">＋</button>
                </div>

            </AccordionBox>
          </div>

          <div className="curriculumAccordionContainer">
            <AccordionBox title="Formação acadêmica">

              <div className="curriculumFormContainerIe">
                <p className="curriculumAccordionText">instituição de ensino</p>
                  <input type="text" className="curriculumInputFieldFa" placeholder="Informe sua instituição de ensino" />
              
                  <p className="curriculumAccordionText">Período</p>
                  <input type="date" className="curriculumInputFieldExp" />
                  <input type="date" className="curriculumInputFieldExp" />

                  <div className="botoes-container">
                    <button className="btn excluir">
                      <span className="icon">🗑️</span> Excluir
                    </button>
                    <button className="btn editar">
                      <span className="icon">✏️</span> Editar
                    </button>

                  </div>

              </div>
              
              <div className="add-button-container">
                  <button className="add-button">＋</button>
                </div>

            </AccordionBox>
          </div>

          <div className="curriculumAccordionContainer">

            <AccordionBox title="Cursos e certificações">
              <div className="curriculumFormContainerIe">
              <p className="curriculumAccordionText">Nome do Curso/certificação</p>
              <input type="text" className="curriculumInputFieldFa" placeholder="Informe a instituição de ensino" />
              <p className="curriculumAccordionText">Ano de conclusão</p>
              <input type="date" className="curriculumInputFieldExp" />

              <div className="botoes-container">
                    <button className="btn excluir">
                      <span className="icon">🗑️</span> Excluir
                    </button>
                    <button className="btn editar">
                      <span className="icon">✏️</span> Editar
                    </button>

                  </div>
              
                  </div>
                  
                  <div className="add-button-container">
                  <button className="add-button">＋</button>
                </div>
            </AccordionBox>
            
            
            <div className="curriculumAccordionContainer">
            <AccordionBox title="Línguas">
              <div className="curriculumFormContainerIe">
              <p className="curriculumAccordionText">Idioma</p>
                <select className="curriculumInputFieldFa">
                <option value="ingles">Inglês</option>
                <option value="espanhol">Espanhol</option>
                <option value="frances">Francês</option>
                <option value="alemao">Alemão</option>
                <option value="outro">Outro</option>
              </select>

              <p className="curriculumAccordionText">Nível</p>
                <select className="curriculumInputFieldFa">
                <option value="basico">Básico</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
                <option value="fluente">Fluente</option>
              </select>

              <div className="botoes-container">
                <button className="btn excluir">
                <span className="icon">🗑️</span> Excluir
                </button>
                 
              </div>
              </div>
                  
                <div className="add-button-container">
                  <button className="add-button">＋</button>
                </div>
            </AccordionBox>
          </div>

          <div className="curriculumAccordionContainer">
            <AccordionBox title="Habilidades e Competências">
              <div className="curriculumFormContainerIe">
                <p className="curriculumAccordionText">Habilidade</p>
                <select className="curriculumInputFieldFa">
                  <option value="comunicacao">Comunicação</option>
                  <option value="trabalho-em-equipe">Trabalho em equipe</option>
                  <option value="lideranca">Liderança</option>
                  <option value="resolucao-de-problemas">Resolução de problemas</option>
                  <option value="criatividade">Criatividade</option>
                  <option value="adaptabilidade">Adaptabilidade</option>
                  <option value="pensamento-critico">Pensamento crítico</option>
                  <option value="gestao-de-tempo">Gestão de tempo</option>
                </select>

                <p className="curriculumAccordionText">Nível</p>
                <select className="curriculumInputFieldFa">
                  <option value="iniciante">Iniciante</option>
                  <option value="intermediario">Intermediário</option>
                  <option value="avancado">Avançado</option>
                  <option value="especialista">Especialista</option>
                </select>

                <div className="botoes-container">
                  <button className="btn excluir">
                    <span className="icon">🗑️</span> Excluir
                  </button>
                </div>
              </div>

              <div className="add-button-container">
                <button className="add-button">＋</button>
              </div>
            </AccordionBox>
          </div>

            </div>  
      </section>
        
      
      </body>
      <footer>
      <div className="finalization-bar">
        <Link to="/userSignUp2" className="linkStyle">
        <button className="btn-cancel">Cancelar</button>
        </Link>

        <Link to="/home" className="linkStyle">
        <button className="btn-save">Salvar</button>
        </Link>

        </div>
      </footer>

      </>
    );
  }



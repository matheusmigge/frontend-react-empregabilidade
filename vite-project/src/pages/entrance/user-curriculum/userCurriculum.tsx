import "./userCurriculum.css";
import { useContext } from "react";
import { UserContext } from "../user-curriculum/UserContext";

import Header from "../../../components/header/Header";
import bellIcon from "../../../components/header/assets/bell.svg";
import userIcon from "../../../components/header/assets/Ellipse 1.svg";
import goBackVector from "../../vacancy/assets/goBackVector.svg";
import { Link } from "react-router-dom";
import AccordionBox from "../../vacancy/accordionBox/AccordionBox";

export default function UserCurriculum () {
  const { userData } = useContext(UserContext)!;

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
                  <input type="text" className="curriculumInputField" placeholder="Digite seu Primeiro nome" value={userData.nome || ""} readOnly />
                </div>

                <div  className="curriculumFormField">
                <p className="curriculumAccordionText">Sobrenome</p>
                <input type="text" className="curriculumInputField" placeholder="Digite seu Sobrenome" value={userData.sobrenome || ""} readOnly />
                </div>
                
                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">CPF</p>
                  <input type="text" className="curriculumInputField" placeholder="Digite seu CPF" value={userData.cpf || ""} readOnly />
                </div>

                <div  className="curriculumFormField">
                <p className="curriculumAccordionText">Data de nascimento</p>
                <input type="date" className="curriculumInputField" value={userData.dataNascimento || ""} readOnly />
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Email</p>
                  <input type="email" className="curriculumInputField" placeholder="Digite seu Gmail" value={userData.email || ""} readOnly />
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Telefone</p>
                  <input type="tel" className="curriculumInputField" placeholder=" (00) 00000-0000" value={userData.telefone || ""} readOnly />
                </div>
                  
              </div>
             
            </AccordionBox>
          </div>

          <div className="curriculumAccordionContainer">

            <AccordionBox title="Informações adicionais">

              <div className="curriculumFormContainer">
              
                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">CEP</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe seu Código postal" value={userData.cep || ""} readOnly />
                </div>

                <div  className="curriculumFormField">
                <p className="curriculumAccordionText">Rua</p>
                <input type="text" className="curriculumInputField" placeholder="Informe seu endereço" value={userData.rua || ""} readOnly />
                </div>
                
                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Bairro</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe seu bairro" value={userData.bairro || ""} readOnly/>
                </div>

                <div  className="curriculumFormField">
                <p className="curriculumAccordionText">Cidade</p>
                <input type="text" className="curriculumInputField" placeholder="Informe sua cidade" value={userData.cidade || ""} readOnly/>
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">estado</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe seu Estado" value={userData.estado || ""} readOnly/>
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Nº</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe o Número residêncial" value={userData.numero || ""} readOnly/>
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Linkedin</p>
                  <input type="url" className="curriculumInputField" name="user-linkedin" placeholder="Link do seu Linkedin" value={userData.linkedin || ""} readOnly/>
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Portfólio</p>
                  <input type="url" className="curriculumInputField" name="user-portfolio" placeholder="Link do seu Portfólio" value={userData.portfolio || ""} readOnly/>
                </div>
                  
              </div>
             
            </AccordionBox>

          </div>

          <div className="curriculumAccordionContainer">
            <AccordionBox title="Resumo profissional">
              <div className="curriculumFormContainer">
              
                <div  className="curriculumFormFieldProf">
                    <textarea name="" className="curriculumInputFieldProf" placeholder="Faça um breve resumo sobre sua carreira profissional!"></textarea>
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




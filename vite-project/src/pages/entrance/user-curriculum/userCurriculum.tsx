import "./userCurriculum.css";

import Header from "../../../components/header/Header";
import bellIcon from "../../../components/header/assets/bell.svg";
import userIcon from "../../../components/header/assets/Ellipse 1.svg";
import goBackVector from "../../vacancy/assets/goBackVector.svg";
import { Link } from "react-router-dom";
import AccordionBox from "../../vacancy/accordionBox/AccordionBox";

export default function UserCurriculum () {
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

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Telefone</p>
                  <input type="tel" className="curriculumInputField" placeholder=" (00) 00000-0000"/>
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Senha</p>
                  <input type="password" className="curriculumInputField" name="user-password" placeholder="Digite sua senha"/>
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Confirme sua senha</p>
                  <input type="password" className="curriculumInputField" name="user-password" placeholder="Confirme sua senha"/>
                </div>
                  
              </div>
             
            </AccordionBox>
          </div>

          <div className="curriculumAccordionContainer1">

            <AccordionBox title="Informações adicionais">

              <div className="curriculumFormContainer">
              
                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">CEP</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe  seu Código postal" />
                </div>

                <div  className="curriculumFormField">
                <p className="curriculumAccordionText">Rua</p>
                <input type="text" className="curriculumInputField" placeholder="Informe seu endereço" />
                </div>
                
                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Bairro</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe seu bairro"/>
                </div>

                <div  className="curriculumFormField">
                <p className="curriculumAccordionText">Cidade</p>
                <input type="text" className="curriculumInputField" placeholder="Informe sua cidade"/>
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">estado</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe  seu Estado"/>
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Nº</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe o Número residêncial"/>
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Linkedin</p>
                  <input type="url" className="curriculumInputField" name="user-linkedin" placeholder="Link do seu Linkedin"/>
                </div>

                <div  className="curriculumFormField">
                  <p className="curriculumAccordionText">Portfólio</p>
                  <input type="url" className="curriculumInputField" name="user-portfolio" placeholder="Link do seu Portfólio"/>
                </div>
                  
              </div>
             
            </AccordionBox>

          </div>

          <div className="curriculumAccordionContainer2">
            <AccordionBox title="Resumo profissional">
              <div className="curriculumFormContainer">
              
                <div  className="curriculumFormFieldProf">
                    <textarea name="" className="curriculumInputFieldProf" placeholder="Faça um breve resumo sobre sua carreira profissional!"></textarea>
                </div>

              </div>
            </AccordionBox>
          </div>

          <div className="curriculumAccordionContainer4">
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

          <div className="curriculumAccordionContainer3">
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

            
      </section>
        
      
      </body>
      </>
    );
  }
  



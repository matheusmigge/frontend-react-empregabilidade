import "./userCurriculum.css";
import { FaPlus, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import AccordionBox from "../../vacancy/accordionBox/AccordionBox";

export default function UserCurriculum() {
  const [telefone, setTelefone] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmaSenha, setMostrarConfirmaSenha] = useState(false);

  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [erroCep, setErroCep] = useState("");


  const [experiencias, setExperiencias] = useState([
    {
      empresa: "",
      cargo: "",
      periodoInicio: "",
      periodoFim: "",
      resumo: ""
    }
  ]);


  const [formacoes, setFormacoes] = useState([
    {
      nomeCurso: "",
      instituicao: "",
      periodoInicio: "",
      periodoFim: ""
    }
  ]);


  const [cursos, setCursos] = useState([
    {
      nome: "",
      instituicao: "",
      anoConclusao: ""
    }
  ]);

  const [linguas, setLinguas] = useState([
    {
      idioma: "",
      nivel: ""
    }
  ]);


  const [habilidades, setHabilidades] = useState([
    {
      habilidade: "",
      nivel: ""
    }
  ]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [linkedInURL, setLinkedInURL] = useState("");
  const [portfolioURL, setPortfolioURL] = useState("");


  function formatarTelefone(valor: string) {
    valor = valor.replace(/\D/g, "");
    if (valor.length <= 2) return `(${valor}`;
    if (valor.length <= 7) return `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    if (valor.length <= 11)
      return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
    return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
  }


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


  function adicionarExperiencia() {
    setExperiencias([
      ...experiencias,
      {
        empresa: "",
        cargo: "",
        periodoInicio: "",
        periodoFim: "",
        resumo: ""
      }
    ]);
  }


  function atualizarExperiencia(index: number, campo: string, valor: string) {
    const novasExperiencias = experiencias.map((exp, i) =>
      i === index ? { ...exp, [campo]: valor } : exp
    );
    setExperiencias(novasExperiencias);
  }


  function excluirExperiencia(index: number) {
    setExperiencias(experiencias.filter((_, i) => i !== index));
  }


  function adicionarFormacao() {
    setFormacoes([
      ...formacoes,
      {
        nomeCurso: "",
        instituicao: "",
        periodoInicio: "",
        periodoFim: ""
      }
    ]);
  }


  function atualizarFormacao(index: number, campo: string, valor: string) {
    const novasFormacoes = formacoes.map((form, i) =>
      i === index ? { ...form, [campo]: valor } : form
    );
    setFormacoes(novasFormacoes);
  }

  function excluirFormacao(index: number) {
    setFormacoes(formacoes.filter((_, i) => i !== index));
  }


  function adicionarCurso() {
    setCursos([
      ...cursos,
      {
        nome: "",
        instituicao: "",
        anoConclusao: ""
      }
    ]);
  }


  function atualizarCurso(index: number, campo: string, valor: string) {
    const novosCursos = cursos.map((curso, i) =>
      i === index ? { ...curso, [campo]: valor } : curso
    );
    setCursos(novosCursos);
  }


  function excluirCurso(index: number) {
    setCursos(cursos.filter((_, i) => i !== index));
  }


  function adicionarLingua() {
    setLinguas([
      ...linguas,
      {
        idioma: "",
        nivel: ""
      }
    ]);
  }


  function atualizarLingua(index: number, campo: string, valor: string) {
    const novasLinguas = linguas.map((lingua, i) =>
      i === index ? { ...lingua, [campo]: valor } : lingua
    );
    setLinguas(novasLinguas);
  }

  function excluirLingua(index: number) {
    setLinguas(linguas.filter((_, i) => i !== index));
  }





  function excluirHabilidade(index: number) {
    setHabilidades(habilidades.filter((_, i) => i !== index));
  }


  async function salvarCandidato() {
    const novoCandidato = {
      firstName,
      lastName,
      cpf,
      email,
      phoneNumber: telefone,
      dateOfBirth,
      password,
      address: {
        cep,
        addressType: "",
        addressName: rua,
        address: rua,
        state: estado,
        district: bairro,
        lat: "",
        lng: "",
        city: cidade,
        cityIbge: "",
        ddd: ""
      },
      linkedInURL,
      portfolioURL,
      resume: {
        professionalSummary: "",
        experiences: experiencias.map(exp => ({
          experience: {
            company: exp.empresa,
            role: exp.cargo,
            startDate: exp.periodoInicio,
            endDate: exp.periodoFim,
            summaryOfDuties: exp.resumo
          }
        })),
        education: formacoes.map(form => ({
          institution: form.instituicao,
          degree: form.nomeCurso,
          startDate: form.periodoInicio,
          endDate: form.periodoFim
        })),
        coursesAndCertifications: cursos.map(curso => ({
          course: {
            institution: curso.instituicao,
            title: curso.nome,
            completionYear: curso.anoConclusao ? new Date(curso.anoConclusao).getFullYear() : null
          }
        })),
        skillsAndCompetencies: habilidades.map(hab => hab.habilidade),
        languages: linguas.map(lingua => ({
          language: lingua.idioma,
          proficiencyLevel: lingua.nivel
        }))
      }
    };

    await fetch("http://localhost:3000/candidates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoCandidato)
    });
  }


  const [habilidadesInput, setHabilidadesInput] = useState("");
  const [nivelHabilidadeInput, setNivelHabilidadeInput] = useState("");
  const [adicionandoHabilidade, setAdicionandoHabilidade] = useState(false);

  function adicionarVariasHabilidades() {
    if (!habilidadesInput.trim() || !nivelHabilidadeInput) return;
    setAdicionandoHabilidade(true);
    setTimeout(() => {
      const novas = habilidadesInput
        .split(",")
        .map(h => h.trim())
        .filter(h => h.length > 0)
        .map(h => ({ habilidade: h, nivel: nivelHabilidadeInput }));
      setHabilidades([...habilidades, ...novas]);
      setHabilidadesInput("");
      setNivelHabilidadeInput("");
      setAdicionandoHabilidade(false);
    }, 400);
  }

  function CustomHeader() {
    return (
      <div className="custom-header">
        <Link to="/userSignUp2" style={{ textDecoration: "none" }}>
          <button className="back-btn" title="Voltar">
            <FaArrowLeft className="back-arrow" />
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <CustomHeader />
      <div>

      </div>

      <body className="user-curriculum">
        <section className="titleContainer">
          <h1 className="curriculumTitle">Preenchimento de informações</h1>
          <div className="blueBar"></div>

          <div className="curriculumAccordionContainer">

            <AccordionBox title="Dados pessoais">

              <div className="curriculumFormContainer">

                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Nome</p>
                  <input type="text" className="curriculumInputField" placeholder="Digite seu Primeiro nome" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>

                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Sobrenome</p>
                  <input type="text" className="curriculumInputField" placeholder="Digite seu Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>

                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">CPF</p>
                  <input type="text" className="curriculumInputField" placeholder="Digite seu CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
                </div>

                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Data de nascimento</p>
                  <input type="date" className="curriculumInputField" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
                </div>

                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Email</p>
                  <input type="email" className="curriculumInputField" placeholder="Digite seu Gmail" value={email} onChange={e => setEmail(e.target.value)} />
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
                      value={password}
                      onChange={e => setPassword(e.target.value)}
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


                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Linkedin</p>
                  <input
                    type="url"
                    className="curriculumInputField"
                    name="user-linkedin"
                    placeholder="Link do seu Linkedin"
                    value={linkedInURL}
                    onChange={e => setLinkedInURL(e.target.value)}
                  />
                </div>

                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Portfólio</p>
                  <input
                    type="url"
                    className="curriculumInputField"
                    name="user-portfolio"
                    placeholder="Link do seu Portfólio"
                    value={portfolioURL}
                    onChange={e => setPortfolioURL(e.target.value)}
                  />
                </div>
              </div>

            </AccordionBox>
          </div>

          <div className="curriculumAccordionContainer">

            <AccordionBox title="Informações adicionais">

              <div className="curriculumFormContainer">

                <div className="curriculumFormField">
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

                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Rua</p>
                  <input
                    type="text"
                    className="curriculumInputField"
                    placeholder="Informe seu endereço"
                    value={rua}
                    onChange={e => setRua(e.target.value)}
                  />
                </div>

                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Bairro</p>
                  <input
                    type="text"
                    className="curriculumInputField"
                    placeholder="Informe seu bairro"
                    value={bairro}
                    onChange={e => setBairro(e.target.value)}
                  />
                </div>

                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Cidade</p>
                  <input
                    type="text"
                    className="curriculumInputField"
                    placeholder="Informe sua cidade"
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                  />
                </div>

                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Estado</p>
                  <input
                    type="text"
                    className="curriculumInputField"
                    placeholder="Informe seu Estado"
                    value={estado}
                    onChange={e => setEstado(e.target.value)}
                  />
                </div>

                <div className="curriculumFormField">
                  <p className="curriculumAccordionText">Nº</p>
                  <input type="text" className="curriculumInputField" placeholder="Informe o Número residêncial" />
                </div>


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
                {experiencias.map((exp, idx) => (
                  <div className="curriculumExperienceField" key={idx}>
                    <p className="curriculumAccordionText">Empresa</p>
                    <input
                      type="text"
                      className="curriculumInputField"
                      placeholder="Informe sua experiência profissional"
                      value={exp.empresa}
                      onChange={e => atualizarExperiencia(idx, "empresa", e.target.value)}
                    />

                    <p className="curriculumAccordionText">Cargo</p>
                    <input
                      type="text"
                      className="curriculumInputField"
                      placeholder="Informe sua experiência profissional"
                      value={exp.cargo}
                      onChange={e => atualizarExperiencia(idx, "cargo", e.target.value)}
                    />

                    <p className="curriculumAccordionText">Período</p>
                    <div>
                      <input
                        type="date"
                        className="curriculumInputFieldExp"
                        value={exp.periodoInicio}
                        onChange={e => atualizarExperiencia(idx, "periodoInicio", e.target.value)}
                      />
                      <input
                        type="date"
                        className="curriculumInputFieldExp"
                        value={exp.periodoFim}
                        onChange={e => atualizarExperiencia(idx, "periodoFim", e.target.value)}
                      />
                    </div>

                    <p className="curriculumAccordionText">Resumo</p>
                    <textarea
                      className="curriculumInputFieldProfExp"
                      placeholder="Faça um breve resumo sobre suas funções na empresa!"
                      value={exp.resumo}
                      onChange={e => atualizarExperiencia(idx, "resumo", e.target.value)}
                    ></textarea>

                    <div className="botoes-container">
                      <button
                        className="btn excluir"
                        type="button"
                        onClick={() => excluirExperiencia(idx)}
                      >
                        <span className="icon">🗑️</span> Excluir
                      </button>
                      <button className="btn editar" type="button">
                        <span className="icon">✏️</span> Editar
                      </button>
                      <button className="btn confirmar" type="button">
                        <span className="icon">✓</span> Confirmar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="add-button-container">
                <button className="add-button" type="button" onClick={adicionarExperiencia}>＋</button>
              </div>
            </AccordionBox>
          </div>

          <div className="curriculumAccordionContainer">
            <AccordionBox title="Formação acadêmica">

              <div className="curriculumFormContainerIe">
                {formacoes.map((form, idx) => (
                  <div key={idx}>
                    <p className="curriculumAccordionText">Instituição de ensino</p>
                    <input
                      type="text"
                      className="curriculumInputFieldFa"
                      placeholder="Informe sua instituição de ensino"
                      value={form.instituicao}
                      onChange={e => atualizarFormacao(idx, "instituicao", e.target.value)}
                    />

                    {/* Novo campo para o nome do curso */}
                    <p className="curriculumAccordionText">Nome do Curso</p>
                    <input
                      type="text"
                      className="curriculumInputFieldFa"
                      placeholder="Informe o nome do curso"
                      value={form.nomeCurso || ""}
                      onChange={e => atualizarFormacao(idx, "nomeCurso", e.target.value)}
                    />

                    <p className="curriculumAccordionText">Período</p>
                    <input
                      type="date"
                      className="curriculumInputFieldExp"
                      value={form.periodoInicio}
                      onChange={e => atualizarFormacao(idx, "periodoInicio", e.target.value)}
                    />
                    <input
                      type="date"
                      className="curriculumInputFieldExp"
                      value={form.periodoFim}
                      onChange={e => atualizarFormacao(idx, "periodoFim", e.target.value)}
                    />

                    <div className="botoes-container">
                      <button
                        className="btn excluir"
                        type="button"
                        onClick={() => excluirFormacao(idx)}
                      >
                        <span className="icon">🗑️</span> Excluir
                      </button>
                      <button className="btn editar" type="button">
                        <span className="icon">✏️</span> Editar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="add-button-container">
                <button className="add-button" type="button" onClick={adicionarFormacao}>＋</button>
              </div>
            </AccordionBox>
          </div>

          <div className="curriculumAccordionContainer">
            <AccordionBox title="Cursos e certificações">
              <div className="curriculumFormContainerIe">
                {cursos.map((curso, idx) => (
                  <div key={idx}>
                    <p className="curriculumAccordionText">Nome do Curso/certificação</p>
                    <input
                      type="text"
                      className="curriculumInputFieldFa"
                      placeholder="Informe o nome do curso/certificação"
                      value={curso.nome}
                      onChange={e => atualizarCurso(idx, "nome", e.target.value)}
                    />
                    <p className="curriculumAccordionText">Instituição</p>
                    <input
                      type="text"
                      className="curriculumInputFieldFa"
                      placeholder="Informe a instituição"
                      value={curso.instituicao}
                      onChange={e => atualizarCurso(idx, "instituicao", e.target.value)}
                    />
                    <p className="curriculumAccordionText">Ano de conclusão</p>
                    <input
                      type="date"
                      className="curriculumInputFieldExp"
                      value={curso.anoConclusao}
                      onChange={e => atualizarCurso(idx, "anoConclusao", e.target.value)}
                    />
                    <div className="botoes-container">
                      <button
                        className="btn excluir"
                        type="button"
                        onClick={() => excluirCurso(idx)}
                      >
                        <span className="icon">🗑️</span> Excluir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="add-button-container">
                <button className="add-button" type="button" onClick={adicionarCurso}>＋</button>
              </div>
            </AccordionBox>


            <div className="curriculumAccordionContainer">
              <AccordionBox title="Línguas">
                <div className="curriculumFormContainerIe">
                  {linguas.map((lingua, idx) => (
                    <div key={idx}>
                      <p className="curriculumAccordionText">Idioma</p>
                      <select
                        className="curriculumInputFieldFa"
                        value={lingua.idioma}
                        onChange={e => atualizarLingua(idx, "idioma", e.target.value)}
                      >
                        <option value="">Selecione</option>
                        <option value="ingles">Inglês</option>
                        <option value="espanhol">Espanhol</option>
                        <option value="frances">Francês</option>
                        <option value="alemao">Alemão</option>
                        <option value="outro">Outro</option>
                      </select>

                      <p className="curriculumAccordionText">Nível</p>
                      <select
                        className="curriculumInputFieldFa"
                        value={lingua.nivel}
                        onChange={e => atualizarLingua(idx, "nivel", e.target.value)}
                      >
                        <option value="">Selecione</option>
                        <option value="basico">Básico</option>
                        <option value="intermediario">Intermediário</option>
                        <option value="avancado">Avançado</option>
                        <option value="fluente">Fluente</option>
                      </select>

                      <div className="botoes-container">
                        <button
                          className="btn excluir"
                          type="button"
                          onClick={() => excluirLingua(idx)}
                        >
                          <span className="icon">🗑️</span> Excluir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="add-button-container">
                  <button className="add-button" type="button" onClick={adicionarLingua}>＋</button>
                </div>
              </AccordionBox>
            </div>

            <div className="curriculumAccordionContainer">
              <AccordionBox title="Habilidades e Competências">
                <div className="curriculumFormContainerIe">
                  {/* Campo para adicionar várias habilidades */}
                  <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                    <input
                      type="text"
                      className="curriculumInputFieldFa"
                      placeholder="Digite habilidades separadas por vírgula"
                      value={habilidadesInput}
                      onChange={e => setHabilidadesInput(e.target.value)}
                      style={{ flex: 2 }}
                    />
                    <select
                      className="curriculumInputFieldFa"
                      value={nivelHabilidadeInput}
                      onChange={e => setNivelHabilidadeInput(e.target.value)}
                      style={{ flex: 1 }}
                    >
                      <option value="">Nível</option>
                      <option value="iniciante">Iniciante</option>
                      <option value="intermediario">Intermediário</option>
                      <option value="avancado">Avançado</option>
                      <option value="especialista">Especialista</option>
                    </select>
                    <button
                      className="add-button add-button-competencia"
                      type="button"
                      onClick={adicionarVariasHabilidades}
                      style={{ flex: 0.5, display: "flex", alignItems: "center", justifyContent: "center" }}
                      disabled={adicionandoHabilidade || !habilidadesInput.trim() || !nivelHabilidadeInput}
                      title="Adicionar competências"
                    >
                      {adicionandoHabilidade ? (
                        <FaCheck color="#28a745" size={22} />
                      ) : (
                        <FaPlus size={22} />
                      )}
                      <span style={{ marginLeft: 8, fontWeight: 500 }}>Adicionar</span>
                    </button>
                  </div>

                  {/* Lista de habilidades já adicionadas */}
                  {habilidades.map((hab, idx) => (
                    <div key={idx}>
                      <p className="curriculumAccordionText">Habilidade</p>
                      <input
                        type="text"
                        className="curriculumInputFieldFa"
                        value={hab.habilidade}
                        readOnly
                      />
                      <p className="curriculumAccordionText">Nível</p>
                      <input
                        type="text"
                        className="curriculumInputFieldFa"
                        value={hab.nivel}
                        readOnly
                      />
                      <div className="botoes-container">
                        <button
                          className="btn excluir"
                          type="button"
                          onClick={() => excluirHabilidade(idx)}
                        >
                          <span className="icon">🗑️</span> Excluir
                        </button>
                      </div>
                    </div>
                  ))}
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
            <button className="btn-save" onClick={salvarCandidato}>Salvar</button>
          </Link>

        </div>
      </footer>

    </>
  );
}



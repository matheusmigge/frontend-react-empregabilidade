import { useState, useEffect, useRef } from "react";
import "./CadastroDeVaga.css";
import Header from "../../components/header/Header";
import bellIcon from "../../components/header/assets/bell.svg";
import goBackVector from "../vacancy/assets/goBackVector.svg";
import userIcon from "../../components/header/assets/Ellipse 1.svg";

function CadastroVaga() {
  const [skills, setSkills] = useState<string[]>([
    "Comunicação",
    "Proatividade",
    "Excel",
    "Power BI",
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [showInput, setShowInput] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowInput(false);
        setNewSkill("");
      }
    }

    if (showInput) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInput]);

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
      setShowInput(false);
    }
  };

  return (
    <>
      <Header
        imgUrl={goBackVector}
        title="Cadastrar Vaga"
        imgUrl1={bellIcon}
        imgUrl2={userIcon}
      />

      <div className="cadastro-container">
        
        <label className="label">Banner da Vaga</label>
        <label className="banner-upload" htmlFor="fileUpload">
          <div className="upload-icon">📤</div>
          <span className="upload-info">1280x250 4MB</span>
        </label>
        <input
          id="fileUpload"
          type="file"
          hidden
          onChange={(e) => console.log(e.target.files)}
        />

        
        <div className="form-row">
          <div className="input-group-responsive">
            <label className="label">Remuneração (opcional)</label>
            <input type="text" />
          </div>
          <div className="input-group-responsive">
            <label className="label">Modelo de trabalho</label>
            <select>
              <option>Selecione</option>
            </select>
          </div>
          <div className="input-group-responsive">
            <label className="label">Área da vaga</label>
            <select>
              <option>Selecione</option>
            </select>
          </div>
          <div className="input-group-responsive">
            <label className="label">Distância máxima</label>
            <select>
              <option>Selecione</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label className="label">Título da vaga</label>
          <input type="text" className="input-full" />
        </div>

        <div className="input-group">
          <label className="label">Descrição da vaga</label>
          <textarea></textarea>
        </div>

        <div className="input-group">
          <label className="label">Responsabilidades e atribuições</label>
          <textarea></textarea>
        </div>

        <div className="input-group">
          <label className="label">Requisitos e qualificações</label>
          <textarea></textarea>
        </div>

        <div className="input-group">
          <label className="label">
            O que aumenta as chances do candidato?
          </label>
          <textarea></textarea>
        </div>


        <label className="label">Habilidades e competências</label>
        <div className="skills-box" ref={containerRef}>
          <div className="skills-tags">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
            {showInput ? (
              <>
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Nova habilidade"
                  className="input-skill"
                  ref={inputRef}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddSkill();
                    }
                  }}
                />
                <button onClick={handleAddSkill} className="input-confirm">
                  Adicionar
                </button>
              </>
            ) : (
              <button className="btn-add" onClick={() => setShowInput(true)}>
                +
              </button>
            )}
          </div>
        </div>


        <label className="label">Endereço da vaga</label>
<div className="map-box">
  <div className="map-header">
    <h2>Endereço da vaga</h2>
    <div className="search-container">
  <input type="text" placeholder="Localização..." className="search-input" />
</div>

  </div>
  <div className="map-content">[Mapa]</div>
</div>




        <label className="label">Etapas do processo</label>
        <div className="process-box">
          <div className="process-flow">
          <div className="circle-container">
          <div className="circle blue">🖋</div>
         <div className="name">Cadastro</div>
        </div>
            <span className="arrow">→</span>
            <div className="circle green">+</div>
          </div>
        </div>

        
        <div className="buttons">
          <button className="cancel">CANCELAR</button>
          <button className="publish">PUBLICAR VAGA!</button>
        </div>
      </div>
    </>
  );
}

export default CadastroVaga;




import { useState, useEffect, useRef } from "react";
import "./PostJob.css";
import Header from "../../components/header/Header";

function PostJob() {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);

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

  const handleRemoveSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (skills.length === 0) {
      alert("Adicione pelo menos uma habilidade antes de publicar a vaga.");
      return;
    }

    alert("Vaga publicada com sucesso!");
  };

  return (
    <>
      <Header
        title="Cadastrar Vaga"
      />

      <div className="cadastro-container">
        <label className="label">Banner da Vaga</label>
        <div className="banner-upload-wrapper">
          {!bannerPreview ? (
            <label className="banner-upload" htmlFor="fileUpload">
              <div className="upload-icon">📤</div>
              <span className="upload-info">1280x250 4MB</span>
            </label>
          ) : (
            <div className="banner-preview-container">
              <img
                src={bannerPreview}
                alt="Preview"
                className="banner-preview-filled"
              />
              <button
                className="remove-banner-btn"
                onClick={() => setBannerPreview(null)}
                aria-label="Remover banner"
              >
                ×
              </button>
            </div>
          )}
          <input
            id="fileUpload"
            type="file"
            hidden
            onChange={handleFileChange}
          />
        </div>

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
              <span key={index} className="skill-item">
                {skill}
                <button
                  className="remove-skill-btn"
                  onClick={() => handleRemoveSkill(index)}
                >
                  ×
                </button>
              </span>
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
              <input
                type="text"
                placeholder="Localização..."
                className="search-input"
              />
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
          <button className="publish" onClick={handleSubmit}>
            PUBLICAR VAGA
          </button>
        </div>
      </div>
    </>
  );
}

export default PostJob;




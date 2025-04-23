import "./CadastroDeVaga.css";
import Header from "../../components/header/Header";
import bellIcon from "../../components/header/assets/bell.svg";
import userIcon from "../../components/header/assets/Ellipse 1.svg";

function CadastroVaga() {
  return (
    <>
      <Header
        title="Cadastrar Vaga"
        imgUrl1={bellIcon}
        imgUrl2={userIcon}
      />

      <div className="cadastro-container">
        {/* Banner Upload */}
        <label className="label">Banner da Vaga</label>
        <label className="banner-upload" htmlFor="fileUpload">
          <div className="upload-icon">📤</div>
          <span className="upload-info">1280x250 4MB</span>
        </label>
        <input id="fileUpload" type="file" hidden onChange={(e) => console.log(e.target.files)} />

        {/* Campos principais */}
        <div className="form-row">
          <div className="input-group">
            <label className="label">Remuneração (opcional)</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label className="label">Modelo de trabalho</label>
            <select><option>Selecione</option></select>
          </div>
          <div className="input-group">
            <label className="label">Área da vaga</label>
            <select><option>Selecione</option></select>
          </div>
          <div className="input-group">
            <label className="label">Distância máxima</label>
            <select><option>Selecione</option></select>
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
          <label className="label">O que aumenta as chances do candidato?</label>
          <textarea></textarea>
        </div>

        {/* Habilidades */}
        <label className="label">Habilidades e competências</label>
        <div className="skills-box">
          <div className="skills-tags">
            <span>Comunicação</span>
            <span>Proatividade</span>
            <span>Excel</span>
            <span>Power BI</span>
            <button className="btn-add">+</button>
          </div>
        </div>

        {/* Endereço */}
        <label className="label">Endereço da vaga</label>
<div className="map-box"> 
  <Header
    title="Endereço da vaga"
    inputText={true}
  />
  <div className="map-placeholder">[Mapa aqui]</div>
</div>

        {/* Etapas do processo */}
<label className="label">Etapas do processo</label>
<div className="process-box">
  <div className="process-flow">
    <div className="circle blue">🖋</div>
    <span className="step-name">Cadastro</span>
    <span className="arrow">→</span>
    <div className="circle green">+</div>
  </div>
</div>

        {/* Botões */}
        <div className="buttons">
          <button className="cancel">CANCELAR</button>
          <button className="publish">PUBLICAR VAGA!</button>
        </div>
      </div>
    </>
  );
}

export default CadastroVaga;

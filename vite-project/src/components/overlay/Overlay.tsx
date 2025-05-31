import "./overlay.css";
import { useAuth } from "../../context/AuthContext";
import { Candidate, Company } from "../../types";
import { Link, useNavigate } from "react-router-dom";

interface OverlayProps {
  fallbackImage?: string;
  onClose: () => void;
}

function isCandidate(user: Candidate | Company): user is Candidate {
  return "firstName" in user && "lastName" in user;
}

function isCompany(user: Candidate | Company): user is Company {
  return "name" in user && "cnpj" in user;
}

function Overlay({ fallbackImage, onClose }: OverlayProps) {
  const { userData, setUserData, setUserType } = useAuth();
  const navigate = useNavigate();

  if (!userData) return <div className="perfil-overlay">Carregando...</div>;

  let fullName = "";
  let profileImage = fallbackImage || "/default-profile.png";

  if (isCandidate(userData)) {
    fullName = `${userData.firstName} ${userData.lastName}`;
    profileImage =
      (userData as any).profileImage || fallbackImage || "/default-profile.png";
  } else if (isCompany(userData)) {
    fullName = userData.name;
    profileImage = userData.logoUrl || fallbackImage || "/default-profile.png";
  }

  // Função de logout
  const handleLogout = () => {
    // Limpa o contexto de autenticação
    setUserData(null);
    setUserType(null);

    // Limpa sessionStorage/localStorage se usado
    sessionStorage.clear();
    localStorage.clear();
    // Redireciona para entrance
    navigate("/entrance");
  };

  return (
    <div className="perfil-overlay">
      <div className="overlay-header">
        <div></div>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="user-info-row">
        <img
          src={profileImage}
          className="profile-image"
          alt="Imagem de perfil"
        />
        <div className="user-details">
          <div>
            <p className="user-name">{fullName}</p>
          </div>
          <div className="edit-profile_container">
            <Link to="" className="edit-profile">Editar perfil</Link>
          </div>
        </div>
      </div>

      <div className="overlay-options">
        {isCandidate(userData) ? (
          <>
            <button className="option-button">Minhas candidaturas</button>
            <button className="option-button">Suporte ao candidato</button>
          </>
        ) : (
          <>
            <button className="option-button">Vagas publicadas</button>
            <button className="option-button">Painel da empresa</button>
          </>
        )}
        <button className="option-button logout" onClick={handleLogout}>
          Sair
        </button>
      </div>

      <div className="overlay-footer">
        <a href="#" className="footer-link">
          Termos de uso
        </a>
        <a href="#" className="footer-link">
          Aviso de privacidade
        </a>
      </div>
    </div>
  );
}

export default Overlay;

import "./overlay.css";

interface OverlayProps {
  fallbackImage?: string;
  user: UserData;
  onLogout: () => void;
  onClose: () => void;
}

interface UserData {
  firstName: string;
  lastName: string;
  email?: string;
  profileImage?: string;
}

function Overlay({ fallbackImage, user, onLogout, onClose }: OverlayProps) {
  const fullName = `${user.firstName} ${user.lastName}`;
  const image = user.profileImage || fallbackImage || "/default-profile.png";
  if (!user) return <div className="perfil-overlay">Carregando...</div>;
  return (
    <div className="perfil-overlay">
      <div className="overlay-header">
        <div></div>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="user-info-row">
        <img src={image} className="profile-image" alt="Imagem de perfil" />
        <div className="user-details">
          <p className="user-name">{fullName}</p>
          <p className="edit-profile">Editar perfil</p>
        </div>
      </div>

      <div className="overlay-options">
        <button className="option-button">Minhas candidaturas</button>
        <button className="option-button">Suporte ao candidato</button>
        <button className="option-button logout" onClick={onLogout}>
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

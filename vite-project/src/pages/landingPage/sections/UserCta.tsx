import "./UserCta.css";
import BackgroundImg from "../assets/image 9.svg";

function UserCta() {
  return (
    <section className="userCta">
      <div className="userText">
        <h2 className="userQuestion">
          Já pensou economizar tempo e evitar stress no deslocamento até o
          trabalho?
        </h2>
        <h3 className="userAnswer">
          Aqui você encontra a vaga perfeita mais próxima à sua residência!
        </h3>
      </div>
      <div className="imgContainer">
        <img
          src={BackgroundImg}
          alt="imagem de fundo com uma mulher sorrindo"
          className="bgImg"
        />
      </div>
    </section>
  );
}

export default UserCta;

import "./register.css";
import logoCompletaVetor from "../../assets/logoCompletaVetor.svg";
import maletaVetor from "../../assets/maletaVetor.svg";
import usuarioVetor from "../../assets/usuarioVetor.svg";
import TextualButton from "../../components/textual-button/TextualButton";

function Register() {
  return (
    <>
      <body className="body-container">
        
        <section className="leftSide">
          <div className="logoContainer">
            <img src={logoCompletaVetor} alt="Logo da RE9AÇÃO" />
          </div>
          <div className="buttonContainer">
            <TextualButton
              className="enterpriseButton"
              text="Sou empresa"
              imageUrl={maletaVetor}
            />
            <TextualButton
              className="candidateButton"
              text="Sou candidato"
              imageUrl={usuarioVetor}
            />
          </div>
        </section>

        <section className="rightSide">
          
        </section>
      </body>
    </>
  );
}

export default Register;

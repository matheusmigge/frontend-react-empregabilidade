import "./EnterpriseAdvantages.css";
import MenThinking from "../assets/img.svg";
// import Bgbenefits from "../assets/bgBenefits.png";

function EnterpriseAdvantages() {
  return (
    <section className="enterpriseBenefits">
      <div className="text-container">
        <h2 className="title">
          Também temos cadastros para empresas publicarem suas vagas!
        </h2>
        <div className="question-container">
          <h4 className="question">Por que cadastrar minha empresa?</h4>
        </div>
      </div>
      <div className="menThinking-Container">
        <img src={MenThinking} alt="Homem pensando" className="menThinking" />
      </div>

      {/* <img src={Bgbenefits} alt="" className="bgBenefits" /> */}

      <div className="benefits">
        <div className="textBenefitsContainer">
          <p className="p1">
            As empresas podem encontrar candidatos altamente relevantes e
            localizados próximos ao local da vaga, reduzindo custos com
            deslocamento e aumentando as chances de compatibilidade geográfica.
          </p>
        </div>
        <div className="textBenefitsContainer">
          <p className="p2">
            A plataforma usa geolocalização para filtrar os candidatos ideais,
            economizando tempo e recursos que seriam gastos analisando perfis
            menos compatíveis.
          </p>
        </div>
        <div className="textBenefitsContainer">
          <p className="p2">
            Ao publicar vagas, a empresa também fortalece sua presença digital e
            atrai candidatos qualificados, ampliando seu alcance no mercado
            local.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EnterpriseAdvantages;

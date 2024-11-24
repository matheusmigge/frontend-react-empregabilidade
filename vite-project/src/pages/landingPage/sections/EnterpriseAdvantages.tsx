import "./EnterpriseAdvantages.css"
import MenThinking from "../assets/menThinking.png"
import BenefitsArrow from "../assets/benefitsEnterpriseArrow.svg"

function EnterpriseAdvantages () {

    return (
        <section className="enterpriseBenefits">

            <h2 className="title">Também temos cadastros para empresas publicarem suas vagas!</h2>
            <h4 className="question">Por que cadastrar minha empresa?</h4>
            <img src={BenefitsArrow} alt="Seta benefícios" className="benefitsArrow"/>
            <img src={MenThinking} alt="Homem pensando" className="menThinking" />
            
            <div className="benefits">
                <p>As empresas podem encontrar candidatos altamente relevantes e localizados próximos ao local da vaga, reduzindo custos com deslocamento e aumentando as chances de compatibilidade geográfica.</p>
                <p>A plataforma usa geolocalização para filtrar os candidatos ideais, economizando tempo e recursos que seriam gastos analisando perfis menos compatíveis.</p>
                <p>Ao publicar vagas, a empresa também fortalece sua presença digital e atrai candidatos qualificados, ampliando seu alcance no mercado local.</p>
            </div>
            
        </section>
    )
}

export default EnterpriseAdvantages
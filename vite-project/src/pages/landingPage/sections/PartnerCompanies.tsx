import "./PartnerCompanies.css"
import LogoSoftex from "../assets/LogoSoftex.svg"
import LogoPortoDigital from "../assets/LogoPortoDigital.svg"


function PartnerCompanies () {

    return (
        <section className="partinerCompanies">
            <h2 className="title">Conheça algumas empresas parceiras do projeto:</h2>
            
            <div className="gridCards">
                
                <div className="cardCompanie">
                    <img src={LogoSoftex} alt="" />
                </div>

                <div className="cardCompanie">
                    <img src={LogoPortoDigital} alt="" />
                </div>

                <div className="cardCompanie">
                    <img src={LogoSoftex} alt="" />
                </div>

                <div className="cardCompanie">
                    <img src={LogoPortoDigital} alt="" />
                </div>

                <div className="cardCompanie">
                    <img src={LogoSoftex} alt="" />
                </div>

                <div className="cardCompanie">
                    <img src={LogoPortoDigital} alt="" />
                </div>

            </div>
        </section>
    )
}

export default PartnerCompanies
import "./Vacancy.css";
import AccordionBox from "./accordionBox/AccordionBox";
import Header from "../../components/header/Header";
import goBackVector from "./assets/goBackVector.svg";
import copyLinkVector from "./assets/copyLinkVector.svg";
import applyVector from "./assets/applyVector.svg";
import { Link } from "react-router-dom";

interface VacancyProps {
  vacancyBannerUrl?: string;
  vacancyRemuneration?: number;
  vacancyWorkSystem?: string;
  vacancyHiringType?: string;
  vacancyMaxDistance?: number;
  vacancyDescription?: string;
  vacancyResponsibilities?: string;
  vacancyRequirements?: string;
  vacancyChancesImprovement?: string;
  vacancySkills?: string;
  vacancyLocation?: string[];
  vacancySteps?: string;
}

const Vacancy = ({
  vacancyBannerUrl,
  vacancyRemuneration,
  vacancyWorkSystem,
  vacancyHiringType,
  vacancyMaxDistance,
  vacancyDescription,
  vacancyResponsibilities,
  vacancyRequirements,
  vacancyChancesImprovement,
  vacancySkills,
  vacancyLocation,
  vacancySteps,
}: VacancyProps) => {
  
  return (
    <>
      <div className="vacancy">
        <div className="vacancyHeader">
          <Link to="/home" className="linkStyle">
          <Header
            imgUrl={goBackVector}
            title="Desenvolvedor Front-End (React/Node.js)"
            imgUrl1={copyLinkVector}
            imgUrl2={applyVector}
          ></Header>
          </Link>
        </div>

        <div className="vacancyContent">
          <div className="vacancyBannerContainer">{vacancyBannerUrl}</div>

          <div className="vacancyInformationContainer">
            <div className="vacancyInformation">
              <p className="vacancyInformationTitle">Remuneração</p>
              <p className="vacancyInformationContent">
                R$ {vacancyRemuneration}
              </p>
            </div>

            <div className="vacancyInformation">
              <p className="vacancyInformationTitle">Modelo de trabalho</p>
              <p className="vacancyInformationContent">{vacancyWorkSystem}</p>
            </div>

            <div className="vacancyInformation">
              <p className="vacancyInformationTitle">Contratação</p>
              <p className="vacancyInformationContent">{vacancyHiringType}</p>
            </div>

            <div className="vacancyInformation">
              <p className="vacancyInformationTitle">Distância máxima</p>
              <p className="vacancyInformationContent">
                {vacancyMaxDistance} km
              </p>
            </div>
          </div>

          <AccordionBox title="Descrição da Vaga">
            {vacancyDescription}
          </AccordionBox>

          <AccordionBox title="Responsabilidades e atribuições">
            {vacancyResponsibilities}
          </AccordionBox>

          <AccordionBox title="Requisitos e qualificações">
            {vacancyRequirements}
          </AccordionBox>

          <AccordionBox title="O que aumenta as suas chances?">
            {vacancyChancesImprovement}
          </AccordionBox>

          <AccordionBox title="Habilidades e competências">
            {vacancySkills}
          </AccordionBox>

          <div className="vacancyLocationContainer">
            <div className="vacancyLocationHeader">
              Endereço da vaga
              <input type="text" placeholder="Localização" />
            </div>
            <div className="vacancyLocationContent">{vacancyLocation}</div>
          </div>

          <div className="stepsContainer">
            <div className="stepsHeader">Etapas do processo</div>
            <div className="stepsContent">{vacancySteps}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacancy;

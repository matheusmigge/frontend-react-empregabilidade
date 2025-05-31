import "./Vacancy.css";
import AccordionBox from "./accordionBox/AccordionBox";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Job } from "../../types";
import Map from "../../components/map/Map";
import TextualButton from "../../components/textual-button/TextualButton";

const Vacancy = () => {
  const [jobContent, setJobContent] = useState<Job>({} as Job);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allJobsRes = await axios.get("http://localhost:3000/jobs");
        const allJobs = allJobsRes.data;
        const jobContent = allJobs.find((job: { id: string; }) => job.id == id);
        setJobContent(jobContent);
        setLoading(false);

      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, jobContent, setJobContent]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="vacancy">
        <div className="vacancyHeader">
          <Link to="/home" className="linkStyle">
            <Header
              title={jobContent.title}
            ></Header>
          </Link>
        </div>

        <div className="vacancyContent">
          <div className="vacancyBannerContainer">
            <img src={jobContent.bannerUrl} />
          </div>

          <div className="vacancyInformationContainer">
            <div className="vacancyInformation">
              <p className="vacancyInformationTitle">Remuneração</p>
              <p className="vacancyInformationContent">
                R$ {jobContent.salary}
              </p>
            </div>

            <div className="vacancyInformation">
              <p className="vacancyInformationTitle">Modelo de trabalho</p>
              <p className="vacancyInformationContent">{jobContent.workModel}</p>
            </div>

            <div className="vacancyInformation">
              <p className="vacancyInformationTitle">Contratação</p>
              <p className="vacancyInformationContent">{jobContent.hiringType}</p>
            </div>

            <div className="vacancyInformation">
              <p className="vacancyInformationTitle">Distância máxima</p>
              <p className="vacancyInformationContent">
                {jobContent.maximumAcceptedDistanceInKm} km
              </p>
            </div>
          </div>

          <AccordionBox title="Descrição da Vaga">
            {jobContent.jobDescription}
          </AccordionBox>

          <AccordionBox title="Responsabilidades e atribuições">
            {jobContent.responsibilitiesAndDuties}
          </AccordionBox>

          <AccordionBox title="Requisitos e qualificações">
            {jobContent.requirementsAndQualifications}
          </AccordionBox>

          <AccordionBox title="O que aumenta as suas chances?">
            {jobContent.whatIncreasesYourChances}
          </AccordionBox>

          <AccordionBox title="Habilidades e competências">
            {jobContent.responsibilitiesAndDuties}
          </AccordionBox>

          <div className="vacancyLocationContainer">
            <div className="vacancyLocationHeader">
              Endereço da vaga
              <input type="text" placeholder="Localização" />
            </div>
            <div className="vacancyLocationContent">
              <Map markerLocations={[{
                latitude: Number(jobContent.address.lat),
                longitude: Number(jobContent.address.lng),
                id: jobContent.id,
                label: jobContent.title,
              }]} />
            </div>
          </div>

          <div className="stepsContainer">
            <div className="stepsHeader">Etapas do processo</div>
            <div className="stepsContent">{jobContent.selectionProcessStages &&
              jobContent.selectionProcessStages.map((stage) => (
                <TextualButton text={stage}/>
              ))}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacancy;

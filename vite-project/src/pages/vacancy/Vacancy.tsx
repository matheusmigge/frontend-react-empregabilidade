import "./Vacancy.css";
import AccordionContainer from "../../components/accordionContainer/AccordionBox";
import FotoDeTeste from "./FOTODETESTE.png";

function Vacancy() {
  return (
    <>
      <div className="vacancyContainer">
        <div className="headerTeste"></div>

        <div className="vacancyContent">
          <div className="vacancyBannerContainer">
            <img src={FotoDeTeste} alt="" />
          </div>

          <AccordionContainer title="Descrição da Vaga">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              quaerat fuga nam quasi ea earum quia provident nihil,
              reprehenderit quidem at nesciunt velit exercitationem sit? Iust o
              esse aperiam earum aspernatur. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Autem labore, recusandae hic
              eligendi blanditiis quo nulla aut rem quasi! Officia ullam quos
              totam esse rem velit eum possimus fugiat nesciunt! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Incidunt nulla ipsa
              debitis dolore in voluptatibus perferendis facilis eaque
              architecto ducimus sequi inventore cum excepturi laudantium,
              tempore, quo eos molestiae! Eligendi. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Harum repudiandae exercitationem
              vel? Illum officia deserunt dolor, corporis necessitatibus aut
              quia repudiandae, sit suscipit dolorem eum impedit ullam nostrum
              quod debitis!
            </p>
          </AccordionContainer>

          <AccordionContainer title="Responsabilidades e atribuições">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              quaerat fuga nam quasi ea earum quia provident nihil,
              reprehenderit quidem at nesciunt velit exercitationem sit? Iusto
              esse aperiam earum aspernatur. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Autem labore, recusandae hic
              eligendi blanditiis quo nulla aut rem quasi! Officia ullam quos
              totam esse rem velit eum possimus fugiat nesciunt! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Incidunt nulla ipsa
              debitis dolore in voluptatibus perferendis facilis eaque
              architecto ducimus sequi inventore cum excepturi laudantium,
              tempore, quo eos molestiae! Eligendi. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Harum repudiandae exercitationem
              vel? Illum officia deserunt dolor, corporis necessitatibus aut
              quia repudiandae, sit suscipit dolorem eum impedit ullam nostrum
              quod debitis!
            </p>
          </AccordionContainer>

          <AccordionContainer title="Requisitos e qualificações">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              quaerat fuga nam quasi ea earum quia provident nihil,
              reprehenderit quidem at nesciunt velit exercitationem sit? Iusto
              esse aperiam earum aspernatur. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Autem labore, recusandae hic
              eligendi blanditiis quo nulla aut rem quasi! Officia ullam quos
              totam esse rem velit eum possimus fugiat nesciunt! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Incidunt nulla ipsa
              debitis dolore in voluptatibus perferendis facilis eaque
              architecto ducimus sequi inventore cum excepturi laudantium,
              tempore, quo eos molestiae! Eligendi. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Harum repudiandae exercitationem
              vel? Illum officia deserunt dolor, corporis necessitatibus aut
              quia repudiandae, sit suscipit dolorem eum impedit ullam nostrum
              quod debitis!
            </p>
          </AccordionContainer>

          <AccordionContainer title="O que aumenta as suas chances?">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              quaerat fuga nam quasi ea earum quia provident nihil,
              reprehenderit quidem at nesciunt velit exercitationem sit? Iusto
              esse aperiam earum aspernatur. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Autem labore, recusandae hic
              eligendi blanditiis quo nulla aut rem quasi! Officia ullam quos
              totam esse rem velit eum possimus fugiat nesciunt! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Incidunt nulla ipsa
              debitis dolore in voluptatibus perferendis facilis eaque
              architecto ducimus sequi inventore cum excepturi laudantium,
              tempore, quo eos molestiae! Eligendi. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Harum repudiandae exercitationem
              vel? Illum officia deserunt dolor, corporis necessitatibus aut
              quia repudiandae, sit suscipit dolorem eum impedit ullam nostrum
              quod debitis!
            </p>
          </AccordionContainer>
        </div>
      </div>
    </>
  );
}

export default Vacancy;

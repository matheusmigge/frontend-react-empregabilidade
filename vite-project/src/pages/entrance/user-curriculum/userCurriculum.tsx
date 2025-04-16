import "./userCurriculum.css";

import Header from "../../../components/header/Header";
import bellIcon from "../../../components/header/assets/bell.svg";
import userIcon from "../../../components/header/assets/Ellipse 1.svg";
import goBackVector from "../../vacancy/assets/goBackVector.svg";
import { Link } from "react-router-dom";





function UserCurriculum() {
    return (
      <>
      <div>
        <Link to="/userSignUp2" className="linkStyle">
          <Header
            imgUrl1={bellIcon}
            imgUrl2={userIcon}
            imgUrl={goBackVector}
          ></Header>
        </Link>
      </div>
      
      <body className="body-container">
        <section className="titleContainer">
          <h1 className="curriculumTitle">Preenchimento</h1>
          <div className="blueBar">
            
          </div>
        </section>
      </body>



      </>
    );
  }

  export default UserCurriculum;
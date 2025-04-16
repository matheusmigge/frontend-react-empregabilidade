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
        title="Editar Perfil"
        imgUrl1={bellIcon}
        imgUrl2={userIcon}
        imgUrl={goBackVector}
        ></Header>;
    </Link>
      </div>
      </>
    );
  }

  export default UserCurriculum;
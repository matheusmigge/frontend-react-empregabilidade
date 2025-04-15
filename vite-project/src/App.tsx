import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrance from "./pages/entrance/Entrance";
import LandingPage from "./pages/landingPage/LandingPage";
import "./App.css";
import UserSignUp1 from "./pages/entrance/user-signUp/UserSignUp1";
import UserSignUp2 from "./pages/entrance/user-signUp/UserSignUp2";
import CompanySignUp1 from "./pages/entrance/company-signUp/CompanySignUp1";
import CompanySignUp2 from "./pages/entrance/company-signUp/CompanySignUp2";
import Home from "./pages/home/Home";
import Vacancy from "./pages/vacancy/Vacancy";
import UserCurriculum from "./pages/entrance/user-curriculum/userCurriculum";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/entrance" element={<Entrance/>}/>
          <Route path="/userSignUp1" element={<UserSignUp1/>}/>
          <Route path="/userSignUp2" element={<UserSignUp2/>}/>
          <Route path="/userCurriculum" element={<UserCurriculum/>}/>
          <Route path="/companySignUp1" element={<CompanySignUp1/>}/>
          <Route path="/companySignUp2" element={<CompanySignUp2/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/vacancy" element={<Vacancy/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

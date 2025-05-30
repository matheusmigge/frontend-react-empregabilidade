import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrance from "./pages/entrance/Entrance";
import LandingPage from "./pages/landingPage/LandingPage";
import "./App.css";
import UserSignUp from "./pages/entrance/user-signUp/UserSignUp";
import CompanySignUp from "./pages/entrance/company-signUp/CompanySignUp";
import Home from "./pages/home/Home";
import Vacancy from "./pages/vacancy/Vacancy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/entrance" element={<Entrance />} />
          <Route path="/userSignUp" element={<UserSignUp />} />
          <Route path="/companySignUp" element={<CompanySignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vacancy/:id" element={<Vacancy />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

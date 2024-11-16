import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import LandingPage from "./pages/landingPage/LandingPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrance from "./pages/entrance/Entrance";
// import LandingPage from "./pages/landingPage/LandingPage";
import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<Entrance />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

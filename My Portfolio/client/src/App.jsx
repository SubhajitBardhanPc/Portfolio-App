import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import TechnicalSkills from "./pages/TechnicalSkills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"; // Importing the Footer component

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technical-skills" element={<TechnicalSkills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Add Footer here */}
    </Router>
    <Footer /> 
    </>
  );
}

export default App;

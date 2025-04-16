import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About";
import TechnicalSkills from "./pages/TechnicalSkills";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technical-skills" element={<TechnicalSkills />} />
      </Routes>
    </Router>
  )
}

export default App

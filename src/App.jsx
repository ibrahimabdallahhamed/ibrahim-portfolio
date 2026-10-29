import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home-Page/Home";
import Projects from "./pages/Projects-page/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer";
function App() {
  return (
    <main className="pb-[50px]">
      <BrowserRouter basename="/ibrahim-portfolio/">
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;

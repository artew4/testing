import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'katex/dist/katex.min.css';

import { HashRouter, Routes, Route } from "react-router-dom";
import './styles/App.scss';

import Home from "./pages/Home";
import Algebra from "./pages/Algebra";
import Physics from "./pages/Physics";
import Informatics from './pages/Informatics';
import LessonsPage from './pages/Lessons';
import About from './pages/About';
import Contact from './pages/Contact';
import Geometry from './pages/Geometry';
import Russian from './pages/Russian';
import PhysLab from './pages/PhysLab';
import ProgLab from './pages/ProgLab';
import AlgebraTests from './pages/AlgebraTests';
import PhysicsTests from './pages/PhysicsTests';
import RussianTests from './pages/RussianTests';

import Footer from './components/Footer'; // Не забудь создать файл Footer.jsx
import GeometryTests from './pages/GeometryTests';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="app-container">
      <HashRouter>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/algebra" element={<Algebra />} />
            <Route path="/physics" element={<Physics />} />
            <Route path="/informatics" element={<Informatics />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/geometry" element={<Geometry />} />
            <Route path="/russian" element={<Russian />} />
            <Route path="/physlab" element={<PhysLab />} />
            <Route path="/proglab" element={<ProgLab />} />
            <Route path="/algebratests" element={<AlgebraTests />} />
            <Route path="/phystests" element={<PhysicsTests />} />
            <Route path="/rustests" element={<RussianTests />} />
            <Route path="/geometrytests" element={<GeometryTests />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
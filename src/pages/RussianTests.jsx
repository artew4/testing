import React, { useState } from 'react';
import "../styles/pages/Russian.scss";
import Header from "../components/Header.jsx";
import TestPromo from "../components/cards/TestPromo.jsx";
import TestModal from '../components/TestModal.jsx';
import InfoCardWithModal from "../components/cards/InfoCardWithModal";
import { FaFeatherAlt, FaBookOpen, FaHistory} from "react-icons/fa";
import form8_test1 from './data/rus_tests/8/8_1_final_test.json';
import form8_test2 from './data/rus_tests/8/8_2_final_test.json';



function RussianTests() {
  const [showModal8_0, setShowModal8_0] = useState(false);
  const [showModal8_1, setShowModal8_1] = useState(false);

  return (
    <div className="container-main">
        <Header/>
        <TestPromo/>
            <div className="class-section">
            <h2 className="class-section-h2"> 8 класс </h2>
            <div className="cards-grid">

            <div className="test-trigger">
                <button onClick={() => setShowModal8_0(true)}>Итоговый тест 8</button>
                <TestModal isOpen={showModal8_0} onClose={() => setShowModal8_0(false)} testData={form8_test2} />
            </div>

            <div className="test-trigger">
                <button onClick={() => setShowModal8_1(true)}>Итоговый тест 8-9 классы</button>
                <TestModal isOpen={showModal8_1} onClose={() => setShowModal8_1(false)} testData={form8_test1} />
            </div>

            
            </div>
      </div>
    </div>
  );
}

export default RussianTests;

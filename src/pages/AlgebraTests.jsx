import React, { useState } from 'react';
import '../styles/pages/Tests.scss';
import 'katex/dist/katex.min.css';
import Header from "../components/Header.jsx";
import TestPromo from "../components/cards/TestPromo.jsx";
import TestModal from '../components/TestModal.jsx';
import form5_test1 from './data/algebra_tests/5/fractions_test.json';
import form8_test1 from './data/algebra_tests/8/8_1_fractions.json';
import form8_test2 from './data/algebra_tests/8/8_2_square_roots.json';

const AlgebraTests = () => {
  const [showModal5_1, setShowModal5_1] = useState(false);
  const [showModal8_1, setShowModal8_1] = useState(false);
  const [showModal8_2, setShowModal8_2] = useState(false);

  return (
    <div className="container-main">
      <Header/>
      <TestPromo/>
      <div className="class-section">
        <h2> 5 класс </h2>
        <div className="cards-grid">
          <div className="test-trigger">
            <button onClick={() => setShowModal5_1(true)}>Тест Дроби 5кл</button>
            <TestModal isOpen={showModal5_1} onClose={() => setShowModal5_1(false)} testData={form5_test1} />
          </div>
          
        </div>
      </div>

      <div className="class-section">
        <h2 className="class-section-h2"> 8 класс </h2>
        <div className="cards-grid">
          <div className="test-trigger">
            <button onClick={() => setShowModal8_1(true)}>Рациональные дроби</button>
            <TestModal isOpen={showModal8_1} onClose={() => setShowModal8_1(false)} testData={form8_test1} />
          </div>

          <div className="test-trigger">
            <button onClick={() => setShowModal8_2(true)}>Квадратные корни</button>
            <TestModal isOpen={showModal8_2} onClose={() => setShowModal8_2(false)} testData={form8_test2} />
          </div>
          
        </div>
      </div>
      


    </div>
  );
};

export default AlgebraTests;

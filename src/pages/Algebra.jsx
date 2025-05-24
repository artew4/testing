import React, { useState } from 'react';
import '../styles/pages/Algebra.scss';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Header from "../components/Header.jsx";
import topics from "./data/algebra_topics.json";
import { FaClipboardList } from "react-icons/fa";
import TestModal from '../components/TestModal';
import form5_test1 from './data/algebra_tests/5/fractions_test.json';
import InfoCard from "../components/InfoCard";

const Algebra = () => {
  const [activeTopic, setActiveTopic] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-main">
      <Header/>
      <h2 data-aos="fade-down">🧠 Алгебра практикум</h2>
      <div className="cards-grid">
          <InfoCard 
            icon={<FaClipboardList color="#1E90FF" />}
            text="Тесты по алгебре"
            link="/algebratests" 
            animation="fade-right"
            isExternal={false}
          />
      </div>
     

      <h2 data-aos="fade-left">📚Алгебра теория</h2>

      {/* <div className="cards-grid">
        <div className="test-trigger">
          <button onClick={() => setShowModal(true)}>Тест Дроби 5кл</button>
          <TestModal isOpen={showModal} onClose={() => setShowModal(false)} testData={form5_test1} />
        </div>
        <div className="test-trigger">
          <button onClick={() => setShowModal(true)}>Открыть тест</button>
          <TestModal isOpen={showModal} onClose={() => setShowModal(false)} testData={form5_test1} />
        </div>
      </div> */}
      

      {Object.entries(topics).map(([grade, topicsArray]) => (
        <div className="grade-block" key={grade}>
          <h2 className="grade-title">{grade} класс</h2>
          <div className="topic-grid">
            {/* {topicsArray.map((topic, index) => (
              <button
                key={index}
                className="topic-btn"
                onClick={() => setActiveTopic(topic)}
              >
                {topic.title}
              </button>
            ))} */}

            {topicsArray.map((topic, index) => (
              <button
                key={index}
                className="topic-btn"
                onClick={() => setActiveTopic(topic)}
              >
                <span className="btn-icon">{topic.icon}</span>
                <span>{topic.title}</span>
              </button>
            ))}
          </div>
        </div>
      ))}

{activeTopic && (
  <div className="modal-overlay" onClick={() => setActiveTopic(null)}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setActiveTopic(null)}>×</button>
      <h3>{activeTopic.title}</h3>
      <div className="modal-content-scroll">
        {activeTopic.content.map((item, index) => {
          switch (item.type) {
            case 'text':
              return <p key={index}>{item.value}</p>;
            case 'latex':
              return <BlockMath key={index} math={item.value} />;
            case 'image':
              return (
                <img
                  key={index}
                  src={process.env.PUBLIC_URL + item.value}
                  alt="Иллюстрация"
                  className="modal-image"
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  </div>
)}




    </div>
  );
};

export default Algebra;

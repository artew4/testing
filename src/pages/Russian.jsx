import React, { useState } from 'react';
import "../styles/pages/Tests.scss";
import Header from "../components/Header.jsx";
import InfoCard from "../components/InfoCard";
import InfoCardWithModal from "../components/cards/InfoCardWithModal";
import { FaFeatherAlt, FaBookOpen, FaHistory} from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";



function Russian() {
  const [activeTopic, setActiveTopic] = useState(null);

  return (
    <div className="container-main">
        <Header/>
        <h2 data-aos="fade-down">🧠 Русский язык практикум</h2>
        <div className="cards-grid">
          <InfoCard 
            icon={<FaClipboardList color="#1E90FF" />}
            text="Тесты по русскому языку"
            link="/rustests" 
            animation="fade-right"
            isExternal={false}
          />
        </div>

        <h2 data-aos="fade-down">Русский язык</h2>
        <div className="cards-grid">
        <InfoCardWithModal
              icon={<FaFeatherAlt color="#D2691E" />}
              text="Все про причастия"
              imageSrc={process.env.PUBLIC_URL + "/images/russian/1prichastia.jpg"} 
              // content={
              //   <p>
              //     Исследуйте объёмные фигуры в интерактивной симуляции. <br />
              //     <a
              //       href="https://uchebnik.mos.ru/composer3/document/76706446/system_2/game_app_versions/builds/000/432/429/sandbox/mesh_stereometry/index.html"
              //       target="_blank"
              //       rel="noopener noreferrer"
              //     >
              //       Открыть симуляцию →
              //     </a>
              //   </p>
              // }
              animation="fade-right"
            />

            <InfoCardWithModal
              icon={<FaBookOpen color="#4682B4" />}
              text="Склонение существительных, разносклоняемые сущ."
              imageSrc={process.env.PUBLIC_URL + "/images/russian/2sklonenia.jpg"} 
              animation="zoom-in"
            />
            <InfoCardWithModal
              icon={<FaHistory color="#6A5ACD" />}
              text="Глаголы в прошедшем времени. Гласная перед -Л"
              imageSrc={process.env.PUBLIC_URL + "/images/russian/3glagoly.jpg"} 
              animation="fade-left"
            />



      </div>
    </div>
  );
}

export default Russian;

import { Link } from 'react-router-dom';
import "../styles/pages/Physics.scss";
import Header from "../components/Header.jsx";
import InfoCard from "../components/InfoCard";
import { FaBolt, FaArrowsAlt, FaAtom, FaGlobe, FaMicroscope, FaFlask} from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

const physicsSections = [
  { title: 'Справочные данные', images: ['phys/1.PNG', 'phys/2.PNG', 'phys/3.PNG'] },
  { title: 'Плотность вещества', images: ['phys/4.PNG', 'phys/5.PNG'] },
  { title: 'Удельные', images: ['phys/6.PNG', 'phys/7.PNG', 'phys/8.PNG'] },
  { title: 'Температура плавления', images: ['phys/9.PNG', 'phys/10.PNG', 'phys/11.PNG'] },
];

function Physics() {
  return (
    <div className="container-main">
        <Header/>

        <h2 data-aos="fade-down">🧠 Физика практикум</h2>
      <div className="cards-grid">
          <InfoCard 
            icon={<FaClipboardList color="#1E90FF" />}
            text="Тесты по физике"
            link="/phystests" 
            animation="fade-right"
            isExternal={false}
          />
      </div>


      <h2 data-aos="fade-down"><>
    <FaAtom color="#6A5ACD" /> <FaMicroscope color="#00BFFF" />
  </> Полезные материалы по физике</h2>
      <div className="cards-grid">

      {/* <InfoCard 
        icon={<FaFlask color="#1E90FF" />}
        text="Лаборатория физики"
        link="/physlab" 
        animation="fade-right"
        isExternal={false}
      /> */}


      <InfoCard 
        icon="🔦 + ⚡" 
        text="Интерактивные линзы" 
        link="https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html" 
        animation="fade-right"
        isExternal={true}
      />
      <InfoCard 
        icon={
          <>
            <FaBolt color="#FFD700" />
            <FaArrowsAlt color="#1E90FF" />
          </>
        }
        text="Поле заряда" 
        link="https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html" 
        animation="zoom-in"
        isExternal={true}
      />
    </div>
      {physicsSections.map((section, index) => (
        <div key={index}>
          <h2>{index === 0 ? section.title : <h3>{section.title}</h3>}</h2>
          {section.images.map((img, idx) => (
            <img
              key={idx}
              src={`${process.env.PUBLIC_URL}/images/${img}`}
              alt={`Таблица ${idx + 1}`}
              className="table-img-phys"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Physics;

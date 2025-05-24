import { Link } from 'react-router-dom';
import "../styles/pages/Geometry.scss";
import Header from "../components/Header.jsx";
import InfoCard from "../components/InfoCard";
import { FaDraftingCompass, FaRulerCombined, FaCube, FaClipboardList} from "react-icons/fa";

function Geometry() {
  return (
    <div className="container-main">
        <Header/>

        <h2 data-aos="fade-down">🧠 Геометрия практикум</h2>
      <div className="cards-grid">
          <InfoCard 
            icon={<FaClipboardList color="#1E90FF" />}
            text="Тесты по геометрии"
            link="/geometrytests" 
            animation="fade-right"
            isExternal={false}
          />
      </div>

      <h2 data-aos="fade-down"><>
        <FaDraftingCompass color="#FF6347" /> <FaRulerCombined color="#4682B4" />
        </> Полезные материалы по геометрии</h2>

        <div className="cards-grid">
          <InfoCard 
            icon={<>
                <FaCube color="#8A2BE2" /> <FaDraftingCompass color="#20B2AA" />
              </>}
            text="Лаборатория по стереометрии" 
            link="https://uchebnik.mos.ru/composer3/document/76706446/system_2/game_app_versions/builds/000/432/429/sandbox/mesh_stereometry/index.html" 
            animation="fade-right"
          />
        </div>

    </div>
  );
}

export default Geometry;

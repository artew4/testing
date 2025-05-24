import { Link } from 'react-router-dom';
import "../styles/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="left-block">
        <Link to="/">
          <img 
            src={`${process.env.PUBLIC_URL}/images/photo.png`} 
            alt="Моё фото" 
            className="profile-photo-header"
          />
        </Link>
        <div className="logo">Level Science</div>
      </div>

      <nav className="nav">
        <Link to="/">Главная</Link>
        <div className="dropdown">
          <button className="dropbtn">Предметы</button>
          <div className="dropdown-content">
            <Link to="/algebra">Алгебра</Link>
            <Link to="/geometry">Геометрия</Link>
            <Link to="/physics">Физика</Link>
            <Link to="/informatics">Информатика</Link>
            <Link to="/russian">Русский язык</Link>
          </div>
        </div>
        <Link to="/about">Обо мне</Link>
        <Link to="/contact">Контакты</Link>
        <Link to="/lessons">Родителям (О занятиях)</Link>
      </nav>
    </header>
  );
}

export default Header;

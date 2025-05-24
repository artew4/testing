import { Link } from 'react-router-dom';
import "../styles/NavigationLinks.scss";

function NavigationLinks() {
  return (
    <div className="buttons">
      <Link to="/algebra">Алгебра (Математика)</Link>
      <Link to="/physics">Физика</Link>
      <Link to="/geometry">Геометрия</Link>
      <Link to="/informatics">Информатика</Link>
      <Link to="/russian">Русский язык</Link>
    </div>
  );
}

export default NavigationLinks;

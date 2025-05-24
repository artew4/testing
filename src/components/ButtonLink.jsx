import { Link } from "react-router-dom";
import "../styles/ButtonLink.scss";

function ButtonLink({ to, children, external = false }) {
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className="button-link">
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className="button-link">
      {children}
    </Link>
  );
}

export default ButtonLink;

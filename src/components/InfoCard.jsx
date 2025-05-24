import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/InfoCard.scss";

function InfoCard({ icon, text, link, isExternal = false, animation = "fade-up", delay = 0 }) {
  const content = (
    <>
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </>
  );

  return isExternal ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      data-aos={animation}
      data-aos-delay={delay}
    >
      {content}
    </a>
  ) : (
    <Link
      to={link}
      className="card"
      data-aos={animation}
      data-aos-delay={delay}
    >
      {content}
    </Link>
  );
}
export default InfoCard;
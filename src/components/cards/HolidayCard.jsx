import React from 'react';
import '../../styles/components/cards/HolidayCard.scss';
import { FaStar } from 'react-icons/fa'; // Замена иконки

function HolidayCard({ image, text }) {
  return (
    <div className="holiday-block" data-aos="fade-up">
      <div className="holiday-header">
        <FaStar className="holiday-icon" />
        <span className="holiday-title">9 мая — День Победы</span>
      </div>
      <div className="holiday-image-container">
        <img src={process.env.PUBLIC_URL + "/images/glory9may.png"} alt="День Победы" className="holiday-image" />
        <div className="holiday-text-overlay">
        <p
  className="holiday-text"
  dangerouslySetInnerHTML={{ __html: text }}
></p>
        </div>
      </div>
    </div>
  );
}

export default HolidayCard;

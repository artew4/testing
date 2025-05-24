import React from 'react';
import '../styles/components/NewsBlock.scss';
import { FaNewspaper } from 'react-icons/fa'; // Добавляем иконку

function NewsBlock ({ image, text }) {
  return (
    <div className="news-block" 
    data-aos="fade-up">
      <div className="news-header">
        <FaNewspaper className="news-icon" />
        <span className="news-title">news</span>
      </div>
      {image && <img src={image} alt="Новость" className="news-image" />}
      <p className="news-text">{text}</p>
    </div>
  );
};

export default NewsBlock;

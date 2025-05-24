import React from 'react';
import '../styles/pages/Contact.scss';
import Header from '../components/Header.jsx';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTelegramPlane, FaDownload } from 'react-icons/fa';

function Contact() {
  return (
    <div className="container-main">
      <Header />
      <h1 data-aos="fade-down">Контакты</h1>

      <div className="contact-grid" data-aos="fade-up">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Электронная почта</h3>
              <p>artew44@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Телефон</h3>
              <p>+7 (925) 610-25-09</p>
            </div>
          </div>

          <div className="contact-item">
            <FaTelegramPlane className="contact-icon" />
            <div>
              <h3>Telegram</h3>
              <p>@ARTEM_DM1TR</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Город</h3>
              <p>Москва</p>
            </div>
          </div>

          <a
            href={`${process.env.PUBLIC_URL}/files/vcard.vcf`}
            className="download-button"
            download
          >
            <FaDownload className="download-icon" />
            Скачать визитку
          </a>
        </div>

        <div className="contact-photo">
          <img
            src={`${process.env.PUBLIC_URL}/images/photo1.jpg`} 
            alt="Фото преподавателя"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

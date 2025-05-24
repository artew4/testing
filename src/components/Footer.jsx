import React from 'react';
import { FaTelegram, FaYoutube, FaGithub } from 'react-icons/fa';
import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-brand">
            <h4>LEVEL</h4>
            <p>Образовательная онлайн-платформа для учеников школ</p>
          </div>
          <div className="footer-links">
            <a href="/#/about">О нас</a>
            <a href="/#/contact">Контакты</a>
            <a href="/#/lessons">Уроки</a>
            <a href="/#/algebratests">Тесты</a>
          </div>
          <div className="footer-contact">
            <p>Мы в соцсетях:</p>
            <div className="footer-icons">
              <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} LEVEL. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
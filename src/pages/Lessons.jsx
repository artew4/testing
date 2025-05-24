import Header from "../components/Header";
import "../styles/pages/Lessons.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function LessonsPage() {
  return (
    <div className="container-main">
      <Header />
      <h1 data-aos="fade-down">Информация о занятиях</h1>
      <p className="description">
        Я провожу индивидуальные и групповые занятия по математике, физике и информатике. 
        Помогаю школьникам, студентам и взрослым освоить сложные темы, подготовиться к экзаменам, олимпиадам, ОГЭ и ЕГЭ.
      </p>

      <h2 data-aos="fade-right">Формат занятий</h2>
      <p>
        Занятия проходят онлайн через{" "}
        <a href="https://teams.microsoft.com/" target="_blank" rel="noreferrer">
          Microsoft Teams
        </a>{" "}
        и виртуальную доску{" "}
        <a href="https://whiteboard.office.com/" target="_blank" rel="noreferrer">
          Microsoft Whiteboard
        </a>.
      </p>

      <img 
        src={`${process.env.PUBLIC_URL}/images/teams_wb.jpg`} 
        alt="Teams и Whiteboard" 
        className="table-img-lessons"
      />

      <h2 data-aos="fade-left">Microsoft Whiteboard</h2>
      <p>
        Доска доступна в браузере, а также через приложение для ПК и смартфонов.
        Все записи автоматически сохраняются.
      </p>

      <div className="link-buttons">
        <a href="https://whiteboard.office.com/" target="_blank" rel="noreferrer">Браузерная версия</a>
        <a href="https://apps.apple.com/ru/app/microsoft-whiteboard/id1352499399" target="_blank" rel="noreferrer">App Store</a>
        <a href="https://play.google.com/store/apps/details/Microsoft_Whiteboard?id=com.microsoft.whiteboard.publicpreview" target="_blank" rel="noreferrer">Google Play</a>
      </div>

      <div className="example-images">
        <p>Примеры скриншотов после занятий:</p>
        {[1, 2, 3, 4].map(num => (
          <img 
            key={num}
            src={`${process.env.PUBLIC_URL}/images/work${num}.jpg`} 
            alt={`Пример ${num}`} 
            className="table-img"
          />
        ))}
      </div>

      <ul className="lesson-points">
        <li>🔹 Групповые занятия (до 5 человек)</li>
        <li>🔹 Подготовка к ОГЭ, ЕГЭ, олимпиадам</li>
        <li>🔹 Разбор сложных тем и помощь с домашними заданиями</li>
      </ul>

      <p>Формат уроков: видеозвонок, разбор задач на виртуальной доске, интерактивные материалы.</p>
      <p>Стоимость и запись: напишите мне на <a href="mailto:artew44@gmail.com">почту</a> или в соцсетях.</p>
    </div>
  );
}

export default LessonsPage;

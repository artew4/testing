// AboutMe.jsx
import React from 'react';
import '../styles/pages/About.scss';
import Header from "../components/Header.jsx";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaShieldAlt,
  FaCogs,
  FaTools,
  FaUniversity,
  FaGraduationCap,
  FaCalculator,
  FaSchool
} from 'react-icons/fa';

function About() {
  return (
    <div className="container-main">
      <Header />
      <h1 data-aos="fade-down">Портфолио</h1>

      <VerticalTimeline lineColor="black">

        <VerticalTimelineElement
          date="2023 - настоящее время"
          icon={<FaChalkboardTeacher />}
          iconStyle={{ background: 'rgb(175, 211, 241)', color: 'white' }}
          contentStyle={{ background: 'rgb(175, 211, 241)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        >
          <h3>Научный руководитель</h3>
          <p>МГТУ им. Н.Э. Баумана</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2021 - настоящее время"
          icon={<FaUserGraduate />}
          iconStyle={{ background: 'rgb(175, 211, 241)', color: 'white' }}
          contentStyle={{ background: 'rgb(175, 211, 241)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        >
          <h3>Аспирант</h3>
          <h4>РАН</h4>
          <p>ФИЦ «Информатика и управление» РАН</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2021 – настоящее время"
          icon={<FaShieldAlt />}
          iconStyle={{ background: 'rgb(175, 211, 241)', color: 'white' }}
          contentStyle={{ background: 'rgb(175, 211, 241)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        >
          <h3>Руководитель</h3>
          <h4>Отдела безопасности</h4>
          <p>ООО Пента Мед</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2021 – 2023"
          icon={<FaCogs />}
          iconStyle={{ background: 'rgb(175, 211, 241)', color: 'white' }}
          contentStyle={{ background: 'rgb(175, 211, 241)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        >
          <h3>Инженер-конструктор</h3>
          <h4>1 категории</h4>
          <p>ПАО «НПО Алмаз»</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2018 – 2022"
          icon={<FaTools />}
          iconStyle={{ background: 'rgb(175, 211, 241)', color: 'white' }}
          contentStyle={{ background: 'rgb(175, 211, 241)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        >
          <h3>Инженер-конструктор</h3>
          <h4>2 категории</h4>
          <p>ПАО «Туполев»</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2020 – 2022"
          icon={<FaUniversity />}
          iconStyle={{ background: 'rgb(175, 211, 241)', color: 'white' }}
          contentStyle={{ background: 'rgb(175, 211, 241)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        >
          <h3>Выпускник</h3>
          <h4>Бакалавр - Педагог</h4>
          <p>МПГУ, кафедра математики</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2016–2022"
          icon={<FaGraduationCap />}
          iconStyle={{ background: 'rgb(175, 211, 241)', color: 'white' }}
          contentStyle={{ background: 'rgb(175, 211, 241)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        >
          <h3>Выпускник</h3>
          <h4>Специалист - Инженер</h4>
          <p>МГТУ им. Н.Э. Баумана, кафедра РЛ1</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2016 - настоящее время"
          icon={<FaCalculator />}
          iconStyle={{ background: 'rgb(175, 211, 241)', color: 'white' }}
          contentStyle={{ background: 'rgb(175, 211, 241)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        >
          <h3>Педагог</h3>
          <h4>Математика и Физика</h4>
          <p>Начал преподавать точные науки и получать первый опыт</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2012 – 2016"
          icon={<FaSchool />}
          iconStyle={{ background: 'rgb(175, 211, 241)', color: 'white' }}
          contentStyle={{ background: 'rgb(175, 211, 241)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        >
          <h3>Выпускник</h3>
          <h4>Лицей 1580</h4>
          <p>Физико-математический лицей при МГТУ им Баумана</p>
        </VerticalTimelineElement>

      </VerticalTimeline>

      <section className="section">
        <h2>Преподаю точные науки с 2016г.</h2>
        <p>
          Еще с 1 курса института начал преподавать математику и физику.
          Со временем изучил множество методик и научился находить индивидуальный подход к детям.
          Основатель научно-образовательного проекта. Приглашаю вас посмотреть наши лекции, где
          мы с коллегой рассказываем сложные научные процессы простым языком.
        </p>
      </section>

      <section className="section">
        <h2>Эксперт ЕГЭ по физике.</h2>
        <p>
          Каждый год мои ребята сдают ОГЭ и ЕГЭ. Со всеми разбираю задачи, которые встречаются на экзаменах.
          Сдать ЕГЭ — не так трудно, когда есть полное понимание, как устроен экзамен, и какие задачи встречаются.
        </p>
      </section>

      <section className="section">
        <h2>Научный руководитель в МГТУ им. Н. Э. Баумана.</h2>
        <p>
          После окончания кафедры РЛ1 – пошел преподавать на любимую кафедру. Помогаю ребятам писать дипломы и разрабатывать
          инженерные комплексы.
        </p>
      </section>

      <section className="section">
        <h2>Образование:</h2>
        <p>(2012–2016) Лицей 1580 при МГТУ им. Баумана</p>
        <p>(2016–2022) Специалист МГТУ им. Н.Э. Баумана, кафедра РЛ1, факультет радиоэлектронных систем и комплексов</p>
      </section>

      <section className="section">
        <p>
          После обширного периода работы в сфере разработки систем для комплексов связи
          и управления мобильными объектами полностью погрузился в науку
          и стал разработчиком ядра искусственного интеллекта по управлению
          беспилотными квадрокоптерами. Последние пару лет полностью погрузился в науку,
          к которой успешно прививаю любовь детей.
        </p>
      </section>

    </div>
  );
}

export default About;

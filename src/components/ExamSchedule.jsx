import React from 'react';
import '../styles/components/ExamSchedule.scss';
import { FaNewspaper } from 'react-icons/fa';
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

function ExamSchedule({ image, text, exam }) {
  const getEmoji = () => {
    if (exam.toLowerCase().includes('ege')) return '📘';
    if (exam.toLowerCase().includes('oge')) return '🟢';
    return '🔹';
  };

  const formatText = () => {
    const emoji = getEmoji();
    return text
      .split('\n')
      .map((line, index) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        const parts = trimmed.split('—');
        return (
          <p key={index} className="exam-schedule-text">
            {emoji} {parts[0]} — <strong>{parts[1]}</strong>
          </p>
        );
      });
  };

  return (
    <div className={`exam-schedule-block ${exam.toLowerCase().includes('ege') ? 'ege' : 'oge'}`}>
      {/* data-aos="fade-up" */}
      <div className="exam-schedule-header">
        <FaUserGraduate className="exam-schedule-icon" />
        <span className="exam-schedule-title">{exam}</span>
      </div>
      {image && <img src={image} alt="Новость" className="exam-schedule-image" />}
      <div className="exam-schedule-text-list">
        {formatText()}
      </div>
    </div>
  );
}

export default ExamSchedule;

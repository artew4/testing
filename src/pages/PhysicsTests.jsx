// PhysicsTests.jsx
import React, { useState } from 'react';
import '../styles/pages/Tests.scss'; // Измененный импорт SCSS
import 'katex/dist/katex.min.css';
import TestPromo from "../components/cards/TestPromo.jsx";
import Header from "../components/Header.jsx";
import TestModal from '../components/TestModal.jsx';
import useScrollLock from '../hooks/useScrollLock';

import { generateFinalTest } from '../components/FinalTestGenerator';

import form7_test1 from './data/phys_tests/7/7_1_phys.json';
import form7_test2 from './data/phys_tests/7/7_2_matterstructure.json';
import form7_test3 from './data/phys_tests/7/7_3_body_interaction.json';
import form7_test4 from './data/phys_tests/7/7_4_pressure.json';
import form7_test5 from './data/phys_tests/7/7_5_energy.json';

import form8_test1 from './data/phys_tests/8/8_1_ thermal.json';
import form8_test2 from './data/phys_tests/8/8_2_electromagnetism.json';
import form8_test3 from './data/phys_tests/8/8_3_magnetism.json';
import form8_test4 from './data/phys_tests/8/8_4_light.json';

import form9_test1 from './data/phys_tests/9/9_1_mechanics.json';
import form9_test2 from './data/phys_tests/9/9_2_waves.json';
import form9_test3 from './data/phys_tests/9/9_3_electromagnetism.json';
import form9_test4 from './data/phys_tests/9/9_4_nuclear.json';
import form9_test5 from './data/phys_tests/9/9_5_galaxy.json';
import form9_test6 from './data/phys_tests/9/9_6_formulas.json';

import form10_test1 from './data/phys_tests/10/10_1_mechanics.json';
import form10_test2 from './data/phys_tests/10/10_2_thermodynamics.json';
import form10_test3 from './data/phys_tests/10/10_3_electromagnetism.json';
import form10_test4 from './data/phys_tests/10/10_4_waves.json';
import form10_test5 from './data/phys_tests/10/10_5_optics.json';
import form10_test6 from './data/phys_tests/10/10_6_sto.json';
import form10_test7 from './data/phys_tests/10/10_7_quantum.json';
import form10_test8 from './data/phys_tests/10/10_8_atomic.json';

import form11_test1 from './data/phys_tests/11/11_1_electromagnetism.json';
import form11_test2 from './data/phys_tests/11/11_2_waves.json';
import form11_test3 from './data/phys_tests/11/11_3_optics.json';
import form11_test4 from './data/phys_tests/11/11_4_quantum.json';
import form11_test5 from './data/phys_tests/11/11_5_atomic.json';
import form11_test6 from './data/phys_tests/11/11_6_particles.json';
import form11_test7 from './data/phys_tests/11/11_7_astrophys.json';
import form11_test8 from './data/phys_tests/11/11_8_physprogress.json';
import form11_test9 from './data/phys_tests/11/11_9_formulas.json';

const finalTest_7 = generateFinalTest("Итоговый тест по физике 7 класс", [form7_test1,
   form7_test2, form7_test3, form7_test4, form7_test5], 10);
const finalTest_8 = generateFinalTest("Итоговый тест по физике 8 класс", [form8_test1,
   form8_test2, form8_test3, form8_test4], 10);
const finalTest_9 = generateFinalTest("Итоговый тест по физике 9 класс", [form9_test1,
   form9_test2, form9_test3, form9_test4], 10);
const finalTest_10 = generateFinalTest("Итоговый тест по физике 10 класс", [form10_test1,
   form10_test2, form10_test3, form10_test4, form10_test5, form10_test6, form10_test7, form10_test8], 10);
const finalTest_11 = generateFinalTest("Итоговый тест по физике 11 класс", [form11_test1,
   form11_test2, form11_test3, form11_test4, form11_test5], 10);

const tests = {
  info: [],
  7: [
    {
      label: "1.Введение в физику",
      testData: form7_test1
    },
    {
      label: "2.Строение вещества",
      testData: form7_test2
    },
    {
      label: "3.Взаимодействие тел",
      testData: form7_test3
    },
    {
      label: "4.Давление твердых тел, жидкостей и газов",
      testData: form7_test4
    },
    {
      label: "5.Работа и мощность. Энергия",
      testData: form7_test5
    },
    {
      label: "Итоговый тест 7 класс",
      testData: finalTest_7
    }
  ],
  8: [
    {
      label: "1.Тепловые явления",
      testData: form8_test1
    },
    {
      label: "2.Электрические явления",
      testData: form8_test2
    },
    {
      label: "3.Магнетизм",
      testData: form8_test3
    },
    {
      label: "4.Световые явления",
      testData: form8_test4
    },
    {
      label: "Итоговый тест 8 класс",
      testData: finalTest_8
    }
  ],
  9: [
    {
      label: "1.Механика",
      testData: form9_test1
    },
    {
      label: "2.Колебания и волны. Звук",
      testData: form9_test2
    },
    {
      label: "3.Электромагнитные явления",
      testData: form9_test3
    },
    {
      label: "4.Ядерная физика. Строение атома и атомного ядра",
      testData: form9_test4
    },
    {
      label: "5.Строение и эволюция Вселенной",
      testData: form9_test5
    },
    {
      label: "Итоговый тест 9 класс",
      testData: finalTest_9
    },
    {
      label: "Формулы к ОГЭ",
      testData: form9_test6
    },
  ],
  10: [
    {
      label: "1.Механика",
      testData: form10_test1
    },
    {
      label: "2.Термодинамика",
      testData: form10_test2
    },
    {
      label: "3.Электродинамика",
      testData: form10_test3
    },
    {
      label: "4.Колебания и волны",
      testData: form10_test4
    },
    {
      label: "5.Оптика",
      testData: form10_test5
    },
    {
      label: "6.Основы специальной теории относительности (СТО)",
      testData: form10_test6
    },
    {
      label: "7.Квантовая физика",
      testData: form10_test7
    },
    {
      label: "8.Атомная физика",
      testData: form10_test8
    },
    {
      label: "Итоговый тест 10 класс",
      testData: finalTest_10
    },
  ],
  11: [
    {
      label: "1.Электродинамика",
      testData: form11_test1
    },
    {
      label: "2.Колебания и волны",
      testData: form11_test2
    },
    {
      label: "3.Оптика",
      testData: form11_test3
    },
    {
      label: "4.Квантовая физика",
      testData: form11_test4
    },
    {
      label: "5.Атомная и ядерная физика",
      testData: form11_test5
    },
    {
      label: "6.Элементарные частицы",
      testData: form11_test6
    },
    {
      label: "7.Астрофизика",
      testData: form11_test7
    },
    {
      label: "8.Физика и научно-технический прогресс",
      testData: form11_test8
    },
    {
      label: "Итоговый тест 11 класс",
      testData: finalTest_11
    },
    {
      label: "Формулы к ЕГЭ",
      testData: form11_test9
    },
  ],
};

const PhysicsTests = () => {
    const [activeTab, setActiveTab] = useState("info");
    const [openTest, setOpenTest] = useState(null);
    useScrollLock(!!openTest);

  const renderTabButtons = () => (
    <div className="physics-tests-page__tab-buttons">
      {Object.keys(tests).map((grade) => (
        <button
          key={grade}
          className={activeTab === grade ? 'active' : ''}
          onClick={() => setActiveTab(grade)}
        >
          {grade === "info" ? "Инфо" : `${grade} класс`}
        </button>
      ))}
    </div>
  );

  const renderContent = () => {
    if (activeTab === "info") return <TestPromo />;
    return (
      <div className="physics-tests-page__cards-grid">
        {tests[activeTab].map((test, idx) => (
          <div key={idx} className="physics-tests-page__test-trigger">
            <button onClick={() => setOpenTest(test)}>{test.label}</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container-main">
      <Header />
      <h2 data-aos="fade-up" className="physics-tests-page__title">🧠 Физика практикум</h2>
      {renderTabButtons()}
      <div className="physics-tests-page__tab-content">{renderContent()}</div>

      {openTest && (
        <TestModal
          isOpen={!!openTest}
          onClose={() => setOpenTest(null)}
          testData={openTest.testData}
          {...(openTest.label === "Формулы к ЕГЭ" || openTest.label === "Формулы к ОГЭ"
            ? { numberQuest: 30 }
            : {}
          )}
        />
      )}
    </div>
  );
};

export default PhysicsTests;
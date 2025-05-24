// PhysicsTests.jsx
import React, { useState } from 'react';
import '../styles/pages/Tests.scss'; // Измененный импорт SCSS
import 'katex/dist/katex.min.css';
import TestPromo from "../components/cards/TestPromo.jsx";
import Header from "../components/Header.jsx";
import TestModal from '../components/TestModal.jsx';
import useScrollLock from '../hooks/useScrollLock';

import { generateFinalTest } from '../components/FinalTestGenerator';

import form7_test1 from './data/geometry_tests/7/7_1_geometrystart.json';
import form7_test2 from './data/geometry_tests/7/7_2_triangle.json';
import form7_test3 from './data/geometry_tests/7/7_3_parallel.json';
import form7_test4 from './data/geometry_tests/7/7_4_anglesandsides.json';
import form7_test5 from './data/geometry_tests/7/7_5_equaltriangles.json';

import form8_test1 from './data/geometry_tests/8/8_1_quadrilaterals.json';
import form8_test2 from './data/geometry_tests/8/8_2_square.json';
import form8_test3 from './data/geometry_tests/8/8_3_similarity.json';
import form8_test4 from './data/geometry_tests/8/8_4_bisectortheorem.json';
import form8_test5 from './data/geometry_tests/8/8_5_circle.json';
import form8_test6 from './data/geometry_tests/8/8_6_vectors.json';

import form9_test1 from './data/geometry_tests/9/9_1_vectors.json';
import form9_test2 from './data/geometry_tests/9/9_2_coordinate.json';
import form9_test3 from './data/geometry_tests/9/9_3_correlations.json';
import form9_test4 from './data/geometry_tests/9/9_4_circles.json';
import form9_test5 from './data/geometry_tests/9/9_5_move.json';
import form9_test6 from './data/geometry_tests/9/9_6_stereometry.json';
import form9_test7 from './data/geometry_tests/9/9_7_formulas.json';

import form10_test1 from './data/geometry_tests/10/10_1_stereometry.json';
import form10_test2 from './data/geometry_tests/10/10_2_polyhedra.json';
import form10_test3 from './data/geometry_tests/10/10_3_section.json';
import form10_test4 from './data/geometry_tests/10/10_4_rotation.json';
import form10_test5 from './data/geometry_tests/10/10_5_coordinates.json';
import form10_test6 from './data/geometry_tests/10/10_6_planimetry.json';

import form11_test1 from './data/geometry_tests/11/11_1_sections.json';
import form11_test2 from './data/geometry_tests/11/11_2_volumes.json';
import form11_test3 from './data/geometry_tests/11/11_3_sphere.json';
import form11_test4 from './data/geometry_tests/11/11_4_vectors.json';
import form11_test5 from './data/geometry_tests/11/11_5_equations.json';
import form11_test6 from './data/geometry_tests/11/11_6_planimetry.json';
import form11_test7 from './data/geometry_tests/11/11_7_stereometry.json';
import form11_test8 from './data/geometry_tests/11/11_8_formulas.json';


const finalTest_7 = generateFinalTest("Итоговый тест по геометрии 7 класс", [form7_test1,
   form7_test2, form7_test3, form7_test4, form7_test5], 10);
const finalTest_8 = generateFinalTest("Итоговый тест по геометрии 8 класс", [form8_test1,
   form8_test2, form8_test3, form8_test4, form8_test5, form8_test6], 10);
const finalTest_9 = generateFinalTest("Итоговый тест по геометрии 9 класс", [form9_test1,
   form9_test2, form9_test3, form9_test4, form9_test5, form9_test6], 10);
const finalTest_10 = generateFinalTest("Итоговый тест по геометрии 10 класс", [form10_test1,
   form10_test2, form10_test3, form10_test4, form10_test5, form10_test6], 10);
const finalTest_11 = generateFinalTest("Итоговый тест по геометрии 11 класс", [form11_test1,
   form11_test2, form11_test3, form11_test4, form11_test5, form11_test6, form11_test7], 10);

const tests = {
  info: [],
  7: [
    {
      label: "1. Начальные геометрические сведения",
      testData: form7_test1
    },
    {
      label: "2. Треугольники (медианы, биссектрисы итд.)",
      testData: form7_test2
    },
    {
      label: "3. Параллельные прямые",
      testData: form7_test3
    },
    {
      label: "4. Соотношения между сторонами и углами треугольника",
      testData: form7_test4
    },
    {
      label: "5. Признаки равенства треугольников",
      testData: form7_test5
    },
    {
      label: "Итоговый тест 7 класс",
      testData: finalTest_7
    }
  ],
  8: [
    {
      label: "1. Четырёхугольники",
      testData: form8_test1
    },
    {
      label: "2. Площадь",
      testData: form8_test2
    },
    {
      label: "3. Подобные треугольники",
      testData: form8_test3
    },
    {
      label: "4. Теорема о биссектрисе",
      testData: form8_test4
    },
    {
      label: "5. Окружность",
      testData: form8_test5
    },
    {
      label: "6. Векторы",
      testData: form8_test6
    },
    {
      label: "Итоговый тест 8 класс",
      testData: finalTest_8
    }
  ],
  9: [
    {
      label: "1. Векторы",
      testData: form9_test1
    },
    {
      label: "2. Метод координат",
      testData: form9_test2
    },
    {
      label: "3. Соотношения в треугольнике",
      testData: form9_test3
    },
    {
      label: "4. Длина окружности и площадь круга",
      testData: form9_test4
    },
    {
      label: "5. Движения, симметрия",
      testData: form9_test5
    },
    {
      label: "6. Начала стереометрии",
      testData: form9_test6
    },
    {
      label: "Итоговый тест 8 класс",
      testData: finalTest_9
    },
    {
      label: "Формулы к ОГЭ",
      testData: form9_test7
    },
  ],
  10: [
    {
      label: "1. Стереометрия",
      testData: form10_test1
    },
    {
      label: "2. Многогранники",
      testData: form10_test2
    },
    {
      label: "3. Сечения",
      testData: form10_test3
    },
    {
      label: "3. Тела вращения",
      testData: form10_test4
    },
    {
      label: "4. Координаты и векторы в пространстве",
      testData: form10_test5
    },
    {
      label: "5. Повторение планиметрии (ключевые темы)",
      testData: form10_test6
    },
    {
      label: "Итоговый тест 10 класс",
      testData: finalTest_10
    }
  ],
  11: [
    {
      label: "1. Сечения многогранников",
      testData: form11_test1
    },
    {
      label: "2. Объёмы и площади поверхностей сложных тел",
      testData: form11_test2
    },
    {
      label: "3. Вписанные и описанные многогранники",
      testData: form11_test3
    },
    {
      label: "4. Векторы и координаты в пространстве",
      testData: form11_test4
    },
    {
      label: "5. Уравнения в пространстве",
      testData: form11_test5
    },
    {
      label: "6. Планиметрия ЕГЭ",
      testData: form11_test6
    },
    {
      label: "7. Стереометрия ЕГЭ",
      testData: form11_test7
    },
    {
      label: "Итоговый тест 11 класс",
      testData: finalTest_11
    },
    {
      label: "Формулы к ЕГЭ",
      testData: form11_test8
    }
  ],
};

const GeometryTests = () => {
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
      <h2 data-aos="fade-up" className="physics-tests-page__title">🧠 Геометрия практикум</h2>
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

export default GeometryTests;
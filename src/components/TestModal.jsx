// import React, { useEffect, useState } from "react";
// import { MathJax, MathJaxContext } from "better-react-mathjax";
// import "../styles/components/TestModal.scss";

// const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

// const TestModal = ({ isOpen, onClose, testData }) => {
//   const [shuffledQuestions, setShuffledQuestions] = useState([]);
//   const [userAnswers, setUserAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [result, setResult] = useState({ correct: 0, percent: 0 });
//   const [checkedTime, setCheckedTime] = useState("");

//   useEffect(() => {
//     if (isOpen && testData?.questions) {
//       document.body.style.overflow = 'hidden';
//       const shuffled = shuffleArray(testData.questions)
//         .slice(0, 10)
//         .map((q) => ({
//           ...q,
//           options: shuffleArray(q.options),
//         }));
//       setShuffledQuestions(shuffled);
//       setUserAnswers({});
//       setSubmitted(false);
//       setResult({ correct: 0, percent: 0 });
//       setCheckedTime("");
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen, testData]);

//   const handleSelect = (qIndex, option) => {
//     if (!submitted) {
//       setUserAnswers((prev) => ({ ...prev, [qIndex]: option }));
//     }
//   };

//   const handleSubmit = () => {
//     let correctCount = 0;
//     shuffledQuestions.forEach((q, idx) => {
//       if (userAnswers[idx] === q.correctAnswer) correctCount++;
//     });
//     const percent = Math.round((correctCount / shuffledQuestions.length) * 100);
//     setResult({ correct: correctCount, percent });
//     setSubmitted(true);

//     const now = new Date();
//     const formattedDate = now.toLocaleDateString();
//     const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     setCheckedTime(`${formattedDate}, ${formattedTime}`);
//   };

//   if (!isOpen) return null;

//   return (
//     <MathJaxContext>
//       <div className="modal-overlay" onClick={onClose}>
//         <div className="modal" onClick={(e) => e.stopPropagation()}>
//           <button className="close-btn" onClick={onClose}>×</button>
//           <h2>{testData.title}</h2>

//           {shuffledQuestions.map((q, index) => (
//             <div key={index} className="question-block">
//               <p>
//                 <strong>{index + 1}/{shuffledQuestions.length}</strong>.{" "}
//                 {q.question.split('\n').map((line, i) => (
//                   <React.Fragment key={i}>
//                     <MathJax inline dynamic>{line}</MathJax>
//                     <br />
//                   </React.Fragment>
//                 ))}
//               </p>
//               {q.options.map((opt, optIdx) => {
//                 let optionClass = "option";
//                 if (submitted) {
//                   const isCorrect = opt === q.correctAnswer;
//                   const isUserSelected = userAnswers[index] === opt;

//                   if (isUserSelected && isCorrect) {
//                     optionClass += " correct-answer selected";
//                   } else if (isUserSelected && !isCorrect) {
//                     optionClass += " wrong-answer selected";
//                   } else if (!isUserSelected && isCorrect && userAnswers[index] !== undefined) {
//                     optionClass += " correct-answer";
//                   }
//                 }

//                 return (
//               <label key={optIdx} className={optionClass}>
//                 <input
//                   type="radio"
//                   name={`q${index}`}
//                   checked={userAnswers[index] === opt}
//                   onChange={() => handleSelect(index, opt)}
//                   disabled={submitted}
//                   style={{ pointerEvents: 'none' }} // чтобы клик срабатывал на label, а не input
//                 />
//                 <MathJax inline dynamic>{opt}</MathJax>
//               </label>
//             );
//               })}
//             </div>
//           ))}

//           {!submitted ? (
//             <button className="submit-btn" onClick={handleSubmit}>Проверить</button>
//           ) : (
//             <div className="result">
//               <p>{testData.title}</p>
//               <p>Правильных ответов: {result.correct} из {shuffledQuestions.length}</p>
//               <p>Процент: {result.percent}%</p>
//               <p className="time-info">Проверено: {checkedTime}</p>
//               <button className="close-btn-result" onClick={onClose}>Закрыть</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </MathJaxContext>
//   );
// };

// export default TestModal;

import React, { useEffect, useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "../styles/components/TestModal.scss";

const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

// Функция для обработки жирного текста из Markdown
const formatTextWithBold = (text) => {
  // Regex для поиска текста в **двойных звездочках**
  // Заменяет **текст** на <strong>текст</strong>
  // Игнорирует ** если они являются частью LaTeX-формул (не идеально, но для данного случая работает)
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
};

const TestModal = ({ isOpen, onClose, testData ,numberQuest=10}) => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState({ correct: 0, percent: 0 });
  const [checkedTime, setCheckedTime] = useState("");

  useEffect(() => {
    if (isOpen && testData?.questions) {
      document.body.style.overflow = 'hidden';
      const questionsToSlice = numberQuest;
      const shuffled = shuffleArray(testData.questions)
        .slice(0, questionsToSlice)
        .map((q) => ({
          ...q,
          options: shuffleArray(q.options),
        }));
      setShuffledQuestions(shuffled);
      setUserAnswers({});
      setSubmitted(false);
      setResult({ correct: 0, percent: 0 });
      setCheckedTime("");
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, testData]);

  const handleSelect = (qIndex, option) => {
    if (!submitted) {
      setUserAnswers((prev) => ({ ...prev, [qIndex]: option }));
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    shuffledQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) correctCount++;
    });
    const percent = Math.round((correctCount / shuffledQuestions.length) * 100);
    setResult({ correct: correctCount, percent });
    setSubmitted(true);

    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setCheckedTime(`${formattedDate}, ${formattedTime}`);
  };

  if (!isOpen) return null;

  return (
    <MathJaxContext
      config={{
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']], // Standard inline delimiters
          displayMath: [['$$', '$$'], ['\\[', '\\]']], // Standard display delimiters
        },
        options: {
          skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a'],
          ignoreHtmlClass: 'tex2jax_ignore',
          processHtmlClass: 'tex2jax_process'
        },
        chtml: {
          displayAlign: 'left',
        }
      }}
    >
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>{testData.title}</h2>

          {shuffledQuestions.map((q, index) => (
            <div key={index} className="question-block">
              <p>
                <strong>{index + 1}/{shuffledQuestions.length}</strong>.{" "}
                {/* Используем dangerouslySetInnerHTML для рендеринга HTML из строки */}
                {/* Передаем отформатированный текст в MathJax компоненте */}
                <MathJax inline dynamic dangerouslySetInnerHTML={{ __html: formatTextWithBold(q.question) }} />
              </p>
              {q.options.map((opt, optIdx) => {
                let optionClass = "option";
                if (submitted) {
                  const isCorrect = opt === q.correctAnswer;
                  const isUserSelected = userAnswers[index] === opt;

                  if (isUserSelected && isCorrect) {
                    optionClass += " correct-answer selected";
                  } else if (isUserSelected && !isCorrect) {
                    optionClass += " wrong-answer selected";
                  } else if (!isUserSelected && isCorrect && userAnswers[index] !== undefined) {
                    optionClass += " correct-answer";
                  }
                }

                return (
                  <label key={optIdx} className={optionClass}>
                    <input
                      type="radio"
                      name={`q${index}`}
                      checked={userAnswers[index] === opt}
                      onChange={() => handleSelect(index, opt)}
                      disabled={submitted}
                      style={{ pointerEvents: 'none' }}
                    />
                    {/* Применяем форматирование и здесь */}
                    <MathJax inline dynamic dangerouslySetInnerHTML={{ __html: formatTextWithBold(opt) }} />
                  </label>
                );
              })}
            </div>
          ))}

          {!submitted ? (
            <button className="submit-btn" onClick={handleSubmit}>Проверить</button>
          ) : (
            <div className="result">
              <p>{testData.title}</p>
              <p>Правильных ответов: {result.correct} из {shuffledQuestions.length}</p>
              <p>Процент: {result.percent}%</p>
              <p className="time-info">Проверено: {checkedTime}</p>
              <button className="close-btn-result" onClick={onClose}>Закрыть</button>
            </div>
          )}
        </div>
      </div>
    </MathJaxContext>
  );
};

export default TestModal;
import { TypeAnimation } from 'react-type-animation';
import { useMemo } from 'react';
import 'katex/dist/katex.min.css'; // Стиль для KaTeX

// Первый фиксированный шаг
const phrase_first = [
  'Здравствуйте! Меня зовут Артем Дмитриевич',
];

// Список возможных фраз
const phrase_next = [
  'Это моя образовательная платформа',
  '🧮 «Математика — единственный предмет, где можно доказать, что ты прав»',
  'Hello world!',
  'Сила тяжести: Fт = mg',
  'Сила упругости: Fу = k∆x',
  'Сила Архимеда: Fa = ρж∙g∙Vпогр',
  'Можешь доказать, что лед всегда погружен на 90% в воду?',
  '1 закон Ньютона: тело сохраняет скорость, или покоится если нет внешнего воздействия. ',
  '2 закон Ньютона: F = ma',
  '3 закон Ньютона: сила действия = силе противодействия',
  'Потенциальная энергия: Eп = mgh',
  'Равномерное движение: Путь = Скорость ∙ Время   S = Vt ',
  'Скорость (равноускоренное движение): V = V0 + at',
  'Сила Ампера: Faмп = BIL∙sin(α)',
  'Сила Лоренца: Fл = BVq∙sin(α)',
  'Этот сайт - web приложение на React',
  'Открытый код этого приложения на Github',
  'Перерыв есть - можно и поесть',
  'Если хочешь - могу обучить делать приложения',
  'Линейная функция: f(x) = kx + b',
  'sin(30) = 1/2',
  '🌍 Что бы ни случилось, гравитация всегда тянет тебя вниз',
  '🔥 Трение в физике объясняет, почему ты опаздываешь в школу.',
  '🤖 Кодить легко: всего-то нужно ошибиться тысячу раз, чтобы найти одно верное решение!'
];

// Функция для выбора случайных элементов
const getRandomPhrases = (array, count) => {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const ExampleComponent = () => {
  const steps = useMemo(() => {
    const randomPhrases = getRandomPhrases(phrase_next, 5);
    return [...phrase_first, ...randomPhrases].flatMap((step, index) => [
      step,
      index === 0 ? 4000 : 8000
    ]);
  }, []); // Пустой массив зависимостей — выполнится только один раз при открытии страницы

  return (
    <TypeAnimation
      sequence={steps}
      speed={1}
      wrapper="p"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default ExampleComponent;

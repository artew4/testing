import React, { Component } from 'react';
import Typical from 'react-typical';

const phrase_first = [
  'Здравствуйте! Меня зовут Артем Дмитриевич',
];
const phrase_next = [
  'Это моя образовательная платформа',
  '🧮 «Математика — единственный предмет, где можно доказать, что ты прав»',
  'Hello world!',
  'Fт = mg',
  'Web приложение на React',
  'Открытый код на Github',
  'f(x) = kx + b',
  'sin(30) = 1/2',
  '🌍 Что бы ни случилось, гравитация всегда тянет тебя вниз',
  '🔥 Трение в физике объясняет, почему ты опаздываешь в школу.',
  '🤖 Кодить легко: всего-то нужно ошибиться тысячу раз, чтобы найти одно верное решение!'
];

const shuffledPhrases = [...phrase_next].sort(() => Math.random() - 0.5);
let steps = [...phrase_first, ...shuffledPhrases];

steps = steps.flatMap((step, index) => [
  step,
  index === 0 ? 4000 : 8000
]);

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeClass: 'fade-text',
    };
  }

  handleStepChange = () => {
    this.setState({ fadeClass: 'fade-text fade-out' }); // исчезаем + сдвигаем вверх
    setTimeout(() => {
      this.setState({ fadeClass: 'fade-text' }); // плавно возвращаемся
    }, 500); // подстроил под анимацию (чуть больше, чем раньше)
  };

  render() {
    return (
      <h1 className={this.state.fadeClass}>
        <Typical
          steps={steps}
          loop={Infinity}
          wrapper="span"
          onStepChange={this.handleStepChange}
        />
      </h1>
    );
  }
}

export default Example;

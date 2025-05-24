import { useState } from "react";
import "../../styles/components/cards/TestPromo.scss"; // Импортируем стили

function TestPromo() {
  return (
    <div className="test-promo">
      <div className="test-promo__header">
        <span className="test-promo__ai-label">
          GeneratingAI <span role="img" aria-label="Робот">🤖</span>
        </span>
        <i className="icon-infinity"></i> {/* Предполагается, что у вас есть такой класс для иконки */}
      </div>
      <p className="test-promo__tagline">
        Погрузитесь в мир знаний!
      </p>
      <p className="test-promo__reassurance">
        Каждая попытка уникальна, результат ни на что не влияет.
      </p>
      <blockquote className="test-promo__inspiration">
        <p className="test-promo__quote-text">
          "Не ошибается лишь тот, кто ничего не делает!"
        </p>
        <cite className="test-promo__quote-author">Фридрих Шиллер©️</cite>
      </blockquote>
    </div>
  );
}

export default TestPromo;
import { useState } from "react";
import '../../styles/components/cards/InfoCardWithModal.scss';

function InfoCardWithModal({ icon, text, content, imageSrc, animation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="card"
        data-aos={animation}
        onClick={() => setIsOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <div className="icon">{icon}</div>
        <div className="text">{text}</div>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Кнопка закрытия */}
            <button className="modal-close" onClick={() => setIsOpen(false)} aria-label="Закрыть">
  &times;
</button>


            <h3>{text}</h3>
            {imageSrc && (
              <img
                src={imageSrc}
                alt={text}
                style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
              />
            )}
            <div>{content}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoCardWithModal;
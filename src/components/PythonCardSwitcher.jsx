import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "../styles/components/PythonCardSwitcher.scss";
import { FiCopy, FiCheck } from 'react-icons/fi';

const PythonCardSwitcher = ({ programs, title = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const active = programs[activeIndex];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(active.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Не удалось скопировать код:", err);
    }
  };

  return (
    <div className="python-card-switcher" data-aos="fade-up">
      {title && <h3 className="switcher-title">{title}</h3>}

      <div className="switcher-buttons">
        {programs.map((prog, idx) => (
          <button
            key={idx}
            className={idx === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(idx)}
          >
            {prog.title}
          </button>
        ))}
      </div>

      <div className="code-header">
        <button className="copy-button" onClick={handleCopy}>
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>

      <SyntaxHighlighter language="python" style={oneDark} showLineNumbers>
        {active.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default PythonCardSwitcher;

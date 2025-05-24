import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiCopy, FiCheck } from 'react-icons/fi';
import "../styles/components/PythonCard.scss";

const PythonCard = ({ title, code, animation }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Ошибка копирования:", err);
    }
  };

  return (
    <div className="python-card" data-aos={animation}>
      <div className="python-card-header">
        <h3>{title}</h3>
        <button className="copy-btn" onClick={handleCopy} title="Скопировать код">
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>
      <SyntaxHighlighter language="python" style={oneDark} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default PythonCard;

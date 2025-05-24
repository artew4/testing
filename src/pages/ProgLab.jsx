import React, { useEffect, useRef, useState } from "react";
import "../styles/pages/ProgLab.scss";
import Header from "../components/Header.jsx";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";

const ProgLab = () => {
  const editorRef = useRef();
  const [output, setOutput] = useState("");
  const pyodideRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      pyodideRef.current = await window.loadPyodide();
    };
    load();
  }, []);

  const runCode = async () => {
    const code = editorRef.current?.view?.state?.doc?.toString?.() || "";
    try {
      await pyodideRef.current.loadPackagesFromImports(code);

      let stdout = "";
      let stderr = "";

      // Перехватываем вывод
      pyodideRef.current.setStdout({
        batched: (s) => (stdout += s),
      });
      pyodideRef.current.setStderr({
        batched: (s) => (stderr += s),
      });

      await pyodideRef.current.runPythonAsync(code);

      setOutput(stderr ? `❌ Ошибка:\n${stderr}` : stdout || "✅ Код выполнен");
    } catch (e) {
      setOutput(`❌ Исключение: ${e}`);
    }
  };

  return (
    <div className="container-main">
      <Header />
      <div className="prog-lab">
        <h2>Лаборатория информатики</h2>
        <CodeMirror
          ref={editorRef}
          value='print("Hello World!")'
          height="200px"
          extensions={[python()]}
          theme={oneDark}
        />
        <button className="run-btn" onClick={runCode}>Выполнить</button>
        <pre className="output">{output}</pre>
      </div>
    </div>
  );
};

export default ProgLab;

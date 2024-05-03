import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { Quest01 } from "./components/Quest01";
import { Quest02 } from "./components/Quest02";
import { Thanks } from "./components/Thanks";

import { useQuest } from "./hooks/useQuest";

import "./App.css";
import { useState } from "react";

const formTemplate = {
  quest1: "",
  quest2: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updatefieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const formComponents = [
    <Quest01 data={data} updatefieldHandler={updatefieldHandler} />,
    <Quest02 data={data} updatefieldHandler={updatefieldHandler} />,
    <Thanks />,
  ];
  const {
    currentQuest,
    currentComponent,
    changeQuest,
    isLastQuest,
    isFirstQuest,
    sendEmail,
  } = useQuest(formComponents, data, setData);

  return (
    <div className="app">
      <div className="header">
        <h2 className="title">Se você é a Gabriela, responda!</h2>
      </div>
      <div className="form-container">
        <form
          onSubmit={(e) => changeQuest(currentQuest + 1, e)}
          className="form"
        >
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstQuest && (
              <button
                type="button"
                onClick={() => changeQuest(currentQuest - 1)}
              >
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastQuest ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit" onClick={(e) => sendEmail(e)}>
                <span className="send">Enviar</span>
                <FiSend size={15} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

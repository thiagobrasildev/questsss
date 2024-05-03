import { useState } from "react";
import emailjs from "@emailjs/browser";

export function useQuest(quests, data, setData) {
  const [currentQuest, setCurrentQuest] = useState(0);

  function changeQuest(i, e) {
    if (e) e.preventDefault();

    if (i < 0 || i >= quests.length) return;

    setCurrentQuest(i);
  }

  function sendEmail(e) {
    if (e) e.preventDefault();

    const templateParams = {
      from_name: "gabriela",
      message1: `resposta1: ${data.quest1}`,
      message2: `resposta2: ${data.quest2}`,
    };

    if (e) {
      emailjs
        .send(
          "service_22gw1wi",
          "template_lpmv4it",
          templateParams,
          "6ITiJTOCLkq-ZCXfZ"
        )
        .then(
          (response) => {
            console.log("email enviado", response.status, response.text);
            alert("Respostas enviadas!");
            setData("");
          },
          (error) => {
            console.log("Error: ", error);
          }
        );
    }
  }

  return {
    currentQuest,
    currentComponent: quests[currentQuest],
    changeQuest,
    sendEmail,
    isLastQuest: currentQuest + 1 === quests.length ? true : false,
    isFirstQuest: currentQuest === 0 ? true : false,
  };
}

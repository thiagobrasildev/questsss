import "./quest.css";

export const Quest02 = ({ data, updatefieldHandler }) => {
  return (
    <div className="form-control">
      <label htmlFor="anser">
        Qual é sua visão sobre relacionamentos e compromisso, e o que vecê
        espera para o nosso compromisso?
      </label>
      <textarea
        type="text"
        name="text"
        id="anser"
        placeholder="Digite sua resposta"
        required
        value={data.quest2 || ""}
        onChange={(e) => updatefieldHandler("quest2", e.target.value)}
      />
    </div>
  );
};

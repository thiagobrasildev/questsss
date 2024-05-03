import "./quest.css";

export const Quest01 = ({ data, updatefieldHandler }) => {
  return (
    <div className="form-control">
      <label htmlFor="anser"></label>
      <textarea
        type="text"
        name="text"
        id="anser"
        placeholder="Digite sua resposta"
        required
        value={data.quest3 || ""}
        onChange={(e) => updatefieldHandler("quest1", e.target.value)}
      />
    </div>
  );
};

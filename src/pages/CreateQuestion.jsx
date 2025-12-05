import { useState } from "react";

function CreateQuestion() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState(0);

  const handleAnswerChange = (i, value) => {
    const newAnswers = [...answers];
    newAnswers[i] = value;
    setAnswers(newAnswers);
  };

  const saveQuestion = (e) => {
    e.preventDefault();
    if (!question || answers.some(a => !a)) {
      alert("Заполните все поля");
      return;
    }

    const list = JSON.parse(localStorage.getItem("questions")) || [];
    list.push({ question, answers, correct });
    localStorage.setItem("questions", JSON.stringify(list));

    alert("Вопрос создан!");
    setQuestion("");
    setAnswers(["", "", "", ""]);
    setCorrect(0);
  };

  return (
    <div className="card shadow p-4 create-card">
      <h3 className="text-center mb-3">Создать вопрос</h3>
      <form onSubmit={saveQuestion}>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="Вопрос"
          value={question}
          onChange={e => setQuestion(e.target.value)}
        ></textarea>
        <h5>Варианты ответов:</h5>
        {answers.map((ans, i) => (
          <input
            key={i}
            className="form-control mb-2"
            placeholder={`Ответ ${i+1}`}
            value={ans}
            onChange={e => handleAnswerChange(i, e.target.value)}
          />
        ))}
        <select
          className="form-select mb-3"
          value={correct}
          onChange={e => setCorrect(Number(e.target.value))}
        >
          <option value={0}>Ответ 1</option>
          <option value={1}>Ответ 2</option>
          <option value={2}>Ответ 3</option>
          <option value={3}>Ответ 4</option>
        </select>
        <button className="btn btn-success w-100">Сохранить вопрос</button>
      </form>
    </div>
  );
}

export default CreateQuestion;

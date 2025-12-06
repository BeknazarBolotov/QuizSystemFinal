import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StartQuiz() {
  const questions = JSON.parse(localStorage.getItem("questions")) || [];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");

  if (questions.length === 0) {
    return (
      <div className="card shadow p-4 text-center">
        <h4>Нет вопросов для теста</h4>
      </div>
    );
  }

  const next = () => {
    const newScore = selected === questions[current].correct ? score + 1 : score;

    if (current + 1 === questions.length) {
      // Сохраняем текущий результат
      localStorage.setItem("lastScore", newScore);

      // Берем все результаты из localStorage
      const results = JSON.parse(localStorage.getItem("results")) || {};

      // Берем массив текущего пользователя или создаем новый
      let userResults = results[currentUser];
      if (!Array.isArray(userResults)) {
        userResults = [];
      }

      // Добавляем новую попытку
      userResults.push(newScore);

      // Сохраняем обратно
      results[currentUser] = userResults;
      localStorage.setItem("results", JSON.stringify(results));

      navigate("/quiz-result");
    } else {
      setCurrent(current + 1);
      setSelected(null);
      setScore(newScore);
    }
  };

  const q = questions[current];

  return (
    <div className="card shadow p-4 quiz-card">
      <h5>{q.question}</h5>
      {q.answers.map((a, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              name="answer"
              className="me-2"
              onChange={() => setSelected(i)}
              checked={selected === i}
            />
            {a}
          </label>
        </div>
      ))}
      <button
        className="btn btn-success mt-3"
        onClick={next}
        disabled={selected === null}
      >
        Далее
      </button>
    </div>
  );
}

export default StartQuiz;

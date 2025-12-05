import { useNavigate } from "react-router-dom";

function QuizResult() {
  const navigate = useNavigate();
  const score = localStorage.getItem("lastScore") || 0;

  return (
    <div className="card shadow p-5 text-center result-card">
      <h3>Тест завершён!</h3>
      <p className="mt-3">Ваш результат: <b>{score}</b></p>
      <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
        На главную
      </button>
    </div>
  );
}

export default QuizResult;

import { useNavigate } from "react-router-dom";

function QuizResult() {
  const navigate = useNavigate();
  const lastScore = localStorage.getItem("lastScore");

  return (
    <div className="card shadow p-5 text-center result-card">
      <h3>Тест завершён!</h3>
      <p className="mt-3">Ваш результат: <b>{lastScore}</b> баллов</p>
      <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
        На главную
      </button>
    </div>
  );
}

export default QuizResult;

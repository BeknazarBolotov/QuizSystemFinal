import { useNavigate } from "react-router-dom";

function MyResults() {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");

  // Берем все результаты
  const allResults = JSON.parse(localStorage.getItem("results")) || {};
  let userResults = allResults[currentUser];

  // Если данных нет или это не массив, создаем пустой массив
  if (!Array.isArray(userResults)) userResults = [];

  return (
    <div className="card shadow p-5 text-center result-card">
      <h3>Мои результаты</h3>
      {userResults.length === 0 ? (
        <p className="mt-3">Вы ещё не проходили тесты</p>
      ) : (
        <ul className="list-group mt-3">
          {userResults.map((score, i) => (
            <li key={i} className="list-group-item">
              Попытка {i + 1}: <b>{score}</b> баллов
            </li>
          ))}
        </ul>
      )}
      <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
        На главную
      </button>
    </div>
  );
}

export default MyResults;

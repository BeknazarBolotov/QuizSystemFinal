import { useNavigate } from "react-router-dom";

function AllResults() {
  const navigate = useNavigate();
  const results = JSON.parse(localStorage.getItem("results")) || {};

  return (
    <div className="card shadow p-5 text-center result-card">
      <h3>Результаты всех пользователей</h3>
      {Object.keys(results).length === 0 ? (
        <p className="mt-3">Пока нет результатов</p>
      ) : (
        <div className="mt-3 text-start">
          {Object.entries(results).map(([user, scores]) => {
            if (typeof scores === "number") scores = [scores];
            return (
              <div key={user} className="mb-3">
                <strong>{user}</strong>
                <ul className="list-group mt-1">
                  {scores.map((score, i) => (
                    <li key={i} className="list-group-item">
                      Попытка {i + 1}: <b>{score}</b> баллов
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
      <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
        На главную
      </button>
    </div>
  );
}

export default AllResults;

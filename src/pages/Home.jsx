import { Link } from "react-router-dom";

function Home() {
  const loggedIn = localStorage.getItem("loggedIn");

  return (
    <div className="card shadow-lg p-5 text-center home-card">
      <h2 className="mb-4">Добро пожаловать в QuizSystem</h2>
      <p className="text-muted mb-4">Выберите действие:</p>

      <Link className="btn btn-primary w-100 mb-3" to="/questions">
        Смотреть вопросы
      </Link>

      {loggedIn && (
        <Link className="btn btn-success w-100 mb-3" to="/create-question">
          Создать вопрос
        </Link>
      )}

      <Link className="btn btn-warning w-100" to="/start-quiz">
        Начать тест
      </Link>
    </div>
  );
}

export default Home;

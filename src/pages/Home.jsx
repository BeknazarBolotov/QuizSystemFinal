import { Link } from "react-router-dom";

function Home() {
  const role = localStorage.getItem("role");
  const loggedIn = localStorage.getItem("loggedIn");

  return (
    <div className="card shadow-lg p-5 text-center home-card">
      <h2 className="mb-4">Добро пожаловать в QuizSystem</h2>
      <p className="text-muted mb-4">Выберите действие:</p>

      <Link className="btn btn-primary w-100 mb-3" to="/questions">
        Смотреть вопросы
      </Link>

      {role === "Admin" && (
        <>
          <Link className="btn btn-success w-100 mb-3" to="/create-question">
            Создать вопрос
          </Link>
          <Link className="btn btn-warning w-100 mb-3" to="/all-results">
            Смотреть результаты пользователей
          </Link>
        </>
      )}

      {role === "User" && (
        <>
          <Link className="btn btn-warning w-100 mb-3" to="/start-quiz">
            Начать тест
          </Link>
          <Link className="btn btn-info w-100 mb-3" to="/quiz-result">
            Мои результаты
          </Link>
        </>
      )}
    </div>
  );
}

export default Home;

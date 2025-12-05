import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Нет зарегистрированных пользователей");
      return;
    }

    if (username === user.username && password === user.password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/create-question");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <div className="card shadow p-4 login-card">
      <h3 className="text-center mb-3">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="form-control mb-2"
          placeholder="Логин"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100">Войти</button>
      </form>
    </div>
  );
}

export default Login;

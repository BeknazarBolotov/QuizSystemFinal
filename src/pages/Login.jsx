import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const ADMIN = { username: "admin", password: "admin123" };

  const handleLogin = (e) => {
    e.preventDefault();

    // Проверка админа
    if (username === ADMIN.username && password === ADMIN.password) {
      localStorage.setItem("currentUser", username);
      localStorage.setItem("role", "Admin");
      navigate("/");
      return;
    }

    // Проверка обычного пользователя
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      alert("Неверный логин или пароль");
      return;
    }

    localStorage.setItem("currentUser", username);
    localStorage.setItem("role", "User");
    navigate("/");
  };

  return (
    <div className="card shadow p-4 login-card">
      <h3 className="text-center mb-3">Login</h3>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" placeholder="Логин" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="form-control mb-3" type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100">Войти</button>
      </form>
    </div>
  );
}

export default Login;

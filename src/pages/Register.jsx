import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Заполните все поля");
      return;
    }

    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Регистрация прошла успешно!");
    navigate("/login");
  };

  return (
    <div className="card shadow p-4 register-card">
      <h3 className="text-center mb-3">Регистрация</h3>
      <form onSubmit={handleRegister}>
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
        <button className="btn btn-success w-100">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Register;

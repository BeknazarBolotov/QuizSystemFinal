import { BrowserRouter, Routes, Route } from "react-router-dom";

// Компоненты
import Navbar from "./components/Navbar.jsx";

// Страницы
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import CreateQuestion from "./pages/CreateQuestion.jsx";
import QuestionsList from "./pages/QuestionsList.jsx";
import StartQuiz from "./pages/StartQuiz.jsx";
import QuizResult from "./pages/QuizResult.jsx";
import MyResults from "./pages/MyResults.jsx";
import AllResults from "./pages/AllResults.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-question" element={<CreateQuestion />} />
          <Route path="/questions" element={<QuestionsList />} />
          <Route path="/start-quiz" element={<StartQuiz />} />
          <Route path="/quiz-result" element={<QuizResult />} />
          <Route path="/my-results" element={<MyResults />} />
          <Route path="/all-results" element={<AllResults />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

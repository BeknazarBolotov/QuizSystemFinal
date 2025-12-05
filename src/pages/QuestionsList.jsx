function QuestionsList() {
  const questions = JSON.parse(localStorage.getItem("questions")) || [];

  return (
    <div className="card shadow p-4 questions-card">
      <h3 className="text-center mb-3">Все вопросы</h3>
      {questions.length === 0 ? (
        <p className="text-center">Вопросов пока нет</p>
      ) : (
        <ul className="list-group">
          {questions.map((q, i) => (
            <li key={i} className="list-group-item">
              <strong>{q.question}</strong>
              <ul className="mt-2">
                {q.answers.map((a, j) => (
                  <li key={j}>{a} {j === q.correct && <b>(✔)</b>}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuestionsList;

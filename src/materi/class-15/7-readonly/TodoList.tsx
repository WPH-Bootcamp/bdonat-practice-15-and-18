import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<readonly string[]>([
    "Belajar TS",
    "Belajar React",
    "Belajar JS",
  ]);

  const handleAddWrong = () => {
    todos.push("Belajar Renang");
  };

  const handleAddRight = () => {
    setTodos([...todos, "Belajar Next JS"]);
  };
  return (
    <div>
      <h2>7. Readonly</h2>
      <button onClick={handleAddWrong}>Tombol Error</button>
      <button onClick={handleAddRight}>Tombol Benar</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

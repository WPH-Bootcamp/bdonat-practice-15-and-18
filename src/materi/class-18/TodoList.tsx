import React from "react";

type TodoListProps = {
  id: number;
  todo: string;
};

const TodoList: React.FC<TodoListProps> = ({ id, todo }) => {
  return (
    <div>
      {/* <h1 style={{ color: "red" }}>Ini TodoList</h1> */}
      <ul>
        <li>
          {id} | {todo}
        </li>
      </ul>
    </div>
  );
};

export default TodoList;

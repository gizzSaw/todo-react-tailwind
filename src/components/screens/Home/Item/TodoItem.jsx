import React from "react";
import Check from "./Check";

const TodoItem = ({ todo, changeTodo }) => {
  return (
    <button
      className="flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
      onClick={() => changeTodo(todo._id)}
    >
      <Check isComplited={todo.isComplited} />
      <p>{todo.title}</p>
    </button>
  );
};

export default TodoItem;

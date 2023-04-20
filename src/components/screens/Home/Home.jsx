import React, { useState } from "react";
import TodoItem from "./Item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField.jsx";

const data = [
  {
    title: "Finish the essay collaboration",
    isComplited: false,
    _id: 1,
  },
  {
    title: "Read next chapter of the book",
    isComplited: false,
    _id: 2,
  },
  {
    title: "Send the finished assigment",
    isComplited: false,
    _id: 3,
  },
  {
    title: "To find a good job",
    isComplited: false,
    _id: 4,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isComplited = !current.isComplited;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        Saveliy Kononov TodoApp
      </h1>
      <CreateTodoField setTodos={setTodos} />
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;

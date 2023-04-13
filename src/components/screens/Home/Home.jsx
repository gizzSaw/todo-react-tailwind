import React from "react";
import TodoItem from "./Item/TodoItem";

const todos = [
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
  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        Saveliy Kononov TodoApp
      </h1>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo._id} />
      ))}{" "}
    </div>
  );
};

export default Home;

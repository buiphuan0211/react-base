import React, { useState } from "react";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];
    const newTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    newTodoList[index] = newTodo;
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus("all");
  };
  const handleShowNewClick = () => {
    setFilterStatus("new");
  };
  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  console.log(
    "🚀 ~ file: index.jsx:56 ~ TodoFeature ~ renderedTodoList:",
    renderedTodoList
  );

  return (
    <div>
      <h3>TodoList</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowNewClick}>Show New</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
      </div>
    </div>
  );
}

export default TodoFeature;

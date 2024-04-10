import React, { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask) return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="container">
      <div className="container-content">
        <input
          className="input"
          placeholder="new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <p>{tasks.length}</p>
        <ul className="list">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <button className="addBtn" onClick={addTask}>
          Add task
        </button>
      </div>
    </div>
  );
}

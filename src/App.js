import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  function addTask(name) {
    setTasks((previous) => {
      return [...previous, { name: name, done: false }];
    });
  }
  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <Task {...task} />
      ))}
    </main>
  );
}

export default App;

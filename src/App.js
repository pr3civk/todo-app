import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks((previous) => {
      return [...previous, { name: name, done: false }];
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((previous) => {
      const newTasks = [...previous];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  function removeTask(indexToRemove) {
    setTasks((previous) => {
      return previous.filter((removeTask, index) => index !== indexToRemove);
    });
  }

  const numberCompletedTasks = tasks.filter((task) => task.done).length;
  const numberTotalTasks = tasks.length;

  function getMessage() {
    const percentage = (numberCompletedTasks / numberTotalTasks) * 100;
    if (percentage === 100) {
      return "You did it! It's time to relax!";
    } else if (percentage === 0) {
      return "Come on! Try to do at least one task today!";
    } else if (numberTotalTasks === 0) {
      return "Add your first task!";
    }
    return "Keep it going!";
  }

  return (
    <main>
      <h1>
        {numberCompletedTasks}/{numberTotalTasks} Tasks completed
      </h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          {...task}
          onToggle={(done) => updateTaskDone(index, done)}
          onTrash={() => removeTask(index)}
        />
      ))}
      <Footer/>
    </main>
  );
}

export default App;

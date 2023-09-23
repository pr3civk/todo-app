import { useState } from "react";
import React from "react";


export default function TaskForm({onAdd}) {
  const [taskName, setTaskName] = useState("");
    function handleSubmit(event){
      event.preventDefault();
      onAdd(taskName);
      setTaskName("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        placeholder="Your next task..."
      />
    </form>
  );
}

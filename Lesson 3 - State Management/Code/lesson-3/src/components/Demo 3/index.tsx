import React, { useState } from "react";

interface Task {
  name: string;
  category: string;
}

const TaskListComponent: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { name: "Task 1", category: "General" },
    { name: "Task 2", category: "Work" },
  ]);
  const [newTask, setNewTask] = useState<string>("");
  const [taskCategory, setTaskCategory] = useState<string>("General");

  const addTask = () => {
    setTasks([...tasks, { name: newTask, category: taskCategory }]);
    setNewTask("");
    setTaskCategory("General");
  };

  return (
    <div>
      <h2>[Demo 3] Tasks:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - <i>{task.category}</i>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskListComponent;

import React, { useState } from "react";

interface Task {
  name: string;
  category: string;
}

interface TaskInputProps {
  onAddTask: (task: Task) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskCategory, setTaskCategory] = useState<string>("General");

  const handleAddTask = () => {
    onAddTask({ name: newTask, category: taskCategory });
    setNewTask("");
    setTaskCategory("General");
  };

  return (
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
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

const TaskListComponent: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { name: "Task 1", category: "General" },
    { name: "Task 2", category: "Work" },
  ]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h2>[Demo 4] Tasks:</h2>
      <TaskInput onAddTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - <i>{task.category}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListComponent;

import React, { useState } from 'react';

const TaskListComponent: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>(['Task 1', 'Task 2']);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    setTasks(currentTasks => [...currentTasks, newTask]);
    setNewTask('');
  };

  const updateNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  return (
    <div>
      <h2>[Demo 2] Tasks:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input type="text" value={newTask} onChange={updateNewTask} />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskListComponent;

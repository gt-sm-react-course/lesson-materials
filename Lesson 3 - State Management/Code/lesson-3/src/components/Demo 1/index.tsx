import React from 'react';

interface IState {
  tasks: string[];
  newTask: string;
}

interface IProps {
}

class TaskListComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { 
      tasks: ['Task 1', 'Task 2'],
      newTask: ''
    };
  }

  addTask = () => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, prevState.newTask],
      newTask: ''
    }));
  };

  updateNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTask: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>[Demo 1] Tasks:</h2>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <input type="text" value={this.state.newTask} onChange={this.updateNewTask} />
        <button onClick={this.addTask}>Add Task</button>
      </div>
    );
  }
}

export default TaskListComponent;

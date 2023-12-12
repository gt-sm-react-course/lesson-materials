import React from 'react';

interface Props {}

interface State {
  counter: number;
}

class LifecycleComponent extends React.Component<Props, State> {
  // Mounting Phase (1)
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Class: constructor");
  }

  // Mounting Phase (2)
  // Updating Phase (1)
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log("Class: getDerivedStateFromProps");
    console.log(nextProps, prevState);
    return null;
  }

  // Mounting Phase (4)
  componentDidMount() {
    this.setState({
      counter: 1,
    });
    console.log("Class: componentDidMount");
  }

  // Updating Phase (2)
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log("Class: shouldComponentUpdate");
    console.log(nextProps, nextState);
    return true;
  }

  // Updating Phase (4)
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log("Class: getSnapshotBeforeUpdate");
    console.log(prevProps, prevState);
    return null;
  }

  // Updating Phase (5)
  componentDidUpdate(prevProps: Props, prevState: State, snapshot: unknown) {
    console.log("Class: componentDidUpdate");
    console.log(prevProps, prevState, snapshot);
  }

  // Unmounting Phase (1)
  componentWillUnmount() {
    console.log("Class: componentWillUnmount");
  }

  // Non lifecycle function to increment the counter
  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  // Mounting Phase (3)
  // Updating Phase (3)
  render() {
    console.log("Class: render");
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment Counter</button>
      </div>
    );
  }
}

export default LifecycleComponent;

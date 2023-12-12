import { Component } from "react";

import LifecycleComponent from "./LifecycleComponent";

interface ParentState {
  showLifecycleComponent: boolean;
}

interface ParentProps {}

class ParentComponent extends Component<ParentProps, ParentState> {
  constructor(props: ParentProps) {
    super(props);
    this.state = { showLifecycleComponent: true };
  }

  toggleComponent = () => {
    this.setState((prevState) => ({
      showLifecycleComponent: !prevState.showLifecycleComponent,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleComponent}>
          {this.state.showLifecycleComponent ? "Hide" : "Show"} Lifecycle
          Component
        </button>
        {this.state.showLifecycleComponent && <LifecycleComponent randomProp={1} />}
      </div>
    );
  }
}

export default ParentComponent;

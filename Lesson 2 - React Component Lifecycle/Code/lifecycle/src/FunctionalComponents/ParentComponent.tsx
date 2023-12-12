import React, { useState } from 'react';

import LifecycleComponent from './LifecycleComponent'; // Adjust the import path as needed

const ParentComponent: React.FC = () => {
  const [showLifecycleComponent, setShowLifecycleComponent] = useState(true);

  const toggleComponent = () => {
    setShowLifecycleComponent(!showLifecycleComponent);
  };

  return (
    <div>
      <button onClick={toggleComponent}>
        {showLifecycleComponent ? "Hide" : "Show"} Lifecycle Component
      </button>
      {showLifecycleComponent && <LifecycleComponent />}
    </div>
  );
};

export default ParentComponent;

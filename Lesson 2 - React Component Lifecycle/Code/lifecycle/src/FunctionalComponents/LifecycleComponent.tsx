import React, { useEffect, useState } from "react";

const LifecycleComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);

  // Equivalent to componentDidMount
  useEffect(() => {
    console.log("Functional: componentDidMount");
    setCounter(1); // Initialize counter to 1
  }, []);

  // Equivalent to componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Functional: componentWillUnmount");
    };
  }, []);

  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log(`Functional: componentDidUpdate: ${counter}`);
  }, [counter]); // Only re-run the effect if counter changes

  // Function to increment the counter
  const incrementCounter = () => {
    //setCounter((prevCounter) => prevCounter + 1);
    setCounter(counter + 1);
  };

  console.log(`Functional: render: ${counter}`);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};

export default LifecycleComponent;

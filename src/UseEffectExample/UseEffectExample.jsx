import React, { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("useEffect1: Empty dependency array");
  }, []);

  useEffect(() => {
    console.log("useEffect2: Counter1 in the dependency array");
  }, [counter1]);

  useEffect(() => {
    console.log("useEffect3: Counter2 in the dependency array");
  }, [counter2]);

  useEffect(() => {
    console.log("useEffect4: Counter1 and Counter2 in the dependency array");
  }, [counter1, counter2]);

  return (
    <div>
      <h1>Counter: {counter1}</h1>
      <button
        className="bg-red-400 p-4"
        onClick={() => setCounter1((preValue) => preValue + 1)}
      >
        Counter 1
      </button>

      <h1>Counter: {counter2}</h1>
      <button
        className="bg-red-400 p-4"
        onClick={() => setCounter2((preValue) => preValue + 1)}
      >
        Counter 1
      </button>
    </div>
  );
}

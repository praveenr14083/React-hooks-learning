// Import React and the useState hook from the 'react' library
import React, { useState } from "react";

export default function UseState() {
  // Declare a state variable named 'count' with initial value 0
  // 'setCount' is the function used to update the 'count' value
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Methood 1 */}
      {/* Display the current value of 'count' */}
      {/* <h1>{count}</h1> */}

      {/* Button to increment the count by 1 when clicked */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}

      {/* <br /> */}
      {/* <br /> */}

      {/* Button to decrement the count by 1 when clicked */}
      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}

      {/* Methood 2 */}
      {/* Without using 'count' state variable */}
      <h1>{count}</h1>
      <button
        onClick={() =>
          setCount((preState) => {
            return preState + 1;
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          setCount((preState) => {
            return preState - 1;
          })
        }
      >
        Decrement
      </button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

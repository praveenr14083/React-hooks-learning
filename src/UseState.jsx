// Import React and the useState hook from the 'react' library
import React, { useState } from "react";

export default function UseState() {
  // Declare a state variable named 'count' with initial value 0
  // 'setCount' is the function used to update the 'count' value
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Display the current value of 'count' */}
      <h1>{count}</h1>

      {/* Button to increment the count by 1 when clicked */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <br />
      <br />

      {/* Button to decrement the count by 1 when clicked */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

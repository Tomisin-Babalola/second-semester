import React from "react";
import { useCounter } from "../custom-hooks/useCounter";

const BuggyCounter = () => {
  const [count, increment, decrement, resetCount] = useCounter(2);

  if (count === 5) {
    throw new Error("Boundary error.");
  }

  return (
    <section>
      <div className="buttonCard">
        <h2> Counter {count}</h2>
        <button onClick={ () => increment()} className="increment button">
          Increment
        </button>
        <button onClick={() => resetCount()}>Reset</button>
        <button onClick={ () => decrement()} className="decrement">
          Decrement
        </button>
      </div>
    </section>
  );
};

export default BuggyCounter;

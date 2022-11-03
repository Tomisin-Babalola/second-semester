import { useState } from "react"

export const useCounter = (initialState = 0) => {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    let value = 0;
    if (count <= value) {
      value = 1;
    } else {
      value = count;
    }
    setCount(value - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

return (
    [count, increment, decrement, resetCount]
)

};

export default useCounter;

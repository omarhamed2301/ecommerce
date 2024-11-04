import { useState, createContext } from "react";

export let Counter = createContext(0);

export default function CounterProvider(props) {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  function increment() {
    setCount(count + 1);
    setPrice(price + 15);

  }
  function decrement() {
    setCount(count - 1);
    setPrice(price - 15);
    if (count === 0){
        setCount(0);
    }
    if (price === 0){
        setPrice(0);
    }
  }

  return (
    <Counter.Provider value={{ count, price, increment, decrement }}>
      {props.children}
    </Counter.Provider>
  );
}

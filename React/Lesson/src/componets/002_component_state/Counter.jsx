import './Counter.css'
import { useState } from "react";


export default function Counter(props) {
    let [count, setCount] = useState(props.count || 0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(props.count || 0);
    }

    return (
        <div className="Counter">
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
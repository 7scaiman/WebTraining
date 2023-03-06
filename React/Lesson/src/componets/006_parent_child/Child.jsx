import React, {useState} from 'react';

function Child(props) {
    let [count,setCount] = useState(props.count || 0 )

    const increment = () => {
        setCount(count+1)
        props.handleCounterUpdate(count)
    }
    const decrement = () => {
        setCount(count-1)
    }

    return (
        <div>
            <div>Value{count}</div>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Child;
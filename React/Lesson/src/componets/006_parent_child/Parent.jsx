import React, {useState} from 'react';
import Child from "./Child";

function Parent(props) {
    let [count,setCount] = useState(props.count || 0 )

    const handleCounterUpdate = (updatedCount) => {
        setCount(updatedCount)
    }

    return (
        <div>
            <div>Outer value{count}</div>
            <Child handleCounterUpdate={handleCounterUpdate}/>
        </div>
    );
}

export default Parent;
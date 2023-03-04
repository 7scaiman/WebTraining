import React, {useEffect, useState} from 'react';

function StrictModeCounter(props) {

    let [count,setCount] = useState(props.count || 0)
    let [name,setName] = useState("Joe")

    useEffect(()=> {
        console.log("useEffect run");
        document.title = `You clocked ${count}`
    })

    // useEffect(()=> {
    //     console.log("useEffect run");
    //     document.title = `You clocked ${count}`
    // },[count])

    console.log("Component rendered")
    return (
        <div>
            <span>You cliked {count} times</span>
            <button onClick={() => setCount(prev => prev + 1)}>increment</button>
            <input type="text" onChange={event => setName(event.target.value)}/>


        </div>
    );
}

export default StrictModeCounter;
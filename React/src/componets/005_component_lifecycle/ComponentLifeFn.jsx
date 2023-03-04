import React, {useEffect, useState} from 'react';

function ComponentLifeFn(props) {
    let [count,setCount] = useState(props.count || 0)
    let [name,setName] = useState("Joe")

    console.log("ComponentLifeFn constructor and render")

    useEffect(() => {
        console.log("ComponentLifeFn componentDidMount");   /// запускається після кожной зміни
    },)
    useEffect(() => {
        console.log("ComponentLifeFn componentDidUpdate");//// один раз
        return  () => {
            console.log(" ComponentLifeFn componentWillUnmount")
        }

    },[])
    useEffect(() => {
        console.log("ComponentLifeFn componentDidUpdate property count");   /// запускається при зміні count
    },[count])

    useEffect(() => {
        console.log("ComponentLifeFn componentDidUpdate property name");
    },[name])

    useEffect(() => {
        console.log("ComponentLifeFn componentDidUpdate property name and count");
    },[name,count])

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }

    return (
        <div>
        <div>I am alive Function component</div>
        <div>Value: {count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>

    );
}

export default ComponentLifeFn;
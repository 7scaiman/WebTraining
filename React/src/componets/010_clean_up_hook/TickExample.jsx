import React, {useEffect, useState} from 'react';

function TickExample(props) {
    let [count,setCount] = useState(props.count || 0)
    //
    // useEffect(() => {
    //     console.log("useEffect")              не правельни
    //     setInterval(() => {
    //         setCount(prev => prev+1)
    //     },1000)
    // },[])
    //

    useEffect(() => {
        console.log("useEffect")
      const interval = setInterval(() => {          //// парвельно чистити
            setCount(prev => prev+1)
        },1000)
        return () => {
            clearInterval(interval)
        }
    },[])


    return (
        <div>{count}</div>
    );
}

export default TickExample;
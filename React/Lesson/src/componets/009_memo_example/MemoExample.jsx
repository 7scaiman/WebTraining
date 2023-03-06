import React, {useEffect, useMemo, useState} from 'react';

function MemoExample(props) {

    const [name, setName] = useState("")

    const [state,setState] = useState({
        name:"",
        selected: false
    })

    const user = useMemo(()=> ({
        name: state.name,
        selected: state.selected,
    }),[state.name,state.selected])

    useEffect(() => {
        console.log("useEffect run")
    },[user])

    const handleAddName = () => {
         setState(prev => ({...prev,name}))
    }
    const handleSelected = () => {
        setState(prev => ({...prev,selected: true}))
    }

    return (
        <div>
            <input type="text" onChange={event => setName(event.target.value) } />
            <button onClick={handleAddName}>Add name</button>
            <button onClick={handleSelected}>Select</button>

            <div>Name: {state.name} selected: {state.selected.toString()}</div>
        </div>
    );
}

export default MemoExample;
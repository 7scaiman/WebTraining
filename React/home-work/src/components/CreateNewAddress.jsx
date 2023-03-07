// noinspection JSCheckFunctionSignatures

import React from 'react';

function CreateNewAddress({addAddress,newAddress,setNewAddress,handleChange}) {
        const Submit = (e) => {
        e.preventDefault()
        if(newAddress.Country !== "" && newAddress.City !== "" && newAddress.Street !== ""){
            addAddress()
        }
        else{
          return   alert("You didn't fill it all the way")
        }
    }


    return (
        <div>
            <form className="Create">
                <label>Country</label>
                <input type="text" onChange={(e) => setNewAddress({...newAddress,Country: e.target.value})}/>
                <label>City</label>
                <input onChange={(e) => setNewAddress({...newAddress,City: e.target.value})}/>
                <label>Address</label>
                <input onChange={(e) => setNewAddress({...newAddress,Street: e.target.value})}/>
                <label>Type</label>
                <select onChange={handleChange}>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                </select>
                <button onClick={Submit}>Submit</button>
            </form>
        </div>
    );
}

export default CreateNewAddress;
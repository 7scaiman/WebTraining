// noinspection JSCheckFunctionSignatures

import React, {useEffect} from 'react';

function CreateNewAddress({addAddress,newAddress,setNewAddress,handleChange}) {
    useEffect(()=>{
        console.log("dsad")
        setNewAddress({...newAddress,AddressType: true})
    },[])
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
                <input value={newAddress.Country} onChange={(e) => setNewAddress({...newAddress,Country: e.target.value},)}/>
                <label>City</label>
                <input value={newAddress.City} onChange={(e) => setNewAddress({...newAddress,City: e.target.value})}/>
                <label>Address</label>
                <input value={newAddress.Street} onChange={(e) => setNewAddress({...newAddress,Street: e.target.value})}/>
                <label>Type</label>
                <select  defaultValue={"Office"} onChange={handleChange}>
                    <option value="Office">Office</option>
                    <option value="Home">Home</option>
                </select>
                <button type="submit" onClick={Submit}>Submit</button>
            </form>
        </div>
    );
}

export default CreateNewAddress;
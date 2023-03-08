import React, {useState} from 'react';
import {IMG_HOME,IMG_OFFICE} from "../Constants/Contstants";
import {useDispatch} from "react-redux";
import {deleteAddress} from "../store/AddressSlice";
import Modal from "./Modal/Modal";
const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uKGegvQYfsV1g0iZ6k_0EN0JdppWO1wAQVXG5TFytmaDVU6jT6jUfs3EpIgkgrBPVZs&usqp=CAU"

function Address({Country,City,Street,AddressType,id,}) {
    const dispatch = useDispatch()
    const [edit,setEdit] = useState({
        Country: Country,
        City: City,
        Street: Street,
        AddressType: AddressType,
        id: id
    })
    const [active,setActive] = useState(false)


    return (
        <div className="item">
            <div>
            <div>Country: {edit.Country}      <span><img src={img} alt="#" className="deleteImg" onClick={()=>  dispatch(deleteAddress(edit.id))}/></span></div>
            <div>City: {edit.City}</div>
            <div>Street: {edit.Street}</div>
            <div>Type: {edit.AddressType ? "Office" : "Home"}</div>
            </div>
            <img className="typeImg" alt="#" src={edit.AddressType ? IMG_OFFICE : IMG_HOME}/>
            <button onClick={() => setActive(true)}>Edit</button>
            <Modal active={active} setActive={setActive} edit={edit} setEdit={setEdit}/>
        </div>

    );
}

export default Address;
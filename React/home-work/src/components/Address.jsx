import React from 'react';
import {IMG_HOME,IMG_OFFICE} from "../Constants/Contstants";
import {useDispatch} from "react-redux";
import {deleteAddress} from "../store/AddressSlice";
const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uKGegvQYfsV1g0iZ6k_0EN0JdppWO1wAQVXG5TFytmaDVU6jT6jUfs3EpIgkgrBPVZs&usqp=CAU"

function Address({Country,City,Street,AddressType,id,}) {
    const dispatch = useDispatch()

    return (
        <div className="item">
            <div>
            <div>Country: {Country}      <span><img src={img} alt="#" className="deleteImg" onClick={()=>  dispatch(deleteAddress(id))}/></span></div>
            <div>City: {City}</div>
            <div>Street: {Street}</div>
            <div>Type: {AddressType ? "Office" : "Home"}</div>
            </div>
            <img className="typeImg" alt="#" src={AddressType ? IMG_OFFICE : IMG_HOME}/>
        </div>

    );
}

export default Address;
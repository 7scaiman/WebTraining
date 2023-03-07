import React  from 'react';
import Address from "./Address";
import {useSelector} from "react-redux";
import {LOADING_IMG} from "../Constants/Contstants";
function MainPage({deletePage,status,error}) {
    const addresses = useSelector(state => state.address.address );


    return (
        <div className="MainPage">
            {status == "loading" && <h2>Loading... <br/><img src={LOADING_IMG} alt="#"/></h2>}
            {error && <h2>error:{error}</h2>}
        <div className="Address">

            {addresses.map(
                (e) => <Address key={e.id} Country={e.Country} City={e.City} Street={e.Street}
                                AddressType={e.AddressType} id={e.id} deletePage={deletePage}/>
            )}
        </div>
        </div>
    );
}
export default MainPage;
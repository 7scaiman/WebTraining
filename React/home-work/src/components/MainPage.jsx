import React  from 'react';
import Address from "./Address";
import {useSelector} from "react-redux";
function MainPage({deletePage}) {
    const addresses = useSelector(state => state.address.address );


    return (
        <div className="MainPage">
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
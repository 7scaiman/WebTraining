import React, {useState} from 'react';
import Address from "./Address";

function MainPage({addresses, deletePage}) {


    return (
        <div>
            {addresses.map(
                (e) => <Address Country={e.Country} City={e.City} Street={e.Street} AddressType={e.AddressType} id={e.id} deletePage={deletePage}/>
            )}
        </div>
    );
}
export default MainPage;
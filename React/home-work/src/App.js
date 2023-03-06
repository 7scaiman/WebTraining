import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import CreateNewAddress from "./components/CreateNewAddress";
import Navigation from "./components/Navigation";
import {useEffect, useState} from "react";

function App() {
    const [addresses,setAddresses] = useState([
        {
            Country: "Macao",
            City: "Abshireshire",
            Street: "Howell Dam",
            AddressType: true,
            id: 1
        },
        {
            Country: "Chad",
            City: "San Tan Valley",
            Street: "Pauline Oval",
            AddressType: false,
            id: 2
        },
        {
            Country: "Antarctica (the territory South of 60 deg S)",
            City: "East Alyssonstad",
            Street: "Bergnaum Walks",
            AddressType: false,
            id: 3
        },
    ])

    const addAddress = (newAddress) => {
        let address = {...newAddress,id:Date.now()}
        setAddresses([...addresses,address])
    }
    const deletePage = (id) => {
          setAddresses(addresses.filter(i => i.id !== id))
    }
  return (
    <div className="App">
        <Navigation/>
        <Routes>
            <Route path={"/"} element={<MainPage addresses={addresses} deletePage={deletePage}/>}/>
            <Route path={"/CreateNewAddress"} element={<CreateNewAddress addresses={addresses} addAddress={addAddress}/>}/>
        </Routes>
    </div>
  );
}

export default App;

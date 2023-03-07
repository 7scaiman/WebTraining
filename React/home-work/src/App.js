import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import CreateNewAddress from "./components/CreateNewAddress";
import Navigation from "./components/Navigation";
import { useState} from "react";
import {useDispatch} from "react-redux";
import {addAddress} from "./store/AddressSlice";
function App() {
    const dispatch = useDispatch()
    const addTask = () => dispatch(addAddress(newAddress))


    const handleChange = (e) => {

        if(e.target.value=== "Office" ){
            setNewAddress({...newAddress,AddressType: true})
        }
        if(e.target.value=== "Home" ){
            setNewAddress({...newAddress,AddressType: false})
        }
    }
    const [newAddress,setNewAddress] = useState({
        Country: "1",
        City: "1",
        Street: "1",
        AddressType: false,
        id: 0

    })


    const deletePage = (id) => {
          // setAddresses(addresses.filter(i => i.id !== id))
    }
  return (
    <div className="App">
        <Navigation/>
        <Routes>
            <Route path={"/"} element={<MainPage />}/>
            <Route path={"/CreateNewAddress"} element={
                <CreateNewAddress handleChange={handleChange} addAddress={addTask}
                                  newAddress={newAddress} setNewAddress={setNewAddress}
                />}/>
        </Routes>
    </div>
  );
}

export default App;

import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import CreateNewAddress from "./components/CreateNewAddress";
import Navigation from "./components/Navigation";
import { useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {addAddress,fetchAddress} from "./store/AddressSlice";
function App() {
    const  {status,error} = useSelector(state => state.address)
    const dispatch = useDispatch()
    const addTask = () => dispatch(addAddress(newAddress))

    useEffect(() => {
        dispatch(fetchAddress())
    },[dispatch])
    const handleChange = (e) => {

        if(e.target.value=== "Office" ){
            setNewAddress({...newAddress,AddressType: true})
        }
        if(e.target.value=== "Home" ){
            setNewAddress({...newAddress,AddressType: false})
        }
    }
    const [newAddress,setNewAddress] = useState({
        Country: "",
        City: "",
        Street: "",
        AddressType: true,
        id: 0

    })
    const addAd = () => {
        addTask()
        setNewAddress({
            Country: "",
            City: "",
            Street: "",
            AddressType: true,
            id: 0
        })
    }
  return (
    <div className="App">
        <Navigation/>
        <Routes>
            <Route path={"/"} element={<MainPage status={status} error={error} />}/>
            <Route path={"/CreateNewAddress"} element={
                <CreateNewAddress handleChange={handleChange} addAddress={addAd}
                                  newAddress={newAddress} setNewAddress={setNewAddress}
                />}/>
        </Routes>
    </div>
  );
}

export default App;

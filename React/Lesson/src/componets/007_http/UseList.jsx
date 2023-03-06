import React, {useEffect, useState} from 'react';
import  "./UseList.css"
import Moment from "moment";
function UseList(props) {
    const USERS_URL = "https://612d0c38ab461c00178b602e.mockapi.io/api/users"
    const DATE_FORMAT = "DD/MM/YYYY"

    let [users,setUsers] = useState([]);
    let [loading,setLoading] = useState(false)
    let [error,setError] = useState()

    useEffect(() => {
         getUsers();
    },[])

    const getUsers = () => {
        setLoading(true)
            fetch(USERS_URL)
            .then(response =>{
                setLoading(false)
                if(response.ok){
                    return response.json()
                }
                    throw new Error("Failed to load Users")
                })
                .then(data => setUsers(data))
                .catch(err =>{
                    console.error(err.message);
                    setError(err.message)
                })

    }

    return (
        <div className="UserList">
            <button onClick={getUsers}>Refresh</button>
            <h1>Users:</h1>
            {loading && <div>is loading...</div>}
            {!loading && error && <div className="error">{error}</div>}
            {!loading && !error && !users.length && <div className="no-data">Users not found</div>}

            {!loading && !error && users.length &&
            <table>
                <thead>
                <tr>
                    <tn>Id</tn>
                    <tn>Avatar</tn>
                    <tn>Name</tn>
                    <tn>Email</tn>
                    <tn>Created</tn>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td><img src={user.profile.avatar}/></td>
                        <td>{user.profile.firstName} {user.profile.lastName}</td>
                        <td>{user.profile.email}</td>
                        <td>{Moment(user.cretionDate).format(DATE_FORMAT)}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
            }
        </div>
    );
}

export default UseList;
import React from 'react';
import {StudentApi} from "../../api/studentsApi";
import {useEffect} from "react";

export function Student(props) {

    useEffect(()=> {
        StudentApi.getAll().then(data => {
            console.log(data)
        })
    },[])
    return (
        <div>Hello from StudentList</div>
    );
}
